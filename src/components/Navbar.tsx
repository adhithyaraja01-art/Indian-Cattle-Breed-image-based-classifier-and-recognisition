import React, { useState, useRef, useEffect } from 'react';
import {
  Home,
  Sparkles,
  Compass,
  History,
  Info,
  Menu,
  X,
  LogOut,
  LogIn,
  User as UserIcon,
  ChevronDown,
  ShieldCheck,
  GraduationCap,
  Dna,
  Settings
} from 'lucide-react';
import { useAuth } from '../firebase/authContext';
import { useSettings } from '../context/SettingsContext';

export type ActiveTab = 'home' | 'classify' | 'breeds' | 'history' | 'about' | 'compare' | 'guide' | 'settings';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  historyCount: number;
  onOpenHistory?: () => void;
  onOpenJournal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  historyCount,
  onOpenHistory,
  onOpenJournal
}) => {
  const { currentUser, userProfile, loginWithGoogle, logout, loading } = useAuth();
  const { t } = useSettings();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on tab change or window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = async () => {
    try {
      setIsLoggingIn(true);
      await loginWithGoogle();
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsProfileMenuOpen(false);
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navItems = [
    { id: 'home' as ActiveTab, label: t('nav.home'), icon: Home },
    { id: 'classify' as ActiveTab, label: t('nav.classify'), icon: Sparkles },
    { id: 'breeds' as ActiveTab, label: t('nav.breeds'), icon: Compass },
    { id: 'guide' as ActiveTab, label: t('nav.bioscience'), icon: Dna },
    { id: 'history' as ActiveTab, label: t('nav.history'), icon: History, badge: historyCount },
    { id: 'about' as ActiveTab, label: t('nav.about'), icon: Info }
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-amber-900/30 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group select-none flex-shrink-0"
            onClick={() => handleTabClick('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleTabClick('home');
              }
            }}
            aria-label="Indian Breed Classification Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 flex items-center justify-center shadow-md shadow-amber-900/40 text-stone-950 font-bold text-xl ring-2 ring-amber-400/30 group-hover:scale-105 transition-transform flex-shrink-0">
              <span className="text-xl sm:text-2xl" role="img" aria-label="Bovine">🐂</span>
            </div>
            <div>
              <h1 className="font-serif tracking-tight text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-orange-300 bg-clip-text text-transparent leading-tight">
                Indian Breed Classification
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 shadow-md font-semibold'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-amber-400/80'}`} />
                  <span>{item.label}</span>
                  {typeof item.badge === 'number' && item.badge > 0 && (
                    <span
                      className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                        isActive
                          ? 'bg-stone-900 text-amber-400'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Side Utility Cluster: Settings & Profile (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="h-5 w-px bg-stone-800 mx-1" aria-hidden="true" />

            {/* 1. Settings Button */}
            <button
              onClick={() => handleTabClick('settings')}
              className={`flex items-center gap-2 h-9 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer border select-none ${
                activeTab === 'settings'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 ring-1 ring-amber-500/30 font-semibold shadow-xs'
                  : 'bg-stone-800/60 hover:bg-stone-800 text-stone-200 hover:text-white border-stone-700/60 hover:border-stone-600'
              }`}
              title={t('nav.settings')}
              aria-label={t('nav.settings')}
              aria-current={activeTab === 'settings' ? 'page' : undefined}
            >
              <Settings className={`w-3.5 h-3.5 ${activeTab === 'settings' ? 'text-amber-300' : 'text-amber-400'}`} />
              <span>{t('nav.settings')}</span>
            </button>

            {/* 2. Profile Button & Popover */}
            {loading ? (
              <div className="w-8 h-8 rounded-full border-2 border-amber-500/40 border-t-amber-400 animate-spin" />
            ) : currentUser ? (
              <div className="relative" ref={profileMenuRef}>
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className={`flex items-center gap-2 h-9 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer border select-none ${
                    isProfileMenuOpen
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 ring-1 ring-amber-500/30 font-semibold shadow-xs'
                      : 'bg-stone-800/60 hover:bg-stone-800 text-stone-200 hover:text-white border-stone-700/60 hover:border-stone-600'
                  }`}
                  aria-label="User Profile"
                  aria-expanded={isProfileMenuOpen}
                >
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt={currentUser.displayName || 'Profile'}
                      className="w-5 h-5 rounded-full object-cover ring-1 ring-amber-400/50 shrink-0"
                    />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px] ring-1 ring-amber-400/40 shrink-0">
                      {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'U'}
                    </div>
                  )}
                  <span className="font-semibold text-stone-100 max-w-[100px] truncate text-xs">
                    {currentUser.displayName?.split(' ')[0] || 'Profile'}
                  </span>
                  <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Authenticated Profile Dropdown Menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl py-2 z-50 text-xs animate-fadeIn">
                    <div className="px-4 py-2.5 border-b border-stone-800">
                      <p className="font-bold text-stone-100 truncate">{currentUser.displayName || 'Researcher'}</p>
                      <p className="text-stone-400 text-[11px] truncate">{currentUser.email}</p>
                      <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                        <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold uppercase tracking-wider border border-amber-400/30">
                          {userProfile?.role === 'researcher' ? 'Researcher' : 'Student'}
                        </span>
                        {userProfile?.collegeName && (
                          <span className="text-[10px] text-stone-400 truncate">
                            🏛 {userProfile.collegeName}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="py-1">
                      {onOpenJournal && (
                        <button
                          onClick={() => {
                            setIsProfileMenuOpen(false);
                            onOpenJournal();
                          }}
                          className="w-full text-left px-4 py-2 text-stone-300 hover:text-white hover:bg-stone-800 flex items-center gap-2 cursor-pointer transition-colors"
                        >
                          <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Student Research Journal</span>
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          handleTabClick('settings');
                        }}
                        className="w-full text-left px-4 py-2 text-stone-300 hover:text-white hover:bg-stone-800 flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <Settings className="w-3.5 h-3.5 text-amber-400" />
                        <span>System Settings</span>
                      </button>

                      <button
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          handleTabClick('history');
                        }}
                        className="w-full text-left px-4 py-2 text-stone-300 hover:text-white hover:bg-stone-800 flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <History className="w-3.5 h-3.5 text-amber-400" />
                        <span>Scan History ({historyCount})</span>
                      </button>
                    </div>

                    <div className="border-t border-stone-800 mt-1 pt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-rose-400 hover:bg-rose-950/40 flex items-center gap-2 transition-colors font-medium cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Profile Button (Guest) */
              <div className="relative" ref={profileMenuRef}>
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className={`flex items-center gap-2 h-9 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer border select-none ${
                    isProfileMenuOpen
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 ring-1 ring-amber-500/30 font-semibold shadow-xs'
                      : 'bg-stone-800/60 hover:bg-stone-800 text-stone-200 hover:text-white border-stone-700/60 hover:border-stone-600'
                  }`}
                  aria-label="Profile and Account"
                  aria-expanded={isProfileMenuOpen}
                >
                  <UserIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Profile</span>
                  <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Guest Profile Popover */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-4 z-50 text-xs animate-fadeIn">
                    <div className="flex items-center gap-3 pb-3 border-b border-stone-800">
                      <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-sm ring-1 ring-amber-400/40">
                        <UserIcon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div>
                        <p className="font-bold text-stone-100">Guest Researcher</p>
                        <p className="text-[11px] text-stone-400">Offline Local Storage</p>
                      </div>
                    </div>

                    <p className="text-stone-300 text-[11px] mt-3 leading-relaxed">
                      Sign in with Google to sync scans and research notes with Cloud Firestore.
                    </p>

                    <button
                      onClick={handleLogin}
                      disabled={isLoggingIn}
                      className="w-full mt-3 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold hover:from-amber-400 hover:to-orange-400 shadow-md shadow-amber-900/30 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isLoggingIn ? (
                        <div className="w-3.5 h-3.5 border-2 border-stone-950 border-t-transparent animate-spin rounded-full" />
                      ) : (
                        <LogIn className="w-3.5 h-3.5" />
                      )}
                      <span>Sign in with Google</span>
                    </button>

                    <div className="mt-3 pt-3 border-t border-stone-800 space-y-1">
                      <button
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          handleTabClick('settings');
                        }}
                        className="w-full text-left py-1.5 px-2 text-stone-300 hover:text-white hover:bg-stone-800/80 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <Settings className="w-3.5 h-3.5 text-amber-400" />
                        <span>System Settings</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Right Action Bar: Settings Icon + Profile Icon + Hamburger Menu */}
          <div className="flex md:hidden items-center space-x-1.5">
            {/* Quick Settings Icon */}
            <button
              onClick={() => handleTabClick('settings')}
              className={`h-9 w-9 flex items-center justify-center rounded-xl border transition-all cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 ring-1 ring-amber-500/30'
                  : 'bg-stone-800/60 hover:bg-stone-800 text-stone-200 border-stone-700/60'
              }`}
              title="Settings"
              aria-label="Settings"
            >
              <Settings className="w-4 h-4 text-amber-400" />
            </button>

            {/* Quick Profile / Avatar Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`h-9 w-9 flex items-center justify-center rounded-xl border transition-all cursor-pointer ${
                isMobileMenuOpen
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 ring-1 ring-amber-500/30'
                  : 'bg-stone-800/60 hover:bg-stone-800 text-stone-200 border-stone-700/60'
              }`}
              aria-label="Profile and menu"
            >
              {currentUser ? (
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs ring-1 ring-amber-400/40 overflow-hidden">
                  {currentUser.photoURL ? (
                    <img src={currentUser.photoURL} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    (currentUser.displayName || 'U').charAt(0).toUpperCase()
                  )}
                </div>
              ) : (
                <UserIcon className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`h-9 w-9 flex items-center justify-center rounded-xl border transition-all cursor-pointer ${
                isMobileMenuOpen
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 ring-1 ring-amber-500/30'
                  : 'bg-stone-800/60 hover:bg-stone-800 text-stone-200 border-stone-700/60'
              }`}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Collapsible Navigation Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-stone-950/98 border-b border-amber-900/40 shadow-2xl px-4 pt-3 pb-6 animate-fadeIn">
          {/* Mobile Primary Nav Links */}
          <div className="space-y-1.5 mb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                      : 'text-stone-300 hover:text-white hover:bg-stone-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {typeof item.badge === 'number' && item.badge > 0 && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        isActive
                          ? 'bg-stone-950 text-amber-400'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Preferences & Account Section (Neat Order: Settings + Profile) */}
          <div className="pt-3 border-t border-stone-800 space-y-2.5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500 px-3.5">
              Preferences &amp; Account
            </div>

            {/* Settings button in neat order */}
            <button
              onClick={() => handleTabClick('settings')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer border ${
                activeTab === 'settings'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-semibold shadow-xs'
                  : 'bg-stone-900/80 border-stone-800 text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <Settings className={`w-4 h-4 ${activeTab === 'settings' ? 'text-amber-300' : 'text-amber-400'}`} />
                <span>{t('nav.settings')}</span>
              </div>
            </button>

            {/* Profile Section in neat order */}
            {loading ? (
              <div className="flex items-center justify-center py-2 text-stone-400 text-xs">
                <span>Loading profile...</span>
              </div>
            ) : currentUser ? (
              <div className="space-y-3 pt-1">
                {/* User Info Card */}
                <div className="flex items-center space-x-3 p-3 bg-stone-900/90 rounded-xl border border-stone-800">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt={currentUser.displayName || 'Profile'}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-400/40"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-base ring-2 ring-amber-400/40">
                      {(currentUser.displayName || 'U').charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-stone-100 text-sm truncate">
                      {currentUser.displayName || 'Authenticated User'}
                    </p>
                    <p className="text-stone-400 text-xs truncate">{currentUser.email}</p>
                    <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold uppercase tracking-wider border border-amber-400/30">
                        {userProfile?.role === 'researcher' ? 'Researcher' : 'Student'}
                      </span>
                      {userProfile?.collegeName && (
                        <span className="text-[10px] text-amber-400/80 truncate">
                          🏛 {userProfile.collegeName}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {onOpenJournal && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenJournal();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold cursor-pointer"
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Open Research Journal</span>
                  </button>
                )}

                {/* Mobile Logout Button */}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-200 transition-all cursor-pointer"
                  aria-label="Logout"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              /* Mobile Guest Profile & Login */
              <div className="space-y-2 pt-1">
                <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs ring-1 ring-amber-400/40">
                    <UserIcon className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-200 text-xs">Guest Researcher</p>
                    <p className="text-[10px] text-stone-400">Sign in to sync field records</p>
                  </div>
                </div>
                <button
                  onClick={handleLogin}
                  disabled={isLoggingIn}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 shadow-md shadow-amber-900/40 transition-all cursor-pointer disabled:opacity-50"
                  aria-label="Login or View Profile"
                >
                  {isLoggingIn ? (
                    <div className="w-4 h-4 border-2 border-stone-950 border-t-transparent animate-spin rounded-full" />
                  ) : (
                    <LogIn className="w-4 h-4" />
                  )}
                  <span>Sign in with Google</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
