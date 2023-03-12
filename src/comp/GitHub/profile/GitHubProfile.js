import React from 'react'
import GitHubProfileCard from './GitHubProfileCard';
import ProfileDetails from './ProfileDetails';
 class GitHubProfile extends React.Component{
    constructor(props){
        super(props)
    };

    render() {
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-md-3">
                <GitHubProfileCard gitHubProfile={this.props.gitHubProfile}/>
                <pre>{JSON.stringify(this.props)}</pre>
            </div>
            <div className="col-md-9">
                <ProfileDetails gitHubProfile={this.props.gitHubProfile}/>
            </div>
          </div>
        </React.Fragment>
      )
    }
 };

 export default GitHubProfile;