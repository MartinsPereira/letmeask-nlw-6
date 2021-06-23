import React from 'react'

export const Button = () => {
  const [counter, setCounter] = React.useState(0)

  function aumentar() {
    setCounter(counter + 1)
    console.log(counter)
  }
  console.log(counter)

  return (
    <div>
      <button onClick={aumentar}>{counter}</button>
    </div>
  )
}

