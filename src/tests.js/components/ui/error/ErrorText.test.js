import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { ErrorText } from '../../../../components/ui/error/ErrorText';

describe('ErrorText', () => {
  it('should render correctly', () => {
    const error = {
      message: 'Error message',
    };

    const wrapper = shallow(<ErrorText error={error} />);
    expect(wrapper).toMatchSnapshot();
  });
});
