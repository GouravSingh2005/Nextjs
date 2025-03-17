"use client";
import { useState } from "react";
import axios from "axios";

export default function Signin() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignin = async () => {
    if (!formData.username || !formData.password) {
      setError("Both fields are required!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post("http://localhost:3000/api/v1/signin", formData);
      console.log("Sign in successful:", response.data);
      alert("Sign in successful!"); 
    } catch (error) {
      console.error("Sign in failed:", error);
      setError("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>} 

      <input 
        type="text" 
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username" 
        className="w-64 p-2 mb-4 border border-gray-500 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input 
        type="password" 
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password" 
        className="w-64 p-2 mb-4 border border-gray-500 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <button 
        onClick={handleSignin}
        disabled={loading}
        className={`w-64 p-2 rounded transition duration-200 ${
          loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </div>
  );
}
