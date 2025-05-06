import React from 'react'

export default function NAVBAR() {
  return (
    <>
 <nav className="bg-white shadow-lg">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between">
      <div className="flex space-x-7">
        {/* Logo */}
        <div>
          <a href="#" className="flex items-center py-4 px-2">
            <i className="fas fa-gavel text-yellow-500 text-2xl mr-2" />
            <span className="font-semibold text-gray-900 text-lg">BidMaster</span>
          </a>
        </div>
        {/* Primary Nav */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#" className="py-4 px-2 text-yellow-600 border-b-4 border-yellow-600 font-semibold">Home</a>
          <a href="#" className="py-4 px-2 text-gray-500 hover:text-yellow-600 transition duration-300">Live Auctions</a>
          <a href="#" className="py-4 px-2 text-gray-500 hover:text-yellow-600 transition duration-300">Categories</a>
          <a href="#" className="py-4 px-2 text-gray-500 hover:text-yellow-600 transition duration-300">How It Works</a>
          <a href="#" className="py-4 px-2 text-gray-500 hover:text-yellow-600 transition duration-300">About</a>
        </div>
      </div>
      {/* Secondary Nav */}
      <div className="hidden md:flex items-center space-x-3">
        <a href="#" className="py-2 px-2 text-gray-500 hover:text-yellow-600 transition duration-300">
          <i className="fas fa-heart text-lg" />
          <span className="hidden lg:inline-block ml-1">Watchlist</span>
        </a>
        <a href="#" className="py-2 px-2 text-gray-500 hover:text-yellow-600 transition duration-300">
          <i className="fas fa-bell text-lg" />
          <span className="hidden lg:inline-block ml-1">Alerts</span>
        </a>
        <a href="#" className="py-2 px-2 font-medium text-gray-500 hover:text-yellow-600 transition duration-300">
          <i className="fas fa-user text-lg" />
          <span className="hidden lg:inline-block ml-1">Account</span>
        </a>
        <a href="#" className="py-2 px-2 bg-yellow-500 text-white font-medium rounded hover:bg-yellow-600 transition duration-300">
          <i className="fas fa-plus mr-1" />
          <span>Sell Item</span>
        </a>
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button className="outline-none mobile-menu-button">
          <svg className="w-6 h-6 text-gray-500 hover:text-yellow-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  {/* Mobile menu */}
  <div className="hidden mobile-menu">
    <ul>
      <li className="active"><a href="#" className="block text-sm px-2 py-4 bg-yellow-500 text-white font-semibold">Home</a></li>
      <li><a href="#" className="block text-sm px-2 py-4 hover:bg-yellow-500 hover:text-white transition duration-300">Live Auctions</a></li>
      <li><a href="#" className="block text-sm px-2 py-4 hover:bg-yellow-500 hover:text-white transition duration-300">Categories</a></li>
      <li><a href="#" className="block text-sm px-2 py-4 hover:bg-yellow-500 hover:text-white transition duration-300">How It Works</a></li>
      <li><a href="#" className="block text-sm px-2 py-4 hover:bg-yellow-500 hover:text-white transition duration-300">About</a></li>
      <li><a href="#" className="block text-sm px-2 py-4 hover:bg-yellow-500 hover:text-white transition duration-300">Watchlist</a></li>
      <li><a href="#" className="block text-sm px-2 py-4 hover:bg-yellow-500 hover:text-white transition duration-300">Alerts</a></li>
      <li><a href="#" className="block text-sm px-2 py-4 hover:bg-yellow-500 hover:text-white transition duration-300">Account</a></li>
      <li><a href="#" className="block text-sm px-2 py-4 bg-gray-800 text-white font-semibold hover:bg-gray-700">Sell Item</a></li>
    </ul>
  </div>
</nav>
  
    </>
  )
}
