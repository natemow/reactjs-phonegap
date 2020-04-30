/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import config from '../../config';

class Articles extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      results: []
    };
  }

  componentDidMount() {
    fetch(config.endpoints.Insights)
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            results: response.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, results } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    }

    const data = [];
    results.map(item => (
      data.push(item.rendered)
    ));

    return (
      <div className="faceted-search-content">
        <h2 className="h3">{this.props.label}</h2>
        <div className="faceted-search-results" dangerouslySetInnerHTML={{ __html: data.join('') }} />
      </div>
    );
  }

}

ReactDOM.render(
  <Articles label="Label" />,
  document.getElementById('root')
);

export default Articles;
