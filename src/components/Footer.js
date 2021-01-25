import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          CopyRight&copy;{new Date().getFullYear()}
          <span> MF </span>all Rights Reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
