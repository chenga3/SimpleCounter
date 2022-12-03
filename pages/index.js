import { useState, useEffect } from 'react'

import { container, counter } from '../styles/Home.module.css'

const Home = () => {
  const [count, setCount] = useState(0)
  const numbers = [1, 2, 5]

  useEffect(() => {
    if (count > 0 && count % 5 == 0) {
      alert('hello')
    }
  })

  return (
    <div className={container}>
      <div
        className={counter}
        style={{ color: count % 2 == 0 ? 'red' : 'black' }}
      >
        {count}
      </div>
      {numbers.map((num) => (
        <button onClick={() => setCount(count + num)}>Add {num}</button>
      ))}
      {count > 0 &&
        numbers.map((num) => (
          <button onClick={() => setCount(count - num)}>Subtract {num}</button>
        ))}
    </div>
  )
}

export default Home
