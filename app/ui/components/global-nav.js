import Link from 'next/link';


const Navbar = () => {
  return (
    <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <a href="#" class="text-2xl font-bold text-blue-600">
              BrandLogo
            </a>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <ul className="text-center  flex items-center">
            <li>
                <Link href="/" className="cursor-pointer text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                
                    Home
                  
                </Link>
              </li>
            <li>
                <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                
                    About
                  
                </Link>
              </li>
            </ul>
          
          
            
          </div>
        </div>
        {/* <!-- Mobile menu button --> */}
        <div class="flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 focus:text-white"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Mobile menu --> */}
    {/* <div class="sm:hidden hidden">
  <div class="pt-2 pb-4 space-y-1">
    <a href="#" class="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
    <a href="#" class="text-gray-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
    <a href="#" class="text-gray-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
    <a href="#" class="text-gray-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
  </div>
</div> */}
  </nav>
  );
};

export default Navbar;
