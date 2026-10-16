import {
  createContext,
  useContext,
  useState
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("demoUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  function login(email) {
    const loggedInUser = { email };

    localStorage.setItem(
      "demoUser",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);
  }

  function register(email) {
    // Classroom demo: registration directly signs in.
    login(email);
  }

  function logout() {
    localStorage.removeItem("demoUser");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}