import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import logo from './assets/images/logo.svg';
import config from './config';
import { ContextProvider } from './components/app/context';
import { PageHome, PageArticles } from './components/app/pages';
import AppMenu from "./components/menu/menu";

export default () => (
  <HashRouter>
    <ContextProvider>

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
          <AppMenu
            className="app-header-nav"
            items={[
              { path: '/', label: 'Home' },
              { path: '/articles', label: 'Articles' }
            ]} />
        </header>
        <main className="app-main">
          <Route exact path="/" component={PageHome} />
          <Route exact path="/articles" component={PageArticles} />
        </main>
        <footer className="app-footer">
          <div className="app-footer-inner">
            <AppMenu
              className="app-footer-nav"
              items={[
                { path: '/', label: 'Home' },
                { path: '/articles', label: 'Articles' }
              ]} />
          </div>
        </footer>
      </div>

    </ContextProvider>
  </HashRouter>
);
