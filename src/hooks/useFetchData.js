import * as React from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [data, setData] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    try {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
      };

      fetchPosts();
    } catch (error) {
      setError("There was an error with the request")
    }

  }, [url]);

  return {
    data,
    isLoading,
    error
  }
}

export default useFetchData;