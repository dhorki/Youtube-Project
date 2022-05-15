import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { styles } from '../../constants/constants';
import { EnvironmentContext } from '../../contexts/EnvironmentContext';
import { GalleryScreen } from '../../pages/GalleryScreen';
import { useFetch } from '../../hooks/useFetch';
import { MemoryRouter } from 'react-router-dom';
import { VideoCard } from '../../components/ui/gallery/VideoCard';
jest.mock('../../hooks/useFetch');
jest.mock('../../components/ui/gallery/VideoCard');

describe('GalleryScreen', () => {
  const environment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  it('should render correctly while loading', () => {
    const videoId = 'videoId';

    const mockLocation = {
      pathname: '/',
      search: '?q=random',
    };

    useFetch.mockReturnValue({
      data: {},
      loading: true,
      error: null,
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <GalleryScreen />
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with success fetch as search', () => {
    const mockLocation = {
      pathname: '/',
      search: '?q=random',
    };

    useFetch.mockReturnValue({
      data: {
        items: [
          {
            id: {
              videoId: 'videoId1',
              kind: 'youtube#video',
            },
          },
          {
            id: {
              videoId: 'videoId2',
              kind: 'youtube#video',
            },
          },
          {
            id: {
              videoId: 'videoId3',
              kind: 'youtube#video',
            },
          },
        ],
      },
      loading: false,
      error: null,
    });

    VideoCard.mockImplementation(({ video }) => <div>VideoCard {video.id.videoId}</div>);

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <GalleryScreen />
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with success fetch as favorites', () => {
    const mockLocation = {
      pathname: '/favorites',
      search: '',
    };

    useFetch.mockReturnValue({
      data: {
        items: [
          {
            id: {
              videoId: 'videoId1',
              kind: 'youtube#video',
            },
          },
          {
            id: {
              videoId: 'videoId2',
              kind: 'youtube#video',
            },
          },
          {
            id: {
              videoId: 'videoId3',
              kind: 'youtube#video',
            },
          },
        ],
      },
      loading: false,
      error: null,
    });

    VideoCard.mockImplementation(({ video }) => <div>VideoCard {video.id.videoId}</div>);

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <GalleryScreen />
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with success fetch as search with no results', () => {
    const mockLocation = {
      pathname: '/',
      search: '?q=random',
    };

    useFetch.mockReturnValue({
      data: {
        items: [],
      },
      loading: false,
      error: null,
    });

    VideoCard.mockImplementation(({ video }) => <div>VideoCard {video.id.videoId}</div>);

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <GalleryScreen />
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with success fetch as favorites with no results', () => {
    const mockLocation = {
      pathname: '/favorites',
      search: '',
    };

    useFetch.mockReturnValue({
      data: {
        items: [],
      },
      loading: false,
      error: null,
    });

    VideoCard.mockImplementation(({ video }) => <div>VideoCard {video.id.videoId}</div>);

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <GalleryScreen />
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with fail fetch', () => {
    const mockLocation = {
      pathname: '/favorites',
      search: '?q=',
    };

    useFetch.mockReturnValue({
      data: {},
      loading: false,
      error: { error: 'error' },
    });

    VideoCard.mockImplementation(({ video }) => <div>VideoCard {video.id.videoId}</div>);

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <MemoryRouter initialEntries={[mockLocation]}>
          <GalleryScreen />
        </MemoryRouter>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
