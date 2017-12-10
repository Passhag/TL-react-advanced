import {
  HttpServiceFactory,
  ResponseFireBaseGet,
  ResponseFireBasePost,
  ResponseFireBasePut,
  ResponseFireBaseDelete,
  ResponseFireBasePatch,
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

const httpService = new HttpServiceFactory()
  .createFireBaseService();

const loadTodos = (params?: { [key: string]: string }): Promise<TodosGetResponse> =>
  httpService.get<Todo[]>(TodosPaths.TODOS_DATA, params)
    .then((response: ResponseFireBaseGet<Todo[]>) => ({
      data: response.body
    }))
    .catch(error => {
      throw error;
    });

const createTodo = (todo: Todo): Promise<TodosPostResponse> =>
  httpService.post<Todo, Todo>(TodosPaths.TODOS_DATA, todo)
    .then((response: ResponseFireBasePost<Todo>) => ({
      data: response.body,
    }))
    .catch(error => {
      throw error;
    });

const updateTodo = (todo: Todo): Promise<TodosPatchResponse> =>
  httpService.patch<Todo>(TodosPaths.TODOS_DATA, todo)
    .then((response: ResponseFireBasePut) => response)
    .catch(error => {
      throw error;
    });

const patchTodo = (todo: Todo): Promise<TodosPatchResponse> =>
  httpService.patch<Todo>(TodosPaths.TODOS_DATA, todo)
    .then((response: ResponseFireBasePatch) => response)
    .catch(error => {
      throw error;
    });

const removeTodo = (id: string): Promise<TodosDeleteResponse> =>
  httpService.delete(`${TodosPaths.TODOS_DATA}/${id}`)
    .then((response: ResponseFireBaseDelete) => response)
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
