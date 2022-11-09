import { useState } from 'react'

import { reverse } from './helpers'
import NameLength from './NameLength'
import NameReversed from './NameReversed'
import './styles.css'
import Title from './Title'

export default function App() {
  const [name, setName] = useState('Nicolas')
  // function that reverses the name here

  return (
    <div className="app">
      <Title name={name}/>
      <NameLength name={name}/>
      <NameReversed name={name} reverse={reverse}/>
    </div>
  )
}
