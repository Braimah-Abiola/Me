interface TransitionProps {
    duration: number;
    delay?: number;
    ease?: number[];
  }
  
  interface PerspectiveEnterProps {
    opacity: number;
    rotateX: number;
    translateY: number;
    translateX: number;
    transition: TransitionProps & { opacity: TransitionProps };
  }
  
  export const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
    },
    enter: (i: number): PerspectiveEnterProps => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.65,
        delay: 0.5 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.35 },
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
    },
  };
  
  interface SlideInEnterProps {
    opacity: number;
    y: number;
    transition: TransitionProps;
  }
  
  export const slideIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (i: number): SlideInEnterProps => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.75 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
    },
  };
  
  export const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };
  