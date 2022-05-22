import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { styles } from '../../../../constants/constants';
import { EnvironmentContext } from '../../../../contexts/EnvironmentContext';
import { LoadingAnimation } from '../../../../components/ui/loading/LoadingAnimation';

describe('LoadingAnimation', () => {
  const environment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  it('should render correctly', () => {
    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <LoadingAnimation />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
