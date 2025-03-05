
const BackgroundSVG = () => {
  return (
    <div className="absolute invisible xl:visible background-container h-screen w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 200 1200 600">
            <rect width="1200" height="800" fill="#648899"/>
            
            <path d="M0,0 C160,160 130,320 0,450 L0,0 Z" fill="#7d2d31"/>
            <path d="M10,0 C155,155 130,310 20,440 L0,450 C130,310 155,155 0,0 Z" fill="white"/>

            
            <path d="M1200,0 C900,250 950,600 1200,810 L1200,0 Z" fill="#eaa41f"/>
            
            <path d="M1185,0 C880,290 960,600 1190,800 L1200,800 C950,600 900,250 1200,0 Z" fill="white"/>
            
            {/* <path d="M0,700 C300,550 900,550 1100,700 L1210,800 L0,800 Z" fill="#FFFFFF"/> */}
            <path d="M0,800  L800,550 L1100,700 L1210,800 L10,800 Z" fill="#FFFFFF"/>

        </svg>
    </div>
  );
};

export default BackgroundSVG;
