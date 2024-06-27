


function Banner  ({ titleBanner, imgBanner })  {
    return (
      <div className="banner">
        <h1 className="title">{titleBanner}</h1>
        <img src= {imgBanner} alt="banner" />
      </div>
    );
  };
 
 
  export default Banner;
