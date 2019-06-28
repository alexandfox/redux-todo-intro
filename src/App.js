import React from 'react';
import './App.css';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibileTodoList'

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
