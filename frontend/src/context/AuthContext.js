import { createContext, useContext, useEffect, useState } from "react";

const USERS_KEY = "hmsUsers";
const CURRENT_USER_KEY = "hmsCurrentUser";

const defaultUsers = [
  {
    id: 1,
    fullName: "Admin User",
    email: "admin@citycare.com",
    phone: "9876543210",
    role: "Administrator",
    password: "Admin123"
  }
];

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem(USERS_KEY);

    if (!storedUsers) {
      localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }

    const storedCurrentUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedCurrentUser) {
      setCurrentUser(JSON.parse(storedCurrentUser));
    }
  }, []);

  const register = (formData) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const emailExists = users.some(
      (user) => user.email.toLowerCase() === formData.email.trim().toLowerCase()
    );

    if (emailExists) {
      throw new Error("An account with this email already exists.");
    }

    const newUser = {
      id: Date.now(),
      fullName: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      role: formData.role,
      password: formData.password
    };

    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
    return { success: true, message: "Registration successful. Please login." };
  };

  const login = (formData) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const matchedUser = users.find(
      (user) =>
        user.email.toLowerCase() === formData.email.trim().toLowerCase() &&
        user.password === formData.password
    );

    if (!matchedUser) {
      throw new Error("Invalid email or password.");
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(matchedUser));
    setCurrentUser(matchedUser);
    return { success: true, message: "Login successful." };
  };

  const logout = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
