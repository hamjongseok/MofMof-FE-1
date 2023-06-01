import {SubHeader} from '@/components/Layout/SubHeader/SubHeader';
import axios from 'axios';

const FattailMorphIntro = () => {
  const Axios = async () => {
    try {
      const res = await axios.get('http://52.79.44.236/test', {
        headers: {
          AuthToken: '123',
        },
      });
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  Axios();
  return (
    <>
      <SubHeader></SubHeader>
      <div>모프 소개</div>
    </>
  );
};

export default FattailMorphIntro;
