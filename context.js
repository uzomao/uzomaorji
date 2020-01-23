import React from "react"

const defaultContextValue = {
  data: {
    filterBy: 'year',
    isOptionClicked: false,
    filterValue: '',
    projectTerminalNames: [],
  },
  isDesktop: true,
  isPortrait: true,
  set: () => {},
}

const Context = React.createContext(defaultContextValue)

class ContextProvider extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  componentDidMount(){
    if(typeof window !== `undefined` && window.innerWidth < 900){
      this.setState({
        isDesktop: false
      })

      if(window.innerWidth > window.innerHeight){
        this.setState({
          isPortrait: false
        })
      }
    }
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
  }
}

export { Context as default, ContextProvider }