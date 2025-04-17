import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X as CloseIcon, Mail, Lock, Building2, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
}

export default function LoginPopup({ isOpen, onClose, onLogin }: LoginPopupProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState<'user' | 'recruiter'>('user');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
    // Navigate based on user type
    if (userType === 'recruiter') {
      navigate('/dashboard/employer');
    } else {
      navigate('/skills');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <CloseIcon className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {isSignUp ? 'Create Account' : 'Welcome to CareerNest'}
            </h2>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setUserType('user')}
                className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border transition-all ${
                  userType === 'user'
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                <User className="h-5 w-5" />
                <span>Job Seeker</span>
              </button>
              <button
                onClick={() => setUserType('recruiter')}
                className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border transition-all ${
                  userType === 'recruiter'
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                <Building2 className="h-5 w-5" />
                <span>Recruiter</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary-600 hover:text-primary-700 text-sm"
              >
                {isSignUp
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}