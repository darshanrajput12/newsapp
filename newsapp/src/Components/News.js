import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className=' container'>
        <h3>This is news app</h3>
     
        <div className='row'>
            <div className='col-md-4 mb-5'>
            <NewsItem /> 
                
        </div>
        <div className='col-md-4 mb-5'>
            <NewsItem /> 
                
        </div>
        <div className='col-md-4 mb-5'>
            <NewsItem /> 
                
        </div>
        <div className='col-md-4 mb-5'>
            <NewsItem /> 
                
        </div>
          
          
            </div>
 
      
      
      </div>
    )
  }
}

export default News