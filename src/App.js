import React from 'react'
import Footer from './components/Footer/Footer'
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

      <Footer />
    </>
  )
}

export default App