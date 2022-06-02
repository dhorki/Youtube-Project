import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MdFavorite } from 'react-icons/md';
import { timeSince } from '../../../helpers/formatters';
import { decodeHtml } from '../../../helpers/decodeHtml';
import { StyledRelatedVideoCard } from '../../../styles/components/ui/video_view/RelatedVideoCard';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import { updateFavoritesList } from '../../../helpers/updateFavoritesList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const RelatedVideoCard = ({ video }) => {
  const { environment, dispatchEnv } = useContext(EnvironmentContext);
  const { theme, user } = environment;

  const { videoId: currentVideo } = useParams();

  const { id, snippet } = video;
  const videoId = id?.videoId ? id?.videoId : id;
  const { title, channelTitle, thumbnails, publishTime } = snippet;
  const { url } = thumbnails.medium;
  const d = new Date(publishTime);

  const isFavorite = user?.favoritesList?.includes(videoId);

  const upperCaseCharsCount = title.length - title.replaceAll(/[A-Z]/g, '').length;
  const limitLength = upperCaseCharsCount > 50 ? 50 : upperCaseCharsCount > 30 ? 60 : 70;

  const fixedTitle =
    title.length >= limitLength ? title.slice(0, limitLength) + '...' : title;

  const handleFavoritesChange = () => {
    updateFavoritesList(user, videoId, dispatchEnv);
  };

  return (
    <StyledRelatedVideoCard className="animate__animated animate__fadeIn" theme={theme}>
      {user && (
        <div className="favorite-container">
          <button className={isFavorite ? 'remove' : ''} onClick={handleFavoritesChange}>
            <MdFavorite />
          </button>
        </div>
      )}
      <Link className={currentVideo === videoId ? 'current' : ''} to={`./${videoId}`}>
        <img src={url} alt="video" />
        <div>
          <div className="videocard-title">{decodeHtml(fixedTitle)}</div>
          <div className="videocard-channel-title">
            {decodeHtml(channelTitle)}
            <br />
            {timeSince(d)} ago.
          </div>
        </div>
      </Link>
    </StyledRelatedVideoCard>
  );
};

RelatedVideoCard.propTypes = {
  video: PropTypes.object.isRequired,
};
