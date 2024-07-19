import React, { useState, useEffect } from "react";

function useApi() {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  useEffect(() => {
    fetch(
      "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
    )
      .then((response) => {
        //   console.log("the response is: ", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        //   console.log("the data is: ", data);
        setData(data);
      })
      .catch((error) => {
        //   console.error("the error is: ", error);
        setError(error);
      });
  }, []);

  return { data, error };
}

export default useApi;
