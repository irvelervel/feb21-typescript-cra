import { Component } from 'react'
import './App.css'
import Header from './components/Header'
import DetailComponent from './components/DetailComponent'

import data from './data/data.json'

import { IData } from './types/types'
import { Route } from 'react-router-dom'

interface AppState {
  data: IData[]
}

class App extends Component<{}, AppState> {
  state: AppState = {
    data: [],
  }

  componentDidMount = () => this.setState({ data: data })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header title="Title passed from App" subTitle="show this only if present" />
          <Header title="another one" />
          <Route
            path="/detail"
            exact
            render={(routerProps) => <DetailComponent {...routerProps} data={this.state.data} />}
          />
        </header>
      </div>
    )
  }
}

export default App
