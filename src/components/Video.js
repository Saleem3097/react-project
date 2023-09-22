import React from 'react'

const Video = (props) => {
  let bg = 'dark'
  console.log(props)
  return (
    <>
    <div>Video</div>
    <img src='http://placeimg.com/160/90/any' alt='kat'/>
    <div className={bg} style={{backgroundColor:'red'}}/>
    </>
  )
}

export default Video