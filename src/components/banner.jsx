import imgbanner from "../Assets/images/imgbanner.png"


function Banner  ({ titleBanner })  {
    return (
      <div className="banner">
        <h1 className="title">{titleBanner}</h1>
        <img src= {imgbanner} alt="banner" />
      </div>
    );
  };
 
 
  export default Banner;