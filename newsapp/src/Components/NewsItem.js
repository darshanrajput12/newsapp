import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src="https://static.politico.com/3c/12/153d7e4049bfa0e26f01b6e4794b/useuntil02-11-2024-002.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem