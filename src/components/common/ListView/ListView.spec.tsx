import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import ListView from './ListView';

configure({ adapter: new ReactSixteenAdapter() });

describe('Components::ListView', () => {
  it('should render correctly', () => {
    const ViewItem = () => <li />;
    const wrapper = shallow(
      <ListView
        items={[{ id: 1 }, { id: 2 }]}
        ViewItem={ViewItem}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render viewItems correctly', () => {
    const ViewItem = item => (
      <li>
        {item.id}
      </li>
    );
    const wrapper = shallow(
      <ListView
        items={[{ id: 1 }, { id: 2 }]}
        ViewItem={ViewItem}
      />
    );

    expect(wrapper.find('li')).toHaveLength(2);
  });
});
