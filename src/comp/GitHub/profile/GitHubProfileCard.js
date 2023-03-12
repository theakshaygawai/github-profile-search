import React from 'react'
 class GitHubProfileCard extends React.Component{
    constructor(props){
        super(props)
    };

    render() {
      let {gitHubProfile} = this.props
      return (
        <React.Fragment>
          <div className="card bg-info text-white ">
            <img src={gitHubProfile.avatar_url} alt="" />
            <div className="card-header ">
              <p className="h4">{gitHubProfile.name}</p>
              <small>{gitHubProfile.bio}</small> <br />
              <button className='btn btn-sm btn-success '>
              <a href={gitHubProfile.html_url} target="_blank" > <b>Profile</b> </a>
              </button>

            </div>
          </div>
        </React.Fragment>
      )
    }
 };

 export default GitHubProfileCard;