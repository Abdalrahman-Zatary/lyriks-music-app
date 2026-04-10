/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useEffect } from 'react';

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.load();
    ref.current.oncanplay = () => {
      if (isPlaying) ref.current.play().catch(() => {});
    };
  }, [activeSong]);

  useEffect(() => {
    if (!ref.current) return;
    if (isPlaying) {
      ref.current.play().catch(() => {});
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.preview || ''}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
