import React from "react"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

const RichTextRenderer = ({ content }) => {
  if (!content) return null

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="custom-paragraph">{children}</p>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="custom-heading">{children}</h2>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  }

  return <>{documentToReactComponents(JSON.parse(content.raw), options)}</>
}

export default RichTextRenderer