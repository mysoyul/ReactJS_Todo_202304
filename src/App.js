import React, { Component } from 'react';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정
  //상태변수를 포함하고 있는 state 객체선언
  state = {
    todo: '',
    todos: []
  };
  //Event Handler 함수선언
  handleChange = (e) => {
    this.setState({
      todo: e.target.value // todo 의 다음 바뀔 값
    });
  };
  handleCreate = () => {
    const { todo, todos } = this.state;
    const newTodo = {
      id: this.id++,
      text: todo,
      checked: false
    };
    this.setState({
      // ...Spread operator 사용하여 배열에 추가
      todos: [...todos, newTodo],
      todo: '', // todo 초기화
    });
  }
  handleEnter = (e) => {
    // 눌려진 키가 Enter 이면 handleCreate 호출
    if (e.keyCode === 13) {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
    });
  }
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { todo } = this.state;
    const { handleChange, handleCreate, handleEnter, handleToggle, handleRemove } = this;

    return (
      <TodoListTemplate form={
        <Form
          todo={todo}
          myEnter={handleEnter}
          myChange={handleChange}
          myCreate={handleCreate}
        />}>
        <TodoItemList  myToggle={handleToggle} myRemove={handleRemove} />
      </TodoListTemplate>
    );
  }
}
export default App;