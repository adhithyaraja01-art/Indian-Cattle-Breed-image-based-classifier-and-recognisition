import React, { useState } from 'react';
import { useAuth } from '../firebase/authContext';
import { GraduationCap, LogIn, LogOut, User, ShieldCheck, School, Check, Edit2 } from 'lucide-react';

export const CollegeHeader: React.FC = () => {
  const { currentUser, userProfile, loginWithGoogle, logout, updateCollegeName } = useAuth();
  const [isEditingCollege, setIsEditingCollege] = useState<boolean>(false);
  const [collegeInput, setCollegeInput] = useState<string>(userProfile?.collegeName || '');

  const handleSaveCollege = async () => {
    if (collegeInput.trim()) {
      await updateCollegeName(collegeInput.trim());
      setIsEditingCollege(false);
    }
  };

  return (
    <div className="bg-amber-950 text-amber-100 border-b border-amber-900/60 px-4 sm:px-6 py-2 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Academic Project Tag */}
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-amber-800 text-amber-200 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1">
            <GraduationCap className="w-3.5 h-3.5" />
            College Mini Project 2026
          </span>
          <span className="text-amber-200/90 font-medium hidden md:inline">
            Dept. of Animal Biotechnology & Computer Science • ICAR-NBAGR Aligned Bovine & Bubaline Classifier
          </span>
        </div>

        {/* Academic Affiliation / Status */}
        <div className="flex items-center gap-3">
          {currentUser ? (
            <div className="flex items-center gap-1.5 text-amber-200/90 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>Logged In: <strong className="text-amber-100">{currentUser.displayName || 'Student'}</strong></span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-amber-300/80 font-mono text-[10px] sm:text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Autonomous Academic Research Prototype</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
