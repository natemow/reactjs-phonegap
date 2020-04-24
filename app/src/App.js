import React from 'react';
import logo from './assets/images/logo.svg';
import config from './config';
import Articles from './components/articles/articles';

export default () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
          <div className="app-header-flyout">
            <span className="icon-hamburger-sm"></span>
          </div>
          <img src={logo} alt={config.title} className="app-header-logo" />
          <div className="app-header-search">
            <span className="icon-search-sm"></span>
          </div>
        </div>
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
        <div className="app-footer-inner">
          <nav className="app-footer-nav">
            <ul className="app-footer-nav-items">
              <li><a href="/">Latest Insights</a></li>
              <li><a href="/">Preferences</a></li>
              <li><a href="/">Terms of Use</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};
