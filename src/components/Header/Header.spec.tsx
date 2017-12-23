import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({ adapter: new ReactSixteenAdapter() });

describe('Components::Header', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Header title={'List'} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
