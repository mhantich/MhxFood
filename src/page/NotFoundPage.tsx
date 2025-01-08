import { motion } from "framer-motion";
import { Home, Search, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const NotFoundPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const numberVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Floating animation for the icon
  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-lg"
      >
        <Card className="border-none shadow-xl bg-white/80 backdrop-blur">
          <CardContent className="pt-6">
            <motion.div
              className="text-center space-y-6"
              variants={itemVariants}
            >
              {/* Animated Icon */}
              <motion.div
                animate={floatingAnimation}
                className="flex justify-center"
              >
                <div className="rounded-full bg-red-50 p-4">
                  <AlertCircle className="w-16 h-16 text-red-500" />
                </div>
              </motion.div>

              {/* 404 Number */}
              <motion.h1
                variants={numberVariants}
                initial="initial"
                animate="animate"
                className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600"
              >
                404
              </motion.h1>

              {/* Text Content */}
              <motion.div variants={itemVariants} className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  Page Not Found
                </h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  Oops! The page you're looking for seems to have wandered off.
                  Don't worry, even the best explorers get lost sometimes.
                </p>
              </motion.div>

              {/* Search Bar */}
              <motion.div
                variants={itemVariants}
                className="relative max-w-md mx-auto"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for pages..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </motion.div>
            </motion.div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-3 pb-6">
            <motion.div variants={itemVariants} className="w-full space-y-3">
              <Button
                variant="default"
                className="w-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white"
                onClick={() => (window.location.href = "/")}
              >
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>

              <p className="text-center text-sm text-gray-500">
                Lost?{" "}
                <Button
                  variant="link"
                  className="text-red-500 hover:text-red-600 p-0"
                >
                  Contact Support
                </Button>
              </p>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
