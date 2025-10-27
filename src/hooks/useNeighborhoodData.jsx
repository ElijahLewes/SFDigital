import { useState } from "react";

function useNeighborhoodData() {
    const [neighborhoods, setNeighborhoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch neighborhood data
    useEffect(() => {
    const fetchNeighborhoodData = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/neighborhoods");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setNeighborhoods(data);
        }           
    return { neighborhoods, setNeighborhoods };
};

export default useNeighborhoodData;
