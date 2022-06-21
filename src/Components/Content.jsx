import React, { Component } from 'react'

export class Content extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            content: [],
            isLoaded: false
        };
    };

    componentDidMount() {
        fetch("https://api.github.com/cycoconutz/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    content: json,
                    isLoaded: true
                });
            })
    };

  render() {
    const { isLoaded, content } = this.state;
        if (!isLoaded) 
        return 
        <div><h1>Fetching Commits...</h1></div> ;

    return (
        <div className='flex-container pt-5 mt-5'>
        <h2 className='text-center'>Commit History</h2>
        <div className='content'>
        </div>
        </div>
    )
  }
}

export default Content