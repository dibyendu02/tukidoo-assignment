import React from 'react'
import Header from './Header'
import TopNavbar from './TopNavbar'
import Interaction from './Interaction'
import VideoPlayer from './VideoPlayer'

const Content = () => {
  return (
    <div className="pt-3 md:pt-0 flex flex-col gap-2 m-auto">
        <Header/>
        <TopNavbar/>
        <div className="flex flex-col-reverse md:flex-row gap-5 ">
            
            <Interaction/>
            <VideoPlayer/>
        </div>
    </div>
  )
}

export default Content