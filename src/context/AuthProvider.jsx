import React, { useState, useEffect, createContext } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Initialize localStorage only if it’s empty
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const storedData = getLocalStorage();
    
    if (storedData && storedData.employees) {
      setUserData(storedData.employees);
    } else {
      setUserData([]); // Avoid setting null, use an empty array instead
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;