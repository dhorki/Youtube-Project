import React from 'react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import { styles } from '../../../../constants/constants';
import { EnvironmentContext } from '../../../../contexts/EnvironmentContext';
import { VideoView } from '../../../../components/ui/video_view/VideoView';
import { useFetchYoutubeVideos } from '../../../../hooks/useFetchYoutubeVideos';
import { act } from 'react-dom/test-utils';
jest.mock('../../../../hooks/useFetchYoutubeVideos');

describe('VideoView', () => {
  const environment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  it('should render correctly while loading', () => {
    const videoId = 'videoId';

    useFetchYoutubeVideos.mockReturnValue({
      data: {},
      loading: true,
      error: null,
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <VideoView id={videoId} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with success fetch and NOT live broadcast', () => {
    const videoId = 'videoId';

    useFetchYoutubeVideos.mockReturnValue({
      data: {
        items: [
          {
            snippet: {
              title: 'video title',
              channelId: 'channelId',
              description: 'video description',
              publishedAt: '2020-01-01T00:00:00.000Z',
              liveBroadcastContent: 'none',
            },
            contentDetails: {
              duration: 'PT1M30S',
            },
            statistics: {
              viewCount: '100',
              likeCount: '10',
            },
          },
        ],
      },
      loading: false,
      error: null,
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <VideoView id={videoId} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with success fetch and live broadcast', () => {
    const videoId = 'videoId';

    useFetchYoutubeVideos.mockReturnValue({
      data: {
        items: [
          {
            snippet: {
              title: 'video title',
              channelId: 'channelId',
              description: 'video description',
              publishedAt: '2020-01-01T00:00:00.000Z',
              liveBroadcastContent: 'live',
            },
            contentDetails: {
              duration: 'PT1M30S',
            },
            statistics: {
              viewCount: '100',
              likeCount: '10',
            },
          },
        ],
      },
      loading: false,
      error: null,
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <VideoView id={videoId} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle show more/less on click', () => {
    const videoId = 'videoId';

    useFetchYoutubeVideos.mockReturnValue({
      data: {
        items: [
          {
            snippet: {
              title: 'video title',
              channelId: 'channelId',
              description:
                'Voluptate magna Lorem ullamco ex adipisicing non esse aute elit aliqua reprehenderit eiusmod cillum aute. Ullamco minim do nostrud consequat reprehenderit et exercitation occaecat laboris aute consequat culpa do esse. Irure eu consectetur veniam officia exercitation adipisicing in consequat tempor eu labore fugiat ullamco id. Velit culpa aliquip sint ut occaecat duis.',
              publishedAt: '2020-01-01T00:00:00.000Z',
              liveBroadcastContent: 'live',
            },
            contentDetails: {
              duration: 'PT1M30S',
            },
            statistics: {
              viewCount: '100',
              likeCount: '10',
            },
          },
        ],
      },
      loading: false,
      error: null,
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <VideoView id={videoId} />
      </EnvironmentContext.Provider>
    );

    let descriptionBox = wrapper.find('.view-video-description-box').first();

    act(() => {
      wrapper.find('.view-video-description-toggle').first().simulate('click');
    });
  });

  it('should render correctly with fail fetch', () => {
    const videoId = 'videoId';

    useFetchYoutubeVideos.mockReturnValue({
      data: {},
      loading: false,
      error: { error: 'error' },
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <Router history={createBrowserHistory()}>
          <VideoView id={videoId} />
        </Router>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
