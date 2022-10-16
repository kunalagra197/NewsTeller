import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
// import NewsItem from './Component/NewsItem';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_KEY
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Routes>
            < Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" category="general" country="in" />} />
            < Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" category="general" country="in" />} />
            < Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" category="business" country="in" />} />
            < Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" category="entertainment" country="in" />} />
            < Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" category="health" country="in" />} />
            < Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" category="science" country="in" />} />
            < Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" category="sports" country="in" />} />
            < Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" category="technology" country="in" />} />


          </Routes>
        </Router>
      </div>
    )
  }
}


