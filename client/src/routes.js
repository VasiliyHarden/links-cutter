import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LinksPage from './pages/LinksPage/LinksPage';
import CreatePage from './pages/CreatePage/CreatePage';
import DetailPage from './pages/DetailPage/DetailPage';
import AuthPage from './pages/AuthPage/AuthPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/links' exact>
          <LinksPage />
        </Route>
        <Route path='/create' exact>
          <CreatePage />
        </Route>
        <Route path='/detail/:id' exact>
          <DetailPage />
        </Route>
        <Redirect to='/create' />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path='/' exact>
        <AuthPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
};