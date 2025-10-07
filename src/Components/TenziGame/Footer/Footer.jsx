import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{
      margin: "20px 0",
    }} >
      <p>
        &copy; {new Date().getFullYear()} Tenzi Game. Built with React.
      </p>
      <p>
        Developed by Yenework Fekadie.
      </p>
    </footer>
  );
}

export default Footer;