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

        <motion.div style={{ y }} className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <SkeletonImage
              src="/GalleryImage.png"
              alt="Gallery image"
              className="w-full h-80 md:h-[420px] lg:h-[520px]"
              imgClassName="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-dark-950/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
