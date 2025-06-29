import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const HomePage = (): JSX.Element => {
  const [journalData, setJournalData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carouselImages = [
    { src: "/carousel/carousel1.jpeg", text: "“Mountains of garbage rise as forests fall — nature’s balance is tipping, and so is our fate.”" },
    { src: "/carousel/carousel2.jpeg", text: "“That one bottle you didn’t recycle could live 450 years longer than you.”" },
    { src: "/carousel/carousel3.jpeg", text: "“By 2050, plastic in oceans could outweigh fish — and we're already dumping 11 million metric tonnes into the seas each year.”" },
    { src: "/carousel/carousel4.jpeg", text: "“Children living near landfills have a 3x higher risk of developing respiratory and skin diseases.”" },
    { src: "/carousel/carousel5.jpeg", text: "“In Delhi, 93% of waste goes to landfills — some reaching heights taller than the Qutub Minar.”" },
    { src: "/carousel/carousel6.jpeg", text: "“Over 1 million marine animals die each year due to plastic waste — that straw you threw away might still be floating somewhere.”" },
    { src: "/carousel/carousel7.jpeg", text: "“The waste we throw away doesn’t vanish — it finds its way back into our lungs, our water, and our future.”" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchJournalData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/journal-entries.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch journal data: ${response.status}`);
        }
        
        const data = await response.json();
        setJournalData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load journal data');
        console.error('Error fetching journal data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJournalData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Get the latest 2 journal entries sorted by date (most recent first)
  const latestJournalEntries = journalData?.journals
    ?.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    ?.slice(0, 2) || [];

  const socialIcons = [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/company/clynnn/",
      svg: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    },
    { 
      name: "X", 
      href: "https://x.com/Clynnn2025",
      svg: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    }
  ];

  const features = [
    {
      icon: "🌱",
      title: "Smart Collection",
      description: "AI-powered waste sorting and collection optimization"
    },
    {
      icon: "📱", 
      title: "Mobile App",
      description: "Real-time tracking and gamified community engagement"
    },
    {
      icon: "♻️",
      title: "Recycling Network", 
      description: "Comprehensive recycling and upcycling ecosystem"
    },
    {
      icon: "🎯",
      title: "Community Rewards",
      description: "Incentive-based participation and neighborhood competitions"
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[100vh] sm:min-h-[80vh] bg-gradient-to-br from-bg via-slate-900 to-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--app-accent)_0%,transparent_50%)] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-app-accent/5 to-transparent animate-pulse" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-app-accent/30 rounded-full animate-bounce"
              style={{
                left: `${15 + i * 12}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 py-8 sm:py-12 md:py-16 lg:py-20 px-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-4 animate-fade-in-down">
            <Separator className="w-6 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-app-accent" />
            <span className="text-app-accent font-semibold text-xs sm:text-sm tracking-wider uppercase text-center">The Future of Waste Management</span>
            <Separator className="w-6 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-app-accent" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-wei max-w-5xl leading-tight font-['Chronicle_Display-Semibold'] animate-slide-in-up px-2">
            Transform Your City into a
            <span className="block bg-gradient-to-r from-app-accent via-emerald-400 to-app-accent bg-clip-text text-transparent animate-pulse">
              Zero Waste Future
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed font-['Instrument_Serif'] animate-slide-in-up px-4" style={{animationDelay: '200ms'}}>
            Join India's first smart waste management platform that combines cutting-edge technology with community engagement to create cleaner, healthier cities.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-app-accent rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-app-accent rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-transparent to-slate-900/30">
        <div className="container px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-wei mb-3 sm:mb-4 font-['Chronicle_Display-Semibold'] px-2">
              Why Choose Clynnn?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-['Instrument_Serif'] px-4">
              Experience the future of waste management with our innovative features
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-app-accent/10 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-app-accent mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      {/* <section className="py-8 sm:py-12 bg-gradient-to-r from-transparent via-app-accent/5 to-transparent">
        <div className="container px-4">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <h3 className="text-lg sm:text-xl text-gray-300 font-['Instrument_Serif'] text-center">Follow Our Journey</h3>
            <div className="flex gap-4 sm:gap-6">
              {socialIcons.map((social, index) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name} 
                  className="group p-2 sm:p-3 rounded-full bg-gradient-to-r from-app-accent/10 to-emerald-400/10 hover:from-app-accent hover:to-emerald-400 transition-all duration-300 hover:scale-110 animate-bounce-in text-gray-300 hover:text-black" 
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition-transform duration-300">
                    {social.svg}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* What We Do */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-slate-900/30 to-transparent overflow-hidden">
        <div className="container px-4">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-wei mb-4 sm:mb-6 font-['Chronicle_Display-Semibold'] animate-slide-in-left px-2">
              What We Do?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-['Instrument_Serif'] animate-slide-in-right px-4">
                Clynnn bridges technology, community behavior, and logistics to create India's most advanced, 
                <span className="text-app-accent font-semibold"> gamified waste collection network.</span>
              </p>
            </div>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:shadow-app-accent/20 transition-all duration-500 animate-scale-in-center">
              <div className="relative min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                      index === currentImageIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                    style={{backgroundImage: `url('${image.src}')`}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="relative z-10 h-full flex items-end justify-center p-4 sm:p-6 md:p-8">
                      <div className="text-center">
                        <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold mb-2 font-['Chronicle_Display-Semibold'] drop-shadow-lg leading-tight">
                          {image.text}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced carousel controls */}
              <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-app-accent scale-125 shadow-lg' 
                        : 'bg-white/50 hover:bg-app-accent/70 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
              
              {/* Navigation arrows */}
              <button 
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-black/50 hover:bg-app-accent-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 z-20"
              >
                <span className="text-white text-lg sm:text-xl">‹</span>
              </button>
              <button 
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)}
                className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-black/50 hover:bg-app-accent-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 z-20"
              >
                <span className="text-white text-lg sm:text-xl">›</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-r from-transparent via-app-accent/5 to-transparent">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-wei mb-6 sm:mb-8 font-['Chronicle_Display-Semibold'] animate-slide-in-left px-2">
              Our Mission
            </h2>
            <div className="relative px-4 sm:px-8">
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 text-3xl sm:text-4xl md:text-6xl text-app-accent/20 font-bold">"</div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 leading-relaxed font-['Instrument_Serif'] animate-slide-in-right px-4 sm:px-8">
                To create cleaner, healthier cities by building a system that encourages responsible waste behavior and supports sustainable urban growth.
              </p>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 text-3xl sm:text-4xl md:text-6xl text-app-accent/20 font-bold rotate-180">"</div>
            </div>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-app-accent to-emerald-400 mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-transparent to-slate-900/30">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left animate-slide-in-left">
              <div className="mb-6">
                <span className="text-app-accent font-semibold text-xs sm:text-sm tracking-wider uppercase">Coming Soon</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-wei mt-2 font-['Chronicle_Display-Semibold'] px-2 lg:px-0">
                  Experience the Future
                  <span className="block text-app-accent">in Your Pocket</span>
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 font-['Instrument_Serif'] leading-relaxed px-4 lg:px-0">
                Our revolutionary mobile app is launching soon. Be the first to experience smart waste management with gamification, real-time tracking, and community rewards.
              </p>
            </div>
            <div className="flex-1 flex justify-center animate-slide-in-right">
              <div className="relative max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-app-accent/20 to-emerald-400/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl transform rotate-6"></div>
                <img 
                  src="/app-dev.png" 
                  alt="App preview" 
                  className="relative z-10 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl w-full hover:scale-105 transition-all duration-700 hover:shadow-app-accent/20" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journal */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-slate-900/30 to-transparent">
        <div className="container px-4">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-wei mb-3 sm:mb-4 font-['Chronicle_Display-Semibold'] animate-slide-in-left px-2">
              The Journal
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-app-accent font-['Instrument_Serif'] animate-slide-in-right px-4">
              Stories of a Better India
            </h3>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-app-accent to-emerald-400 mx-auto mt-4 sm:mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {isLoading ? (
              <div className="col-span-full text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-app-accent mx-auto mb-4"></div>
                <p className="text-gray-300 font-['Instrument_Serif']">Loading journal entries...</p>
              </div>
            ) : error ? (
              <div className="col-span-full text-center py-8">
                <p className="text-red-400 font-['Instrument_Serif'] mb-4">Error: {error}</p>
                <Button 
                  onClick={() => window.location.reload()} 
                  variant="outline" 
                  className="border-app-accent text-app-accent hover:bg-app-accent hover:text-black"
                >
                  Retry
                </Button>
              </div>
            ) : latestJournalEntries.length === 0 ? (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-300 font-['Instrument_Serif']">No journal entries available</p>
              </div>
            ) : (
              latestJournalEntries.map((article: any, idx: number) => (
              <Card key={article.id} className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 shadow-xl hover:shadow-2xl hover:shadow-app-accent/10 transition-all duration-500 hover:scale-105 animate-scale-in-center overflow-hidden" style={{animationDelay: `${idx * 200}ms`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-app-accent rounded-full"></div>
                      <span className="text-app-accent font-semibold text-xs sm:text-sm font-['Instrument_Serif'] group-hover:text-emerald-400 transition-colors duration-300">
                        {new Date(article.date).toLocaleDateString('en-GB', { 
                          day: '2-digit', 
                          month: '2-digit', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-wei group-hover:text-app-accent transition-colors duration-300 font-['Chronicle_Display-Semibold'] leading-tight">
                      {article.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed font-['Instrument_Serif'] line-clamp-3">
                      {article.content.substring(0, 120)}...
                    </p>
                    <div className="pt-4">
                      <Link to={`/journal/${article.id}`}>
                        <Button variant="ghost" className="p-0 h-auto text-app-accent hover:text-emerald-400 font-semibold group/btn">
                          Read More 
                          <span className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/journal">
              <Button size="lg" variant="outline" className="border-2 border-app-accent text-app-accent hover:bg-app-accent hover:text-black px-8 py-4 rounded-full transition-all duration-300">
                View All Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-transparent via-app-accent/5 to-transparent">
        <div className="container px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wei mb-4 font-['Chronicle_Display-Semibold'] animate-slide-in-left">
              Our Journey
            </h2>
            <p className="text-lg text-gray-300 font-['Instrument_Serif']">
              Milestones in our mission to transform India
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-app-accent to-emerald-400 rounded-full"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-center">
                  <div className="flex-1 text-left pr-8">
                    <Card className="bg-gradient-to-l from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 p-6 hover:scale-105 transition-all duration-500 animate-slide-in-left">
                      <h3 className="text-xl font-bold text-app-accent mb-2 font-['Chronicle_Display-Semibold']">
                        May 2025 – Inception of Clynnn
                      </h3>
                      <p className="text-gray-300 leading-relaxed font-['Instrument_Serif']">
                        The idea for Clynnn was born out of a desire to make clean living and sustainable habits both aspirational and accessible. Initial groundwork began, focusing on market research and brand positioning.
                      </p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-app-accent rounded-full border-4 border-bg shadow-lg"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-bg shadow-lg"></div>
                  <div className="flex-1 text-left pl-8">
                    <Card className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 p-6 hover:scale-105 transition-all duration-500 animate-slide-in-right">
                      <h3 className="text-xl font-bold text-app-accent mb-2 font-['Chronicle_Display-Semibold']">
                        2025 Q3 – Platform Launch
                      </h3>
                      <p className="text-gray-300 leading-relaxed font-['Instrument_Serif']">
                        Official launch of the Clynnn platform with pilot cities. Introduction of gamified waste collection and community engagement features.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900/30 to-bg">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wei mb-4 font-['Chronicle_Display-Semibold']">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300 font-['Instrument_Serif']">
              Everything you need to know about Clynnn
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 p-6 hover:scale-105 transition-all duration-500 animate-slide-in-left">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-app-accent mb-4 font-['Chronicle_Display-Semibold']">
                  How does Clynnn work?
                </h3>
                <p className="text-gray-300 leading-relaxed font-['Instrument_Serif']">
                  Clynnn connects households with smart waste collection services through our mobile app. Users get real-time notifications, track their environmental impact, and earn rewards for responsible waste disposal.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 p-6 hover:scale-105 transition-all duration-500 animate-slide-in-right" style={{animationDelay: '100ms'}}>
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-app-accent mb-4 font-['Chronicle_Display-Semibold']">
                  When will the app be available?
                </h3>
                <p className="text-gray-300 leading-relaxed font-['Instrument_Serif']">
                  We're launching our beta version in Q3 2025 in select cities. Sign up for early access to be among the first to experience the future of waste management.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 p-6 hover:scale-105 transition-all duration-500 animate-slide-in-left" style={{animationDelay: '200ms'}}>
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-app-accent mb-4 font-['Chronicle_Display-Semibold']">
                  How do community rewards work?
                </h3>
                <p className="text-gray-300 leading-relaxed font-['Instrument_Serif']">
                  Participate in neighborhood challenges, proper waste segregation, and recycling activities to earn points. Redeem rewards through our eco-friendly marketplace.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 p-6 hover:scale-105 transition-all duration-500 animate-slide-in-right" style={{animationDelay: '300ms'}}>
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-app-accent mb-4 font-['Chronicle_Display-Semibold']">
                  Is Clynnn available in my city?
                </h3>
                <p className="text-gray-300 leading-relaxed font-['Instrument_Serif']">
                  We're starting with major metropolitan areas and expanding rapidly. Check our website or app for the latest coverage area updates and upcoming launches.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact-us">
              <Button size="lg" className="bg-gradient-to-r from-app-accent to-emerald-400 text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-transparent via-app-accent/5 to-transparent">
        <div className="container px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-wei mb-4 font-['Chronicle_Display-Semibold']">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 font-['Instrument_Serif']">
              Ready to join the waste management revolution?
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-app-accent to-emerald-400 mx-auto mt-4 sm:mt-6 rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 p-8 hover:scale-105 transition-all duration-500 animate-slide-in-left">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-app-accent/10 to-emerald-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-app-accent group-hover:to-emerald-400 transition-all duration-300">
                    <svg className="w-8 h-8 text-app-accent group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-app-accent mb-3 font-['Chronicle_Display-Semibold'] group-hover:text-emerald-400 transition-colors duration-300">
                    Email Us
                  </h3>
                  <a 
                    href="mailto:clynnn.sust@gmail.com" 
                    className="text-gray-300 hover:text-app-accent transition-colors duration-300 font-['Instrument_Serif'] text-lg group-hover:text-white"
                  >
                    clynnn.sust@gmail.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-app-accent-200 hover:border-app-accent-500 p-8 hover:scale-105 transition-all duration-500 animate-slide-in-right" style={{animationDelay: '100ms'}}>
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-app-accent/10 to-emerald-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-app-accent group-hover:to-emerald-400 transition-all duration-300">
                    <svg className="w-8 h-8 text-app-accent group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-app-accent mb-3 font-['Chronicle_Display-Semibold'] group-hover:text-emerald-400 transition-colors duration-300">
                    Call Us
                  </h3>
                  <a 
                    href="tel:+919036177597" 
                    className="text-gray-300 hover:text-app-accent transition-colors duration-300 font-['Instrument_Serif'] text-lg group-hover:text-white"
                  >
                    +91 9036177597
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-300 font-['Instrument_Serif'] text-lg mb-6">
                Follow us on social media for the latest updates
              </p>
              <div className="flex justify-center gap-6">
                {socialIcons.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name} 
                    className="group p-3 rounded-full bg-gradient-to-r from-app-accent/10 to-emerald-400/10 hover:from-app-accent hover:to-emerald-400 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-black" 
                  >
                    <div className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                      {social.svg}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
