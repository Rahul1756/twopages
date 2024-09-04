// `app/dashboard/page.js` is the UI for the `/dashboard` URL
import { Navbar ,Footer } from "@/components/shared/global-component";
 import Link from "next/link";

 
export default function About() {
  return (
    <main className=" min-h-screen ">
      <Navbar />
      <div className="p-24">
  <h1 className="text-2xl font-bold mb-4">Hello, About Page!</h1>
  <p className="mb-4">
    Welcome to our about page! We are committed to delivering the best service 
    to our customers. Our team is dedicated, experienced, and always ready to help. 
    Join us on our journey to make the world a better place, one step at a time.
  </p>
  <p className="mb-4">
    Our mission is to provide high-quality solutions that exceed expectations. 
    We believe in the power of collaboration and innovation, constantly striving 
    to improve and evolve. With our expertise and passion, we aim to make a positive 
    impact in the communities we serve.
  </p>
  <div className="flex space-x-4 mt-6">
    {/* Example of icons, using FontAwesome classes */}
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
