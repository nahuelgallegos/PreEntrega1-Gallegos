import React from 'react'
import ReactPlayer from 'react-player'
import video from '../Multimedia/Videoprincipal.mp4'

const Home = () => {
  return (
    <div className='videoprincipal' >
      <ReactPlayer url={video} loop playing />
    </div>
  )
}
 export default Home
