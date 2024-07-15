const Header = () => {
  return (
    <header className="w-full h-17 bg-white border-b border-green-700 flex items-center justify-between px-4">
      <div className="text-2xl">2arth</div>
      <div className="flex items-center">
        <button className="mr-4">
          <div className="h-6 w-6 text-gray-500 dark:text-gray-200" />
        </button>
        <button className="bg-green-700 text-white px-4 py-1 rounded">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
