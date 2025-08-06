const Button = ({text, className, id, imgSrc}) => {
  return (
    <a role="button" tabIndex="0" onClick={(e)=>{
      e.preventDefault();

      const target = document.getElementById('counter')

      if(target && id){
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top+window.screenY - offset;
        window.scrollTo({top,behavior: 'smooth'})
      }
    }} className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-button group">

        <div className="bg-circle" />
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <img src={imgSrc} alt="arrow" />
          </div>
        </div>
      
    </a>
  )
}

export default Button