import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { supabase, type ContactSubmission } from "../../lib/supabase";

export const ContactUs = (): JSX.Element => {
  const [formData, setFormData] = useState<Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at'>>({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
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
      <section className="relative flex flex-col items-center justify-center text-center min-h-[70vh] bg-gradient-to-br from-bg via-slate-900 to-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--app-accent)_0%,transparent_50%)] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-app-accent/5 to-transparent animate-pulse" />
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-app-accent-200 rounded-full animate-float"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 15}%`,
                animationDelay: `${i * 1}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 py-16 sm:py-24 md:py-32 px-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 animate-fade-in-down">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-app-accent"></div>
            <span className="text-app-accent font-semibold text-sm tracking-wider uppercase">Contact Us</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-app-accent"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-wei max-w-5xl leading-tight font-['Chronicle_Display-Semibold'] animate-slide-in-up">
            Let's Start a
            <span className="block bg-gradient-to-r from-app-accent via-emerald-400 to-app-accent bg-clip-text text-transparent animate-pulse">
              Conversation
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed font-['Instrument_Serif'] animate-slide-in-up" style={{animationDelay: '200ms'}}>
            Ready to transform waste management in your community? We'd love to hear from you and explore how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-transparent to-slate-900/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-wei mb-4 font-['Chronicle_Display-Semibold']">Send us a message</h2>
                <p className="text-lg text-gray-300 font-['Instrument_Serif']">We'll get back to you within 24 hours</p>
              </div>
              <Card className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 transition-all duration-500">
                <CardContent className="p-6 sm:p-8" style={{paddingBottom: '20%'}}>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-900/20 border border-green-500/50 rounded-lg">
                      <p className="text-green-400 font-semibold">✅ Message sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg">
                      <p className="text-red-400 font-semibold">❌ Failed to send message. Please try again.</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="block mb-2 text-gray-300 font-semibold">First Name</Label>
                        <Input 
                          type="text" 
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-app-accent focus:ring-app-accent/20"
                          required
                        />
                      </div>
                      <div>
                        <Label className="block mb-2 text-gray-300 font-semibold">Last Name</Label>
                        <Input 
                          type="text" 
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-app-accent focus:ring-app-accent/20"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="block mb-2 text-gray-300 font-semibold">Email</Label>
                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-app-accent focus:ring-app-accent/20"
                        required
                      />
                    </div>
                    <div>
                      <Label className="block mb-2 text-gray-300 font-semibold">Subject</Label>
                      <Input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-app-accent focus:ring-app-accent/20"
                        required
                      />
                    </div>
                    <div>
                      <Label className="block mb-2 text-gray-300 font-semibold">Message</Label>
                      <Textarea 
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-app-accent focus:ring-app-accent/20 resize-none"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-app-accent to-emerald-400 text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-app-accent/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-wei mb-4 font-['Chronicle_Display-Semibold']">Get In Touch</h2>
                <p className="text-lg text-gray-300 font-['Instrument_Serif']">Choose the best way to reach us</p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: "💬",
                    title: "General Inquiries",
                    email: "hello@clynnn.com",
                    description: "For general questions and information about our platform",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: "🤝",
                    title: "Partnership Opportunities",
                    email: "partnerships@clynnn.com",
                    description: "Interested in partnering with us? Let's explore collaboration opportunities",
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: "🛠️",
                    title: "Technical Support",
                    email: "support@clynnn.com",
                    description: "Need help with our platform? Our technical team is here to assist",
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    icon: "💼",
                    title: "Careers",
                    email: "careers@clynnn.com",
                    description: "Join our team and help us build the future of waste management",
                    color: "from-orange-500 to-red-500"
                  }
                ].map((contact, index) => (
                  <Card key={contact.title} className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 hover:scale-105 transition-all duration-500 animate-scale-in-center" style={{animationDelay: `${index * 100}ms`}}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-r ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl">{contact.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-app-accent mb-2 group-hover:text-emerald-400 transition-colors duration-300 font-['Chronicle_Display-Semibold']">
                            {contact.title}
                          </h3>
                          <p className="text-white font-semibold mb-2 font-mono text-sm">
                            {contact.email}
                          </p>
                          <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed font-['Instrument_Serif']">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
        </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-transparent via-app-accent/5 to-transparent">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wei mb-4 font-['Chronicle_Display-Semibold'] animate-slide-in-left">
              Our Offices
            </h2>
            <p className="text-lg text-gray-300 font-['Instrument_Serif']">
              Visit us at any of our locations across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                city: "Mumbai",
                address: "Tech Hub, Bandra Kurla Complex",
                state: "Maharashtra",
                type: "Headquarters",
                icon: "🏢",
                color: "from-blue-500 to-indigo-600"
              },
              {
                city: "Bangalore",
                address: "Innovation Center, Koramangala",
                state: "Karnataka",
                type: "Development Center",
                icon: "💻",
                color: "from-purple-500 to-violet-600"
              },
              {
                city: "Delhi",
                address: "Business District, Connaught Place",
                state: "New Delhi",
                type: "Regional Office",
                icon: "🏛️",
                color: "from-green-500 to-teal-600"
              }
            ].map((office, index) => (
              <Card key={office.city} className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-app-accent/10 animate-scale-in-center" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${office.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{office.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-wei mb-2 group-hover:text-app-accent transition-colors duration-300 font-['Chronicle_Display-Semibold']">
                    {office.city}
                  </h3>
                  <span className="inline-block bg-gradient-to-r from-app-accent to-emerald-400 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {office.type}
                  </span>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-2 font-['Instrument_Serif']">
                    {office.address}
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-['Instrument_Serif']">
                    {office.state}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-12 sm:py-16 md:py-24 animate-fade-in-up px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-['Instrument_Serif'] text-wei mb-8 sm:mb-12 text-center animate-slide-in-left">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {[
            {
              question: "How does Clynnn's waste management system work?",
              answer: "Our platform uses gamification and community engagement to encourage proper waste disposal and collection. Users earn rewards for participating in our waste management network."
            },
            {
              question: "Is Clynnn available in my city?",
              answer: "We're currently expanding across major Indian cities. Contact us to check availability in your area or to express interest in bringing Clynnn to your community."
            },
            {
              question: "How can municipalities partner with Clynnn?",
              answer: "We work closely with local governments to implement sustainable waste management solutions. Reach out to our partnerships team to discuss collaboration opportunities."
            },
            {
              question: "What makes Clynnn different from other waste management solutions?",
              answer: "Our unique combination of technology, gamification, and community engagement creates a comprehensive ecosystem that makes waste management both effective and rewarding."
            }
          ].map((faq, index) => (
            <Card key={index} className="animate-slide-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-app-accent mb-2 sm:mb-3 font-['Instrument_Serif']">{faq.question}</h3>
                <p className="text-[#fff8f8] leading-relaxed font-['Jacques_Francois'] text-sm sm:text-base">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};