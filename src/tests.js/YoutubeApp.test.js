import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { YoutubeApp } from '../YoutubeApp';

describe('YoutubeApp', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<YoutubeApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
