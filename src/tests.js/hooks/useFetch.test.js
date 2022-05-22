import { useFetch } from '../../hooks/useFetch';
import { renderHook } from '@testing-library/react-hooks';

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

describe('useFetch', () => {
  it('should return default data', () => {
    const url = 'https://www.googleapis.com/youtube/v3/search';

    const { result } = renderHook(() => useFetch(url, true));
    const { data, loading, error } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  it('should return correct data with youtube search url', async () => {
    const q = 'wizeline';

    const searchUrl =
      'https://www.googleapis.com/youtube/v3/search?' +
      `key=${process.env.REACT_APP_YOUTUBE_API_KEY}&` +
      'part=snippet&' +
      `q=${q}&` +
      'type=video&' +
      `order=${q.length === 0 ? 'date' : 'relevance'}&` +
      'regionCode=MX&' +
      'relevanceLanguage=es&' +
      'maxResults=24';

    const { result, waitForNextUpdate } = renderHook(() => useFetch(searchUrl, true));
    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    const item = data.items[0];

    expect(data.items.length).toBeGreaterThan(0);

    expect(item).toHaveProperty('id');
    expect(item.id).toHaveProperty('videoId');

    expect(item).toHaveProperty('snippet');
    expect(item.snippet).toHaveProperty('title');
    expect(item.snippet).toHaveProperty('channelTitle');
    expect(item.snippet).toHaveProperty('description');
    expect(item.snippet).toHaveProperty('thumbnails');
    expect(item.snippet).toHaveProperty('publishTime');

    expect(item.snippet.thumbnails).toHaveProperty('medium');
    expect(item.snippet.thumbnails.medium).toHaveProperty('url');

    expect(item.id.kind).toBe('youtube#video');

    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  it('should return cached content', async () => {
    const q = 'batman';

    const searchUrl =
      'https://www.googleapis.com/youtube/v3/search?' +
      `key=${process.env.REACT_APP_YOUTUBE_API_KEY}&` +
      'part=snippet&' +
      `q=${q}&` +
      'type=video&' +
      `order=${q.length === 0 ? 'date' : 'relevance'}&` +
      'regionCode=MX&' +
      'relevanceLanguage=es&' +
      'maxResults=24';

    const { waitForNextUpdate } = renderHook(() => useFetch(searchUrl, true));
    await waitForNextUpdate();

    const { result } = renderHook(() => useFetch(searchUrl, true));

    const { data, loading, error } = result.current;

    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  it('should return error data on missing key', async () => {
    const q = 'batman';

    const searchUrl =
      'https://www.googleapis.com/youtube/v3/search?' +
      `key=${undefined}&` +
      'part=snippet&' +
      `q=${q}&` +
      'type=video&' +
      `order=${q.length === 0 ? 'date' : 'relevance'}&` +
      'regionCode=MX&' +
      'relevanceLanguage=es&' +
      'maxResults=24';

    const { result, waitForNextUpdate } = renderHook(() => useFetch(searchUrl, true));
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data.error.code).toBe(400);
    expect(loading).toBe(false);
    expect(error).not.toBe(null);
    expect(error.code).toBe(400);
    expect(error.message).toBe('API key not valid. Please pass a valid API key.');
  });

  it('should return error data on exception', async () => {
    const q = 'batman';

    const searchUrl = null;
    const { result, waitForNextUpdate } = renderHook(() => useFetch(searchUrl));
    await waitForNextUpdate();

    const { loading, error } = result.current;

    expect(loading).toBe(false);
    expect(error).not.toBe(null);
  });
});
