import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500 p-4 text-center text-white">
      <div className="flex flex-col items-center">
        <img src="/logo.png" alt="AIJokeCoin Logo" className="h-10 mb-2 spinning-logo" /> {/* Adjust height as needed */}
        <p>&copy; 2024 AIJokeCoin. Bringing humor to the blockchain!</p>
      </div>
    </footer>
  );
}

export default Footer;
