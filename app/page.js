import Image from "next/image";
import Link from "next/link";
// import Navbar from "./ui/components/global-nav";
// import Footer from "./ui/components/global-footer";

import { Navbar ,Footer } from "@/components/shared/global-component";

export default function Home() {
 

  return (
    <main className=" min-h-screen ">
     <Navbar />
      {/* Hero Section */}
  <div className="relative overflow-hidden shadow-lg mb-8">
    <img
      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Hero Image"
      className="w-full h-72 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl font-bold mb-2">Welcome to Our Home Page</h1>
      <p className="text-lg mb-4">
        Learn more about us, our mission, and what we offer to our valued customers.
      </p>
      <button className="px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600">
        Learn More
      </button>
    </div>
  </div>

     <div className="p-24">
 
  {/* About Us Content */}

  
 
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p className="mb-4">
      We are a team of passionate individuals dedicated to providing high-quality solutions to our customers.
      Our mission is to make a positive impact in the communities we serve through innovation and collaboration.
    </p>
    <p className="mb-4">
      Our expertise spans various domains, allowing us to offer diverse services tailored to meet the unique needs of each client.
      Join us on our journey to make a difference!
    </p>
  </div>

  {/* Pricing Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
    {/* Basic Plan */}
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Basic Plan</h3>
      <p className="mb-4">$10/month</p>
      <ul className="mb-4">
        <li>- Access to basic features</li>
        <li>- Email support</li>
        <li>- 5 GB storage</li>
      </ul>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
        Choose Plan
      </button>
    </div>
    
    {/* Standard Plan */}
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Standard Plan</h3>
      <p className="mb-4">$30/month</p>
      <ul className="mb-4">
        <li>- Access to all features</li>
        <li>- Priority email support</li>
        <li>- 50 GB storage</li>
      </ul>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
        Choose Plan
      </button>
    </div>
    
    {/* Premium Plan */}
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Premium Plan</h3>
      <p className="mb-4">$60/month</p>
      <ul className="mb-4">
        <li>- All features and extras</li>
        <li>- 24/7 support</li>
        <li>- Unlimited storage</li>
      </ul>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
        Choose Plan
      </button>
    </div>
  </div>

  {/* Social Media Icons */}
  <div className="flex space-x-4 mt-6">
    <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
      <i className="fab fa-facebook-f"></i>
    </div>
    <div className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-full">
      <i className="fab fa-twitter"></i>
    </div>
    <div className="flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full">
      <i className="fab fa-instagram"></i>
    </div>
    <div className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full">
      <i className="fab fa-youtube"></i>
    </div>
  </div>
</div>
<Footer />

   
    </main>
  );
}
