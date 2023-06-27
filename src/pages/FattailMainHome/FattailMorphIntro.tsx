import {SubHeader} from '@/components/Layout/SubHeader/SubHeader';
import {Input} from '@/components/Input';
import * as M from '@/styles/FattailIntro/FattailIntroStyle';
import React, {useState} from 'react';
import Morphdata from './FattailMorph.json';
import {LizardModal} from './LizardModal';

interface LizardData {
  image: string[];
  name: string;
  combo: string;
}

const FattailMorphIntro: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedLizard, setSelectedLizard] = useState<LizardData | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // 모달을 열고 선택한 도마뱀을 설정하는 함수를 추가합니다.
  const openModal = (lizard: LizardData) => {
    setSelectedLizard(lizard);
    setModalIsOpen(true);
  };

  // 모달을 닫고 선택한 도마뱀을 null로 설정하는 함수를 추가합니다.
  const closeModal = () => {
    setSelectedLizard(null);
    setModalIsOpen(false);
  };

  const handleFilterClick = (combo: string) => {
    setFilter(combo);
  };

  const filteredData = filter
    ? Morphdata.filter((item: LizardData) => item.combo === filter)
    : Morphdata;

  return (
    <>
      <SubHeader />
      <Input />
      <M.FattailFilter>
        <M.FilterButton onClick={() => handleFilterClick('전체')}>
          전체
        </M.FilterButton>
        <M.FilterButton onClick={() => handleFilterClick('단일')}>
          단일
        </M.FilterButton>
        <M.FilterButton onClick={() => handleFilterClick('2 콤보')}>
          2 콤보
        </M.FilterButton>
        <M.FilterButton onClick={() => handleFilterClick('3 콤보')}>
          3 콤보
        </M.FilterButton>
      </M.FattailFilter>
      <M.IntroCardWrapper>
        {filteredData.map((item: LizardData, index: number) => (
          <M.FattailCard key={index} onClick={() => openModal(item)}>
            <img src={item.image[0]} alt="도마뱀" width={200} height={200} />
            <M.MorphCon>
              <M.MorphCombo>{item.combo}</M.MorphCombo>
              <M.MorphName>{item.name}</M.MorphName>
            </M.MorphCon>
          </M.FattailCard>
        ))}
      </M.IntroCardWrapper>
      {selectedLizard && (
        <LizardModal
          lizard={selectedLizard}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        />
      )}
    </>
  );
};

export default FattailMorphIntro;
