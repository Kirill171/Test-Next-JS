'use client';

import Button from '@/components/Button';
import designExample1Image from '@/assets/images/design-example-1.png';
import designExample2Image from '@/assets/images/design-example-2.png';
import Image from 'next/image';
import Pointer from '@/components/Pointer';
import {
  motion,
  useAnimate,
} from 'framer-motion';
import { useEffect } from 'react';
import cursorYouImage from '@/assets/images/cursor-you.svg';

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] =
    useAnimate();
  const [leftPointernScope, leftPointerAnimate] =
    useAnimate();
  const [rightDesignScope, rightDesignAnimate] =
    useAnimate();
  const [
    rightPointernScope,
    rightPointerAnimate,
  ] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [
        leftDesignScope.current,
        { opacity: 1 },
        { duration: 0.5 },
      ],
      [
        leftDesignScope.current,
        { x: 0, y: 0 },
        { duration: 0.5 },
      ],
    ]);

    leftPointerAnimate([
      [
        leftPointernScope.current,
        { opacity: 1 },
        { duration: 0.5 },
      ],
      [
        leftPointernScope.current,
        { x: -100, y: 0 },
        { duration: 0.5 },
      ],
      [
        leftPointernScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: 'easeInOut' },
      ],
    ]);

    rightDesignAnimate([
      [
        rightDesignScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [
        rightDesignScope.current,
        { x: 0, y: 0 },
        { duration: 0.5 },
      ],
    ]);

    rightPointerAnimate([
      [
        rightPointernScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [
        rightPointernScope.current,
        { x: 175, y: 0 },
        { duration: 0.5 },
      ],
      [
        rightPointernScope.current,
        { x: 0, y: [0, 20, 0] },
        {
          duration: 0.5,
          ease: 'easeInOut',
        },
      ],
    ]);
  }, []);
  return (
    <section
      className="py-24 overflow-x-clip"
      style={{
        cursor: `url(${cursorYouImage.src}), auto`,
      }}
    >
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          drag
          initial={{
            opacity: 0,
            x: -100,
            y: 100,
          }}
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            src={designExample1Image}
            alt="Design example 1 image"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={leftPointernScope}
          initial={{
            opacity: 0,
            x: -200,
            y: 100,
          }}
          className="absolute top-96 left-56 hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          drag
          initial={{ opacity: 0, x: 100, y: 100 }}
          className="absolute -right-64 -top-16 hidden lg:block"
        >
          <Image
            src={designExample2Image}
            alt="Design example 2 image"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={rightPointernScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute right-80 top-4 hidden lg:block"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨$7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 mx-auto max-w-2xl">
          Design tools shouldn&apos;t slow you
          down. Layers combines powerful with an
          intuitive interface that keeps you in
          your creative flow.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent w-full px-4 md:flex-1"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
