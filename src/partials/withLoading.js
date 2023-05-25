import React, { Component } from 'react';
import LoadingScreen from './loadingScreen';

const withLoading = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { isLoading: true };
    }

    componentDidMount() {
      // Load data or perform any other async tasks here
      // Once data is loaded, set isLoading to false
      this.setState({ isLoading: false });
    }

    render() {
      const { isLoading } = this.state;

      return (
        <div>
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </div>
      );
    }
  };
};

export default withLoading;
