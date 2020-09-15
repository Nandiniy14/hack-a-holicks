import * as React from 'react';
import { RouteProps, Switch } from 'react-router';
import { Routes } from '../../../../routes/Routes';
import './app.css';
import { IAppProps } from './types/IAppProps';

export class App extends React.Component<IAppProps & RouteProps, {}>{

  public render() {
    return (
      <div className="app">
        <Switch>
          <Routes />
        </Switch>
      </div>
    );
  }
}
