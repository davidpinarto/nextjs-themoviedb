'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import styles from './styled/hero.module.css';

export default function HeroSlider({ slides }) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={slide.title}>
          <Image id={styles.images} src={slide.imageSrc} alt={`Slide ${index}`} fill priority />
          <span id={styles['black-overlay']} />
          <div id={styles['overlay-content']}>
            <h2 className={styles.h1}>{slide.title}</h2>
            <p>{slide.overview}</p>
            <button className={styles.button} type="button">Watch Now</button>
          </div>
        </div>
      ))}
    </Slider>
  );
}
