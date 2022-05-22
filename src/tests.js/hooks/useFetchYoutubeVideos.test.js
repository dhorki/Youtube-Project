import { renderHook } from '@testing-library/react-hooks';
import { useFetchYoutubeVideos } from '../../hooks/useFetchYoutubeVideos';

describe('useFetchYoutubeVideos', () => {
  it('should return default data', () => {
    const key = '';
    const idList = [];

    const { result } = renderHook(() => useFetchYoutubeVideos(key, idList));
    const { data, loading, error } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });
});
