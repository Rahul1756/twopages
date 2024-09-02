import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="flex flex-wrap bg-transparent p-16 ">
        {/* First Column - Larger */}
        <div className="flex-1 md:flex-[2] p-4 ">
          <h2 className="text-xl font-semibold">BrandLogo</h2>
          <p>
            This column is larger and takes up more space compared to the other
            two.
          </p>
        </div>

        {/* Second Column - Same Size with Vertical Links */}
        <div className="flex-1 p-4 items-center  text-center">
          <h2 className="text-md font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-center">
            <li>
              <Link href="/" className="text-gray-400 hover:text-gray-300 ">
                Home
              </Link>
            </li>
            <li className="cursor-pointer ">
              <Link href="/about" className="cursor-pointer text-gray-400 hover:text-gray-300 ">
                About
              </Link>
            </li>
          </ul>
        </div>


        <div className="flex-1 p-4 items-center  text-center">
          <h2 className="text-md font-semibold mb-4">Other</h2>
          <ul className="space-y-2 text-center">
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-300 ">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-300 ">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      

      <div className="flex flex-wrap bg-transparent  ">
        {/* First Column - Larger */}
        <div className="flex-1 md:flex-[2] p-1 text-center ">
         
          <p className="text-center text-sm text-slate-400">
           All Rights  Reserved 2024
          </p>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;
