export interface Role {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
}

export interface Question {
  id: string;
  skillId: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Assessment {
  id: string;
  skillId: string;
  questions: Question[];
  timeLimit: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role?: Role;
  skills: Skill[];
  skillScores: Record<string, number>;
  type: 'candidate' | 'employer';
}

export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  requiredSkills: Skill[];
  minimumScores: Record<string, number>;
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
}