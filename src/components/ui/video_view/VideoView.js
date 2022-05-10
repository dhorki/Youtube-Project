import React, { useState } from 'react';
import { RiLiveLine } from 'react-icons/ri';
import { FaThumbsUp } from 'react-icons/fa';
import { IoTimerOutline } from 'react-icons/io5';
import {
  formatYoutubeDate,
  intToMagnitude,
  numberWithCommas,
  youtubeDurationToTime,
} from '../../../helpers/formatters';
import PropTypes from 'prop-types';
import { useFetchYoutubeVideos } from '../../../hooks/useFetchYoutubeVideos';
import { useTheme } from '../../../hooks/useTheme';

import { StyledVideoView } from '../../../styles/components/ui/video_view/VideoView';
import { LoadingAnimation } from '../loading/LoadingAnimation';
import { ChannelBadge } from './ChannelBadge';
import { ErrorText } from '../error/ErrorText';

export const VideoView = ({ id }) => {
  const { getTheme } = useTheme();
  const theme = getTheme();

  const { data, loading, error } = useFetchYoutubeVideos(
    process.env.REACT_APP_YOUTUBE_API_KEY,
    [id]
  );

  const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);

  const iframeAllow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';

  // const { items } = require('../../../mocks/youtube-video-mock.json');
  let snippet, contentDetails, statistics;
  if (!loading && !error) {
    console.log(data);
    const item = data?.items[0];
    snippet = item.snippet;
    contentDetails = item.contentDetails;
    statistics = item.statistics;
  }

  return (
    <StyledVideoView className="animate__animated animate__fadeIn" theme={theme}>
      {loading ? (
        <LoadingAnimation />
      ) : error ? (
        <ErrorText error={error} />
      ) : (
        <>
          <div className="embedded-video">
            <iframe
              title={id}
              src={`//www.youtube.com/embed/${id}`}
              frameBorder="0"
              allow={iframeAllow}
              allowFullScreen="allowfullscreen"
            />
          </div>
          <p className="view-video-title">{snippet.title}</p>
          <div className="view-video-stats">
            <p className="view-video-stats-left">
              <span>{numberWithCommas(statistics.viewCount)}</span> views -{' '}
              <span>{formatYoutubeDate(snippet.publishedAt)}</span>
            </p>
            <p className="view-video-stats-right">
              <span>
                <FaThumbsUp /> {intToMagnitude(statistics.likeCount)}
              </span>{' '}
              <span>
                <IoTimerOutline />{' '}
                {snippet.liveBroadcastContent === 'live' ? (
                  <RiLiveLine className="live-icon" />
                ) : (
                  youtubeDurationToTime(contentDetails.duration)
                )}
              </span>
            </p>
          </div>
          <hr />
          <div className="view-video-channel-favorite">
            <ChannelBadge id={snippet.channelId} />
            <button>ADD TO FAVORITES</button>
          </div>
          <div className="view-video-description-box">
            <p
              className={`view-video-description ${
                descriptionCollapsed ? 'collapsed' : ''
              }`}
              dangerouslySetInnerHTML={{
                __html: snippet.description.replaceAll('\n', '<br />'),
              }}
            />
            <button
              className="view-video-description-toggle"
              onClick={() => setDescriptionCollapsed(!descriptionCollapsed)}
            >
              SHOW {descriptionCollapsed ? 'MORE' : 'LESS'}
            </button>
          </div>
        </>
      )}
    </StyledVideoView>
  );
};

VideoView.propTypes = {
  id: PropTypes.string.isRequired,
};
