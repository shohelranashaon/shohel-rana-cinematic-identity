import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowRight, Code2, Shield, TestTube, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Index = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.className = "absolute rounded-full opacity-20 animate-float";
        particle.style.width = `${Math.random() * 60 + 20}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.background = `hsl(var(--muted-teal))`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  const skills = [
    { name: "QA & Testing", icon: TestTube, desc: "Manual & exploratory testing expertise" },
    { name: "Automation", icon: Code2, desc: "Learning SDET tools & frameworks" },
    { name: "Cybersecurity", icon: Shield, desc: "Security testing fundamentals" },
    { name: "Web Tech", icon: Sparkles, desc: "JavaScript, HTML, CSS basics" },
  ];

  const projects = [
    {
      title: "Test Automation Framework",
      desc: "Building a practice automation suite using Selenium & JavaScript",
      tech: ["Selenium", "JavaScript", "Mocha"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop",
    },
    {
      title: "Security Audit Tool",
      desc: "Learning cybersecurity through a simple vulnerability scanner project",
      tech: ["Python", "Security", "Testing"],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop",
    },
    {
      title: "QA Dashboard",
      desc: "Visualizing test results and metrics with clean UI",
      tech: ["React", "Charts", "UI/UX"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    },
  ];

  const timeline = [
    { year: "2024", title: "SDET Journey Begins", desc: "Started learning test automation and coding" },
    { year: "2023", title: "QA Engineer", desc: "Focused on manual testing and quality processes" },
    { year: "2022", title: "Tech Enthusiast", desc: "Discovered passion for quality assurance" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero overflow-hidden">
      {/* Floating Particles */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <Badge className="glass text-deep-teal border-deep-teal px-4 py-2">
                QA Engineer • SDET Learner
              </Badge>
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-charcoal-blue leading-tight">
                Hi, I'm{" "}
                <span className="text-gradient">Shohel Rana</span>
              </h1>
              <p className="text-xl lg:text-2xl text-dark-slate leading-relaxed">
                Building quality software through curiosity, continuous learning, and a passion for excellence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="glass hover:shadow-glow transition-smooth group">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="glass border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white transition-smooth">
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="glass p-3 rounded-full hover:shadow-glow transition-smooth hover:scale-110">
                <Github className="w-5 h-5 text-deep-teal" />
              </a>
              <a href="#" className="glass p-3 rounded-full hover:shadow-glow transition-smooth hover:scale-110">
                <Linkedin className="w-5 h-5 text-deep-teal" />
              </a>
              <a href="#" className="glass p-3 rounded-full hover:shadow-glow transition-smooth hover:scale-110">
                <Mail className="w-5 h-5 text-deep-teal" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-up animation-delay-300">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-teal rounded-full opacity-30 blur-3xl animate-float" />
              <img
                src={heroPortrait}
                alt="Shohel Rana"
                className="relative glass rounded-3xl w-full h-full object-cover shadow-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-12 rounded-3xl shadow-soft space-y-6">
            <h2 className="font-heading text-4xl font-bold text-charcoal-blue">About Me</h2>
            <div className="h-1 w-20 bg-gradient-teal rounded-full" />
            <p className="text-lg text-dark-slate leading-relaxed">
              I'm a Quality Assurance Engineer with a deep curiosity about how things work—and how to make them better. 
              My journey started with manual testing, where I learned the importance of attention to detail and user empathy.
            </p>
            <p className="text-lg text-dark-slate leading-relaxed">
              Now, I'm expanding into automation and software development testing, exploring tools like Selenium, JavaScript, 
              and diving into cybersecurity fundamentals. I believe quality isn't just about finding bugs—it's about understanding 
              the entire system and building trust through every test case.
            </p>
            <p className="text-lg text-dark-slate leading-relaxed">
              When I'm not testing, you'll find me learning something new, experimenting with code, or exploring how technology 
              can solve real-world problems. Let's build something meaningful together.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal-blue">Core Skills</h2>
            <p className="text-lg text-dark-slate">Building expertise through hands-on learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={idx}
                  className="glass p-8 rounded-2xl hover:shadow-lift transition-smooth hover:-translate-y-2 group cursor-pointer"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-teal flex items-center justify-center group-hover:shadow-glow transition-smooth">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal-blue">{skill.name}</h3>
                    <p className="text-dark-slate">{skill.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-24 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal-blue">Featured Projects</h2>
            <p className="text-lg text-dark-slate">Learning by building real solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="glass overflow-hidden rounded-2xl hover:shadow-lift transition-smooth hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-40 transition-smooth" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-charcoal-blue">{project.title}</h3>
                  <p className="text-dark-slate">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white">
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white">
                      GitHub
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal-blue">My Journey</h2>
            <p className="text-lg text-dark-slate">Growing one step at a time</p>
          </div>

          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-teal" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center gap-8 ${
                    idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="glass p-6 rounded-2xl shadow-soft inline-block">
                      <Badge className="mb-2 bg-deep-teal text-white">{item.year}</Badge>
                      <h3 className="font-heading text-xl font-semibold text-charcoal-blue mb-2">{item.title}</h3>
                      <p className="text-dark-slate">{item.desc}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-deep-teal shadow-glow" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 px-6 bg-gradient-dark">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white">
            Let's Build Something Meaningful Together
          </h2>
          <p className="text-xl text-ash-grey leading-relaxed">
            Whether it's a project, an opportunity, or just a conversation about quality and technology—
            I'd love to hear from you.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button className="bg-white text-deep-teal hover:shadow-glow transition-smooth">
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Call
            </Button>
          </div>

          {/* Footer Social */}
          <div className="flex gap-6 justify-center pt-8">
            <a href="#" className="text-ash-grey hover:text-white transition-smooth hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-ash-grey hover:text-white transition-smooth hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-ash-grey hover:text-white transition-smooth hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm text-ash-grey pt-8">
            © 2024 Shohel Rana. Crafted with passion and attention to detail.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
