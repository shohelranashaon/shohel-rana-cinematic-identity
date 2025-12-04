import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Phone, MapPin, Code2, ExternalLink, Briefcase, BookOpen, FileText, TestTube, Globe } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:shohelranas165@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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

  const technologies = [
    { category: "Languages", items: ["JavaScript", "SQL (basic)"] },
    { category: "Automation and Testing Tools", items: ["Playwright", "Selenium", "Postman", "JMeter", "Node.js"] },
    { category: "Reporting Tools", items: ["Allure"] }
  ];

  const projects = [
    {
      title: "Youth Organization Bangladesh",
      desc: "YOB is a youth group in Bangladesh that helps young people learn skills, grow as leaders, and take part in social activities. I have tested the YOB website, including login, forms, password checks, and navigation, to ensure everything works smoothly.",
      codeUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Somvabona Web and Mobile App Testing",
      desc: "Somvabona is a health screening system where doctors and medical assistants visit schools or institutions to check students' health. I have manually tested the Web and Mobile applications, including dashboard, schools and campuses management, doctors and medical assistants assignment, student health screening, invoices and reports, and user permissions.",
      
    },
    {
      title: "Swag Labs Automation (Playwright + JavaScript)",
      desc: "Automated the Swag Labs website using Playwright with JavaScript to test login, add-to-cart, and checkout functionalities following the Page Object Model (POM) design. Implemented Allure reporting for detailed test execution results and debugging insights.",
      codeUrl: "https://github.com/shohelranashaon/SwagLabsAutomation",
     
    },
    {
      title: "Convay Meeting Automation (Playwright + JavaScript)",
      desc: "Developed an automation framework for the Convay Meeting Platform using Playwright (JavaScript), covering host meeting creation, link sharing, participant joining, and audio validation (mic mute/unmute, WebRTC permissions). Implemented a POM-based structure with centralized locators and reusable utilities, and integrated Allure reporting with cross-browser support.",
      codeUrl: "https://github.com/shohelranashaon/ConvayAssessment",

    },
    {
      title: "Shomvabona Quiz App",
      desc: "Tested the Somvabona web and mobile app manually to ensure smooth performance. I checked main features like the dashboard, school and user management, attendance, quizzes, reports, and user permissions to confirm everything works properly.",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start pt-16 sm:pt-20 px-4 sm:px-6 py-12 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center lg:items-start">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 z-10 lg:pt-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-[#00d4ff]"> Md. Shohel Rana</span>
                  <br />
                  <span className="text-[#00d4ff]">Shaon</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Software Test Engineer & SQA Explorer. Committed to building quality software through manual testing, automation, and continuous learning.
                </p>
              </div>

              {/* Social Icons - Square buttons */}
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/md-shohel-rana-shaon-306183209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center hover:border-[#00d4ff] hover:bg-[#1a1a1a]/50 transition-all active:scale-95"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a
                  href="https://github.com/shohelranashaon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center hover:border-[#00d4ff] hover:bg-[#1a1a1a]/50 transition-all active:scale-95"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a
                  href="mailto:shohelranas165@gmail.com"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center hover:border-[#00d4ff] hover:bg-[#1a1a1a]/50 transition-all active:scale-95"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a
                  href="tel:+880177693865"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center justify-center hover:border-[#00d4ff] hover:bg-[#1a1a1a]/50 transition-all active:scale-95"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
              </div>

              {/* View My Work Button */}
              <div className="flex justify-center lg:justify-start">
                <Button
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#00d4ff] hover:bg-[#00b8e6] text-black font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-lg transition-all shadow-lg shadow-[#00d4ff]/30 text-sm sm:text-base active:scale-95"
                >
                  View My Work
                </Button>
              </div>
            </div>

            {/* Right - Profile Picture */}
            <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0 lg:mt-0">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
                {/* Glow effect behind */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00d4ff] via-[#0099cc] to-[#00d4ff] opacity-30 blur-3xl animate-pulse" />
                {/* Border with glow */}
                <div className="relative rounded-xl border-4 border-[#00d4ff] p-1 shadow-[0_0_50px_rgba(0,212,255,0.6)]">
                  <div className="rounded-xl overflow-hidden bg-[#1a1a1a] p-1">
                    <img
                      src={heroPortrait}
                      alt="Shohel Rana Shaon"
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Objective Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#1a1a1a] border border-gray-800 p-6 sm:p-8 rounded-lg">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-[#00d4ff]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#00d4ff]">Career Objective</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              To build a career as a SQA Engineer by applying skills in software testing, automation, and bug tracking to ensure product quality. Dedicated to continuous learning and growth with the aim of becoming an Automation Engineer in the future.
            </p>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-[#00d4ff]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
              <span className="text-[#00d4ff]">Experience</span>
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, idx) => (
              <Card
                key={idx}
                className="bg-[#1a1a1a] border border-gray-800 p-4 sm:p-6 rounded-lg hover:border-[#00d4ff]/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 text-[#00d4ff]">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">{exp.company}</p>
                  </div>
                  <div className="bg-[#00d4ff] text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-sm sm:text-base w-fit">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-300">
                      <span className="text-[#00d4ff] mt-1.5 flex-shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
            My <span className="text-[#00d4ff]">Projects</span>
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="bg-[#1a1a1a] border border-gray-800 p-5 sm:p-6 rounded-lg hover:border-[#00d4ff]/50 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#00d4ff]">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-gray-700 text-gray-300 hover:border-[#00d4ff] hover:text-[#00d4ff] text-sm sm:text-base py-5 sm:py-6 active:scale-95"
                  >
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <Code2 className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-gray-700 text-gray-300 hover:border-[#00d4ff] hover:text-[#00d4ff] text-sm sm:text-base py-5 sm:py-6 active:scale-95"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16">
            <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#00d4ff]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
              <span className="text-[#00d4ff]">Technologies</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => (
              <Card
                key={idx}
                className="bg-[#1a1a1a] border border-gray-800 p-5 sm:p-6 rounded-lg hover:border-[#00d4ff]/50 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#00d4ff]">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, i) => (
                    <span
                      key={i}
                      className="bg-[#0a0a0a] border border-gray-700 text-gray-300 px-2.5 sm:px-3 py-1 rounded-lg text-xs sm:text-sm hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#00d4ff]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
              <span className="text-[#00d4ff]">Publications</span>
            </h2>
          </div>

          <Card className="bg-[#1a1a1a] border border-gray-800 p-6 sm:p-8 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#00d4ff]">
              Comparative Analysis on Predicting Price Hike with Sources Using Different Machine Learning Algorithms
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-3">
              <strong className="text-[#00d4ff]">Authors:</strong> Taufique Hedayet, Anup Sen, Mahfuza Akter Jarin, Md. Shohel Rana Shaon, Joybordhan Sarkar and Sadah Anjum Shanto
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400">
              <span className="text-[#00d4ff]">ICICT 2025, London</span>
              <span>•</span>
              <span>Volume 8, Conference proceedings</span>
              <span>•</span>
              <span>01 October 2025</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
            Get In <span className="text-[#00d4ff]">Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#00d4ff]">Email</h3>
                <a
                  href="mailto:shohelranas165@gmail.com"
                  className="text-sm sm:text-base text-gray-300 hover:text-[#00d4ff] transition-colors break-all"
                >
                  shohelranas165@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#00d4ff]">Phone</h3>
                <a
                  href="tel:+880177693865"
                  className="text-sm sm:text-base text-gray-300 hover:text-[#00d4ff] transition-colors"
                >
                  +880177693865
                </a>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#00d4ff]">Location</h3>
                <p className="text-sm sm:text-base text-gray-300">Rainkhola, Cha Block, Mirpur-2, Dhaka</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm sm:text-base text-gray-300 mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#1a1a1a] border-gray-700 text-white focus:border-[#00d4ff] text-sm sm:text-base py-5 sm:py-6"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm sm:text-base text-gray-300 mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#1a1a1a] border-gray-700 text-white focus:border-[#00d4ff] text-sm sm:text-base py-5 sm:py-6"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-sm sm:text-base text-gray-300 mb-2 block">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-[#1a1a1a] border-gray-700 text-white focus:border-[#00d4ff] text-sm sm:text-base py-5 sm:py-6"
                  placeholder="Subject"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm sm:text-base text-gray-300 mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#1a1a1a] border-gray-700 text-white focus:border-[#00d4ff] min-h-[120px] text-sm sm:text-base py-5 sm:py-6"
                  placeholder="Your Message"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#00d4ff] hover:bg-[#00b8e6] text-black font-semibold py-5 sm:py-6 text-sm sm:text-base active:scale-95"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-[#0a0a0a] border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="text-sm sm:text-base">© 2025 Shohel Rana Shaon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
