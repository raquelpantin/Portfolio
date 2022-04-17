import React from "react";
import shopify from "../../assets/videos/shopify.mp4";

const Shopify = () => {
  return (
    <div>
      <video className="crypto" width="520" height="440" autoPlay loop muted>
        <source src={shopify} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Shopify;
