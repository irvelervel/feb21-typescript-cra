import { Component } from 'react'

interface HeaderProps {
  title: string
  subTitle?: string
}

interface HeaderState {
  counter: number
}

// the first element in < > is going to point to the props
// the second element in < > is going to point to the state
class Header extends Component<HeaderProps, HeaderState> {
  state = {
    counter: 0,
  }

  render() {
    return (
      <>
        <h1 onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          {this.props.title}, the counter value is {this.state.counter}
        </h1>
        {this.props.subTitle && <h2>{this.props.subTitle}</h2>}
      </>
    )
  }
}

export default Header

// in any component, Props are by default an empty object {}
// so we need to define the type of the Props for Header

// this.props = {title: 'Title passed from App'}
