import React, { useState } from 'react'
import Slider from './components/Slider'
import Colors from './components/Controllers'
import GlobalStyles from './GlobalStyles'

function App() {
  const [colorScheme, setColorScheme] = useState(`nivo`)

  return (
    <>
      <GlobalStyles />
      <Slider colorScheme={colorScheme} />
      <Colors colorScheme={colorScheme} setColorScheme={setColorScheme} />
    </>
  )
}

export default App
