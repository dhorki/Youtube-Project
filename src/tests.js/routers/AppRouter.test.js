import { mount } from 'enzyme';
import { Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { styles } from '../../constants/constants';
import { EnvironmentContext } from '../../contexts/EnvironmentContext';
import { AppRouter } from '../../routers/AppRouter';

describe('AppReducer', () => {
  const environment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  it('should render default/search route', () => {
    const mockLocation = {
      pathname: '/',
      search: '',
    };

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <AppRouter />
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render favorites route', () => {
    const mockLocation = {
      pathname: '/favorites',
      search: '',
    };

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <AppRouter />
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Video View route', () => {
    const mockLocation = {
      pathname: '/favorites',
      search: '',
    };

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <Route path="/:videoId">
            <AppRouter />
          </Route>
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
