import React from "react"
import api from '../api/unsplash'
import SearchBar from "./SearchBar"

class App extends React.Component {
  state = {images: []}

  onSearchSubmit = async (term) => {
    let response = await api.get('https://api.unsplash.com/search/photos', {
      params: {query: term},

    })
    this.setState({images: response.data.results})
    console.log(this.state)

  }


  render() {
    return <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      Found: {this.state.images.length} images
    </div>
  }
}

export default App;
