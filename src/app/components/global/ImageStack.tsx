'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const images = [
  { src: "3dcenter_membership.png", rotate: 0 },
  { src: "haparanda3.png", rotate: 5 },
  { src: "3dcenter_contact.png", rotate: 10 },
  { src: "haparanda2.png", rotate: 15 },
  { src: "orthoteam_hero.png", rotate: 20 },
  { src: "3dcenter_partners.png", rotate: 25 },
  { src: "haparanda1.png", rotate: 30 },
];

export default function ImageStack() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.2, duration: 0 },
      }));
    }
  }, [controls, inView]);

  return (
    <section className="relative flex my-8 lg:my-60 justify-center " ref={ref}>
      {images.map((image, index) => (
        <motion.img
          key={index}
          custom={index}
          initial={{ opacity: 0, rotate: image.rotate }}
          animate={controls}
          className={`${index == 0 ? "relative" : "absolute"} top-0 w-full md-portrait:w-3/4 landscape:w-1/2 shadow-xl`}
          src={image.src}
          alt=""
        />
      ))}
    </section>
  );
}
