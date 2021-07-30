import React from 'react'

let ImageList = (props) => {
  console.log(props.images)
  return <div>
        {props.images.map(e=>
            <div>{e.id}</div>
          )}
  </div>
}

export default ImageList
