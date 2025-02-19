// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";
import BloodReport from "./pages/BloodReport";
import Reminders from "./pages/Reminders";
import HealthRecords from "./pages/HealthRecords";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* ✅ Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* ✅ Protected Routes (Require Login) */}
            <Route 
              path="/profile" 
              element={<ProtectedRoute><Profile /></ProtectedRoute>} 
            />
            <Route 
              path="/upload" 
              element={<ProtectedRoute><Upload /></ProtectedRoute>} 
            />
            <Route 
              path="/blood-report" 
              element={<ProtectedRoute><BloodReport /></ProtectedRoute>} 
            />
            <Route 
              path="/reminders" 
              element={<ProtectedRoute><Reminders /></ProtectedRoute>} 
            />
            <Route 
              path="/health-records" 
              element={<ProtectedRoute><HealthRecords /></ProtectedRoute>} 
            />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
