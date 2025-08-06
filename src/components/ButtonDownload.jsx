import React from "react";

const ButtonDownload = ({text, className, id,  imgSrc}) => {

  const link = "https://drive.google.com/file/d/1eKpD3m12jiBWP0Ud-VNG-XsnBeP4JTVe/view?usp=sharing";
  return (
    <a
      role="button"
      tabIndex={1}
      
      
      target="_blank"
      id={id}
      href={link}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={imgSrc} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default ButtonDownload;
