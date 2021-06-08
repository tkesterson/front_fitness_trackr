import React, { useEffect } from "react";
import { useHistory } from "react-router";

const Deleted = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => history.push("/MyRoutines"), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <h1>The Item Was Deleted.</h1>
    </div>
  );
};
export default Deleted;
