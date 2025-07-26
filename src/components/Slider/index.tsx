import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './slider.module.scss';

interface SlideItem {
  id: string;
  content: React.ReactNode;
}

interface SliderProps {
  items: SlideItem[];
}

export const Slider: React.FC<SliderProps> = ({ items }) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  return (
    <div className={styles.sliderWrapper} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {items.map((item) => (
          <div key={item.id} className={styles.emblaSlide}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};
