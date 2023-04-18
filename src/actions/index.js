import axios from 'axios';

const apiUrl = 'http://localhost:4500/api/todos';

//Action type 정의
export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = (id) => {
    return (dispatch) => {
        axios.delete(`${apiUrl}/${id}`)
            .then(res => {
                dispatch({
                    type: REMOVE_TODO,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw (error);
            })
    }
};

export const fetchAllTodos = () => {
    return (dispatch) => {
        axios.get(apiUrl) //Promise
            .then(res => {
                dispatch({
                    type: FETCH_TODOS,
                    payload: res.data
                })
            })
            .catch(error => {
                console.error(error);
                throw (error);
            });
    }
};

export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post(apiUrl, todo)
            .then(res => {
                dispatch({
                    type: ADD_TODO,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw (error);
            })
    }
};