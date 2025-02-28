import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-4 mt-5">
          <div className="container">
          <p> <small>Copyright &copy; Your Website {new Date().getFullYear()}</small></p>
          </div>
    </footer>
  )
}

export default Footer