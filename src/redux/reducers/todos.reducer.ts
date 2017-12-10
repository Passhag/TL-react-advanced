import { createTodosState } from './initial-state';
import { TodosActions } from '../actions';
import { TodosState, Action } from '../redux-policy';

export default function todosReducer(state: TodosState = createTodosState(), action: Action) {
  switch (action.type) {
    case TodosActions.BEFORE_CREATE_TODO:
    case TodosActions.BEFORE_UPDATE_TODO:
    case TodosActions.BEFORE_DELETE_TODO:
    case TodosActions.BEFORE_LOAD_TODOS: {
      return Object.assign({}, {
        ...state,
        loading: true,
      });
    }
    case TodosActions.AFTER_LOAD_TODOS_SUCCESS: {
      const todos = action.payload.data;

      return Object.assign({}, {
        ...state,
        data: [...state.data, ...todos],
        loading: false,
        error: null,
      });
    }
    case TodosActions.AFTER_CREATE_TODO_SUCCESS: {
      const todo = action.payload.data;

      return Object.assign({}, {
        ...state,
        data: [...state.data, todo],
        loading: false,
        error: null,
      });
    }
    case TodosActions.AFTER_DELETE_TODO_SUCCESS: {
      const todoId = action.payload.data.id;
      state.data.splice(state.data.findIndex((todo) => todo.id === todoId), 1);

      return Object.assign({}, {
        ...state,
        data: [...state.data],
        loading: false,
        error: null,
      });
    }
    case TodosActions.AFTER_CREATE_TODO_ERROR:
    case TodosActions.AFTER_DELETE_TODO_ERROR:
    case TodosActions.AFTER_UPDATE_TODO_ERROR:
    case TodosActions.AFTER_LOADO_TODOS_ERROR: {
      const error = action.payload.error;

      return Object.assign({}, {
        ...state,
        loading: false,
        error,
      });
    }
    default: {
      return state;
    }
  }
}
