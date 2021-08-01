import React, {useState} from 'react'

let ImageList = (props) => {
  console.log(props.images)
   let images = props.images.map((e)=> {
     return <img key={e.id} src={e.urls.regular}/>
   })
  return <div>{images}</div>
}

export default ImageList
