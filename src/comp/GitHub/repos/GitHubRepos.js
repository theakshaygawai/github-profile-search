import React from 'react'
 class GitHubRepos extends React.Component{
    constructor(props){
        super(props)
    };

    render() {
      let {gitHubRepos} = this.props;
      return (
        <React.Fragment>
          <div className="card bg-light">
            <div className="card-header bg-primary">
              <p className="h3 text-center text-secondary "><b>Your Repositorise</b></p>
            </div>
            <div className="card-body">
              <ul className='list-group'>
                {
                  gitHubRepos.map((repo)=>{
                    return(
                      <React.Fragment>
                        <li className='list-group-item'>
                          <div className='d-flex justify-content-between'>
                          <span className="h3 mx-2">
                            <a href={repo.html_url}>{repo.name}</a>
                          </span>
                          <span className='badge badge-success'>{repo.stargazer_count} Stars</span>
                          <span className='badge badge-danger'>{repo.watcher_count} Watchers</span>
                          </div>
                        </li>
                      </React.Fragment>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </React.Fragment>
      )
    }
 };

 export default GitHubRepos;