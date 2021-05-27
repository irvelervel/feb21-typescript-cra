import { Component } from 'react'
import { IData } from '../types/types'
import { RouteComponentProps } from 'react-router-dom'

interface DetailComponentProps {
  data: IData[]
}

// with the Route our props are enhanced
// we're getting data, but we're also getting history, location and match

// & is TYPE INTERSECTION, which means ALL THE DEFINITIONS, it' going to MERGE all of them in a single definition

// | -> UNION is for picking a type between several of those

// ------
type MyPropsMerged = DetailComponentProps & RouteComponentProps

interface DetailComponentPropsAndMore extends RouteComponentProps {
  data: IData[]
}
// ------

class DetailComponent extends Component<DetailComponentPropsAndMore, {}> {
  componentDidMount = () => {
    console.log(this.props.history)
  }

  render() {
    return (
      <div>
        {this.props.data
          .filter((obj) => obj.isValid)
          .map((obj) => (
            <div key={obj.id}>{obj.description}</div>
          ))}
      </div>
    )
  }
}

export default DetailComponent
