import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { supabase } from "../../lib/supabase";

interface JoinUsSubmission {
  id?: string;
  full_name: string;
  email: string;
  phone?: string;
  organization?: string;
  area_of_interest: string;
  message?: string;
  created_at?: string;
  updated_at?: string;
}

export const JoinUs = (): JSX.Element => {
  const [formData, setFormData] = useState<Omit<JoinUsSubmission, 'id' | 'created_at' | 'updated_at'>>({
    full_name: '',
    email: '',
    phone: '',
    organization: '',
    area_of_interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('join_us_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        organization: '',
        area_of_interest: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-br from-bg via-slate-900 to-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--app-accent)_0%,transparent_50%)] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-app-accent/5 to-transparent animate-pulse" />
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-green-400/30 rounded-full animate-float"
              style={{
                left: `${15 + i * 18}%`,
                top: `${25 + i * 12}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 py-16 sm:py-24 md:py-32 px-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 animate-fade-in-down">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg">
              ✨ Join Us
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-wei max-w-5xl leading-tight font-['Chronicle_Display-Semibold'] animate-slide-in-up">
            Be Part of the
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent animate-pulse">
              Green Revolution
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed font-['Instrument_Serif'] animate-slide-in-up" style={{animationDelay: '200ms'}}>
            Join our mission to transform India's waste management landscape. Your career becomes a catalyst for environmental change, creating lasting impact for future generations.
          </p>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-transparent to-slate-900/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wei mb-4 font-['Chronicle_Display-Semibold']">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-300 font-['Instrument_Serif'] max-w-2xl mx-auto">
              Transform your organization's environmental impact through strategic collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <Card className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-blue-500/20 hover:border-blue-500/50 p-8 hover:scale-105 transition-all duration-500 animate-slide-in-left">
              <CardContent className="p-0">
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300 font-['Chronicle_Display-Semibold']">
                      Corporates & Municipalities
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed font-['Instrument_Serif'] mb-6">
                  Partner with us to implement sustainable waste management solutions at scale. Our platform provides essential data insights that enable better governance and drive measurable environmental progress.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Data-driven sustainability reporting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Scalable waste management systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Community engagement solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 p-8 hover:scale-105 transition-all duration-500 animate-slide-in-right">
              <CardContent className="p-0">
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-purple-400 mb-4 group-hover:text-purple-300 transition-colors duration-300 font-['Chronicle_Display-Semibold']">
                      CSR & NGO Partners
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed font-['Instrument_Serif'] mb-6">
                  Join our network of change-makers driving environmental sustainability. We integrate with NGOs and corporate CSR initiatives to create meaningful, measurable impact in communities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Community outreach programs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Environmental education initiatives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Sustainable development projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Internship & Volunteering */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-transparent via-green-500/5 to-transparent">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-green-500/20 hover:border-green-500/50 p-8 lg:p-12 hover:scale-105 transition-all duration-500">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500">
                        <span className="text-3xl">🎓</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-green-400 font-['Chronicle_Display-Semibold']">
                        Internships & Volunteering
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed font-['Instrument_Serif'] mb-6">
                      Join our mission as a student, change-maker, or passionate individual. Our internship and volunteering programs offer hands-on experience in environmental sustainability with measurable impact.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="text-green-400 font-semibold mb-1">Recognized Certification</h4>
                          <p className="text-sm text-gray-400">Receive certificates upon successful completion</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="text-green-400 font-semibold mb-1">Real Impact Measurement</h4>
                          <p className="text-sm text-gray-400">Track and quantify your environmental contributions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="text-green-400 font-semibold mb-1">Mentorship Program</h4>
                          <p className="text-sm text-gray-400">Learn from industry experts and environmental leaders</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl transform rotate-3"></div>
                    <div className="relative z-10 bg-gradient-to-b from-slate-700/50 to-slate-800/50 border border-green-500/30 rounded-3xl p-6">
                      <h4 className="text-xl font-bold text-white mb-4 font-['Chronicle_Display-Semibold']">
                        Program Benefits
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Duration</span>
                          <span className="text-green-400 font-semibold">3-6 months</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Commitment</span>
                          <span className="text-green-400 font-semibold">Flexible</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Certificate</span>
                          <span className="text-green-400 font-semibold">Guaranteed</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Remote Options</span>
                          <span className="text-green-400 font-semibold">Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900/30 to-transparent">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-wei mb-4 font-['Chronicle_Display-Semibold']">
                Ready to Make an Impact?
              </h3>
              <p className="text-lg text-gray-300 font-['Instrument_Serif']">
                Tell us about yourself and how you'd like to contribute to our mission
              </p>
            </div>
            <Card className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 transition-all duration-500">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-gray-300 font-semibold">Full Name *</Label>
                      <Input 
                        id="fullName"
                        name="full_name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.full_name}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 font-semibold">Email *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300 font-semibold">Phone</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-gray-300 font-semibold">Organization/Institution</Label>
                      <Input 
                        id="organization"
                        name="organization"
                        type="text"
                        placeholder="Enter your organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-gray-300 font-semibold">Area of Interest *</Label>
                    <select 
                      id="interest"
                      name="area_of_interest"
                      value={formData.area_of_interest}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-md px-3 py-2 focus:border-green-400 focus:ring-green-400/20"
                    >
                      <option value="">Select your area of interest</option>
                      <option value="internship">Internship Program</option>
                      <option value="volunteering">Volunteering</option>
                      <option value="corporate">Corporate Partnership</option>
                      <option value="ngo">NGO Collaboration</option>
                      <option value="career">Career Opportunities</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300 font-semibold">Message/Comments</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Tell us more about your interest and how you'd like to contribute..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20 min-h-32 resize-none"
                    />
                  </div>
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500 rounded-md text-green-400 text-sm">
                      Thank you for your interest! We'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500 rounded-md text-red-400 text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-wei mb-4 font-['Chronicle_Display-Semibold']">
                Career Opportunities
              </h3>
              <p className="text-lg text-gray-300 font-['Instrument_Serif'] max-w-2xl mx-auto">
                Join our mission-driven team and help build the future of sustainable waste management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "UI/UX Designer",
                  department: "Design",
                  type: "Full-time",
                  icon: "🎨",
                  color: "from-pink-500 to-rose-500",
                  skills: ["Figma", "User Research", "Prototyping"]
                },
                {
                  title: "Frontend Developer",
                  department: "Engineering",
                  type: "Full-time",
                  icon: "💻",
                  color: "from-blue-500 to-indigo-500",
                  skills: ["React", "TypeScript", "Tailwind"]
                },
                {
                  title: "Data Analyst",
                  department: "Analytics",
                  type: "Full-time",
                  icon: "📈",
                  color: "from-green-500 to-teal-500",
                  skills: ["Python", "SQL", "Tableau"]
                },
                {
                  title: "DevOps Engineer",
                  department: "Infrastructure",
                  type: "Full-time",
                  icon: "⚙️",
                  color: "from-purple-500 to-violet-500",
                  skills: ["AWS", "Docker", "Kubernetes"]
                },
                {
                  title: "Business Development",
                  department: "Growth",
                  type: "Full-time",
                  icon: "📈",
                  color: "from-orange-500 to-amber-500",
                  skills: ["Strategy", "Partnerships", "Growth"]
                },
                {
                  title: "Operations Team",
                  department: "Operations",
                  type: "Contract",
                  icon: "🚚",
                  color: "from-cyan-500 to-blue-500",
                  skills: ["Logistics", "Field Ops", "Training"]
                }
              ].map((job, index) => (
                <Card key={job.title} className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-app-accent/10 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${job.color} group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl">{job.icon}</span>
                      </div>
                      <span className="bg-app-accent-200 text-app-accent px-2 py-1 rounded-full text-xs font-semibold">
                        {job.type}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-app-accent transition-colors duration-300 font-['Chronicle_Display-Semibold']">
                      {job.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">{job.department}</p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Key Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span key={skill} className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6 font-['Instrument_Serif']">
                Don't see a role that fits? We're always looking for talented individuals.
              </p>
              <Button size="lg" variant="outline" className="border-2 border-app-accent text-app-accent hover:bg-app-accent hover:text-black px-8 py-4 rounded-full transition-all duration-300">
                Send Us Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900/30 to-bg">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="text-2xl">🌱</span>
                  <span className="text-white font-semibold text-sm">Join the Green Revolution</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-['Chronicle_Display-Semibold']">
                  Ready to Make a Difference?
                </h2>
                
                <p className="text-lg sm:text-xl text-white/90 mb-8 font-['Instrument_Serif'] max-w-3xl mx-auto leading-relaxed">
                  Join thousands of changemakers who are already transforming India's waste management landscape. Together, we're building a cleaner, more sustainable future for generations to come.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-green-600 font-bold hover:bg-gray-100 px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                    Start Your Journey
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-full transition-all duration-300">
                    Learn More About Us
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">10+</div>
                    <div className="text-sm text-white/80">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">5+</div>
                    <div className="text-sm text-white/80">Cities Planned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};