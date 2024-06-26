import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <h2>Opps Something went Wrong!!!!</h2>
      <h3>
        {err.status} {err.statusText}
      </h3>
      <h3>{err.data}</h3>
    </div>
  );
};

export default ErrorPage;
