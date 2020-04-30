/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import config from '../../config';

class Example extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: null
    };
  }

  componentDidMount() {
    this.setState({
      error: null,
      isLoaded: true,
      data: null
    });
  }

  render() {
    const { error, isLoaded, data } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      // TODO.

      return (
        <div>
          <h2>{ this.props.label }</h2>
          <p>TODO.</p>
        </div>
      );
    }
  }

}

const element = <Example label="Label" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);

export default Example;
