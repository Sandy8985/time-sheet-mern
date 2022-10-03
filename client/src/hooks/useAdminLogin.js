import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useAdminLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email , password) => {
    setError(null);

    const response = await fetch("http://localhost:4000/api/admin/login", {
      method: "POST",
      headers : { "Content-type": "application/json" },
      body: JSON.stringify({email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }

    if (response.ok) {
      // save userdata in local storage
      localStorage.setItem("Admin", JSON.stringify({data}));

      //update usercontext
      dispatch({ type:"LOGIN", payload: data });
    }
  };

  return { login, error };
};


