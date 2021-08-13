import React from 'react';
import Header from './app/features/header/header.js'
import TodoList from './app/features/todos/todoList.js'
// import Footer from './app/features/footer/footer.js'

function App() {
  return (
    <>
    <div class="App">
      <nav>
        <section>
        <h1>A Simple To-Do App</h1>
        </section>
      </nav>
      <main>
        <section>
          <h2 class="Banner-Todos">TODOs</h2>
          <div class="todoapp">
            <Header/>
            <TodoList/> 
            {/* <Footer/> */}
          </div>
        </section>
      </main>
    </div>
    </>
  );
}

export default App;
