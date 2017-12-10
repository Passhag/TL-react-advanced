import * as React from 'react';
import { configure, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new ReactSixteenAdapter() });

it('renders without crashing', () => {
  shallow(<App />);
});
