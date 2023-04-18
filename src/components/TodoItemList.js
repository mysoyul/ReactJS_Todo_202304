import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux'
import { fetchAllTodos } from '../actions'
class TodoItemList extends Component {
    componentDidMount() {
        this.props.fetchAllTodos();
    }
    /*
        shouldComponentUpdate() 
        : true(todos배열에 변동이 있음)이면 렌더링 다시 하고
        : false(todos배열에 변동이 없음)이면 렌더링 생략
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, myToggle, myRemove } = this.props;
        const todoList = todos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={myToggle}
                    onRemove={myRemove}
                    key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}
export default connect(
    (state)=> ({todos: state.todos}),
    {fetchAllTodos}
)(TodoItemList);