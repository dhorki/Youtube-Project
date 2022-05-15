import React from 'react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import { VideoCard } from '../../../../components/ui/gallery/VideoCard';
import { styles } from '../../../../constants/constants';
import { EnvironmentContext } from '../../../../contexts/EnvironmentContext';

describe('VideoCard', () => {
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
          <VideoCard video={video} />
        </Router>
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
