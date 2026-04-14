import logo from '../../assets/logo.svg';

const AnimatedBackground = ({ coverImage }) => (
  <div
    className="fixed inset-0 -z-10 transition-all duration-1000 w-[100dvw] h-[100dvh]"
    style={{
      backgroundImage: coverImage
        ? `url(${coverImage})`
        : `url(${logo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(15px) brightness(0.6) saturate(1.5) contrast(1.1)',
      transform: 'scale(1.05)',
      willChange: 'background-image',
    }}
  />
);

export default AnimatedBackground;
