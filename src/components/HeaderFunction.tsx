import { useState } from 'react'

interface HeaderProps {
  title: string
  subTitle?: string
}

const HeaderFunction = (props: HeaderProps) => {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <h1 onClick={() => setCounter(counter + 1)}>
        {props.title}, the counter value is
        {counter}
      </h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </>
  )
}

export default HeaderFunction
