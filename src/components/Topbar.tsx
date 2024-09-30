const Topbar = () => {
    return (
      <div className="bg-gray-100 text-sm py-2">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center space-x-6">
            <span>Welcome to our store!</span>
            <a href="#" className="hover:text-gray-700">Contact Us</a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-700">USD</a>
            <a href="#" className="hover:text-gray-700">English</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Topbar;
  