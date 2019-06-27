import React from 'react';
import './App.css';

import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

function App() {
  return (
    <div className="App">
      hi
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
