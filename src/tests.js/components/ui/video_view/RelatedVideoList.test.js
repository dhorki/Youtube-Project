import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { styles } from '../../../../constants/constants';
import { EnvironmentContext } from '../../../../contexts/EnvironmentContext';
import { useFetch } from '../../../../hooks/useFetch';
import { RelatedVideoList } from '../../../../components/ui/video_view/RelatedVideoList';
import { RelatedVideoCard } from '../../../../components/ui/video_view/RelatedVideoCard';
jest.mock('../../../../hooks/useFetch');
jest.mock('../../../../components/ui/video_view/RelatedVideoCard');

describe('RelatedVideoList', () => {
  const environment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  it('should render correctly while loading', () => {
    const videoId = 'channelId';

    useFetch.mockReturnValue({
      data: {},
      loading: true,
      error: null,
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <RelatedVideoList relatedTo={videoId} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with success fetch', () => {
    const videoId = 'channelId';

    RelatedVideoCard.mockImplementation(({ video }) => (
      <div>RelatedVideoCard {video.id.videoId}</div>
    ));

    useFetch.mockReturnValue({
      data: {
        items: [
          {
            id: {
              videoId: 'videoId1',
              kind: 'youtube#video',
            },
            snippet: {},
          },
          {
            id: {
              videoId: 'videoId2',
              kind: 'youtube#video',
            },
            snippet: {},
          },
          {
            id: {
              videoId: 'videoId3',
              kind: 'youtube#video',
            },
            snippet: {},
          },
        ],
      },
      loading: false,
      error: null,
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <RelatedVideoList relatedTo={videoId} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with success fetch', () => {
    const videoId = 'channelId';

    RelatedVideoCard.mockImplementation(({ video }) => (
      <div>RelatedVideoCard {video.id.videoId}</div>
    ));

    useFetch.mockReturnValue({
      data: {
        items: [
          {
            id: {
              videoId: 'videoId1',
              kind: 'youtube#video',
            },
            snippet: {},
          },
          {
            id: {
              videoId: 'videoId2',
              kind: 'youtube#video',
            },
            snippet: {},
          },
          {
            id: {
              videoId: 'videoId3',
              kind: 'youtube#video',
            },
            snippet: {},
          },
        ],
      },
      loading: false,
      error: null,
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <RelatedVideoList relatedTo={videoId} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with no related videos', () => {
    const videoId = 'channelId';

    RelatedVideoCard.mockImplementation(({ video }) => (
      <div>RelatedVideoCard {video.id.videoId}</div>
    ));
    useFetch.mockReturnValue({
      data: {
        items: [],
      },
      loading: false,
      error: null,
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <RelatedVideoList relatedTo={videoId} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with fail fetch', () => {
    const videoId = 'videoId';

    useFetch.mockReturnValue({
      data: {},
      loading: false,
      error: { error: 'error' },
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <RelatedVideoList relatedTo={videoId} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
