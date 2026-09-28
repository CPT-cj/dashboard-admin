import { useEffect, useState } from "react";
import AuthContext from "./auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // fetch("https://sabzlearn.ir/api/auth/me", {
    //   method: "POST",
    // });

    setUser({ id: 1, username: "محمد سجاد تهاجمی" });
  }, []);

  const login = () => {
    // login Api
    // fetch("https://sabzlearn.ir/api/auth/login", {
    //   method: "POST",
    // });

    setUser({ id: 1, username: "محمد سجاد تهاجمی" });
  };

  const logout = () => {
    // logout Api
    // fetch("https://sabzlearn.ir/api/auth/logout");

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
