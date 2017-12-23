import * as React from 'react';
import { shallow, configure, ShallowWrapper } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import TodoViewItem from './TodoViewItem';

configure({ adapter: new ReactSixteenAdapter() });

const aTodo = () => ({
  content: 'todo',
});

const aShallowWrapper = (options: { [key: string]: Function } = {}): ShallowWrapper => {
  const props = Object.assign({}, {
    item: aTodo(),
    onDeleteBtnClick: () => null,
    onEditBtnClick: () => null,
  }, options);

  return shallow(
    <TodoViewItem {...props} />
  );
};

describe('Components::TodoViewItem', () => {
  it('should render correctly', () => {
    const wrapper = aShallowWrapper();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onDeleteBtnClick', () => {
    const onDeleteBtnClick = jasmine.createSpy('onDeleteBtnClick');
    const wrapper = aShallowWrapper({ onDeleteBtnClick, });

    wrapper.find('button').simulate('click');

    expect(onDeleteBtnClick).toHaveBeenCalled();
  });

  it('should handle onEditBtnClick', () => {
    const onEditBtnClick = jasmine.createSpy('onEditBtnClick');
    const wrapper = aShallowWrapper({ onEditBtnClick, });

    wrapper.find('button').simulate('click');

    expect(onEditBtnClick).toHaveBeenCalled();
  });
});
