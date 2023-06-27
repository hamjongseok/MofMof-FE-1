import React, {useState} from 'react';
import * as M from '@/styles/LizardModal/LizardModalStyle';
import {Swiper, SwiperSlide} from 'swiper/react';

interface LizardData {
  image: string[];
  name: string;
  combo: string;
}

interface LizardModalProps {
  lizard: LizardData | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

export const LizardModal: React.FC<LizardModalProps> = ({
  lizard,
  isOpen,
  onRequestClose,
}) => {
  const [mainImage, setMainImage] = useState(lizard?.image[0] || '');

  if (!lizard) {
    return null;
  }

  return (
    <M.StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <M.CloseCon>
        <M.CloseButton onClick={onRequestClose}>X</M.CloseButton>
      </M.CloseCon>
      <M.Combo>{lizard.combo}</M.Combo>
      <M.Name>{lizard.name}</M.Name>
      <M.MainImage src={mainImage} alt={lizard.name} />
      <M.SliderContainer>
        <Swiper
          spaceBetween={120}
          slidesPerView={5}
          autoplay={false}
          direction="horizontal"
        >
          {lizard.image.map((img, index) => (
            <SwiperSlide key={index}>
              <M.Image
                src={img}
                alt={lizard.name}
                onClick={() => setMainImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </M.SliderContainer>
      <M.Description>
        인기 많은 오레오 색 모프와 무늬 모프중 고급모프에 속하는 두 유전자가
        만나게되어 만들어진 오레오 줄루 입니다. <br />
        하얀색 바탕의 갈색빛의 줄루 무늬가 이쁘게 나와있는 모프로 인기가
        많습니다.
        <br /> 스트라이프 타입, 논스트라이프 타입 둘다 다른 매력을 가지고있으며
        헷을 가지고있다는 가정하에 고스트 오레오 주루, 스노우 주루 그룹의
        암컷으로 가장 좋다고 생각합니다 ! 😊
      </M.Description>
    </M.StyledModal>
  );
};
