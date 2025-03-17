"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
    const router=useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSignup = async () => {

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true); 
      setError(""); 

      const response = await axios.post("http://localhost:3000/api/v1/signup", formData);
      console.log("Signup successful:", response.data);
      alert("Signup successful!");
      router.push("/signin");
    } catch (error) {
      console.error("Signup failed:", error);
      setError("Signup failed! Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

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
        type="email" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email" 
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
        onClick={handleSignup}
        disabled={loading} 
        className={`w-64 p-2 rounded transition duration-200 ${
          loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </div>
  );
}
