import { motion } from "framer-motion";

export const LoadingAnimation = () => {
  // Variants for container animation

  return (
  <div className="flex items-center justify-center w-full h-full fixed top-0 left-0 bg-black z-50 ">
  <div className="relative">
    {/* Plate */}
    <motion.div
      className="w-32 h-32 bg-gray-100 rounded-full border-4 border-gray-200"
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Fork */}
      <motion.div
        className="absolute -left-8 top-1/2 -translate-y-1/2 w-12 h-1 bg-gray-400 rounded-full"
        animate={{
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute right-0 -top-3 w-1 h-3 bg-gray-400 rounded-full" />
        <div className="absolute right-0 -top-3 w-1 h-3 bg-gray-400 rounded-full translate-x-1" />
        <div className="absolute right-0 -top-3 w-1 h-3 bg-gray-400 rounded-full translate-x-2" />
      </motion.div>

      {/* Knife */}
      <motion.div
        className="absolute -right-8 top-1/2 -translate-y-1/2 w-12 h-1 bg-gray-400 rounded-full"
        animate={{
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute left-0 -top-2 w-6 h-2 bg-gray-400 rounded-full" />
      </motion.div>

      {/* Steam animations */}
      <motion.div
        className="absolute left-1/4 -top-4 w-1 h-4 bg-gray-300 rounded-full"
        animate={{
          y: [-8, -16],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      <motion.div
        className="absolute left-1/2 -top-4 w-1 h-4 bg-gray-300 rounded-full"
        animate={{
          y: [-8, -16],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      <motion.div
        className="absolute right-1/4 -top-4 w-1 h-4 bg-gray-300 rounded-full"
        animate={{
          y: [-8, -16],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </motion.div>

    {/* Loading text */}
    <motion.p
      className="text-center mt-6 text-white font-medium"
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      Preparing your dish...
    </motion.p>
  </div>
</div>

)
}