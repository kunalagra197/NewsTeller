import React, { Component } from 'react'

export default class NewsItem  extends Component {
    
  render(props) {
    
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
    <div className="card" style={{width:"w-screen" ,margin:"4px"}}>
      <img src={!imageUrl?"https://hackaday.com/wp-content/uploads/2022/09/FloppyDisk.jpg":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target="_blank"className="btn btn-primary btn-sm">Go somewhere</a>
      </div>
     </div>
     </div>
    )
  }
}
// 43ec68d1239448f9ab606f57448d30b8 
