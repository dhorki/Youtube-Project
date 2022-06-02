import React, { useContext } from 'react';
import { MdFavorite } from 'react-icons/md';
import { timeSince } from '../../../helpers/formatters';
import { decodeHtml } from '../../../helpers/decodeHtml';
import { StyledVideoCard } from '../../../styles/components/ui/gallery/VideoCard';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext';
import PropTypes from 'prop-types';
import { updateFavoritesList } from '../../../helpers/updateFavoritesList';
import { Link } from 'react-router-dom';

export const VideoCard = ({ video, fromFavorites = false }) => {
  const { environment, dispatchEnv } = useContext(EnvironmentContext);
  const { theme, user } = environment;

  const { id, snippet } = video;
  let { videoId } = id;
  if (videoId === undefined) {
    videoId = id;
  }
  const { title, channelTitle, description, thumbnails, publishTime } = snippet;
  const { url } = thumbnails.medium;
  const d = new Date(publishTime);

  const fixedDescription =
    description.length > 125 ? description.slice(0, 125) + '...' : description;

  const isFavorite = user?.favoritesList?.includes(videoId);

  const handleFavoritesChange = () => {
    updateFavoritesList(user, videoId, dispatchEnv);
  };

  return (
    <StyledVideoCard className="animate__animated animate__fadeIn" theme={theme}>
      {user && (
        <div className="favorite-container">
          <button className={isFavorite ? 'remove' : ''} onClick={handleFavoritesChange}>
            <MdFavorite />
          </button>
        </div>
      )}
      <Link to={`${fromFavorites ? 'favorites' : ''}/${videoId}`}>
        <img src={url} alt="video" />
        <div className="videocard-title">{decodeHtml(title)}</div>
        <div className="videocard-channel-title">
          {decodeHtml(channelTitle)} - {timeSince(d)} ago.
        </div>
        <div className="videocard-description">{decodeHtml(fixedDescription)}</div>
      </Link>
    </StyledVideoCard>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
};
