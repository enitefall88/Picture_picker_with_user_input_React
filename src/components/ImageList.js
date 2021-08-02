import React from 'react'
import './ImageList.css'

let ImageList = (props) => {
  console.log(props.images)
   let images = props.images.map((e)=> {
     return <img key={e.id} src={e.urls.regular}/>
   })
  return <div className="image-list">{images}</div>
}

export default ImageList
