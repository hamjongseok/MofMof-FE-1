import Link from 'next/link';
import styled from 'styled-components';
import BaseLayout from '@/components/Layout';
import Slider from '@/components/Slider';
import MainHome from '@/pages/MainHome';

export default function Home() {
  return (
    <>
      <Slider />
      <MainHome />
    </>
  );
}
