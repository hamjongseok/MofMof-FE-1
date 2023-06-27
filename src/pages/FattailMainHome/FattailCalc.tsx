import {SubHeader} from '@/components/Layout/SubHeader/SubHeader';
import {InputCalc} from '@/components/Input';
import * as M from '@/styles/FattailCalc/FattailCalcStyle';

const FattailCalc = () => {
  return (
    <>
      <SubHeader></SubHeader>
      <M.FattailCalcWrapper>
        <M.FattailMorphSelectBox>
          <InputCalc></InputCalc>
          <InputCalc></InputCalc>
        </M.FattailMorphSelectBox>
      </M.FattailCalcWrapper>
    </>
  );
};

export default FattailCalc;
