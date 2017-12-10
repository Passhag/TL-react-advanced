import { combineReducers } from 'redux';
import todosReducer from './todos.reducer';
import todosFormReducer from './todos-form.reducer';

export default combineReducers({
  todosState: todosReducer,
  todosFormState: todosFormReducer,
});
