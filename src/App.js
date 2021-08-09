import React from 'react';
import Header from './app/features/header/header.js'
import TodoList from './app/features/todos/todoList.js'
// import Footer from './app/features/footer/footer.js'

function App() {
  return (
    <>
      <h1>
        A Simple To Do App
      </h1>
      <h2>
        TODOs
      </h2>
      <Header/>
      <TodoList/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
