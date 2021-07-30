import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
        Authorization: 'Client-ID tqQUY_pxwugHET1Ldy_Q1akKKGpMGQBAtwlXqvo0P20'
      }
})
