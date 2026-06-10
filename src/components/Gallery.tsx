import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SkeletonImage from './SkeletonImage';
import { SHOP_IMAGE } from '../constants';

const images = [
  { src: SHOP_IMAGE, alt: 'SV Tyres and Services shop exterior – Basaveshwara Nagar Bangalore', span: 'row-span-2' },
  { src: 'https://images.pexels.com/photos/162556/tyre-rubber-wheel-automotive-162556.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Tyre display and stock', span: '' },
  { src: 'https://images.pexels.com/photos/5899389/pexels-photo-5899389.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Computerized wheel alignment equipment', span: '' },
  { src: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Expert technicians at work', span: '' },
  { src: 'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Premium tyre products', span: 'row-span-2' },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="gallery" className="section-padding bg-white" aria-labelledby="gallery-heading">
      <div className="container-max" ref={ref}>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4"
          >
            Gallery
          </motion.span>
          <motion.h2
            id="gallery-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Our Shop &amp; Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-4"
          >
            Take a look at our shop, equipment, and the quality we deliver.
          </motion.p>
        </div>

        <motion.div
          style={{ y }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[240px]"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-default ${img.span}`}
              role="img"
              aria-label={img.alt}
            >
              <SkeletonImage
                src={img.src}
                alt={img.alt}
                className="w-full h-full"
                imgClassName="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-sm font-semibold drop-shadow-lg">{img.alt.split('–')[0].trim()}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
