import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, UserIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">SkillMatch</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard/user" className="text-gray-600 hover:text-gray-900">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}