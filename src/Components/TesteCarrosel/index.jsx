import React from "react";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import Banner01 from '../../Img/banner-01.png'

function Index() {
  return (
    <>
      <CCarousel controls>
        <CCarouselItem>
          <CImage className="d-block w-100" src={Banner01} alt="slide 1" title="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src="https://th.bing.com/th/id/R.2375a128abccbc5ddf3da521f4572a3c?rik=AgtxhmSm3Rw8LA&riu=http%3a%2f%2ftropicalair-gabon.com%2fwp-content%2fuploads%2f2019%2f06%2fcouleur-ciel-750x400.jpg&ehk=k2mcZYztysrEatDR%2flwG3PQLt0sMx5rlHE6Mk%2fD6vqg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src="https://cdn.wallpapersafari.com/33/39/CBotdO.jpg" alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
    </>
  );
}

export default Index;