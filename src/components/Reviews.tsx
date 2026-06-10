import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh Kumar',
    text: 'Excellent service! Got my car tyres replaced here. The staff was very professional and the pricing was very reasonable. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    text: 'Got wheel alignment done for my SUV. They used computerized equipment and the difference in handling is amazing. Will definitely come back.',
    rating: 5,
  },
  {
    name: 'Mohammed Ali',
    text: 'Best tyre shop in Rajajinagar. They have all major brands and the technicians really know what they are doing. Fast and reliable service.',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    text: 'Very happy with the nitrogen filling service. The staff explained the benefits clearly and the pricing was fair. Great experience overall.',
    rating: 4,
  },
  {
    name: 'Vijay Prasad',
    text: 'Got a puncture repaired here in no time. They did a proper patch job, not just a quick fix. Trustworthy shop with genuine products.',
    rating: 5,
  },
  {
    name: 'Anitha Gowda',
    text: 'Bridgestone tyres for my car at the best price in the area. The fitting was done perfectly and they even did a complimentary wheel balancing.',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-dark-200'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="reviews" className="section-padding bg-dark-50">
      <div className="container-max" ref={ref}>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4"
          >
            Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-4"
          >
            Trusted by hundreds of satisfied customers across Bangalore.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-100" />
              <Stars count={review.rating} />
              <p className="text-dark-600 leading-relaxed mt-4 mb-5 text-sm">{review.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-dark-100">
                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-dark-900 text-sm">{review.name}</div>
                  <div className="text-xs text-dark-400">Google Review</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps?q=SV+Tyres+Rajajinagar+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
