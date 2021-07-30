import React from 'react'

let ImageList = (props) => {
  console.log(props.images)
   let images = props.images.map((e,i)=> {
     return <img src={e.urls.regular}/>
   })
  return <div>{images}</div>
}

export default ImageList
