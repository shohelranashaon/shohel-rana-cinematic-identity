import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, GraduationCap, Briefcase, BookOpen, FileText, Code2, TestTube, Database, Globe } from "lucide-react";
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
        const colors = ['--purple', '--pink', '--cyan'];
        particle.style.background = `hsl(var(${colors[Math.floor(Math.random() * colors.length)]}))`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  const education = [
    {
      institution: "Bangladesh University of Business and Technology (BUBT)",
      degree: "Bachelor of Science in Computer Science and Engineering (BSc in CSE)",
      period: "Feb 2020 – June 2024",
      details: "CGPA: 3.69 out of 4.0"
    },
    {
      institution: "Kurigram Government College, Kurigram",
      degree: "Science HSC-2019",
      period: "2019",
      details: "GPA: 4.75 out of 5.00"
    },
    {
      institution: "Kurigram Government High School, Kurigram",
      degree: "Science SSC-2016",
      period: "2016",
      details: "GPA: 5.00 out of 5.00"
    }
  ];

  const experiences = [
    {
      title: "Software Test Engineer",
      company: "NGO Forum for Public Health (ERP System)",
      period: "Sep 2025 – Present",
      responsibilities: [
        "Working as a core QA member for the NGO Forum ERP system",
        "Testing three major modules: HRM, Supply Chain (Procurement), and Accounting",
        "Executing functional, integration, and system testing across all ERP workflows",
        "Designing detailed test cases and scenarios to ensure accurate business process flow",
        "Validating procurement cycle steps (PR, RFQ, CS, PO, GRN, Payment) with end-to-end testing",
        "Testing HRM processes such as attendance, leave, payroll, and employee lifecycle",
        "Ensuring accounting module accuracy including voucher, ledger, COA mapping, and financial reporting",
        "Reporting and tracking issues with Jira/Excel and ensuring timely fixes",
        "Assisting in UAT and communicating with development & business teams for smooth deployment"
      ]
    },
    {
      title: "Jr. SQA Engineer",
      company: "4axiz IT Ltd.",
      period: "Jan 2025 – Aug 2025",
      responsibilities: [
        "Tested mobile and web applications to ensure quality and performance",
        "Worked with ERP to improve software usability",
        "Applied knowledge of SDLC and STLC in real projects",
        "Performed API testing with Postman to check system reliability",
        "Reported and tracked bugs using Jira, Excel file",
        "Designed and executed test cases that reduced errors in projects",
        "Applied JavaScript and Playwright for basic test automation",
        "Contributed to client projects with smooth delivery"
      ]
    },
    {
      title: "Jr. SQA Engineer (Intern)",
      company: "4axiz IT Ltd.",
      period: "Oct 2024 – Dec 2024",
      responsibilities: [
        "Performed manual testing for web and mobile applications",
        "Created and executed test cases to identify and report bugs",
        "Tracked and reported bugs using Jira, Excel File"
      ]
    }
  ];

  const projects = [
    {
      title: "Youth Organization Bangladesh",
      desc: "YOB is a youth group in Bangladesh that helps young people learn skills, grow as leaders, and take part in social activities. I have tested the YOB website, including login, forms, password checks, and navigation, to ensure everything works smoothly.",
      tech: ["Manual Testing", "Web Testing", "Jira"],
      type: "Testing"
    },
    {
      title: "Somvabona Web and Mobile App Testing",
      desc: "Somvabona is a health screening system where doctors and medical assistants visit schools or institutions to check students' health. I have manually tested the Web and Mobile applications, including dashboard, schools and campuses management, doctors and medical assistants assignment, student health screening, invoices and reports, and user permissions.",
      tech: ["Manual Testing", "Web Testing", "Mobile Testing", "Jira"],
      type: "Testing"
    },
    {
      title: "Swag Labs Automation (Playwright + JavaScript)",
      desc: "Automated the Swag Labs website using Playwright with JavaScript to test login, add-to-cart, and checkout functionalities following the Page Object Model (POM) design. Implemented Allure reporting for detailed test execution results and debugging insights.",
      tech: ["Playwright", "JavaScript", "POM", "Allure"],
      type: "Automation"
    },
    {
      title: "Convay Meeting Automation (Playwright + JavaScript)",
      desc: "Developed an automation framework for the Convay Meeting Platform using Playwright (JavaScript), covering host meeting creation, link sharing, participant joining, and audio validation (mic mute/unmute, WebRTC permissions). Implemented a POM-based structure with centralized locators and reusable utilities, and integrated Allure reporting with cross-browser support.",
      tech: ["Playwright", "JavaScript", "POM", "Allure", "WebRTC"],
      type: "Automation"
    },
    {
      title: "Shomvabona Quiz App",
      desc: "Tested the Somvabona web and mobile app manually to ensure smooth performance. I checked main features like the dashboard, school and user management, attendance, quizzes, reports, and user permissions to confirm everything works properly.",
      tech: ["Manual Testing", "Web Testing", "Mobile Testing", "Excel"],
      type: "Testing"
    }
  ];

  const technologies = [
    { category: "Languages", items: ["JavaScript", "SQL (basic)"] },
    { category: "Automation and Testing Tools", items: ["Playwright", "Selenium", "Postman", "JMeter", "Node.js"] },
    { category: "Reporting Tools", items: ["Allure"] }
  ];

  return (
    <div className="min-h-screen bg-dark-bg overflow-hidden">
      {/* Floating Particles */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start px-6 py-20">
        <div className="max-w-7xl mx-auto w-full z-10">
          {/* Background Circles */}
          <div className="absolute right-[20%] top-[30%] w-96 h-96 rounded-full bg-gradient-to-br from-cyan/20 via-purple/20 to-pink/20 blur-3xl opacity-40 animate-float" />
          <div className="absolute right-[10%] top-[50%] w-64 h-64 rounded-full bg-gradient-to-br from-purple/20 via-pink/20 to-cyan/20 blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }} />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="relative space-y-6 animate-fade-up">
              <Badge className="glass text-purple-light border-purple px-4 py-2 rounded-lg inline-block">
                Software Test Engineer • SQA
              </Badge>
              <h1 className="font-heading text-6xl lg:text-8xl font-bold leading-tight">
                <span className="block">
                  <span 
                    style={{
                      background: 'linear-gradient(135deg, hsl(180 75% 70%) 0%, hsl(270 65% 70%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Hi, I'm{' '}
                  </span>
                  <span 
                    style={{
                      background: 'linear-gradient(135deg, hsl(270 65% 70%) 0%, hsl(320 65% 75%) 50%, hsl(180 75% 70%) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Shohel Rana
                  </span>
                </span>
                <span 
                  className="block"
                  style={{
                    background: 'linear-gradient(135deg, hsl(180 75% 70%) 0%, hsl(270 65% 70%) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Shaon
                </span>
              </h1>
              
              {/* Contact Info */}
              <div className="space-y-3 text-purple-light">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple" />
                  <span className="text-sm">Rainkhola, Cha Block, Mirpur-2, Dhaka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple" />
                  <a href="mailto:shohelranas165@gmail.com" className="text-sm hover:text-purple-bright transition-smooth">
                    shohelranas165@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple" />
                  <a href="tel:+880177693865" className="text-sm hover:text-purple-bright transition-smooth">
                    +880177693865
                  </a>
                </div>
                <div className="flex gap-4 pt-2">
                  <a 
                    href="https://www.linkedin.com/in/md-shohel-rana-shaon-306183209/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-full hover:shadow-purple transition-smooth hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-purple" />
                  </a>
                  <a 
                    href="https://github.com/shohelranashaon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-full hover:shadow-pink transition-smooth hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-pink" />
                  </a>
                  <a 
                    href="mailto:shohelranas165@gmail.com"
                    className="glass p-3 rounded-full hover:shadow-cyan transition-smooth hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-cyan" />
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-up animation-delay-300">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-full rounded-full opacity-30 blur-3xl animate-float" />
                <img
                  src={heroPortrait}
                  alt="Shohel Rana Shaon"
                  className="relative glass rounded-3xl w-full h-full object-cover shadow-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Objective Section */}
      <section className="relative py-24 px-6 bg-dark-soft">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-12 rounded-3xl shadow-soft space-y-6 border-purple/30">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-purple" />
              <h2 className="font-heading text-4xl font-bold text-cyan-light">Career Objective</h2>
            </div>
            <div className="h-1 w-20 bg-gradient-teal rounded-full" />
            <p className="text-lg text-purple-light leading-relaxed">
              To build a career as a SQA Engineer by applying skills in software testing, automation, and bug tracking to ensure product quality. Dedicated to continuous learning and growth with the aim of becoming an Automation Engineer in the future.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-24 px-6 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-purple" />
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cyan-light">Education</h2>
            </div>
            <p className="text-lg text-purple-light">Academic journey and achievements</p>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <Card
                key={idx}
                className="glass p-8 rounded-2xl hover:shadow-lift transition-smooth border-purple/30"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl font-semibold text-cyan-light mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-purple-light mb-1">{edu.degree}</p>
                      <p className="text-sm text-purple/80">{edu.period}</p>
                    </div>
                    <Badge className="bg-gradient-purple text-white px-4 py-2">
                      {edu.details}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-24 px-6 bg-dark-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-purple" />
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cyan-light">Experience</h2>
            </div>
            <p className="text-lg text-purple-light">Professional journey in software testing</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <Card
                key={idx}
                className="glass p-8 rounded-2xl hover:shadow-lift transition-smooth border-purple/30"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-cyan-light mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-purple-light">{exp.company}</p>
                    </div>
                    <Badge className="bg-gradient-pink text-white px-4 py-2">
                      {exp.period}
                    </Badge>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-purple-light">
                        <span className="text-purple mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-24 px-6 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Code2 className="w-8 h-8 text-purple" />
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cyan-light">Completed Projects</h2>
            </div>
            <p className="text-lg text-purple-light">Real-world testing and automation projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const gradients = [
                "bg-gradient-purple",
                "bg-gradient-pink",
                "bg-gradient-cyan",
                "bg-gradient-teal",
                "bg-gradient-purple"
              ];
              return (
                <Card
                  key={idx}
                  className="glass p-6 rounded-2xl hover:shadow-lift transition-smooth hover:-translate-y-2 group border-purple/30"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl ${gradients[idx]} flex items-center justify-center`}>
                        {project.type === "Automation" ? (
                          <Code2 className="w-6 h-6 text-white" />
                        ) : (
                          <TestTube className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <Badge variant="secondary" className="text-xs bg-purple-dark text-purple-light">
                        {project.type}
                      </Badge>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-cyan-light">{project.title}</h3>
                    <p className="text-purple-light text-sm leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-purple-dark text-purple-light">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="relative py-24 px-6 bg-dark-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-purple" />
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cyan-light">Publications</h2>
            </div>
            <p className="text-lg text-purple-light">Research contributions</p>
          </div>

          <Card className="glass p-8 rounded-2xl shadow-soft border-purple/30">
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-semibold text-cyan-light">
                Comparative Analysis on Predicting Price Hike with Sources Using Different Machine Learning Algorithms
              </h3>
              <p className="text-purple-light">
                <strong className="text-purple-bright">Authors:</strong> Taufique Hedayet, Anup Sen, Mahfuza Akter Jarin, Md. Shohel Rana Shaon, Joybordhan Sarkar and Sadah Anjum Shanto
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-light">
                <span className="text-purple">ICICT 2025, London</span>
                <span>•</span>
                <span>Volume 8, Conference proceedings</span>
                <span>•</span>
                <span>01 October 2025</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-24 px-6 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Globe className="w-8 h-8 text-purple" />
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cyan-light">Technologies</h2>
            </div>
            <p className="text-lg text-purple-light">Tools and technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => {
              const gradients = [
                "bg-gradient-purple",
                "bg-gradient-pink",
                "bg-gradient-cyan"
              ];
              return (
                <Card
                  key={idx}
                  className="glass p-8 rounded-2xl hover:shadow-lift transition-smooth border-purple/30"
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-2xl ${gradients[idx]} flex items-center justify-center`}>
                      {idx === 0 ? (
                        <Code2 className="w-7 h-7 text-white" />
                      ) : idx === 1 ? (
                        <TestTube className="w-7 h-7 text-white" />
                      ) : (
                        <FileText className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-cyan-light">{tech.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, i) => (
                        <Badge key={i} variant="secondary" className="text-sm bg-purple-dark text-purple-light">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 px-6 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cyan-light">
            Let's Build Something Meaningful Together
          </h2>
          <p className="text-xl text-purple-light leading-relaxed">
            Whether it's a project, an opportunity, or just a conversation about quality and technology—
            I'd love to hear from you.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              className="bg-gradient-teal text-white hover:shadow-glow transition-smooth hover:scale-105"
              asChild
            >
              <a href="mailto:shohelranas165@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-purple text-purple hover:bg-purple hover:text-white hover:scale-105 transition-smooth"
              asChild
            >
              <a href="tel:+880177693865">
                <Phone className="w-4 h-4 mr-2" />
                Call Me
              </a>
            </Button>
          </div>

          {/* Footer Social */}
          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/shohelranashaon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple hover:text-purple-bright transition-smooth hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/md-shohel-rana-shaon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink hover:text-pink-bright transition-smooth hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:shohelranas165@gmail.com"
              className="text-cyan hover:text-cyan-bright transition-smooth hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm text-purple-light/70 pt-8">
            © 2024 Shohel Rana Shaon. Crafted with passion and attention to detail.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
