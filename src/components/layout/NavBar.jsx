import logo from "@/assets/logo.svg";

const navItems = [
  { label: "O QUE É O MIRIN", href: "/oquemirin" },
  { label: "COMITÊS", href: "/comites" },
  { label: "O Evento", href: "/eventos" },
  { label: "Espaço acadêmico", href: "/contato" },
  { label: "Perguntas frequentes", href: "/faq" },
];

export default function Navbar() {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <header className="px-6 py-4 shadow-md bg-white z-50">
      <div className="flex items-center w-full">
        <img
          src={logo}
          alt="Logo"
          className="h-20 mr-8 cursor-pointer"
          onClick={handleLogoClick}
        />
        <nav className="flex justify-between w-full max-w-3xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
