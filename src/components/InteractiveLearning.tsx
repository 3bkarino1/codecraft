
import { useState } from "react";
import { Code } from "lucide-react";

const InteractiveLearning = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Variables and Data Types",
      description: "Variables store data in memory. Each data type is represented differently.",
      code: "let count = 42; // Number\nlet name = \"CodeCraft\"; // String\nlet isActive = true; // Boolean",
      visual: <VariablesVisual />
    },
    {
      title: "Arrays and Objects",
      description: "Arrays store ordered collections, while objects represent key-value structures.",
      code: "const numbers = [1, 2, 3, 4];\nconst user = {\n  name: \"Alex\",\n  role: \"Student\"\n};",
      visual: <ArraysObjectsVisual />
    },
    {
      title: "Functions and Scope",
      description: "Functions encapsulate code blocks with their own scope and execution context.",
      code: "function calculate(a, b) {\n  let result = a + b;\n  return result;\n}\n\nlet sum = calculate(5, 3);",
      visual: <FunctionsVisual />
    },
    {
      title: "Algorithms in Action",
      description: "Watch as sorting algorithms reorganize data in real-time with visual feedback.",
      code: "function bubbleSort(arr) {\n  for(let i = 0; i < arr.length; i++) {\n    for(let j = 0; j < arr.length - i - 1; j++) {\n      if(arr[j] > arr[j+1]) {\n        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}",
      visual: <AlgorithmsVisual />
    }
  ];

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="bg-secondary/30 rounded-2xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Interactive Learning Experience</h2>
        <p className="text-muted-foreground mb-6">
          Experience how our platform uses visualization to make abstract programming concepts concrete and easy to understand.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 pt-0">
        <div className="featured-card overflow-hidden bg-background/50 rounded-xl p-6 flex items-center justify-center" style={{ minHeight: "400px" }}>
          {steps[activeStep].visual}
        </div>

        <div className="featured-card flex flex-col">
          <div className="p-6 border-b border-border/30">
            <h3 className="text-xl font-bold">{steps[activeStep].title}</h3>
            <p className="text-muted-foreground mt-2">{steps[activeStep].description}</p>
          </div>
          
          <div className="flex-grow p-6">
            <div className="text-sm mb-2 text-muted-foreground">Code Example:</div>
            <pre className="bg-background/50 p-4 rounded-lg overflow-auto max-h-60">
              <code className="text-sm text-foreground font-mono whitespace-pre">
                {steps[activeStep].code}
              </code>
            </pre>
          </div>
          
          <div className="p-6 border-t border-border/30">
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Step {activeStep + 1} of {steps.length}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={handlePrevStep}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextStep}
                  className="px-3 py-1 text-sm rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="flex justify-center">
          <div className="flex space-x-1">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeStep === index ? "w-6 bg-primary" : "w-2 bg-muted"
                }`}
                onClick={() => setActiveStep(index)}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Visual component for Variables and Data Types
const VariablesVisual = () => (
  <div className="flex flex-col items-center gap-8">
    <div className="flex gap-8">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
          42
        </div>
        <span className="mt-2 text-sm font-medium">Number</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="h-16 px-4 bg-green-500 rounded-md flex items-center justify-center text-white font-bold">
          "CodeCraft"
        </div>
        <span className="mt-2 text-sm font-medium">String</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
          true
        </div>
        <span className="mt-2 text-sm font-medium">Boolean</span>
      </div>
    </div>
    
    <div className="text-center text-muted-foreground text-sm max-w-xs">
      <Code className="inline mr-2 h-4 w-4" />
      Variables store different types of data in memory, each with their own properties
    </div>
  </div>
);

// Visual component for Arrays and Objects
const ArraysObjectsVisual = () => (
  <div className="flex flex-col items-center gap-8">
    <div className="flex flex-col items-center">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((num, index) => (
          <div key={index} className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
            {num}
          </div>
        ))}
      </div>
      <span className="mt-2 text-sm font-medium">Array [1, 2, 3, 4]</span>
    </div>
    
    <div className="flex flex-col items-center">
      <div className="relative p-8">
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
          Object
        </div>
        
        <div className="absolute top-0 left-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
          name
        </div>
        
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
          role
        </div>
        
        <div className="absolute h-px w-16 bg-gray-400 rotate-45 -translate-x-6 -translate-y-6"></div>
        <div className="absolute h-px w-16 bg-gray-400 -rotate-45 translate-x-6 translate-y-6"></div>
      </div>
      <span className="mt-2 text-sm font-medium">Object {`{name: "Alex", role: "Student"}`}</span>
    </div>
  </div>
);

// Visual component for Functions and Scope
const FunctionsVisual = () => (
  <div className="relative border-2 border-blue-500/30 rounded-lg p-8 w-full max-w-xs mx-auto">
    <div className="absolute -top-3 left-4 bg-background px-2 text-sm font-medium text-blue-500">
      Function Scope
    </div>
    
    <div className="flex justify-between mb-6">
      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
        a:5
      </div>
      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
        b:3
      </div>
    </div>
    
    <div className="flex justify-center mb-6">
      <div className="w-12 h-12 bg-green-500 rounded-md flex items-center justify-center text-white font-bold">
        8
      </div>
    </div>
    
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0V30M12 30L4 22M12 30L20 22" stroke="#ec4899" strokeWidth="2"/>
        </svg>
        <div className="w-12 h-12 bg-green-500 rounded-md flex items-center justify-center text-white font-bold">
          8
        </div>
        <span className="mt-1 text-xs font-medium">return</span>
      </div>
    </div>
  </div>
);

// Visual component for Algorithms
const AlgorithmsVisual = () => {
  const sortedBars = [1, 2, 3, 4, 6, 7, 8, 9];
  const maxHeight = 150;
  
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-end gap-1 h-40">
        {sortedBars.map((value, index) => (
          <div 
            key={index} 
            className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md flex items-end justify-center pb-1 text-white text-xs font-bold transition-all"
            style={{ 
              height: `${(value / 9) * maxHeight}px`,
              backgroundColor: `hsl(${(value / 9) * 90}, 80%, 60%)`
            }}
          >
            {value}
          </div>
        ))}
      </div>
      
      <div className="text-center text-muted-foreground text-sm max-w-xs">
        <Code className="inline mr-2 h-4 w-4" />
        Bubble sort algorithm visualized after completion
      </div>
    </div>
  );
};

export default InteractiveLearning;
