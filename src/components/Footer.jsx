import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Grace Medical Foundation. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/company/grace-medical-foundation/">
          <img src="/src/assets/LinkedIn_logo.png" alt="" />
        </a>
        <a href="https://instagram.com/grace_medical_foundation">
          <img src="/src/assets/Instagram_icon.png" alt="" />
        </a>
        <a href="https://www.facebook.com/GraceMedicalFoundation/">
          <img src="/src/assets/Facebook_logo_(square).png" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
