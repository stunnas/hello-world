"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Shaders, GLSL } from "gl-react";

const shaders = Shaders.create({
  none: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D video;
    void main() {
      gl_FragColor = texture2D(video, uv);
    }
    `,
  },
  inverted: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D video;
    void main() {
      vec4 color = texture2D(video, uv);
      gl_FragColor = vec4(1.0 - color.rgb, color.a);
    }
    `,
  },
  greyscale: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D video;
    void main() {
      vec4 color = texture2D(video, uv);
      float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      gl_FragColor = vec4(vec3(grey), 1.0);
    }
    `,
  },
});

interface AnimatedVideoProps {
  src: string;
  filter: string;
}
const AnimatedVideo = ({ src }: AnimatedVideoProps) => {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

  return (
    <section className="flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      <div className="absolute flex flex-col justify-center items-center space-y-4 text-blue-500 font-bold z-10">
        <div className="loader" />
        <p>Loading...</p>
      </div>
      {isVideo ? (
        <video
          className="max-w-full max-h-full w-auto h-auto min-w-full min-h-full object-cover z-20"
          src={src}
          autoPlay
          loop
          muted
        />
      ) : (
        <Image
          className="max-w-full max-h-full w-auto h-auto min-w-full min-h-full object-cover z-20"
          width={1920}
          height={1080}
          src={src}
          alt="Animated content"
        />
      )}
    </section>
  );
};

export default AnimatedVideo;
