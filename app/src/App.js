import React from 'react';
import logo from './assets/images/logo.svg';
import config from './config';
import Articles from './components/articles/articles';

export default () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} alt={config.title} className="app-header-logo" />
        <nav className="app-header-nav">
          <ul className="app-header-nav-items">
            <li><a href="/">Topics</a></li>
            <li><a href="/">Regions</a></li>
            <li><a href="/">Programs</a></li>
          </ul>
        </nav>
      </header>
      <main className="app-main">
        <Articles label="Latest Insights" />
      </main>
      <footer className="app-footer">
        <nav className="app-footer-nav">
          <ul className="app-footer-nav-items">
            <li><a href="/">Latest Insights</a></li>
            <li><a href="/">Preferences</a></li>
            <li><a href="/">Terms of Use</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};
