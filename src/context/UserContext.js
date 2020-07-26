import React, { useState, createContext, useEffect } from "react";
import { client } from "../utils/index";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client('/users')
        .then(user => {
            setUser(user)
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
        })
},[])

  if (loading) return null;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
