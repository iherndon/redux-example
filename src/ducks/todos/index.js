const ADD_TODO = 'redux-example/todos/ADD_TODO';
const TOGGLE_TODO = 'redux-example/todos/TOGGLE_TODO';

export const addTodo = todo => ({
   type: ADD_TODO,
   payload: {
       todo
   } 
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
});

const initialState = [
    { id: 1, text: 'Grocery Shopping', completed: false},
    { id: 2, text: 'Study', completed: false }
];

export default function(state = initialState, { type, payload = {} }) {
    const { todo, id } = payload;
    switch(type) {
        case ADD_TODO: 
            const nextId = Math.max(...state.map(x => x.id)) + 1;
            const completed = false;
            return [...state, {...todo, id: nextId, completed}];
        case TOGGLE_TODO:
        //eslint-disable-next-line eqeqeq
            const index = state.findIndex(x => x.id == id);
            const currentTodo = state[index];
            return [...state.slice(0, index), {...currentTodo, completed: !currentTodo.completed } , ...state.slice(index + 1)];
        default: 
            return state;
    }
}