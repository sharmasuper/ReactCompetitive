import React, { useEffect, useState } from 'react';
import axios from 'axios'
function DataFetchingOne() {
    const [loading,setloading] = useState(true)
      const [error,seterror] = useState('')
      const [post,setpost] = useState({})

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
            setpost(response.data);
            setloading(false);
            seterror('');
          } catch (error) {
            seterror('Error fetching data');
            setloading(false);
            setpost(null);
          }
        };
    
        fetchData();
    }, []);

  return (
    <div>
      <h1>DataFetching</h1>
      {loading?'Loading':post.title}
      {error?error :null}
    </div>
  );
}

export default DataFetchingOne;
