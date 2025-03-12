import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const InteractiveLearning = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Define these variables at the component level so they're accessible everywhere
  const barWidth = 0.6;
  let maxVal = 0; // Will be calculated in the visualization
  let startX = 0; // Will be calculated in the visualization

  const steps = [
    {
      title: "Variables and Data Types",
      description: "Variables store data in memory. Each data type is represented differently in 3D space.",
      code: "let count = 42; // Number\nlet name = \"CodeCraft\"; // String\nlet isActive = true; // Boolean"
    },
    {
      title: "Arrays and Objects",
      description: "Arrays store ordered collections, while objects represent key-value structures.",
      code: "const numbers = [1, 2, 3, 4];\nconst user = {\n  name: \"Alex\",\n  role: \"Student\"\n};"
    },
    {
      title: "Functions and Scope",
      description: "Functions encapsulate code blocks with their own scope and execution context.",
      code: "function calculate(a, b) {\n  let result = a + b;\n  return result;\n}\n\nlet sum = calculate(5, 3);"
    },
    {
      title: "Algorithms in Action",
      description: "Watch as sorting algorithms reorganize data in real-time with visual feedback.",
      code: "function bubbleSort(arr) {\n  for(let i = 0; i < arr.length; i++) {\n    for(let j = 0; j < arr.length - i - 1; j++) {\n      if(arr[j] > arr[j+1]) {\n        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}"
    }
  ];

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    
    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Group to hold all step-specific objects
    const stepGroup = new THREE.Group();
    scene.add(stepGroup);
    
    // Generate visualization based on current step
    const generateVisualization = (step: number) => {
      // Clear previous visualization
      while(stepGroup.children.length > 0) {
        const object = stepGroup.children[0];
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
        stepGroup.remove(object);
      }
      
      switch(step) {
        case 0: // Variables and Data Types
          // Number - Blue Cube
          const numberGeometry = new THREE.BoxGeometry(1, 1, 1);
          const numberMaterial = new THREE.MeshStandardMaterial({ color: 0x3b82f6 });
          const numberMesh = new THREE.Mesh(numberGeometry, numberMaterial);
          numberMesh.position.set(-3, 0, 0);
          numberMesh.userData = { animation: "rotate", label: "Number: 42" };
          stepGroup.add(numberMesh);
          
          // String - Green Text-like shape
          const stringGeometry = new THREE.CylinderGeometry(0.2, 0.2, 3, 32);
          const stringMaterial = new THREE.MeshStandardMaterial({ color: 0x22c55e });
          const stringMesh = new THREE.Mesh(stringGeometry, stringMaterial);
          stringMesh.rotation.x = Math.PI / 2;
          stringMesh.position.set(0, 0, 0);
          stringMesh.userData = { animation: "wave", label: "String: 'CodeCraft'" };
          stepGroup.add(stringMesh);
          
          // Boolean - Red/Green Sphere
          const boolGeometry = new THREE.SphereGeometry(1, 32, 32);
          const boolMaterial = new THREE.MeshStandardMaterial({ color: 0x22c55e });
          const boolMesh = new THREE.Mesh(boolGeometry, boolMaterial);
          boolMesh.position.set(3, 0, 0);
          boolMesh.userData = { animation: "pulse", label: "Boolean: true" };
          stepGroup.add(boolMesh);
          break;
          
        case 1: // Arrays and Objects
          // Array - Row of connected cubes
          const cubeSize = 0.8;
          const spacing = 0.2;
          const arrayValues = [1, 2, 3, 4];
          
          arrayValues.forEach((value, index) => {
            const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
            const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x3b82f6 });
            const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            
            // Position cubes in a row
            const totalWidth = arrayValues.length * (cubeSize + spacing) - spacing;
            const startX = -totalWidth / 2 + cubeSize / 2;
            cube.position.set(startX + index * (cubeSize + spacing), 1, 0);
            cube.userData = { animation: "bounce", label: `array[${index}]: ${value}` };
            
            stepGroup.add(cube);
          });
          
          // Object - Interconnected spheres for properties
          const objectGeometry = new THREE.SphereGeometry(0.7, 32, 32);
          const objectCenterMaterial = new THREE.MeshStandardMaterial({ color: 0xf97316 });
          const objectCenter = new THREE.Mesh(objectGeometry, objectCenterMaterial);
          objectCenter.position.set(0, -1.5, 0);
          objectCenter.userData = { animation: "rotate", label: "object" };
          stepGroup.add(objectCenter);
          
          const propGeometry = new THREE.SphereGeometry(0.5, 32, 32);
          const namePropMaterial = new THREE.MeshStandardMaterial({ color: 0x22c55e });
          const rolePropMaterial = new THREE.MeshStandardMaterial({ color: 0xec4899 });
          
          const nameProp = new THREE.Mesh(propGeometry, namePropMaterial);
          nameProp.position.set(-1.5, -1.5, 0);
          nameProp.userData = { animation: "orbit", target: objectCenter, label: "name: 'Alex'" };
          stepGroup.add(nameProp);
          
          const roleProp = new THREE.Mesh(propGeometry, rolePropMaterial);
          roleProp.position.set(1.5, -1.5, 0);
          roleProp.userData = { animation: "orbit", target: objectCenter, label: "role: 'Student'" };
          stepGroup.add(roleProp);
          
          // Connect with lines
          const lineMaterial = new THREE.LineBasicMaterial({ color: 0x64748b });
          
          const nameLineGeometry = new THREE.BufferGeometry().setFromPoints([
            objectCenter.position, nameProp.position
          ]);
          const nameLine = new THREE.Line(nameLineGeometry, lineMaterial);
          stepGroup.add(nameLine);
          
          const roleLineGeometry = new THREE.BufferGeometry().setFromPoints([
            objectCenter.position, roleProp.position
          ]);
          const roleLine = new THREE.Line(roleLineGeometry, lineMaterial);
          stepGroup.add(roleLine);
          break;
          
        case 2: // Functions and Scope
          // Function Frame
          const frameGeometry = new THREE.BoxGeometry(8, 5, 0.1);
          const frameMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x3b82f6, 
            transparent: true, 
            opacity: 0.3 
          });
          const frame = new THREE.Mesh(frameGeometry, frameMaterial);
          frame.position.set(0, 0, -1);
          frame.userData = { animation: "none", label: "Function Scope" };
          stepGroup.add(frame);
          
          // Parameters
          const paramAGeometry = new THREE.SphereGeometry(0.6, 32, 32);
          const paramAMaterial = new THREE.MeshStandardMaterial({ color: 0xf97316 });
          const paramA = new THREE.Mesh(paramAGeometry, paramAMaterial);
          paramA.position.set(-2.5, 1.5, 0);
          paramA.userData = { animation: "pulse", label: "Parameter a: 5" };
          stepGroup.add(paramA);
          
          const paramBGeometry = new THREE.SphereGeometry(0.6, 32, 32);
          const paramBMaterial = new THREE.MeshStandardMaterial({ color: 0xf97316 });
          const paramB = new THREE.Mesh(paramBGeometry, paramBMaterial);
          paramB.position.set(-1, 1.5, 0);
          paramB.userData = { animation: "pulse", label: "Parameter b: 3" };
          stepGroup.add(paramB);
          
          // Result variable
          const resultGeometry = new THREE.BoxGeometry(1, 1, 1);
          const resultMaterial = new THREE.MeshStandardMaterial({ color: 0x22c55e });
          const result = new THREE.Mesh(resultGeometry, resultMaterial);
          result.position.set(0, 0, 0);
          result.userData = { animation: "rotate", label: "result: 8" };
          stepGroup.add(result);
          
          // Return arrow
          const arrowDir = new THREE.Vector3(0, -1, 0);
          arrowDir.normalize();
          
          const arrowOrigin = new THREE.Vector3(0, -0.8, 0);
          const arrowLength = 2;
          const arrowColor = 0xec4899;
          
          const arrowHelper = new THREE.ArrowHelper(
            arrowDir, arrowOrigin, arrowLength, arrowColor, 0.5, 0.3
          );
          arrowHelper.userData = { animation: "pulse", label: "return" };
          stepGroup.add(arrowHelper);
          
          // Outer scope
          const sumGeometry = new THREE.BoxGeometry(1, 1, 1);
          const sumMaterial = new THREE.MeshStandardMaterial({ color: 0x22c55e });
          const sum = new THREE.Mesh(sumGeometry, sumMaterial);
          sum.position.set(0, -3, 0);
          sum.userData = { animation: "pulse", label: "sum: 8" };
          stepGroup.add(sum);
          break;
          
        case 3: // Algorithms in Action
          // Create an array of bars representing data
          const barData = [6, 2, 9, 4, 5, 8, 1, 3, 7];
          maxVal = Math.max(...barData); // Set the maxVal for global access
          const totalWidth = barData.length * (barWidth * 1.2);
          startX = -totalWidth / 2 + barWidth / 2; // Set the startX for global access
          
          barData.forEach((value, index) => {
            const barHeight = (value / maxVal) * 5;
            const barGeometry = new THREE.BoxGeometry(barWidth, barHeight, barWidth);
            const barMaterial = new THREE.MeshStandardMaterial({ 
              color: new THREE.Color().setHSL(value / maxVal * 0.3, 0.8, 0.5) 
            });
            const bar = new THREE.Mesh(barGeometry, barMaterial);
            
            bar.position.set(
              startX + index * (barWidth * 1.2), 
              barHeight / 2 - 2.5, 
              0
            );
            bar.userData = { 
              animation: "sort", 
              value: value,
              index: index,
              label: `${value}` 
            };
            
            stepGroup.add(bar);
          });
          break;
      }
    };
    
    // Initialize with first step
    generateVisualization(activeStep);
    
    // Animation variables
    let bouncePhase = 0;
    let sortStep = 0;
    let sortInnerStep = 0;
    let sortPause = 0;
    let swapping = false;
    let swapProgress = 0;
    let swapIndices = [-1, -1];
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (isPlaying) {
        // Different animations for each object based on userData
        stepGroup.children.forEach((object) => {
          if (object.userData && object.userData.animation) {
            switch (object.userData.animation) {
              case "rotate":
                object.rotation.x += 0.01;
                object.rotation.y += 0.01;
                break;
                
              case "pulse":
                const scale = 1 + Math.sin(Date.now() * 0.003) * 0.1;
                object.scale.set(scale, scale, scale);
                break;
                
              case "wave":
                object.position.y = Math.sin(Date.now() * 0.002) * 0.5;
                break;
                
              case "bounce":
                object.position.y = 1 + Math.abs(Math.sin(bouncePhase + object.position.x)) * 0.5;
                break;
                
              case "orbit":
                if (object.userData.target) {
                  const targetPos = object.userData.target.position;
                  const angle = Date.now() * 0.001;
                  const distance = targetPos.distanceTo(object.position);
                  object.position.x = targetPos.x + Math.cos(angle) * distance;
                  object.position.z = targetPos.z + Math.sin(angle) * distance;
                }
                break;
                
              case "sort":
                // Only animate in step 3
                if (activeStep === 3) {
                  // Bubble sort visualization
                  if (sortPause > 0) {
                    sortPause--;
                  } else if (swapping) {
                    // Handle swap animation
                    swapProgress += 0.05;
                    
                    if (swapProgress >= 1) {
                      swapping = false;
                      swapProgress = 0;
                      sortInnerStep++;
                    } else {
                      // Animate the swap
                      if (object.userData.index === swapIndices[0] || 
                          object.userData.index === swapIndices[1]) {
                        
                        const bars = stepGroup.children.filter(
                          obj => obj.userData && obj.userData.animation === "sort"
                        );
                        
                        const bar1 = bars.find(b => b.userData.index === swapIndices[0]);
                        const bar2 = bars.find(b => b.userData.index === swapIndices[1]);
                        
                        if (bar1 && bar2) {
                          const startPos1 = startX + swapIndices[0] * (barWidth * 1.2);
                          const startPos2 = startX + swapIndices[1] * (barWidth * 1.2);
                          
                          if (object.userData.index === swapIndices[0]) {
                            object.position.x = startPos1 + (startPos2 - startPos1) * swapProgress;
                          } else {
                            object.position.x = startPos2 + (startPos1 - startPos2) * swapProgress;
                          }
                        }
                      }
                    }
                  } else {
                    // Get all bars
                    const bars = stepGroup.children.filter(
                      obj => obj.userData && obj.userData.animation === "sort"
                    );
                    
                    // Bubble sort algorithm step
                    const n = bars.length;
                    
                    if (sortStep < n) {
                      if (sortInnerStep < n - sortStep - 1) {
                        // Get bars to compare
                        const bar1 = bars.find(b => b.userData.index === sortInnerStep);
                        const bar2 = bars.find(b => b.userData.index === sortInnerStep + 1);
                        
                        if (bar1 && bar2) {
                          // Compare values
                          if (bar1.userData.value > bar2.userData.value) {
                            // Swap values and animate
                            const tempValue = bar1.userData.value;
                            bar1.userData.value = bar2.userData.value;
                            bar2.userData.value = tempValue;
                            
                            // Start swap animation
                            swapping = true;
                            swapIndices = [sortInnerStep, sortInnerStep + 1];
                            
                            // Update colors
                            bar1.material = new THREE.MeshStandardMaterial({ 
                              color: new THREE.Color().setHSL(bar1.userData.value / maxVal * 0.3, 0.8, 0.5) 
                            });
                            bar2.material = new THREE.MeshStandardMaterial({ 
                              color: new THREE.Color().setHSL(bar2.userData.value / maxVal * 0.3, 0.8, 0.5) 
                            });
                          } else {
                            sortInnerStep++;
                          }
                        }
                      } else {
                        sortInnerStep = 0;
                        sortStep++;
                        sortPause = 20; // Pause between iterations
                      }
                    } else {
                      // Reset sort when done
                      sortStep = 0;
                      sortInnerStep = 0;
                      sortPause = 60; // Longer pause after complete sort
                      
                      // Reset indices for next sort
                      bars.forEach((bar, idx) => {
                        bar.userData.index = idx;
                      });
                    }
                  }
                }
                break;
            }
          }
        });
        
        bouncePhase += 0.05;
      }
      
      // Update controls
      controls.update();
      
      // Render
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      scene.clear();
    };
  }, [activeStep, isPlaying]);

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="bg-secondary/30 rounded-2xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">3D Learning Experience</h2>
        <p className="text-muted-foreground mb-6">
          Experience how our platform uses 3D visualization to make abstract programming concepts concrete and easy to understand.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 pt-0">
        <div className="featured-card overflow-hidden" ref={containerRef} style={{ minHeight: "400px" }}>
          <canvas
            ref={canvasRef}
            className="w-full h-full"
          />

          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 gap-2">
            <button 
              onClick={handlePrevStep}
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/100 transition-colors"
              aria-label="Previous step"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            
            <button 
              onClick={handlePlayPause}
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/100 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>
            
            <button 
              onClick={handleNextStep}
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/100 transition-colors"
              aria-label="Next step"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
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

export default InteractiveLearning;
