import { useState, useEffect } from 'react';

const useNeighborhoodData = (neighborhoodSlug) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNeighborhoodData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/neighborhoods.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const allData = await response.json();
        const neighborhoodData = allData[neighborhoodSlug];
        
        if (!neighborhoodData) {
          throw new Error(`Neighborhood data for '${neighborhoodSlug}' not found`);
        }
        
        setData(neighborhoodData);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching neighborhood data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (neighborhoodSlug) {
      fetchNeighborhoodData();
    }
  }, [neighborhoodSlug]);

  return { data, loading, error };
};

export default useNeighborhoodData;