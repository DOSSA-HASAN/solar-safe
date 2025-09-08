import React from "react";

function Footer() {
  const links = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" }, // section on homepage
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-600">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-gray-800"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="text-center text-gray-500 mt-12">
          <p>@2024 Solar Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
