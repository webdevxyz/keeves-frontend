import { useEffect, useState } from 'react';

const useSearchProduct = (searchQuery) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        setError(null); 

        const token = localStorage.getItem('moma_token');

        const url = `https://api.webdevxyz.com/search-products?searchQuery=${encodeURIComponent(searchQuery)}`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]); 

  return { data, loading, error };
};

export default useSearchProduct;
