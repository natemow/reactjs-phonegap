/* eslint-disable no-console */
import React from 'react';
import { ContextConsumer } from './context';
import Articles from "../articles/articles";

class PageTemplate extends React.Component {
  render () {
    return (
      this.props.children
    )
  }
}

export default PageTemplate;

export const PageHome = () => (
  <PageTemplate>
    <ContextConsumer>
      {(state) => (
        <h1>{state.property1}</h1>
      )}
    </ContextConsumer>
  </PageTemplate>
)

export const PageArticles = () => (
  <PageTemplate>
    <ContextConsumer>
      {(state) => (
        <Articles label={state.property2} />
      )}
    </ContextConsumer>
  </PageTemplate>
);
