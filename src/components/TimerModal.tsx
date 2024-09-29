// components/TimerModal.tsx
import React, { useState } from 'react';

interface TimerModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const TimerModal: React.FC<TimerModalProps> = ({ isVisible, onClose }) => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => setTime((prev) => prev + 1), 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Timer</h2>
        <div className="text-center text-4xl mb-4">
          {new Date(time * 1000).toISOString().substr(11, 8)}
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={startTimer} className="bg-green-500 text-white px-4 py-2 rounded">
            Start
          </button>
          <button onClick={stopTimer} className="bg-yellow-500 text-white px-4 py-2 rounded">
            Stop
          </button>
          <button onClick={resetTimer} className="bg-red-500 text-white px-4 py-2 rounded">
            Reset
          </button>
        </div>
        <button onClick={onClose} className="mt-4 block mx-auto bg-gray-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default TimerModal;
