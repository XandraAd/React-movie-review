/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

class MoviesClass extends Component {
  constructor(props){
    super(props)
    this.state={
      reviews :[]
    }
  }

  componentDidMount(){
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=UUkfFwoTc661Yb4NulMlZ3NGxJjSP6Aa")
    .then((res)=>res.json())
    .then((data)=>{
      //console.log(reviews)
     // setTimeout(this.setState({reviews:reviews}),2000)
    /* setTimeout(() => {
      console.log("Component Mount Success!");
  }, 1000);*/
     this.setState({reviews:data.results})})
    .catch(error => {
      console.log(error);
  })
}


render() {
    return (
      <>
      <h1>Movies Review CLASS</h1>
 <div>
 {this.state.reviews.map((review,id)=>{
        return(
            <div key={id}>
            <h3>Title:{review.display_title}</h3>
            <h3>ByLine:{review.byline}</h3>
            <h3>Critic Pick:{review.critics_pick}</h3>
            <h3>Headline:{review.headline}</h3>
            <hr />
            </div>
        )
      })}
 </div>
    </>
    )
  }
}

export default MoviesClass