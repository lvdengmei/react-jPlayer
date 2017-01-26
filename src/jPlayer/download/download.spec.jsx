import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import Download from './download';

const setup = () => {
  const props = {
    href: 'http://www.test.mp3',
    free: true,
    children: (<i className="fa fa-download" />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<Download {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Download />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('download')).toBeTruthy();
    expect(wrapper.prop('href')).toBe(props.href);
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.DOWNLOAD)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });

  it('renders null when audio is not free', () => {
    const { wrapper } = setup();

    wrapper.setProps({ free: false });
    expect(wrapper.node).toBe(null);
  });
});