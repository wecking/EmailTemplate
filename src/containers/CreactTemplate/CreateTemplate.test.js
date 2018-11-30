import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EmailEditor from 'react-email-editor';

import { CreateTemplate } from './CreateTemplate';

configure({ adapter: new Adapter() });

describe('<CreateTemplate />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CreateTemplate />);
  });

  it('should render <EmailEditor /> when loaded', () => {
    expect(wrapper.find(EmailEditor)).toHaveLength(1);
  });
});
