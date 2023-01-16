import { styled } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImgSlider = ({ images }) => {
  return (
    <div>
      <CarouselStyle infiniteLoop showStatus={false} showIndicators={false}>
        {images?.map((img) => (
          <div key={img.id}>
            <img src={img.url} alt={img.id} />
          </div>
        ))}
      </CarouselStyle>
    </div>
  );
};

export default ImgSlider;

const CarouselStyle = styled(Carousel)`
  .carousel {
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
  .carousel .slide img {
    width: 310px;
    height: 364px;
  }
  .thumbs .selected {
    border: 1px solid #cb11ab;
  }
  .thumb:hover {
    border: 1px solid #cb11ab;
  }
`;
