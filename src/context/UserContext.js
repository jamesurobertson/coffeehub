import React, { useState, createContext, useEffect } from "react";
import {client} from '../utils/index'

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        (async() => {
            const user = await client('/users')
            console.log(user)
            setUser(user)
        })()
    },[])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
