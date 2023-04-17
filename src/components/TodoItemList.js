import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
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
                <TodoItem text="오늘의 할일1" checked={false} />
                <TodoItem text="오늘의 할일2" checked={true} />
            </div>
        );
    }
}
export default TodoItemList;