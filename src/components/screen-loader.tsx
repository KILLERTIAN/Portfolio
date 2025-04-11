'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

export function ScreenLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation
      gsap.fromTo(
        loaderRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );

      // Animate the loader content
      gsap.fromTo(
        '.loader-content',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5 }
      );

      // Animate the progress bar
      gsap.to('.progress-bar', {
        width: '100%',
        duration: 2,
        ease: 'power2.inOut',
        onComplete: () => {
          // Fade out animation
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.5,
            onComplete: () => {
              if (loaderRef.current) {
                loaderRef.current.style.display = 'none';
              }
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="loader-content text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Om Sharma
        </h1>
        <p className="text-muted-foreground mb-6">Loading Portfolio...</p>
        <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden">
          <div className="progress-bar h-full bg-primary rounded-full w-0"></div>
        </div>
      </div>
    </div>
  );
} 