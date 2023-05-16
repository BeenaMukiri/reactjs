import { useState, useEffect, useCallback } from "react";

function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define a callback function that will fetch data from the API
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Call the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }

  return <div>{/* Render the data */}</div>;
}
