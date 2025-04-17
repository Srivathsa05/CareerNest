import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillAssessment from './pages/SkillAssessment';
import UserDashboard from './pages/UserDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import SkillSelection from './pages/SkillSelection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillSelection />} />
          <Route path="/assessment/:skillId" element={<SkillAssessment />} />
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/employer" element={<EmployerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;