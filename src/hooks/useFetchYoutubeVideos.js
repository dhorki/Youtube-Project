import { useFetch } from './useFetch';

export const useFetchYoutubeVideos = (key, idList) => {
  const url =
    'https://www.googleapis.com/youtube/v3/videos?' +
    `key=${key}&` +
    'part=id,snippet,statistics,contentDetails&' +
    `id=${idList.join(',')}&` +
    'maxResults=24';

  const { data, loading, error } = useFetch(url);

  return {
    data,
    loading,
    error,
  };
};
