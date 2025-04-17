import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import RoleCard from '../components/RoleCard';
import { Role } from '../types';

const roles: Role[] = [
  {
    id: '1',
    title: 'Accountant',
    icon: 'frontend',
    description: 'Manage financial records and ensure compliance',
  },
  {
    id: '2',
    title: 'Financial Analyst',
    icon: 'backend',
    description: 'Analyze financial data and provide strategic insights',
  },
  {
    id: '3',
    title: 'Tax Consultant',
    icon: 'data',
    description: 'Provide expert tax planning and compliance advice',
  },
  {
    id: '4',
    title: 'Investment Advisor',
    icon: 'design',
    description: 'Guide clients in making informed investment decisions',
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleRoleSelect = (role: Role) => {
    navigate('/skills');
  };

  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div id="get-started" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Choose Your Path</h2>
          <p className="mt-4 text-lg text-gray-500">
            Select your preferred role to start your skill-based journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} onClick={handleRoleSelect} />
          ))}
        </div>
      </div>
    </div>
  );
}