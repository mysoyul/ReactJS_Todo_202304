import React, { Component } from 'react';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정
  //상태변수를 포함하고 있는 state 객체선언
  state = {
    todos: []
  };

  handleToggle = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
    });
  }
  
  render() {
    const { handleToggle } = this;

    return (
      <TodoListTemplate form={<Form />}>
        <TodoItemList  myToggle={handleToggle} />
      </TodoListTemplate>
    );
  }
}
export default App;