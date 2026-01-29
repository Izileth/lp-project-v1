import React from 'react';
import { motion } from 'framer-motion';

interface InfoBannerProps {
  src: string;
  alt: string;
  delay?: number;
}

const InfoBanner: React.FC<InfoBannerProps> = ({ src, alt, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <img
        src={src}
        alt={alt}
        className="w-52  object-cover rounded-lg shadow-lg border border-white/10"
      />
    </motion.div>
  );
};

export default InfoBanner;
