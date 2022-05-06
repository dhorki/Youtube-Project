import { useEffect, useState } from 'react';

const cache = { current: {} };

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let controller = new AbortController();
    // console.log(cache);

    const fetchData = async () => {
      setLoading(true);
      if (cache.current[url]) {
        const result = cache.current[url];
        // console.log('fetching from cache ' + url);
        setData(result);
      } else {
        try {
          console.log('fetching');
          const response = await fetch(url, { signal: controller.signal });
          const result = await response.json();
          cache.current[url] = result; // set response in cache;
          setData(result);
        } catch (e) {
          // console.log(e);
          setError(e);
        }
      } //else
      setLoading(false);
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
