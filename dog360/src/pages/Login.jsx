import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // ✅ Create navigate function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    login(); // ✅ Set authentication state
    navigate("/"); // ✅ Redirect user to Home page
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/login-background.jpg')" }} // ✅ Background Image
    >
      {/* ✅ Background Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm -z-10"></div> 

      {/* ✅ Login Card (Fixed Navigation Bar Issue) */}
      <div className="relative flex bg-white bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl z-10">
        
        {/* ✅ Left Side - Login Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-700 text-center">Welcome Back! 🐶</h2>
          <p className="text-gray-500 text-center mb-6">Log in to continue</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-gray-600 block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-rose-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-gray-600 block mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-rose-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* ✅ Login Button */}
            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>

          {/* ✅ Sign Up Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <a href="/signup" className="text-rose-600 font-semibold hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>

        {/* ✅ Right Side - Dog Image */}
        <div className="w-1/2 bg-gradient-to-br from-rose-200 to-amber-100 flex items-center justify-center">
          <img
            src="/dog-login.jpg"
            alt="Dog"
            className="w-80 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
