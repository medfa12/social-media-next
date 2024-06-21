"use client";
import Lottie from 'lottie-react';
import animationData from '../../public/aboutAnimation.json';

export const LottieAnimation = () => (
  <Lottie animationData={animationData} style={{ width: 400, height: 300 }} />
);