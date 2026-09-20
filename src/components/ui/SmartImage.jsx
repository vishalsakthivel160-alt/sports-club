import { useEffect, useMemo, useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];
const HAS_EXTENSION = /\.(jpe?g|png|webp|avif|gif|svg)$/i;

/**
 * Image with graceful fallbacks.
 *  - Pass a path WITHOUT extension (e.g. "/images/gym/gym-1") and it will try
 *    .jpg, .jpeg, .png and .webp in turn, so you can drop in any of those files.
 *  - If nothing loads, a clean court-line placeholder is shown instead of a broken image.
 *
 * fit="cover"   -> fills its wrapper (give the wrapper a size or an `aspect`).
 * fit="natural" -> keeps the photo's own aspect ratio (used by the masonry gallery).
 * fit="contain" -> shows the whole photo inside the viewport (used by the lightbox).
 */
export default function SmartImage({
  src = '',
  alt = '',
  className = '',
  imgClassName = '',
  fit = 'cover',
  aspect,
  icon: Icon = ImageIcon,
  priority = false,
  onResolve,
}) {
  const candidates = useMemo(
    () => (!src ? [] : HAS_EXTENSION.test(src) ? [src] : EXTENSIONS.map((ext) => `${src}.${ext}`)),
    [src]
  );
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setIndex(0);
    setFailed(false);
  }, [src]);

  const natural = fit === 'natural';
  const contain = fit === 'contain';
  const flow = natural || contain; // image sits in normal flow instead of filling a fixed box
  const showPlaceholder = failed || candidates.length === 0;
  // The wrapper must be positioned for the absolutely-placed <img>, unless the caller already positions it.
  const positioned = /\b(absolute|fixed|sticky)\b/.test(className);

  const handleError = () => {
    if (index + 1 < candidates.length) setIndex(index + 1);
    else setFailed(true);
  };

  return (
    <div
      className={`${positioned ? '' : 'relative'} overflow-hidden bg-night-700 ${className}`}
      style={!natural && aspect ? { aspectRatio: aspect } : undefined}
    >
      {showPlaceholder ? (
        <div
          role="img"
          aria-label={alt}
          className={`court-lines flex flex-col items-center justify-center gap-2 text-fog-700 ${
            flow ? 'relative w-full' : 'absolute inset-0'
          }`}
          style={flow ? { aspectRatio: aspect || '4 / 3', ...(contain ? { width: 'min(88vw, 640px)' } : {}) } : undefined}
        >
          <Icon className="h-8 w-8 opacity-60" aria-hidden="true" />
          {import.meta.env.DEV && src && (
            <span className="px-3 text-center text-[11px] leading-snug">
              Add photo at
              <br />
              public{src}.jpg
            </span>
          )}
        </div>
      ) : (
        <img
          src={candidates[index]}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={handleError}
          onLoad={() => onResolve?.(candidates[index])}
          className={`${
            natural
              ? 'block h-auto w-full'
              : contain
                ? 'mx-auto block h-auto max-h-[78svh] w-auto max-w-full object-contain'
                : 'absolute inset-0 h-full w-full object-cover'
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
