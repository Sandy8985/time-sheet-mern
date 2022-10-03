import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name , emp_id , email , password) => {
    setError(null);

    const response = await fetch("http://localhost:4000/api/employee/signup", {
      method: "POST",
      headers : { "Content-type": "application/json" },
      body: JSON.stringify({ name , emp_id ,email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }

    if (response.ok) {
      // save userdata in local storage
      localStorage.setItem("employee", JSON.stringify({data}));

      //update usercontext
      dispatch({ type:"LOGIN", payload: data });
    }
  };

  return { signup, error };
};


