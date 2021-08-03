import React from 'react'
import './ImageList.css'
import ImageCard from "./ImageCard"

let ImageList = (props) => {
  console.log(props.images)
   let images = props.images.map((image)=> {
     return <ImageCard key={image.id} image={image}/>
   })
  return <div className="image-list">{images}</div>
}

export default ImageList
