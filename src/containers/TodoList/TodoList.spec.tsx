import * as React from 'react';
import { configure, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import TodoListContainer from './TodoList';

configure({ adapter: new ReactSixteenAdapter() });

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const shallowWithStore = (component: any, store: any) => {
  const context = {
    store,
  };

  return shallow(component, { context });
};

describe('Containers::TodoListContainer', () => {
  it('should correctly define the container', () => {
    const store = mockStore({});
    const container = shallowWithStore(<TodoListContainer />, store);

    expect(container).toBeDefined();
  });
});
