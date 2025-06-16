import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const AboutUs = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[70vh] bg-gradient-to-br from-bg via-slate-900 to-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--app-accent)_0%,transparent_50%)] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-app-accent/5 to-transparent animate-pulse" />
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-app-accent-200 rounded-full animate-float"
              style={{
                left: `${15 + i * 20}%`,
                top: `${25 + i * 15}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 py-16 sm:py-24 md:py-32 px-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 animate-fade-in-down">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-app-accent"></div>
            <span className="text-app-accent font-semibold text-sm tracking-wider uppercase">About Us</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-app-accent"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-wei max-w-5xl leading-tight font-['Chronicle_Display-Semibold'] animate-slide-in-up">
            Revolutionizing
            <span className="block bg-gradient-to-r from-app-accent via-emerald-400 to-app-accent bg-clip-text text-transparent animate-pulse">
              Waste Management
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed font-['Instrument_Serif'] animate-slide-in-up" style={{animationDelay: '200ms'}}>
            India's first smart waste management platform that combines cutting-edge technology with community engagement to create cleaner, healthier cities across the nation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <Button size="lg" className="bg-gradient-to-r from-app-accent to-emerald-400 text-black font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-app-accent/25">
              Our Mission
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-app-accent text-app-accent hover:bg-app-accent hover:text-black font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300">
              Meet the Team
            </Button>
          </div>
        </div>
      </section>

      {/* Who are we? */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-transparent to-slate-900/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wei mb-6 font-['Chronicle_Display-Semibold'] animate-slide-in-left">
                Who Are We?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-app-accent to-emerald-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-4xl text-app-accent/30">“</div>
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-['Instrument_Serif'] pl-6">
                    At Clynnn, we are a purpose-driven startup, united by a shared vision to reimagine and rebuild India's waste management ecosystem through innovation, technology, and community collaboration.
                  </p>
                </div>
                
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-['Instrument_Serif']">
                  We're not just building a company — we are building a 
                  <span className="text-app-accent font-semibold"> movement </span>
                  for a cleaner, smarter, and more sustainable India.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-app-accent mb-2">
                      10+
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      Team Members
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-app-accent mb-2">
                      5+
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      Cities Planned
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-r from-app-accent/20 to-emerald-400/20 rounded-3xl blur-3xl transform rotate-6"></div>
                <Card className="relative z-10 bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 p-8 rounded-3xl hover:border-app-accent-500 transition-all duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-app-accent rounded-full"></div>
                      <h3 className="text-xl font-bold text-app-accent">Innovation First</h3>
                    </div>
                    <p className="text-gray-300 font-['Instrument_Serif']">
                      Cutting-edge technology meets environmental responsibility
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                      <h3 className="text-xl font-bold text-emerald-400">Community Driven</h3>
                    </div>
                    <p className="text-gray-300 font-['Instrument_Serif']">
                      Empowering citizens to be part of the solution
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      <h3 className="text-xl font-bold text-green-400">Sustainable Impact</h3>
                    </div>
                    <p className="text-gray-300 font-['Instrument_Serif']">
                      Creating lasting environmental change for future generations
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-transparent via-app-accent/5 to-transparent">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wei mb-8 font-['Chronicle_Display-Semibold'] animate-slide-in-left">
              Our Mission
            </h2>
            <div className="relative bg-gradient-to-b from-slate-800/30 to-slate-900/30 border border-app-accent-200 rounded-3xl p-8 sm:p-12 hover:border-app-accent-500 transition-all duration-500">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-app-accent to-emerald-400 rounded-full flex items-center justify-center">
                <span className="text-black text-2xl font-bold">★</span>
              </div>
              <div className="relative pt-6">
                <div className="absolute -top-4 -left-4 text-6xl text-app-accent/20 font-bold">“</div>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-['Instrument_Serif'] animate-slide-in-right italic px-8">
                  To create cleaner, healthier cities by building a system that encourages responsible waste behavior and supports sustainable urban growth.
                </p>
                <div className="absolute -bottom-4 -right-4 text-6xl text-app-accent/20 font-bold rotate-180">“</div>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-app-accent to-emerald-400 mx-auto mt-8 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900/30 to-transparent">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wei mb-8 font-['Chronicle_Display-Semibold'] animate-slide-in-left">
              Our Vision
            </h2>
            <div className="relative bg-gradient-to-b from-slate-800/30 to-slate-900/30 border border-emerald-400/20 rounded-3xl p-8 sm:p-12 hover:border-emerald-400/50 transition-all duration-500">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-emerald-400 to-app-accent rounded-full flex items-center justify-center">
                <span className="text-black text-2xl font-bold">✨</span>
              </div>
              <div className="relative pt-6">
                <div className="absolute -top-4 -left-4 text-6xl text-emerald-400/20 font-bold">“</div>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-['Instrument_Serif'] animate-slide-in-right italic px-8">
                  To build a Zero Waste India by creating cleaner cities, empowering communities, and deploying smart, scalable waste management systems that leave no waste behind.
                </p>
                <div className="absolute -bottom-4 -right-4 text-6xl text-emerald-400/20 font-bold rotate-180">“</div>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-app-accent mx-auto mt-8 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Description */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-transparent via-app-accent/5 to-transparent">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wei mb-6 font-['Chronicle_Display-Semibold'] animate-slide-in-left">
              Our Platform
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed font-['Instrument_Serif'] max-w-4xl mx-auto animate-slide-in-right">
              Clynnn is developing an integrated platform that connects households, municipalities, and recycling networks through innovative technology solutions:
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-app-accent to-emerald-400 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900/30 to-bg">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: "🚚",
                  title: "Tech-Enabled Waste Collection",
                  description: "Color-coded trucks for wet, dry, and hazardous waste; real-time GPS tracking and collection logs.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: "📱",
                  title: "Mobile App for Citizens",
                  description: "Get waste pickup notifications, track dustbin locations, and engage in local sustainability challenges.",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: "🎮",
                  title: "Community Gamification",
                  description: "Cleanliness leaderboards for neighborhoods, reward-based initiatives, and civic participation rewards.",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: "♾️",
                  title: "Recycling & Micro Hubs",
                  description: "Setting up small-scale, decentralized recycling centers with local employment and upcycling focus.",
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  icon: "🛍️",
                  title: "Eco-Conscious Marketplace",
                  description: "A marketplace to discover and shop sustainable products, supporting local green entrepreneurs.",
                  gradient: "from-emerald-500 to-green-500"
                }
              ].map((feature, index) => (
                <Card key={feature.title} className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 p-6 hover:scale-105 hover:shadow-2xl hover:shadow-app-accent/10 transition-all duration-500 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-app-accent mb-2 group-hover:text-emerald-400 transition-colors duration-300 font-['Chronicle_Display-Semibold']">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed font-['Instrument_Serif']">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-wei mb-4 font-['Chronicle_Display-Semibold']">
                Ready to Transform Your Community?
              </h3>
              <p className="text-lg text-gray-300 mb-8 font-['Instrument_Serif'] max-w-2xl mx-auto">
                Join thousands of citizens already making a difference in their neighborhoods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-app-accent to-emerald-400 text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-app-accent text-app-accent hover:bg-app-accent hover:text-black px-8 py-4 rounded-full transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};