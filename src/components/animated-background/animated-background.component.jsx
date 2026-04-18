import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';

const AnimatedBackground = ({ coverImage }) => {
  const { isExpanded } = useSelector((state) => state.player);

  return (
    <div
      className={`fixed inset-0 ${isExpanded ? 'z-20 bg-black' : '-z-10'} transition-all duration-1000 w-[100dvw] h-[100dvh]`}
      style={{
        backgroundImage: coverImage
          ? `url(${coverImage})`
          : `url(${logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(13px) brightness(0.6) saturate(1.5) contrast(1.1)',
        transform: isExpanded ? 'scale(1.2)' : 'scale(1.05)',
        willChange: 'background-image',
      }}
    />
  );
};

export default AnimatedBackground;
