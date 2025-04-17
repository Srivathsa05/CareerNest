import React from 'react';
import { Role } from '../types';
import { Code2Icon, DatabaseIcon, MonitorIcon, PencilRulerIcon } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  frontend: <MonitorIcon className="h-6 w-6" />,
  backend: <Code2Icon className="h-6 w-6" />,
  data: <DatabaseIcon className="h-6 w-6" />,
  design: <PencilRulerIcon className="h-6 w-6" />,
};

interface RoleCardProps {
  role: Role;
  onClick: (role: Role) => void;
}

export default function RoleCard({ role, onClick }: RoleCardProps) {
  return (
    <div
      onClick={() => onClick(role)}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-indigo-500 transition-all cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-indigo-50 rounded-lg">
          {iconMap[role.icon]}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{role.title}</h3>
          <p className="text-sm text-gray-500">{role.description}</p>
        </div>
      </div>
    </div>
  );
}