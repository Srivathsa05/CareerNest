import React from 'react';
import { Skill, Job } from '../types';
import { TrendingUpIcon, BriefcaseIcon, BookOpenIcon } from 'lucide-react';

const mockSkills: Skill[] = [
  { 
    id: 'financial-accounting',
    name: 'Financial Accounting',
    category: 'accounting',
    description: 'Master financial statements and accounting principles'
  },
  { 
    id: 'tax-planning',
    name: 'Tax Planning',
    category: 'tax',
    description: 'Expert knowledge in tax laws and regulations'
  }
];

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Accountant',
    company: 'FinanceCore Ltd',
    description: 'Looking for an experienced accountant with strong financial reporting skills...',
    requiredSkills: [mockSkills[0]],
    minimumScores: { 'financial-accounting': 80 },
    location: 'Remote',
    salary: { min: 80000, max: 120000, currency: 'USD' }
  },
  {
    id: '2',
    title: 'Tax Consultant',
    company: 'TaxPro Solutions',
    description: 'Seeking a qualified tax consultant with comprehensive knowledge of tax regulations...',
    requiredSkills: [mockSkills[1]],
    minimumScores: { 'tax-planning': 75 },
    location: 'Hybrid',
    salary: { min: 90000, max: 130000, currency: 'USD' }
  }
];

export default function UserDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <TrendingUpIcon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Average Score</p>
                  <p className="text-xl font-semibold text-gray-900">85%</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BookOpenIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Skills Verified</p>
                  <p className="text-xl font-semibold text-gray-900">2</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BriefcaseIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Job Matches</p>
                  <p className="text-xl font-semibold text-gray-900">2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Skills</h2>
            <div className="space-y-4">
              {mockSkills.map(skill => (
                <div key={skill.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{skill.name}</h3>
                    <p className="text-sm text-gray-500">{skill.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary-600">85%</p>
                    <p className="text-sm text-gray-500">Proficiency</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Matched Jobs</h2>
            <div className="space-y-4">
              {mockJobs.map(job => (
                <div key={job.id} className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">{job.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{job.company}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{job.location}</span>
                    <span className="text-primary-600 font-medium">
                      ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}