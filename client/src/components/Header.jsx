import { BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center">
        <div className="text-3xl font-bold text-gray-800">2arth</div>
        <nav className="ml-10">
          <ul className="flex space-x-4 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        <button className="mr-4">
          <BsMoon className="size-6" />
          <div className="h-6 w-6 text-gray-500 dark:text-gray-200" />
        </button>
        <button className="bg-maingreen text-white px-4 py-2 rounded-md hover:bg-greenhover">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
