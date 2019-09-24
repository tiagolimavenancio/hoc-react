import React, { Component } from 'react';

export function withRepoData(WrappedComponent, username) {
  return class extends Component {
    state = {
      data: [],
      loading: true,
    }

    async componentDidMount() {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await response.json();

      this.setState({ data, loading: false });
    }

    render() {
      return <WrappedComponent repoData={this.state} {...this.props} />;
    }
  };
}