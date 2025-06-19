import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

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

export const Journal = (): JSX.Element => {
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<JournalEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJournalEntries = async () => {
      try {
        const response = await fetch("/journal-entries.json");
        const data: JournalData = await response.json();
        setJournalEntries(data.journals);
        setFilteredEntries(data.journals);
      } catch (error) {
        console.error("Error loading journal entries:", error);
      } finally {
        setLoading(false);
      }
    };

    loadJournalEntries();
  }, []);

  useEffect(() => {
    let filtered = journalEntries;

    if (searchTerm) {
      filtered = filtered.filter(
        (entry) =>
          entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          entry.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTag) {
      filtered = filtered.filter((entry) => entry.tags.includes(selectedTag));
    }

    setFilteredEntries(filtered);
  }, [searchTerm, selectedTag, journalEntries]);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: "numeric", 
      month: "short", 
      day: "numeric" 
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getAllTags = (): string[] => {
    const allTags = journalEntries.flatMap((entry) => entry.tags);
    return Array.from(new Set(allTags));
  };

  const truncateContent = (content: string, maxLength: number = 150): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  if (loading) {
    return (
      <div className="bg-bg min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-app-accent mx-auto mb-4"></div>
            <p className="body-text">Loading stories...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center py-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-wei leading-tight font-['Chronicle_Display-Semibold'] mb-6">
            Stories That Matter
          </h1>
          <p className="text-xl md:text-3xl text-[#fff8f8] font-['Chronicle_Display-Semibold'] max-w-3xl mx-auto mb-8">
            Real stories from the frontlines of waste management - voices that deserve to be heard, 
            lives that inspire change, and experiences that shape our mission.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800/50 border-app-accent-300 text-wei placeholder:text-gray-400 focus:border-app-accent"
              />
            </div>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-app-accent-300 text-wei rounded-md focus:border-app-accent focus:outline-none"
            >
              <option value="">All Categories</option>
              {getAllTags().map((tag) => (
                <option key={tag} value={tag}>
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <p className="font-['Chronicle_Display-Semibold'] text-wei text-gray-400 mb-8">
            {filteredEntries.length} {filteredEntries.length === 1 ? 'story' : 'stories'} found
          </p>
        </div>

        {/* Journal Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredEntries.map((entry, index) => (
            <Card 
              key={entry.id} 
              className="glass-card hover:bg-gray-600/90 transition-all duration-300 theme-shadow animate-fade-in-up overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-['Chronicle_Display-Semibold'] text-wei text-app-accent text-sm font-medium">
                    {formatDate(entry.date)}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-app-accent font-['Chronicle_Display-Semibold'] mb-3 group-hover:text-yellow-300 transition-colors line-clamp-2">
                  <Link to={`/journal/${entry.slug}`}>
                    {entry.title}
                  </Link>
                </h3>
                
                <p className="text-lg text-[#fff8f8] leading-relaxed font-['Chronicle_Display-Semibold'] text-gray-300 mb-4 line-clamp-3">
                  {truncateContent(entry.content)}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {entry.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-app-accent-200 text-app-accent text-xs rounded-full font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                  {entry.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
                      +{entry.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <Link to={`/journal/${entry.slug}`}>
                  <Button className="w-full bg-gradient-to-r from-app-accent to-emerald-400 text-black font-medium transition-colors">
                    Read Story
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results message */}
        {filteredEntries.length === 0 && !loading && (
          <div className="text-center py-16">
            <h3 className="text-2xl md:text-3xl font-bold text-app-accent font-['Chronicle_Display-Semibold'] mb-4">No stories found</h3>
            <p className="text-lg text-[#fff8f8] leading-relaxed font-['Chronicle_Display-Semibold'] mb-8">
              Try adjusting your search terms or filters to find more stories.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("");
              }}
              className="bg-app-accent hover:bg-app-accent-800 text-black"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center py-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-['Chronicle_Display-Semibold'] text-wei mb-6">
            Have a Story to Share?
          </h2>
          <p className="text-lg text-[#fff8f8] leading-relaxed font-['Chronicle_Display-Semibold'] max-w-2xl mx-auto mb-8">
            Every voice matters. If you have a story about waste management, 
            community action, or environmental change, we'd love to hear from you.
          </p>
          <Link to="/contact-us">
            <Button className="bg-app-accent hover:bg-app-accent-800 text-black font-medium px-8 py-3">
              Share Your Story
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};