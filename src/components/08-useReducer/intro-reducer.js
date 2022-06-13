const initialState = [{
    id:1,
    todo: 'Comprar pan',
    done: 'false',
}];

const newTodo = {
    id:2,
    todo: 'Comprar leche',
    done: 'false',
};

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload]
    }

    return state;
}

const addToDoAction = {
    type: 'add',
    payload: newTodo,
}

let todos = todoReducer();

console.log(todos, addToDoAction);