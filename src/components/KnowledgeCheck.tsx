import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { KnowledgeCheck as KnowledgeCheckType } from '@/data/moduleContentTypes';

interface Props {
  checks: KnowledgeCheckType[];
  onComplete: (score: number) => void;
}

const KnowledgeCheck: React.FC<Props> = ({ checks, onComplete }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const check = checks[currentQ];

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setShowResult(true);
    if (selected === check.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < checks.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setCompleted(true);
      onComplete(Math.round(((score + (selected === check.correctIndex ? 1 : 0)) / checks.length) * 100));
    }
  };

  if (completed) {
    const finalScore = Math.round((score / checks.length) * 100);
    return (
      <Card className="border-2 border-green-200 bg-green-50">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-800">Knowledge Check Complete!</h3>
          <p className="text-green-700 mt-2">You scored {finalScore}%</p>
          <p className="text-sm text-green-600 mt-1">{score} of {checks.length} correct</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-blue-200">
      <CardHeader className="bg-blue-50">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-blue-600" />
            Question {currentQ + 1} of {checks.length}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <p className="font-medium text-gray-800">{check.question}</p>
        <div className="space-y-2">
          {check.options.map((opt, idx) => (
            <button key={idx} onClick={() => handleSelect(idx)} className={`w-full p-3 text-left rounded-lg border-2 transition-all ${selected === idx ? (showResult ? (idx === check.correctIndex ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-blue-500 bg-blue-50') : 'border-gray-200 hover:border-gray-300'}`}>
              <div className="flex items-center gap-3">
                {showResult && idx === check.correctIndex && <CheckCircle className="h-5 w-5 text-green-500" />}
                {showResult && selected === idx && idx !== check.correctIndex && <XCircle className="h-5 w-5 text-red-500" />}
                <span>{opt}</span>
              </div>
            </button>
          ))}
        </div>
        {showResult && <div className="p-4 bg-blue-50 rounded-lg"><p className="text-sm text-blue-800"><strong>Explanation:</strong> {check.explanation}</p></div>}
        <div className="flex gap-3">
          {!showResult ? <Button onClick={handleSubmit} disabled={selected === null} className="flex-1">Submit Answer</Button> : <Button onClick={handleNext} className="flex-1">{currentQ < checks.length - 1 ? 'Next Question' : 'Complete'}</Button>}
        </div>
      </CardContent>
    </Card>
  );
};

export default KnowledgeCheck;
