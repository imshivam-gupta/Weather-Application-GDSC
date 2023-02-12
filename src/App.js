import React from 'react'
import { useSelector } from 'react-redux'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LeftScreen from './screens/LeftScreen/LeftScreen'
import RightScreen from './screens/RightScreen/RightScreen'

const App = () => {

  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;


  return (
    <div className={!isdarkMode?'react-app':'light-react-app'}>
      <Header />

      <main>
        <LeftScreen />
        <RightScreen />
      </main>

      <Footer />
    </div>
  )
}

export default App