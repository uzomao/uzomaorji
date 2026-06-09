import React from "react"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const RichTextRenderer = ({ content }) => {
  if (!content) return null

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="custom-paragraph">{children}</p>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="custom-heading">{children}</h2>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const asset = node?.data?.target || {}

        // Prefer Contentful `fixed.src` for images, fall back to asset.file.url
        let src = asset.fixed?.src || asset.file?.url || asset.fields?.file?.url || ''
        if (!src) return null
        if (src.startsWith('//')) src = `https:${src}`

        const contentType = asset.file?.contentType || asset.fields?.file?.contentType || ''
        const alt = asset.description || asset.title || ''

        if (contentType && contentType.startsWith('image')) {
          return (
            <div className="embedded-item">
              <img src={src} alt={alt} className="embedded-asset" loading="lazy" />
              { alt && <caption className="embedded-asset-caption" style={{display: 'inline-block', textAlign: 'center'}}> {alt} </caption> }
            </div>
          )
        }

        if (contentType && contentType.startsWith('video')) {
          return (
            <div className="embedded-item">
              <video controls className="embedded-asset-video">
                <source src={src} type={contentType} />
                Your browser does not support the video tag.
              </video>
            </div>
          )
        }

        // Unknown asset type: link to it
        return (
          <div className="embedded-item">
            <a href={src} target="_blank" rel="noopener noreferrer">
              {alt || src}
            </a>
          </div>
        )
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  }

  return <div>{content && renderRichText(content, options)}</div>
}

export default RichTextRenderer