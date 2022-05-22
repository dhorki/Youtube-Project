import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { styles } from '../../../../constants/constants';
import { EnvironmentContext } from '../../../../contexts/EnvironmentContext';
import { ChannelBadge } from '../../../../components/ui/video_view/ChannelBadge';
import { useFetch } from '../../../../hooks/useFetch';
jest.mock('../../../../hooks/useFetch');

describe('ChannelBadge', () => {
  const environment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
  };

  it('should render correctly while loading', () => {
    const channelId = 'channelId';

    useFetch.mockReturnValue({
      data: {},
      loading: true,
      error: null,
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <ChannelBadge id={channelId} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with success fetch', () => {
    const channelId = 'channelId';

    useFetch.mockReturnValue({
      data: {
        items: [
          {
            snippet: {
              title: 'channel title',
              thumbnails: {
                default: {
                  url: 'https://www.youtube.com/channel/channelId/default.jpg',
                },
              },
            },
            statistics: {
              subscriberCount: 12345,
            },
          },
        ],
      },
      loading: false,
      error: null,
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <ChannelBadge id={channelId} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with fail fetch', () => {
    const channelId = 'channelId';

    useFetch.mockReturnValue({
      data: {},
      loading: false,
      error: 'error',
    });

    const wrapper = mount(
      <EnvironmentContext.Provider value={{ environment }}>
        <ChannelBadge id={channelId} />
      </EnvironmentContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
