import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

interface JournalEntry {
  id: number;
  slug: string;
  title: string;
  content: string;
  image: string;
  date: string;
  tags: string[];
}

interface JournalData {
  journals: JournalEntry[];
}

export const JournalSlug = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [journalEntry, setJournalEntry] = useState<JournalEntry | null>(null);
  const [relatedEntries, setRelatedEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJournalEntry = async () => {
      try {
        const response = await fetch("/journal-entries.json");
        if (!response.ok) {
          throw new Error("Failed to load journal entries");
        }
        const data: JournalData = await response.json();
        const entry = data.journals.find((journal) => journal.slug === slug);
        
        if (!entry) {
          setError("Story not found");
        } else {
          setJournalEntry(entry);
          
          // Find related entries (same tags, different entry)
          const related = data.journals
            .filter((j) => j.id !== entry.id && j.tags.some(tag => entry.tags.includes(tag)))
            .slice(0, 3);
          setRelatedEntries(related);
        }
      } catch (err) {
        setError("Failed to load story");
        console.error("Error loading journal entry:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadJournalEntry();
    }
  }, [slug]);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <div className="bg-bg min-h-screen pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 sm:py-20">
            <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-app-accent mx-auto mb-4"></div>
            <p className="body-text text-sm sm:text-base">Loading story...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !journalEntry) {
    return (
      <div className="bg-bg min-h-screen pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 sm:py-20 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-app-accent mb-4">404</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-wei mb-4 sm:mb-6">Story Not Found</h2>
            <p className="body-text text-sm sm:text-base mb-6 sm:mb-8 max-w-sm sm:max-w-md mx-auto px-4">
              {error || "The story you're looking for doesn't exist or may have been moved."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button 
                onClick={() => navigate("/journal")}
                className="bg-app-accent hover:bg-app-accent-800 text-black font-medium text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
              >
                Browse All Stories
              </Button>
              <Button 
                onClick={() => navigate("/")}
                className="bg-gray-700 hover:bg-gray-600 text-wei text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
              >
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg min-h-screen pt-16 sm:pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Navigation */}
        <div className="mb-6 sm:mb-8 animate-fade-in-down">
          <Button 
            onClick={() => navigate("/journal")}
            className="bg-gray-700 hover:bg-gray-600 text-wei mb-3 sm:mb-4 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
          >
            ← Back to Stories
          </Button>
          
          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm ui-text text-gray-400 overflow-hidden">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              <Link to="/" className="link-accent hover:underline">Home</Link>
              <span>/</span>
              <Link to="/journal" className="link-accent hover:underline">Journal</Link>
              <span>/</span>
              <span className="text-wei truncate max-w-[150px] sm:max-w-none" title={journalEntry.title}>
                {journalEntry.title}
              </span>
            </div>
          </nav>
        </div>
        
        {/* Main Article */}
        <article className="animate-fade-in-up">
          <Card className="glass-card theme-shadow overflow-hidden mb-8 sm:mb-12">
            {/* Hero Image */}
            <div className="relative">
              <img
                src={journalEntry.image}
                alt={journalEntry.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            
            <CardHeader className="relative -mt-16 sm:-mt-20 z-10 bg-gradient-to-t from-gray-900/95 to-transparent pt-16 sm:pt-20 pb-6 sm:pb-8">
              <div className="space-y-3 sm:space-y-4 px-2 sm:px-0">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <time className="ui-text text-app-accent font-medium" dateTime={journalEntry.date}>
                    {formatDate(journalEntry.date)}
                  </time>
                  <span className="ui-text text-gray-400 hidden sm:inline">•</span>
                  <span className="ui-text text-gray-400">
                    {Math.ceil(journalEntry.content.length / 200)} min read
                  </span>
                </div>
                
                {/* Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-wei leading-tight font-['Chronicle_Display-Semibold']">
                  {journalEntry.title}
                </h1>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 pt-2 sm:pt-4">
                  {journalEntry.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-app-accent-200 text-app-accent text-xs sm:text-sm rounded-full font-medium border border-app-accent-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
              {/* Article Content */}
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed whitespace-pre-line font-['Chronicle_Display-Semibold']">
                  {journalEntry.content}
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
        
        {/* Related Stories */}
        {relatedEntries.length > 0 && (
          <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-wei mb-6 sm:mb-8 text-center font-['Chronicle_Display-Semibold']">
              Related Stories
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {relatedEntries.map((entry) => (
                <Card 
                  key={entry.id}
                  className="glass-card hover:bg-gray-600/90 transition-all duration-300 theme-shadow overflow-hidden group"
                >
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="w-full h-32 sm:h-36 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardContent className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-bold text-app-accent mb-2 group-hover:text-yellow-300 transition-colors line-clamp-2 font-['Chronicle_Display-Semibold']">
                      <Link to={`/journal/${entry.slug}`} className="hover:underline">
                        {entry.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 line-clamp-2 font-['Chronicle_Display-Semibold']">
                      {entry.content.substring(0, 100)}...
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {entry.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-app-accent-200 text-app-accent text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link to={`/journal/${entry.slug}`}>
                      <Button size="sm" className="w-full bg-app-accent hover:bg-app-accent-800 text-black text-xs sm:text-sm px-3 sm:px-4 py-2">
                        Read Story
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
        
        {/* Call to Action */}
        <div className="text-center py-8 sm:py-12 animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-wei mb-4 sm:mb-6 font-['Chronicle_Display-Semibold']">
            Continue Reading
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-['Chronicle_Display-Semibold']">
            Discover more powerful stories from communities fighting for change, 
            working toward sustainability, and making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link to="/journal" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-app-accent hover:bg-app-accent-800 text-black font-medium text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3">
                Read More Stories
              </Button>
            </Link>
            <Link to="/contact-us" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-wei text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3">
                Share Your Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};