import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { Question } from '../types';
import { ClockIcon, ArrowRightIcon } from 'lucide-react';
import Speedometer from '../components/Speedometer';

const mockQuestions: Record<string, Question[]> = {
  react: [
    {
      id: '1',
      skillId: 'react',
      text: 'What is the purpose of React\'s useState hook?',
      options: [
        'To manage component lifecycle',
        'To handle state in functional components',
        'To create class components',
        'To handle routing'
      ],
      correctAnswer: 1
    },
    {
      id: '2',
      skillId: 'react',
      text: 'What is the virtual DOM in React?',
      options: [
        'A direct copy of the browser\'s DOM',
        'A lightweight copy of the DOM for performance optimization',
        'A database for storing component state',
        'A routing mechanism'
      ],
      correctAnswer: 1
    }
  ],
  'financial-accounting': [
    {
      id: '1',
      skillId: 'financial-accounting',
      text: 'What is the purpose of a balance sheet?',
      options: [
        'To show profit and loss',
        'To show assets, liabilities, and equity at a point in time',
        'To show cash flow',
        'To show revenue trends'
      ],
      correctAnswer: 1
    },
    {
      id: '2',
      skillId: 'financial-accounting',
      text: 'What is the accounting equation?',
      options: [
        'Revenue - Expenses = Profit',
        'Assets = Liabilities + Owner\'s Equity',
        'Cash + Receivables = Working Capital',
        'Income - Taxes = Net Profit'
      ],
      correctAnswer: 1
    }
  ]
};

export default function SkillAssessment() {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(300);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = (skillId && mockQuestions[skillId]) ? mockQuestions[skillId] : [];

  useEffect(() => {
    if (!skillId || !mockQuestions[skillId]) {
      navigate('/dashboard/user');
      return;
    }
  }, [skillId, navigate]);

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft, showResults]);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(c => c + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const score = answers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    
    const percentage = Math.round((score / questions.length) * 100);
    setScore(percentage);
    setShowResults(true);
    
    // Navigate to dashboard after 5 seconds
    setTimeout(() => {
      navigate('/dashboard/user');
    }, 5000);
  };

  if (!questions.length) return null;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full mx-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Assessment Complete!
            </h2>
            <p className="text-gray-600">Here's how well you performed:</p>
          </motion.div>

          <Speedometer score={score} />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center mt-8 text-gray-600"
          >
            Redirecting to your dashboard in a few seconds...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Question {currentQuestion + 1} of {questions.length}
          </h1>
          <div className="flex items-center text-gray-600">
            <ClockIcon className="h-5 w-5 mr-2" />
            <span>{minutes}:{seconds.toString().padStart(2, '0')}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="mb-8"
          >
            <p className="text-lg text-gray-800 mb-6">{question.text}</p>
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleAnswer(index)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all transform hover:scale-105 ${
                    answers[currentQuestion] === index
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  {option}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-end"
        >
          <button
            onClick={handleNext}
            disabled={answers[currentQuestion] === undefined}
            className={`flex items-center px-6 py-2 rounded-md text-white font-medium transform transition-all ${
              answers[currentQuestion] !== undefined
                ? 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}