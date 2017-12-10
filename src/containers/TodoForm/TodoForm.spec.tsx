import * as React from 'react';
import { configure, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import TodoFormContainer from './TodoForm';

configure({ adapter: new ReactSixteenAdapter() });

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const shallowWithStore = (component: any, store: any) => {
  const context = {
    store,
  };

  return shallow(component, { context });
};

describe('Containers::TodoForm', () => {
  it('should define the component', () => {
    const store = mockStore({});
    const container = shallowWithStore(<TodoFormContainer />, store);

    expect(container).toBeDefined();
  });
});
