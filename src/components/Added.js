import React, { useEffect } from "react";
import { useHistory } from "react-router";

const Added = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => history.push("/MyRoutines"), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <h1>The Activity Was Added.</h1>
    </div>
  );
};
export default Added;
