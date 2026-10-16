import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }
    if (!event.target[2].value) {
      alert("Please enter your phone number");
      return;
    }
    if (!event.target[3].value) {
      alert("Please enter your password");
      return;
    }
    if (!event.target[4].value) {
      alert("Please confirm your password");
      return;
    }
    if (event.target[3].value !== event.target[4].value) {
      alert("Passwords do not match");
      return;
    }
    register(email.trim());
    navigate("/dashboard");
  }


  return (
    <div className="container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        {/* select course */}
        <select>
          <option value="">Select a course</option>
          <option value="course1">Full Stack</option>
          <option value="course2">Data Analysis</option>
          <option value="course3">Data Science</option>
          <option value="course3">Data Structure</option>
        </select>

        <input type="phone" placeholder="Enter your phone number" required maxLength="10"/>
        <input type="password" placeholder="Enter your password" required />
        <input type="password" placeholder="Confirm your password" required />


        <button type="submit">Create Account</button>
      </form>

      <p>
        Already registered? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;