import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../atoms/Button';

// Mock data for symptom to test mapping
const symptomMap = [
  {
    id: 'fever',
    label: 'Persistent Fever',
    tests: [
      { name: 'Complete Blood Count (CBC)', url: '/services/haematology' },
      { name: 'Dengue Profile', url: '/services/complete-haemogram' },
      { name: 'Widal Test (Typhoid)', url: '/services/serology-tests' }
    ]
  },
  {
    id: 'fatigue',
    label: 'Unexplained Fatigue',
    tests: [
      { name: 'Thyroid Profile (T3, T4, TSH)', url: '/services/hormones' },
      { name: 'Vitamin B12 & D3', url: '/services/hormones' },
      { name: 'Blood Sugar (FBS)', url: '/services/biochemistry' }
    ]
  },
  {
    id: 'joint-pain',
    label: 'Joint Pain or Swelling',
    tests: [
      { name: 'Rheumatoid Factor (RA Test)', url: '/services/serology-tests' },
      { name: 'Uric Acid', url: '/services/liver-function-test' },
      { name: 'Digital X-Ray (Joints)', url: '/services/imaging-cardiology' }
    ]
  },
  {
    id: 'stomach',
    label: 'Stomach Pain / Acidity',
    tests: [
      { name: 'Liver Function Test (LFT)', url: '/services/liver-function-test' },
      { name: 'Stool Routine Examination', url: '/services/motion-tests' },
      { name: 'Urine Analysis', url: '/services/urine-analysis' }
    ]
  }
];

const durationOptions = [
  { id: 'short', label: 'Less than 2 days' },
  { id: 'medium', label: '3 to 7 days' },
  { id: 'long', label: 'More than a week' }
];

export function InteractiveSymptomChecker() {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const activeData = symptomMap.find(s => s.id === selectedSymptom);

  const handleSymptomSelect = (id: string) => {
    setSelectedSymptom(id);
    setSelectedDuration(null); // Reset duration when symptom changes
  };

  return (
    <section className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-brand-gold mb-6 shadow-glow-gold">
            <Activity size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Symptom to Service Mapper</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Not sure which test you need? Select what you're experiencing below and we'll recommend the relevant diagnostic tests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Symptoms */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-gold mb-6 flex items-center gap-2">
              <span className="bg-brand-gold/20 text-brand-gold w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span> 
              What are you experiencing?
            </h3>
            <div className="space-y-3">
              {symptomMap.map((symptom) => {
                const isSelected = selectedSymptom === symptom.id;
                return (
                  <motion.button
                    key={symptom.id}
                    onClick={() => handleSymptomSelect(symptom.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-6 py-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isSelected 
                        ? 'bg-gradient-to-r from-brand-blue to-brand-teal border-brand-gold/50 shadow-glow-blue text-white' 
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-brand-gold/30'
                    }`}
                  >
                    <span className="font-semibold text-lg">{symptom.label}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected ? 'border-brand-gold bg-brand-gold' : 'border-gray-500 group-hover:border-brand-gold'
                    }`}>
                      {isSelected && <CheckCircle2 size={16} className="text-brand-charcoal" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Steps */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative min-h-[450px] shadow-2xl">
            <AnimatePresence mode="wait">
              {!selectedSymptom ? (
                // State 0: Waiting for Symptom
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center flex-col text-center p-8"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center mb-4">
                    <ArrowRight size={32} className="text-gray-500" />
                  </div>
                  <p className="text-gray-400 font-medium text-lg">Select a symptom from the left to continue.</p>
                </motion.div>
              ) : !selectedDuration ? (
                // State 1: Waiting for Duration
                <motion.div 
                  key="duration"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col"
                >
                  <h3 className="text-xl font-bold text-brand-gold mb-6 flex items-center gap-2">
                    <span className="bg-brand-gold/20 text-brand-gold w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span> 
                    How long have you had this?
                  </h3>
                  <div className="space-y-4 flex-1">
                    {durationOptions.map((duration) => (
                      <motion.button
                        key={duration.id}
                        onClick={() => setSelectedDuration(duration.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-left px-6 py-4 rounded-xl border bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-300 flex items-center gap-4 group"
                      >
                        <Clock size={20} className="text-brand-teal group-hover:text-brand-gold transition-colors" />
                        <span className="font-semibold">{duration.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                // State 2: Show Results
                <motion.div
                  key="results"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="bg-brand-teal/20 text-brand-teal w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span> 
                      Recommended Tests
                    </h3>
                    <button 
                      onClick={() => setSelectedDuration(null)}
                      className="text-sm text-brand-gold hover:underline"
                    >
                      Back
                    </button>
                  </div>

                  <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
                    {activeData?.tests.map((test, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="bg-white p-5 rounded-2xl flex items-center justify-between group hover:shadow-glow-teal transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-brand-pale text-brand-blue flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-colors">
                            <CheckCircle2 size={20} />
                          </div>
                          <span className="font-bold text-brand-charcoal text-lg group-hover:text-brand-blue transition-colors">{test.name}</span>
                        </div>
                        <Link to={test.url}>
                          <Button variant="outline" className="text-sm px-4 py-2 border-brand-gray/20 hover:border-brand-teal text-brand-blue hover:text-brand-teal shrink-0">
                            View details
                          </Button>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-xl shrink-0">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <strong className="text-white">Note:</strong> These are general recommendations. Please consult with our specialists for a proper medical diagnosis.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
