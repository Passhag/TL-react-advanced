import * as React from 'react';
import { Header } from './components/Header';
import { TodoListContainer } from './containers/TodoList';
import { TodoFormContainer } from './containers/TodoForm';
import { ModalContainer } from './containers/Modal';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="app-wrapper">
            <header className="app-header">
              <Header title={'Todo List'} />
            </header>
            <div className="tl-input-wrapper">
              <TodoFormContainer />
            </div>
            <div className="tl-list-wrapper">
              <TodoListContainer />
            </div>
            <div className="tl-footer">
              <button className="tl-footer__btn btn btn-primary">
                Clear list
              </button>
            </div>
          </div>
        </div>
        <ModalContainer />
      </div>
    );
  }
}

export default App;
