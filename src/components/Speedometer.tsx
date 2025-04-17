import React from 'react';
import { motion } from 'framer-motion';

interface SpeedometerProps {
  score: number;
}

export default function Speedometer({ score }: SpeedometerProps) {
  // Convert score to angle (0-180 degrees)
  // When score is 0, angle should be -90 (pointing left)
  // When score is 100, angle should be 90 (pointing right)
  const angle = (score / 100) * 180 - 90;

  return (
    <div className="relative w-80 h-40 mx-auto">
      {/* Speedometer background */}
      <div className="absolute w-full h-full bg-gray-100 rounded-t-full border-4 border-gray-200"></div>
      
      {/* Colored segments */}
      <div className="absolute w-full h-full">
        <div className="absolute bottom-0 left-0 w-full h-full rounded-t-full overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-30"></div>
        </div>
      </div>

      {/* Tick marks */}
      <div className="absolute w-full h-full">
        {[...Array(11)].map((_, i) => {
          const tickAngle = (i / 10) * 180 - 90;
          return (
            <div
              key={i}
              className="absolute bottom-0 left-1/2 origin-bottom"
              style={{
                height: i % 5 === 0 ? '20px' : '10px',
                width: '2px',
                backgroundColor: i % 5 === 0 ? '#374151' : '#9CA3AF',
                transform: `rotate(${tickAngle}deg)`,
              }}
            />
          );
        })}
      </div>

      {/* Needle */}
      <motion.div
        initial={{ rotate: -90 }}
        animate={{ rotate: angle }}
        transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
        className="absolute bottom-0 left-1/2 w-2 h-32 bg-red-600 origin-bottom transform -translate-x-1/2 rounded-t-full"
        style={{ boxShadow: '0 0 10px rgba(220, 38, 38, 0.5)' }}
      >
        <div className="absolute -left-1 -top-1 w-4 h-4 bg-red-600 rounded-full" />
      </motion.div>

      {/* Center pivot */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full border-4 border-gray-200"></div>

      {/* Score display */}
      <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
          className="text-5xl font-bold text-gray-900"
        >
          {score}%
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-lg text-gray-600 font-medium"
        >
          Proficiency
        </motion.div>
      </div>
    </div>
  );
}