'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { MdStar } from 'react-icons/md';
import { TopRatedNextArrow, TopRatedPrevArrow } from './CustomSliderArrow';

import styles from './styled/now-playing-movies.module.css';

export default function TopRatedMoviesSlider({ slides }) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 5,
    nextArrow: <TopRatedNextArrow />,
    prevArrow: <TopRatedPrevArrow />,
  };
  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.title} className={styles.poster}>
          <Image className={styles.images} src={slide.poster_path} alt={`${slide.title} poster`} fill priority sizes="100%" />
          <div className={styles.rating}>
            <MdStar className={styles.star} />
            <p>{slide.vote_average.toFixed(1)}</p>
          </div>
          <div className={styles['release-date']}>{new Date(slide.release_date).getFullYear()}</div>
          <div className={styles.overlay}>
            <div className={styles['overlay-content']}>
              <h2>{`${slide.title} (${new Date(slide.release_date).getFullYear()})`}</h2>
              <button className={styles.button} type="button">Detail</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
