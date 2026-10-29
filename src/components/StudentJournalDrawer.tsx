import React, { useState, useEffect } from 'react';
import { useAuth } from '../firebase/authContext';
import {
  fetchUserScans,
  fetchUserObservations,
  deleteUserScan,
  saveObservationToFirestore,
  SavedScanDoc,
  ProjectObservationDoc
} from '../firebase/firestoreService';
import {
  X,
  Cloud,
  GraduationCap,
  Trash2,
  PlusCircle,
  Clock,
  MapPin,
  CheckCircle2,
  FileText,
  AlertCircle
} from 'lucide-react';

interface StudentJournalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScanBreed?: (breedName: string) => void;
}

export const StudentJournalDrawer: React.FC<StudentJournalDrawerProps> = ({
  isOpen,
  onClose,
  onSelectScanBreed
}) => {
  const { currentUser, loginWithGoogle } = useAuth();
  const [activeTab, setActiveTab] = useState<'scans' | 'observations'>('scans');
  const [scans, setScans] = useState<SavedScanDoc[]>([]);
  const [observations, setObservations] = useState<ProjectObservationDoc[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // New observation form
  const [showAddObs, setShowAddObs] = useState<boolean>(false);
  const [obsTitle, setObsTitle] = useState<string>('');
  const [obsBreed, setObsBreed] = useState<string>('Gir');
  const [obsLocation, setObsLocation] = useState<string>('');
  const [obsNotes, setObsNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && currentUser) {
      loadData();
    }
  }, [isOpen, currentUser]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [userScans, userObs] = await Promise.all([
        fetchUserScans(),
        fetchUserObservations()
      ]);
      setScans(userScans);
      setObservations(userObs);
    } catch (err) {
      console.error('Error loading Firestore records:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteScan = async (id: string) => {
    const ok = await deleteUserScan(id);
    if (ok) {
      setScans((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const handleCreateObservation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!obsTitle.trim() || !obsNotes.trim()) return;

    setIsSubmitting(true);
    try {
      const created = await saveObservationToFirestore(
        obsTitle,
        obsBreed,
        obsLocation || 'Campus Agricultural Field Lab',
        obsNotes
      );
      if (created) {
        setObservations((prev) => [created, ...prev]);
        setShowAddObs(false);
        setObsTitle('');
        setObsNotes('');
        setObsLocation('');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-stone-200 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-serif font-bold text-base">Student Mini Project Lab Journal</h3>
              <p className="text-[11px] text-stone-400 font-mono">
                Persistent Cloud Firestore Database
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth prompt if not logged in */}
        {!currentUser ? (
          <div className="flex-1 p-8 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h4 className="font-serif font-bold text-lg text-stone-900">
              Sign In to Access Cloud Project Database
            </h4>
            <p className="text-xs text-stone-600 max-w-xs leading-relaxed">
              Authenticate with your Google account to automatically store and query specimen scans, lactation metrics, and project journal notes directly in Cloud Firestore.
            </p>
            <button
              onClick={() => loginWithGoogle()}
              className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Sign In with Google</span>
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Sub-Tabs */}
            <div className="flex border-b border-stone-200 bg-stone-50 px-4 py-2 gap-2 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('scans')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  activeTab === 'scans'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-600 hover:bg-stone-200'
                }`}
              >
                <span>Saved Scans ({scans.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('observations')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  activeTab === 'observations'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-600 hover:bg-stone-200'
                }`}
              >
                <span>Project Observations ({observations.length})</span>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {isLoading ? (
                <div className="py-12 text-center text-xs text-stone-500 space-y-2">
                  <div className="w-6 h-6 border-2 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto" />
                  <p>Syncing with Cloud Firestore...</p>
                </div>
              ) : activeTab === 'scans' ? (
                scans.length === 0 ? (
                  <div className="py-16 text-center text-stone-400 space-y-2">
                    <FileText className="w-10 h-10 mx-auto text-stone-300" />
                    <p className="text-sm font-semibold text-stone-700">No scans saved to cloud yet</p>
                    <p className="text-xs text-stone-400 max-w-xs mx-auto">
                      Classify any Indian cattle or buffalo breed and click "Save to Cloud Project Journal" to persist here.
                    </p>
                  </div>
                ) : (
                  scans.map((scan) => (
                    <div
                      key={scan.id}
                      className="p-3.5 bg-stone-50 hover:bg-amber-50/60 border border-stone-200 rounded-2xl flex items-center justify-between gap-3 group transition-all"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-stone-900 truncate">
                            {scan.breedName}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                            {scan.category}
                          </span>
                          <span className="text-xs font-bold text-amber-700 ml-auto">
                            {scan.confidence}%
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-1">
                          <span className="flex items-center gap-0.5 truncate">
                            <MapPin className="w-3 h-3 text-amber-600" />
                            {scan.stateOfOrigin}
                          </span>
                          <span>•</span>
                          <span className="font-mono text-stone-400">
                            {new Date(scan.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-amber-800/80 truncate mt-0.5">
                          Code: {scan.nbagrCode}
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteScan(scan.id)}
                        className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete from Firestore"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )
              ) : (
                <div className="space-y-4">
                  {!showAddObs ? (
                    <button
                      onClick={() => setShowAddObs(true)}
                      className="w-full py-2.5 px-4 bg-amber-50 hover:bg-amber-100 border border-dashed border-amber-400 rounded-xl text-amber-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <PlusCircle className="w-4 h-4 text-amber-700" />
                      <span>Log New Field Observation</span>
                    </button>
                  ) : (
                    <form
                      onSubmit={handleCreateObservation}
                      className="bg-amber-50/80 border border-amber-300 rounded-2xl p-4 space-y-3 text-xs"
                    >
                      <div className="flex items-center justify-between font-bold text-amber-950">
                        <span>New Field Observation</span>
                        <button
                          type="button"
                          onClick={() => setShowAddObs(false)}
                          className="text-stone-400 hover:text-stone-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div>
                        <label className="font-semibold text-stone-700 block mb-1">Title / Specimen Tag:</label>
                        <input
                          type="text"
                          required
                          value={obsTitle}
                          onChange={(e) => setObsTitle(e.target.value)}
                          placeholder="e.g. Gir Cow Specimen #14 - Dewlap morphology"
                          className="w-full bg-white border border-stone-300 rounded-lg p-2 text-stone-900"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="font-semibold text-stone-700 block mb-1">Breed:</label>
                          <select
                            value={obsBreed}
                            onChange={(e) => setObsBreed(e.target.value)}
                            className="w-full bg-white border border-stone-300 rounded-lg p-2 text-stone-900"
                          >
                            <option value="Gir">Gir Cattle</option>
                            <option value="Sahiwal">Sahiwal Cattle</option>
                            <option value="Kankrej">Kankrej Cattle</option>
                            <option value="Kangayam">Kangayam Cattle</option>
                            <option value="Murrah">Murrah Buffalo</option>
                            <option value="Jaffarabadi">Jaffarabadi Buffalo</option>
                            <option value="Bhadawari">Bhadawari Buffalo</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-semibold text-stone-700 block mb-1">Location:</label>
                          <input
                            type="text"
                            value={obsLocation}
                            onChange={(e) => setObsLocation(e.target.value)}
                            placeholder="e.g. Dairy Farm, Gujarat"
                            className="w-full bg-white border border-stone-300 rounded-lg p-2 text-stone-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold text-stone-700 block mb-1">Observations / Lab Notes:</label>
                        <textarea
                          required
                          rows={3}
                          value={obsNotes}
                          onChange={(e) => setObsNotes(e.target.value)}
                          placeholder="Record horn angle, temperament, estimated lactation yield, A2 beta-casein parameters..."
                          className="w-full bg-white border border-stone-300 rounded-lg p-2 text-stone-900"
                        />
                      </div>

                      <div className="flex justify-end gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setShowAddObs(false)}
                          className="px-3 py-1.5 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold"
                        >
                          {isSubmitting ? 'Saving...' : 'Save Observation'}
                        </button>
                      </div>
                    </form>
                  )}

                  {observations.length === 0 && !showAddObs ? (
                    <div className="py-12 text-center text-stone-400 text-xs">
                      No field observations added yet.
                    </div>
                  ) : (
                    observations.map((obs) => (
                      <div
                        key={obs.id}
                        className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-xs space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-stone-900 text-sm">{obs.title}</h5>
                          <span className="text-[10px] font-mono text-stone-400">
                            {new Date(obs.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-amber-800 font-semibold text-[11px]">
                          <span>Breed: {obs.breedName}</span>
                          <span>•</span>
                          <span>Loc: {obs.location}</span>
                        </div>
                        <p className="text-stone-700 leading-relaxed pt-1 border-t border-stone-200">
                          {obs.fieldNotes}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <span className="flex items-center gap-1 font-mono text-[11px]">
            <Cloud className="w-3.5 h-3.5 text-emerald-600" />
            Connected to Cloud Firestore
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-xl"
          >
            Close Journal
          </button>
        </div>
      </div>
    </div>
  );
};
