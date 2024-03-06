import animationData from '../../assets/loading_animation.json';
import Lottie from 'lottie-react';

const LoadingAnimation = () => {
  return <Lottie animationData={animationData} />;
};

export default LoadingAnimation;
