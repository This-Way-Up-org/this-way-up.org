function Header() {
  return (
    <header className="bg-white border-b border-blue-200 fixed w-full top-0 h-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-40 h-40 p-2">
          <img src="/logo.png" alt="Wiki Logo" className="w-full h-full object-contain" />
        </div>
      </div>
    </header>
  );
}

export default Header;