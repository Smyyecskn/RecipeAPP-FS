import { useState } from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  const [about, setAbout] = useState("HAKKIMDAKİ");

  const handleClick = () => {
    setAbout(about === "HAKKIMDAKİ" ? "BİLGİLER" : "HAKKIMDAKİ");
  };

  return (
    <div className="d-flex flex-column align-items-center text-bold text-warning gap-3 p-5">
      <button className="btn btn-outline-success" onClick={handleClick}>
        {about}
      </button>
      <img
        className="w-50"
        src="https://www.karel.com.tr/sites/default/files/pictures/bilgisayar-tarayici-ipucu-a.jpg"
        alt="pc"
      />
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        eligendi, nam temporibus ex nulla dolorum nesciunt illum aspernatur
        nostrum .
      </h5>
      <NavLink target="_blank" to="https://www.linkedin.com/in/smyyecskn1/">
        🌷 LINKEDIN PROFILIM
      </NavLink>
    </div>
  );
};

export default About;
