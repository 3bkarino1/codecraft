
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import * as THREE from "three";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Create a simple cube mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: "#3b82f6",
      metalness: 0.2,
      roughness: 0.1,
    });
    
    // Create multiple cubes in different positions
    const cubes: THREE.Mesh[] = [];
    const cubePositions = [
      [0, 0, 0],
      [2, 0, -2],
      [-2, 0, -2],
      [0, 2, -2],
      [0, -2, -2]
    ];
    
    cubePositions.forEach(position => {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(position[0], position[1], position[2]);
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(cube);
      cubes.push(cube);
    });
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    
    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Mouse interaction
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();
    
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      targetRotation.x = mouse.y * 0.5;
      targetRotation.y = mouse.x * 0.5;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate cubes
      cubes.forEach((cube, i) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        
        // Add some oscillation
        cube.position.y = cubePositions[i][1] + Math.sin(Date.now() * 0.001 + i) * 0.2;
        
        // Slightly adjust position based on mouse
        cube.rotation.x += (targetRotation.x - cube.rotation.x) * 0.02;
        cube.rotation.y += (targetRotation.y - cube.rotation.y) * 0.02;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cubes.forEach(cube => {
        cube.geometry.dispose();
        (cube.material as THREE.Material).dispose();
      });
      renderer.dispose();
      (ambientLight as any).dispose();
      pointLight.dispose();
    };
  }, []);

  const scrollToNextSection = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Canvas for 3D model */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
      
      {/* Content overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="animate-fade-up">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-wider">
            LEARN. CREATE. INNOVATE.
          </span>
          <h1 className="font-bold mb-6 leading-tight">
            Master Programming Through<br />
            <span className="text-primary">Interactive 3D Learning</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover a revolutionary approach to learning programming with immersive 3D visualization 
            and hands-on projects that transform abstract concepts into tangible experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#courses"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Explore Courses
            </a>
            <a
              href="/#about"
              className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-8 w-8 text-foreground/70" />
      </div>
    </div>
  );
};

export default Hero;
