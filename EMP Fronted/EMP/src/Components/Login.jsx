import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState([])
  const navigate = useNavigate();

  async function getdata(){
    const response = await axios.get('http://localhost:3000/users');
    setUser(response.data)
  }


  useEffect(()=>{
    getdata()
  },[])

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an API call or async task
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      if (user.role === 'admin') {
        navigate('/admin', { state: { name: user.name,id: user._id } }); 
      } else if (user.role === 'employee') {
        navigate('/emp', { state: { name: user.name,id: user._id } }); 
      } else {
        alert('Unknown role!');
      }
    } else {
      alert('Invalid credentials!');
      setLoading(false)
    }
    
    setEmail('')
    setPassword('')
  };

  return (
    <div className="flex justify-center back items-center min-h-screen animate-fadeIn">
      <div className=" bg-transparent con p-8 rounded-lg shadow-lg w-full max-w-sm transform transition-all duration-500 ease-in-out animate-slideIn">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
