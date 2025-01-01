import React from 'react'
import TopBar from '../components/TopBar'
import Chains from '../components/Chains'
import ItemsDisplay from '../components/ItemsDisplay'
import FirmCollections from '../components/FirmCollections'
const LadingPage = () => {
  return (
    <div>
      <TopBar/>
      <div className="landingSection">
        <ItemsDisplay/>
        <Chains/>
        <FirmCollections/>
      </div>
    </div>
  )
}

export default LadingPage
