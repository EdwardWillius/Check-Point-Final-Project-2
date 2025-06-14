import Navbar from "../../component/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // State login
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  // State register
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState("");

  const navigate = useNavigate();

  // Handle login
  const handleLogin = async () => {
    setLoginError("");
    setLoginSuccess("");

    if (!loginUsername || !loginPassword) {
      setLoginError("Please fill all fields");
      return;
    }

    try {
      const payload = { username: loginUsername, password: loginPassword };
      const response = await axios.post("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/login", payload);

      localStorage.setItem("token", response.data.accessToken);
      setLoginSuccess("Login success!");
      setTimeout(() => navigate("/home"), 1500);
    } catch (error) {
      setLoginError(error.response?.data?.message || "Login failed");
    }
  };

  // Handle register (simulasi)
  const handleRegister = (e) => {
    e.preventDefault();
    setRegError("");
    setRegSuccess("");

    if (!regUsername || !regPassword || !regConfirmPassword) {
      setRegError("Please fill all fields");
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setRegError("Passwords do not match");
      return;
    }

    // Simulasi register: ganti dengan request API jika ada
    console.log("Register data:", { username: regUsername, password: regPassword });
    setRegSuccess("Registration successful! You can now login.");
    setRegUsername("");
    setRegPassword("");
    setRegConfirmPassword("");
  };

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
        <div style={{ marginBottom: 20, textAlign: "center" }}>
          <button onClick={() => setIsLogin(true)} disabled={isLogin}>
            Login
          </button>
          <button onClick={() => setIsLogin(false)} disabled={!isLogin} style={{ marginLeft: 10 }}>
            Register
          </button>
        </div>

        {isLogin ? (
          <div>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              style={{ width: "100%", marginBottom: 10 }}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              style={{ width: "100%", marginBottom: 10 }}
            />
            <button onClick={handleLogin} style={{ width: "100%" }}>
              Login
            </button>
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            {loginSuccess && <p style={{ color: "green" }}>{loginSuccess}</p>}
          </div>
        ) : (
          <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Username"
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
                style={{ width: "100%", marginBottom: 10 }}
              />
              <input
                type="password"
                placeholder="Password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                style={{ width: "100%", marginBottom: 10 }}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
               
                
                style={{ width: "100%", marginBottom: 10 }}
              />
              <button type="submit" style={{ width: "100%" }}>
                Register
              </button>
            </form>
            {regError && <p style={{ color: "red" }}>{regError}</p>}
            {regSuccess && <p style={{ color: "green" }}>{regSuccess}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;