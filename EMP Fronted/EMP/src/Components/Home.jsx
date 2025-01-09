import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
                {/* Header Section */}
                <header className="bg-blue-600 p-4 shadow-md">
                    <div className="flex justify-center space-x-4">
                        <Link
                            to="/register"
                            className="text-white py-2 px-6 rounded-md bg-blue-800 hover:bg-blue-700 transition duration-300"
                        >
                            Register
                        </Link>
                        
                    </div>
                </header>

                {/* Main Section */}
                <main className="flex-1 bg-gray-100">
                    <div className="p-8 max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-6 animate__animated animate__fadeIn animate__delay-1s">
                            Welcome to the Employee Management System
                        </h1>
                        <p className="text-lg text-gray-600 animate__animated animate__fadeIn animate__delay-2s">
                            A robust platform to manage employee information, track performance, and ensure smooth HR operations. 
                            Whether you're an Admin or an Employee, we have tools designed for you.
                        </p>
                    </div>
                    
                </main>

                <footer className="bg-gray-800 text-white p-4 text-center">
                    <p>&copy; 2025 Employee Management System. All rights reserved.</p>
                </footer>
            </div>
  )
}

export default Home