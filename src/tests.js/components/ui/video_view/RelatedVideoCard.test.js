import React from 'react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import { styles } from '../../../../constants/constants';
import { EnvironmentContext } from '../../../../contexts/EnvironmentContext';
import { RelatedVideoCard } from '../../../../components/ui/video_view/RelatedVideoCard';

describe('RelatedVideoCard', () => {
  const environment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  it('should render correctly', () => {
    const date = new Date();
    date.setDate(date.getDate() - 10);
    const publishTime = date.toISOString().replace(/\.\d+/g, '');

    const video = {
      id: 'videoId',
      snippet: {
        title: 'Video title',
        channelTitle: 'Channel title',
        description: 'Video description',
        thumbnails: {
          medium: {
            url: 'https://www.youtube.com/watch?v=videoId',
          },
        },
        publishTime: publishTime,
      },
    };

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <Router history={createBrowserHistory()}>
          <RelatedVideoCard video={video} />
        </Router>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly at different title lengths', () => {
    const date = new Date();
    date.setDate(date.getDate() - 10);
    const publishTime = date.toISOString().replace(/\.\d+/g, '');

    const titleHighUpperCaseChars = ''.padEnd(51, 'A') + ''.padEnd(100, 'a');
    const titleMidUpperCaseChars = ''.padEnd(31, 'B') + ''.padEnd(100, 'b');
    const titleLowUpperCaseChars = ''.padEnd(30, 'C') + ''.padEnd(100, 'c');

    const video1 = {
      id: 'videoId',
      snippet: {
        title: titleHighUpperCaseChars,
        channelTitle: 'Channel title',
        description: 'Video description',
        thumbnails: {
          medium: {
            url: 'https://www.youtube.com/watch?v=videoId',
          },
        },
        publishTime: publishTime,
      },
    };

    const wrapper1 = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <Router history={createBrowserHistory()}>
          <RelatedVideoCard video={video1} />
        </Router>
      </EnvironmentContext.Provider>
    );

    expect(wrapper1.find('.videocard-title').text()).toBe(
      titleHighUpperCaseChars.slice(0, 50) + '...'
    );

    const video2 = {
      id: 'videoId',
      snippet: {
        title: titleMidUpperCaseChars,
        channelTitle: 'Channel title',
        description: 'Video description',
        thumbnails: {
          medium: {
            url: 'https://www.youtube.com/watch?v=videoId',
          },
        },
        publishTime: publishTime,
      },
    };

    const wrapper2 = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <Router history={createBrowserHistory()}>
          <RelatedVideoCard video={video2} />
        </Router>
      </EnvironmentContext.Provider>
    );

    expect(wrapper2.find('.videocard-title').text()).toBe(
      titleMidUpperCaseChars.slice(0, 60) + '...'
    );

    const video3 = {
      id: 'videoId',
      snippet: {
        title: titleLowUpperCaseChars,
        channelTitle: 'Channel title',
        description: 'Video description',
        thumbnails: {
          medium: {
            url: 'https://www.youtube.com/watch?v=videoId',
          },
        },
        publishTime: publishTime,
      },
    };

    const wrapper3 = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <Router history={createBrowserHistory()}>
          <RelatedVideoCard video={video3} />
        </Router>
      </EnvironmentContext.Provider>
    );

    expect(wrapper3.find('.videocard-title').text()).toBe(
      titleLowUpperCaseChars.slice(0, 70) + '...'
    );

    // wrapper.setProps({
    //   video: {
    //     ...video,
    //     snippet: {
    //       ...video.snippet,
    //       title: titleMidUpperCaseChars,
    //     },
    //   },
    // });
    // wrapper.update();

    // expect(wrapper.find('.videocard-title').text()).toBe(''.padEnd(30, 'B') + '...');

    // wrapper.setProps({
    //   video: {
    //     ...video,
    //     snippet: {
    //       ...video.snippet,
    //       title: titleLowUpperCaseChars,
    //     },
    //   },
    // });
    // wrapper.update();

    // expect(wrapper.find('.videocard-title').text()).toBe(titleLowUpperCaseChars);
  });
});
