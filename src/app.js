import React from 'react';

import ToDo from './components/todo/todo.js';
import SettingsContext from './context/settingsContext';
import Header from './components/header';
export default class App extends React.Component {
  render() {
    return (
        <>
         <SettingsContext>
      <Header />
      <ToDo />
         </SettingsContext>
         </>
    );
  }
}