
import React from "react";
import GitHubProfileSearch from "./comp/GitHub/GitHubProfileSearch";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
          <a href="#" className="navbar-brand">React with Github Profile Search </a>
        </nav>
        <GitHubProfileSearch/>

        <div style={{ marginBottom: "200px" }}></div>
      </React.Fragment>
    );
  }
}

export default App;
