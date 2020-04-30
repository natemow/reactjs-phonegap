
import React from 'react';

const Context = React.createContext();

class ContextProvider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      property1: null,
      property2: null
    };
  }

  componentDidMount() {
    this.setState({
      property1: 'Foo',
      property2: 'Latest Insights'
    });
  }

  render() {
    return (
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    );
  }

}

const ContextConsumer = Context.Consumer;

export { ContextProvider, ContextConsumer };
