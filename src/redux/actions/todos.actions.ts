import {
  TodosApi,
  Todo,
  TodosDeleteResponse,
  TodosGetResponse,
  TodosPostResponse,
  TodosPatchResponse,
  TodosPutResponse,
} from '../../api';
import { Action } from '../redux-policy';
import { TodosActions } from './constants';

const beforeLoadTodos = (): Action => ({
  type: TodosActions.BEFORE_LOAD_TODOS,
});

const afterLoadTodosSuccess = (todos: Object[] | null): Action => ({
  type: TodosActions.AFTER_LOAD_TODOS_SUCCESS,
  payload: {
    data: todos,
  },
});

const afterLoadTodosError = (error: Object | string): Action => ({
  type: TodosActions.AFTER_LOADO_TODOS_ERROR,
  payload: {
    error,
  }
});

const beforeCreateTodo = (): Action => ({
  type: TodosActions.BEFORE_CREATE_TODO,
});

const afterCreateTodoSuccess = (todo: Todo | null): Action => ({
  type: TodosActions.AFTER_CREATE_TODO_SUCCESS,
  payload: {
    data: todo,
  },
});

const afterCreateTodoError = (error: Object | string): Action => ({
  type: TodosActions.AFTER_CREATE_TODO_ERROR,
  payload: {
    data: error,
  },
});

const beforeUpdateTodo = (): Action => ({
  type: TodosActions.BEFORE_UPDATE_TODO,
});

const afterUpdateTodoSuccess = (todo: Todo): Action => ({
  type: TodosActions.AFTER_UPDATE_TODO_SUCCESS,
  payload: {
    data: todo,
  },
});

const afterUpdateTodoError = (error: Object | string): Action => ({
  type: TodosActions.AFTER_UPDATE_TODO_ERROR,
  payload: {
    data: error,
  },
});

const beforeReplaceTodo = (): Action => ({
  type: TodosActions.BEFORE_REPLACE_TODO,
});

const afterReplaceTodoSuccess = (todo: Todo): Action => ({
  type: TodosActions.AFTER_REPLACE_TODO_SUCCESS,
  payload: {
    data: todo,
  },
});

const afterReplaceTodoError = (error: Object | string): Action => ({
  type: TodosActions.AFTER_REPLACE_TODO_ERROR,
  payload: {
    data: error,
  },
});

const beforeDeleteTodo = (): Action => ({
  type: TodosActions.BEFORE_DELETE_TODO,
});

const afterDeleteTodoSuccess = (id: string): Action => ({
  type: TodosActions.AFTER_DELETE_TODO_SUCCESS,
  payload: {
    data: {
      id,
    },
  },
});

const afterDeleteTodoError = (error: Object | string): Action => ({
  type: TodosActions.AFTER_DELETE_TODO_ERROR,
  payload: {
    data: error,
  },
});

const loadTodos = (params?: { [key: string]: string }) => (dispatch: Function) => {
  dispatch(beforeLoadTodos());

  return TodosApi.loadTodos(params)
    .then((response: TodosGetResponse) => dispatch(afterLoadTodosSuccess(response.data)))
    .catch((error: any) => dispatch(afterLoadTodosError(error)));
};

const createTodo = (todo: Todo) => (dispatch: Function) => {
  dispatch(beforeCreateTodo());

  return TodosApi.createTodo(todo)
    .then((response: TodosPostResponse) => dispatch(afterCreateTodoSuccess(response.data)))
    .catch((error: any) => dispatch(afterCreateTodoError(error)));
};

const updateTodo = (todo: Todo) => (dispatch: Function) => {
  dispatch(beforeUpdateTodo());

  return TodosApi.updateTodo(todo)
    .then((response: TodosPatchResponse) => dispatch(afterUpdateTodoSuccess(todo)))
    .catch((error: any) => dispatch(afterUpdateTodoError(error)));
};

const replaceTodo = (todo: Todo) => (dispatch: Function) => {
  dispatch(beforeReplaceTodo());

  return TodosApi.updateTodo(todo)
    .then((response: TodosPutResponse) => dispatch(afterReplaceTodoSuccess(todo)))
    .catch((error: any) => dispatch(afterReplaceTodoError(error)));
};

const removeTodo = (id: string) => (dispatch: Function) => {
  dispatch(beforeDeleteTodo());

  return TodosApi.removeTodo(id)
    .then((response: TodosDeleteResponse) => dispatch(afterDeleteTodoSuccess(id)))
    .catch((error: any) => dispatch(afterDeleteTodoError(error)));
};

export {
  loadTodos,
  createTodo,
  updateTodo,
  replaceTodo,
  removeTodo,
};
