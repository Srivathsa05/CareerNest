import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import { CheckCircleIcon } from 'lucide-react';

const availableSkills: Skill[] = [
  {
    id: 'financial-accounting',
    name: 'Financial Accounting',
    category: 'accounting',
    description: 'Master financial statements and accounting principles',
    color: 'bg-primary-500'
  },
  {
    id: 'corporate-finance',
    name: 'Corporate Finance',
    category: 'finance',
    description: 'Understand business valuation and financial strategy',
    color: 'bg-secondary-500'
  },
  {
    id: 'tax-planning',
    name: 'Tax Planning',
    category: 'tax',
    description: 'Expert knowledge in tax laws and regulations',
    color: 'bg-accent-500'
  },
  {
    id: 'investment-analysis',
    name: 'Investment Analysis',
    category: 'finance',
    description: 'Analyze investment opportunities and portfolio management',
    color: 'bg-emerald-500'
  },
  {
    id: 'risk-management',
    name: 'Risk Management',
    category: 'finance',
    description: 'Identify and mitigate financial risks',
    color: 'bg-amber-500'
  },
  {
    id: 'auditing',
    name: 'Auditing',
    category: 'accounting',
    description: 'Conduct internal and external audits',
    color: 'bg-indigo-500'
  }
];

export default function SkillSelection() {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleContinue = () => {
    if (selectedSkills.length > 0) {
      navigate(`/assessment/${selectedSkills[0]}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-900">Select Your Skills</h1>
        <p className="mt-4 text-lg text-gray-500">
          Choose the skills you want to verify. You'll take an assessment for each selected skill.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {availableSkills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => toggleSkill(skill.id)}
            className={`p-6 rounded-lg cursor-pointer transition-all transform hover:scale-105 ${
              selectedSkills.includes(skill.id)
                ? `border-2 border-${skill.color.replace('bg-', '')} ${skill.color} bg-opacity-10`
                : 'border border-gray-200 bg-white hover:shadow-lg'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className={`text-lg font-medium ${
                  selectedSkills.includes(skill.id) 
                    ? `text-${skill.color.replace('bg-', '')}` 
                    : 'text-gray-900'
                }`}>
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{skill.description}</p>
              </div>
              {selectedSkills.includes(skill.id) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`${skill.color} rounded-full p-1`}
                >
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <button
          onClick={handleContinue}
          disabled={selectedSkills.length === 0}
          className={`px-8 py-3 rounded-md text-white font-medium transform transition-all ${
            selectedSkills.length > 0
              ? 'bg-primary-600 hover:bg-primary-700 hover:scale-105'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Continue to Assessment
        </button>
      </motion.div>
    </div>
  );
}