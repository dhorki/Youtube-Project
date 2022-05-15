import { useEffect, useRef, useState } from 'react';

const cache = { current: {} };

export const useFetch = (url, cacheIt = true) => {
  const _isMounted = useRef(true); // Initial value _isMounted = true
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let controller = new AbortController();
    // console.log(cache);

    const fetchData = async () => {
      setLoading(true);
      const cachedResult = cache.current[url];
      if (cachedResult && !cachedResult.error) {
        const result = cache.current[url];
        // console.log('fetching from cache ' + url);
        setData(result);
      } else {
        try {
          // console.log('fetching');
          const response = await fetch(url, { signal: controller.signal });
          const result = await response.json();
          if (result.error) {
            setError(result.error);
          }
          if (cacheIt) {
            cache.current[url] = { ...result, fromCache: true }; // set response in cache;
          }
          setData(result);
        } catch (e) {
          // console.log(e);
          if (_isMounted.current) {
            setError(e);
          }
        }
      } //else
      if (_isMounted.current) {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      _isMounted.current = false;
      controller.abort();
    };
  }, [url, cacheIt]);

  return {
    data,
    loading,
    error,
  };
};
