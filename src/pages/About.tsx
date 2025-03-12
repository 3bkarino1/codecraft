
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Lightbulb, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-wider">
              OUR MISSION
            </span>
            <h1 className="font-bold mb-6">Revolutionizing Programming Education</h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to transform how programming is taught and learned through the power 
              of interactive 3D visualizations and immersive learning experiences.
            </p>
          </div>
          
          {/* Story Section */}
          <div className="glass rounded-2xl overflow-hidden mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  CodeCraft began with a simple question: Why are programming concepts so often taught 
                  through text alone, when they're inherently visual and interactive?
                </p>
                <p className="text-muted-foreground mb-4">
                  Founded in 2022 by a team of educators, developers, and 3D artists, we set out to create 
                  a learning platform that leverages the power of 3D visualization to make programming 
                  more intuitive, engaging, and accessible.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to offer courses that have helped thousands of students around 
                  the world transform abstract programming concepts into tangible understanding through 
                  our innovative 3D approach.
                </p>
              </div>
              <div className="bg-primary/5 p-8 md:p-12 flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground">
                These principles guide everything we do at CodeCraft, from course design to student support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly explore new ways to visualize and teach complex programming concepts.
                </p>
              </div>
              
              <div className="glass p-6 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We design our courses to be accessible to learners of all backgrounds and learning styles.
                </p>
              </div>
              
              <div className="glass p-6 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in our course content, platform, and student support.
                </p>
              </div>
              
              <div className="glass p-6 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p className="text-muted-foreground">
                  We measure our success by the real-world skills and confidence our students gain.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground">
                The passionate educators, developers, and designers behind CodeCraft.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Alex Rivera",
                  role: "Founder & Lead Instructor",
                  bio: "Former CS professor with a passion for making programming accessible to everyone through visual learning.",
                  initial: "A"
                },
                {
                  name: "Priya Patel",
                  role: "3D Visualization Expert",
                  bio: "Combines her background in computer graphics and education to create intuitive visual models of complex concepts.",
                  initial: "P"
                },
                {
                  name: "David Kim",
                  role: "Curriculum Designer",
                  bio: "Specializes in breaking down advanced topics into approachable, engaging learning experiences.",
                  initial: "D"
                },
                {
                  name: "Elena Rodriguez",
                  role: "Frontend Developer",
                  bio: "Creates the interactive interfaces that bring our 3D learning experiences to life.",
                  initial: "E"
                },
                {
                  name: "Michael Chen",
                  role: "Education Technology Researcher",
                  bio: "Studies the effectiveness of different teaching methods to continually improve our courses.",
                  initial: "M"
                },
                {
                  name: "Sarah Johnson",
                  role: "Student Success Manager",
                  bio: "Ensures every student receives the support they need to succeed in their learning journey.",
                  initial: "S"
                }
              ].map((person, index) => (
                <div key={index} className="glass rounded-2xl overflow-hidden">
                  <div className="p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-6">
                      {person.initial}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                    <p className="text-primary mb-4">{person.role}</p>
                    <p className="text-muted-foreground">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
              <p className="text-muted-foreground">
                Hear from learners who have transformed their understanding of programming through our courses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  quote: "The 3D visualizations completely changed how I understand algorithms. Concepts I struggled with for years suddenly made perfect sense when I could see them in action.",
                  author: "Jamie Lewis",
                  role: "Software Developer"
                },
                {
                  quote: "As a visual learner, traditional programming courses never clicked for me. CodeCraft's approach finally made programming accessible and even enjoyable.",
                  author: "Taylor Morgan",
                  role: "UX Designer"
                }
              ].map((testimonial, index) => (
                <div key={index} className="glass p-8 rounded-2xl">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <svg className="h-8 w-8 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform How You Learn?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who are experiencing programming in a whole new dimension with our interactive 3D courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Explore Courses
              </a>
              <a
                href="/#contact"
                className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
