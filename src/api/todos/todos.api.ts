import {
  HttpFactory,
  HttpProviderType,
  Response,
} from '../../services/http';
import { TodosPaths } from './constants';

export interface Todo {
  id?: string;
  content: string;
}

export interface TodosGetResponse {
  data: Todo[] | null;
}

export interface TodosPostResponse {
  data: Todo | null;
}

export interface TodosPutResponse {
}

export interface TodosPatchResponse {
}

export interface TodosDeleteResponse {
}

const firebaseProvider = new HttpFactory()
  .createHttpProvider(HttpProviderType.Firebase);

const loadTodos = (params?: { [key: string]: string }): Promise<TodosGetResponse> =>
  firebaseProvider.get(TodosPaths.TODOS_DATA, params)
    .then((response: Response) => ({
      data: response.body
    }))
    .catch(error => {
      throw error;
    });

const createTodo = (todo: Todo): Promise<TodosPostResponse> =>
  firebaseProvider.post(TodosPaths.TODOS_DATA, { body: todo })
    .then((response: Response) => ({
      data: response.body,
    }))
    .catch(error => {
      throw error;
    });

const updateTodo = (todo: Todo): Promise<TodosPatchResponse> =>
  firebaseProvider.patch(TodosPaths.TODOS_DATA, { body: todo })
    .then((response: Response) => response)
    .catch(error => {
      throw error;
    });

const patchTodo = (todo: Todo): Promise<TodosPatchResponse> =>
  firebaseProvider.patch(TodosPaths.TODOS_DATA, { body: todo })
    .then((response: Response) => response)
    .catch(error => {
      throw error;
    });

const removeTodo = (id: string): Promise<TodosDeleteResponse> =>
  firebaseProvider.delete(`${TodosPaths.TODOS_DATA}/${id}`)
    .then((response: Response) => response)
    .catch(error => {
      throw error;
    });

export default {
  loadTodos,
  createTodo,
  patchTodo,
  updateTodo,
  removeTodo,
};
