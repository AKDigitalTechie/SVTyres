import { useState } from 'react';

export default function SkeletonImage({
  src,
  alt,
  className = '',
  imgClassName = '',
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-dark-100 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-dark-100" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-100 via-dark-50 to-dark-100 animate-shimmer" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
      />
    </div>
  );
}
