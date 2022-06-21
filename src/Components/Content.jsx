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
        fetch("https://api.github.com/repos/cycoconutz/XRTH/commits")
        
            .then((res) => res.json())
            .then((json) => {
                console.table(json)

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
        <h2 className='text-center'>Commit History:<hr></hr></h2>
        <div className='content'>
        </div>
        <div className="text-center">
              {content.map((content) => ( 
                <ol key = { content.sha } >
                    Author:  { content.commit.author.name}<br></br>
                    Message:  { content.commit.message }<br></br>
                    <a href={content.html_url }>Link</a><hr></hr>
                </ol>
                ))
            }
        </div>
        </div>
    )
  }
}

export default Content