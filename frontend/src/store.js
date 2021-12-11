import { createStore } from 'redux';

const initialState = false;

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
}


const store = createStore(reducer)

export default store;