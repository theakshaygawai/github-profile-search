import React from 'react'
import axios from 'axios';
import {CLIENT_ID, CLIENT_SECRET} from './credentials/GithubCredentials'
import GitHubProfile from './profile/GitHubProfile';
import GitHubRepos from './repos/GitHubRepos';
 class GitHubProfileSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          gitHubUsername : "",
          gitHubProfile : {},
          gitHubRepos : [],
          errorMessage : ""
        }
    };

    updateInput =(e)=>{
      this.setState({
        ...this.state,
        gitHubUsername : e.target.value
      })
    };

    // submitSearchUser
    submitSearchUser = (e)=>{
      e.preventDefault();
      // alert('ok')
      this.searchProfile(this.state.gitHubUsername);
      this.searchRepos(this.state.gitHubUsername);
    };


    // searchProfile
    searchProfile = (gitHubUsername)=>{
      let dataURL = `https://api.github.com/users/${gitHubUsername}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

      axios.get(dataURL).then((responce)=>{
          this.setState({
            ...this.state,
            gitHubProfile : responce.data
          })
      }).catch((error)=>{
          this.setState({
            ...this.state,
            errorMessage : error.message
          })
      })
    };

    // searchRepos
    searchRepos=(gitHubUsername)=>{
      let dataURL = `https://api.github.com/users/${gitHubUsername}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

      axios.get(dataURL).then((responce)=>{
          this.setState({
            ...this.state,
            gitHubRepos : responce.data
          })
      }).catch((error)=>{
          this.setState({
            ...this.state,
            errorMessage : error.message
          })
      })
    }

    render() {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header bg-secondary text-white">
                    <p className="h4">GitHub Profile Search</p>
                  </div>
                  <div className="card-body bg-light">
                    <form className='form-inline' onSubmit={this.submitSearchUser}  >
                      <div className='form-group'>
                        <input type="text" 
                          size="112" value={this.state.gitHubUsername} onChange={this.updateInput} placeholder='Enter Your GitHub Username' className='form-control' />
                      </div>
                      <div>
                        <input type="submit" value="search" className='btn btn-primary btn-md ml-2' />
                      </div>
                    </form>
                   // <pre>{JSON.stringify(this.state.gitHubUsername)}</pre>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
               // <pre>{JSON.stringify(this.state.gitHubProfile)}</pre>
               // <pre>{JSON.stringify(this.state.gitHubRepos)}</pre>

                {
                  Object.keys(this.state.gitHubProfile).length > 0 ?
                  <React.Fragment>
                    <GitHubProfile gitHubProfile={this.state.gitHubProfile}/>                
                  </React.Fragment> : null//<p>Data Not Found</p>
                }
              </div>
            </div>
            <div className="row">
              <div className="col">
                {
                  this.state.gitHubRepos.length > 0 ? 
                  <React.Fragment>
                    <GitHubRepos gitHubRepos={this.state.gitHubRepos}/>
                  </React.Fragment> : null//<p>Data Not Found</p>
                }
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
 };

 export default GitHubProfileSearch;
