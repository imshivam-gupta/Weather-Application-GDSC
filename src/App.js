import React from 'react'
import Header from './components/Header/Header'
import LeftScreen from './screens/LeftScreen/LeftScreen'
import RightScreen from './screens/RightScreen/RightScreen'

const App = () => {
  return (
    <>
      <Header />

      <main>
        <LeftScreen />
        <RightScreen />
      </main>
    </>
  )
}

export default App