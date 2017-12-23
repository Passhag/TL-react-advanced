import * as React from 'react';
import { shallow, configure, ShallowWrapper } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import TextField from './TextField';

configure({ adapter: new ReactSixteenAdapter() });

const aShallowWrapper = (props?: { [key: string]: Function }): ShallowWrapper => (
  shallow(<TextField name="test" {...props} />)
);

describe('Components::TextField', () => {
  it('should render correctly', () => {
    const wrapper = aShallowWrapper();

    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger onKeyDown listener', () => {
    const onKeyDown = jasmine.createSpy('onKeyDown');
    const wrapper = aShallowWrapper({ onKeyDown });

    wrapper.find('input').simulate('keydown');

    expect(onKeyDown).toHaveBeenCalled();
  });

  it('should trigger onChange listener', () => {
    const onChange = jasmine.createSpy('onChange');
    const wrapper = aShallowWrapper({ onChange });

    wrapper.find('input').simulate('change');

    expect(onChange).toHaveBeenCalled();
  });

  it('should trigger onFocus listener', () => {
    const onFocus = jasmine.createSpy('onFocus');
    const wrapper = aShallowWrapper({ onFocus });

    wrapper.find('input').simulate('focus');

    expect(onFocus).toHaveBeenCalled();
  });

  it('should trigger onBlur listener', () => {
    const onBlur = jasmine.createSpy('onBlur');
    const wrapper = aShallowWrapper({ onBlur });

    wrapper.find('input').simulate('blur');

    expect(onBlur).toHaveBeenCalled();
  });
});
