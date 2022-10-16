import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            totalResults: 0,
            page: 1,
        }
    };
    async updateNews() {
        this.props.setProgress(10);
        const url = `
        https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey} &pageSize=20 &page=${this.state.page}`;
   
        
        this.props.setProgress(30);
        let data = await fetch(url);
        let parseData = await data.json();
        this.props.setProgress(60);
        
        this.setState({ articles: parseData.articles, totalResults:parseData.totalResults, loading: false });
        console.log(this.state.totalResults)
        this.props.setProgress(100);
    }
    async componentDidMount() {
        // it renders after the render method
        // order of rendering will be a)constructor b)render method c)cdm
         this.updateNews();

    }
    fetchMoreData = async() => {
       
        const url = `
        https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey} &pageSize=20 &page=${this.state.page+1}`;
        this.setState({
            page:this.state.page+1
        });
        let data = await fetch(url);
          
        let parseData = await data.json();
     
        this.setState({loading:false});
      
        this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults:parseData.totalResults});
     

      };

    render() {
        return (
            <>

                <h2 className='text-center my-4'>NewsMonkey - Top Headlines</h2>
                
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    
                    loader={<Spinner/>}
                >   
                <div className="container">

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                </div>
            
                </InfiniteScroll>


            </>
        )
    }
}
