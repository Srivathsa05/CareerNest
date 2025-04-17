import React from 'react';
import { Job } from '../types';
import { UsersIcon, BriefcaseIcon, SearchIcon } from 'lucide-react';

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    description: 'Looking for an experienced frontend developer...',
    requiredSkills: [],
    minimumScores: { react: 80 },
    location: 'Remote',
    salary: { min: 100000, max: 150000, currency: 'USD' }
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'TechCorp',
    description: 'Seeking a skilled backend developer...',
    requiredSkills: [],
    minimumScores: { node: 75 },
    location: 'Hybrid',
    salary: { min: 90000, max: 130000, currency: 'USD' }
  }
];

export default function EmployerDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Employer Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <BriefcaseIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Active Jobs</p>
                  <p className="text-xl font-semibold text-gray-900">5</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <UsersIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Total Applicants</p>
                  <p className="text-xl font-semibold text-gray-900">42</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <SearchIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Positions Filled</p>
                  <p className="text-xl font-semibold text-gray-900">3</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Job Postings</h2>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Post New Job
              </button>
            </div>
            <div className="space-y-4">
              {mockJobs.map(job => (
                <div key={job.id} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                      <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">
                      Salary: ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
                    </span>
                    <button className="text-indigo-600 hover:text-indigo-800">
                      View Applicants
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Applications</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center p-4 border rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <UsersIcon className="h-6 w-6 text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-500">Applied for Frontend Developer</p>
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