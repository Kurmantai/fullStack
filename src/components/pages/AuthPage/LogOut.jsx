import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContextProvider";

const LogOut = () => {
  const { logout, checkAuth } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  return (
    <div>
      <button onClick={logout}>logout </button>
    </div>
  );
};

export default LogOut;
