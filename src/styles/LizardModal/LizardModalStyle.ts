import styled from 'styled-components';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation]);

const NavigationStyles = `
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    font-size: 20px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ccc;
    }
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  justify-content: center;
  width: 100%;
  height: 100px;
  .swiper-container {
    width: 100%;
    height: 100%;
    ${NavigationStyles}
  }

  .swiper-slide {
    width: auto;
    height: 100%;
    img {
      margin-top: 30px;
      width: auto;
      height: 100%;
      object-fit: contain;
    }
    :hover {
      cursor: pointer;
    }
  }
`;

export const StyledModal = styled(Modal)`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 80vh;
  background: white;
  overflow: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid gray;
`;
export const MainImage = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
`;
export const Description = styled.p`
  font-size: 1rem;
  color: #666; // Adjust as per your need
  line-height: 1.5;
  margin: 20px auto; // Margin top-bottom 20px and left-right auto
  padding: 10px;
  border: 1px solid #ccc; // Adjust as per your need
  border-radius: 5px;
  width: 60%; // It will take 60% of the modal width as you asked for 20% padding on each side
  text-align: justify;
`;
export const Combo = styled.h1`
  background-color: #ff5500;
  border-radius: 50%;
  color: white;
  padding: 5px 10px;
  font-size: 0.8rem; // Adjust as per your need
  self-align: flex-start;
  white-space: nowrap;
  display: inline-block !important;
`;
export const Name = styled.h2`
  margin: 10px 0;
  font-size: 1.5rem; // Adjust as per your need
  color: #333; // Adjust as per your need
`;

export const Image = styled.img`
  width: auto;
  max-width: 100px;
  max-height: 100px;
  height: auto;
  object-fit: contain;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
`;

export const CloseCon = styled.div`
  /* margin-bottom: 130px; */
`;
