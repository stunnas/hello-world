// AnimatedVideo.js
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Surface, Node, Shaders, GLSL } from "gl-react"; // Import necessary gl-react components

// Define your shaders
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
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeInVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      className="flex flex-col items-center justify-center w-full h-screen overflow-hidden"
    >
      {isVideo ? (
        <video
          className="max-w-full max-h-full w-auto h-auto min-w-full min-h-full object-cover"
          src={src}
          autoPlay
          loop
          muted
        />
      ) : (
        <img
          className="max-w-full max-h-full w-auto h-auto min-w-full min-h-full object-cover"
          src={src}
          alt="Animated content"
        />
      )}
    </motion.section>
  );
};

export default AnimatedVideo;
