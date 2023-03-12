import React from 'react'
class ProfileDetails extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    let { gitHubProfile } = this.props
    return (
      <React.Fragment>
        <div className="card bg-light">
          <div className="card-header">
            <span className='badge badge-success mx-4 ml-5'> <b> {gitHubProfile.followers}</b>  Followers</span>
            <span className='badge badge-primary mx-5'> <b>{gitHubProfile.repos}</b> Repos</span>
            <span className='badge badge-secondary mx-5'> <b>{gitHubProfile.gists}</b> Gist</span>
            <span className='badge badge-danger mx-5'> <span className='text-black'>{gitHubProfile.following}</span> Following</span>

          </div>
          <div className="card-body bg-light">
            <ul className='list-group'>
              <li className='list-group-item' >
                Name : <span className='font-weight-bold'>{gitHubProfile.name} </span>
              </li>
              <li className='list-group-item' >
                Location : <span className='font-weight-bold'>{gitHubProfile.location} </span>
              </li>
              <li className='list-group-item' >
                Email : <span className='font-weight-bold'>{gitHubProfile.email} </span>
              </li>
              <li className='list-group-item' >
                Company : <span className='font-weight-bold'> <a href={gitHubProfile.company} target="_blank"> {gitHubProfile.company}</a> </span>
              </li>
              <li className='list-group-item' >
                Blog : <span className='font-weight-bold'> <a href={gitHubProfile.blog}
                  target="_blank"> Blog</a> </span>
              </li>
              <li className='list-group-item' >
                Member Sience : <span className='font-weight-bold'>{gitHubProfile.created_at} </span>
              </li>
              <li className='list-group-item' >
                Profile URL : <span className='font-weight-bold'><a href={gitHubProfile.html_url} target="_blank"> {gitHubProfile.html_url} </a></span>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
};

export default ProfileDetails;