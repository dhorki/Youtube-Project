import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { ViewVideoScreen } from '../../pages/ViewVideoScreen';
import { MemoryRouter } from 'react-router-dom';
import { VideoView } from '../../components/ui/video_view/VideoView';
import { RelatedVideoList } from '../../components/ui/video_view/RelatedVideoList';
import { Route } from 'react-router-dom';
jest.mock('../../components/ui/video_view/VideoView');
jest.mock('../../components/ui/video_view/RelatedVideoList');

describe('VideoViewScreen', () => {
  it('should render correctly', () => {
    const mockLocation = {
      pathname: '/mockVideoId',
      search: '',
    };

    VideoView.mockImplementation(({ id }) => <div>VideoView {id}</div>);
    RelatedVideoList.mockImplementation(({ relatedTo }) => (
      <div>RelatedVideoList {relatedTo}</div>
    ));

    const wrapper = mount(
      <MemoryRouter initialEntries={[mockLocation]}>
        <Route path="/:videoId">
          <ViewVideoScreen />
        </Route>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
