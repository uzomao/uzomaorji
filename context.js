import React from "react"

const defaultContextValue = {
  data: {
    filterBy: 'year',
    isOptionClicked: false,
    filterValue: '',
    projectTerminalNames: [],
  },
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