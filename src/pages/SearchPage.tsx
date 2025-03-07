import React, { useState } from 'react';
import dummySearchResults from '../assets/dummyData';
import { useNavigate } from "react-router-dom";

interface SearchResult {
  id: number;
  fileName: string;
  matchedText?: string;
}

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = async (keyword: string) => {
    if (!keyword.trim()) return;
    setIsLoading(true);
    setError(null);
    
    try {
      setTimeout(() => {
        const filteredResults = dummySearchResults.filter(
          result => 
            result.fileName.toLowerCase().includes(keyword.toLowerCase()) || 
            (result.matchedText && result.matchedText.toLowerCase().includes(keyword.toLowerCase()))
        );
        setSearchResults(filteredResults);
        setIsLoading(false);
      }, 800);
    } catch (err) {
      console.error('Error searching PDFs:', err);
      setError('Failed to search PDFs. Please try again.');
      setSearchResults([]);
      setIsLoading(false);
    }
  };

/*   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      handleSearch(keyword);
      navigate("/result", { state: { keyword } }); // Truyền keyword qua state
    }
  }; */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      handleSearch(keyword);
      navigate(`/result?search=${encodeURIComponent(keyword)}`); // Chuyển hướng với keyword
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen flex flex-col">
      <header className="text-center mb-8 flex flex-col items-center">
        <div className="mb-4 w-16 h-16 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: 'var(--highlight-color)', color: 'var(--primary-color)' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>PDF Search Tool</h1>
        <p className="text-lg text-[var(--text-light)] max-w-lg">Find information across your PDF documents instantly</p>
      </header>
      
      <main className="flex-1">
        <div className="mb-6">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex shadow-lg rounded-lg overflow-hidden border border-[var(--border-color)] bg-white focus-within:ring-2 focus-within:ring-[var(--primary-color)]">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter keyword to search in PDFs..."
                className="flex-1 p-3 text-lg outline-none"
                aria-label="Search PDFs"
              />
              <button
                type="submit"
                className={`px-5 py-3 font-semibold transition text-white ${
                  !keyword.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-[var(--primary-color)]'
                }`}
                disabled={!keyword.trim()}
              >
                🔍 Search
              </button>
            </div>
          </form>
        </div>

        {isLoading && (
          <div className="flex flex-col items-center justify-center my-6">
            <div className="w-12 h-12 border-4 border-[var(--primary-light)] border-t-[var(--primary-color)] rounded-full animate-spin mb-4"></div>
            <p>Searching PDFs...</p>
          </div>
        )}

        {error && <div className="bg-red-100 text-red-600 p-4 rounded-lg text-center my-6">{error}</div>}
        
        {!isLoading && !error && searchResults.length === 0 && (
          <div className="text-center my-6 p-6 bg-white rounded-lg shadow-md">
            <p>No results found. Try a different keyword.</p>
          </div>
        )}
        
        {!isLoading && !error && searchResults.length > 0 && (
          <ul className="space-y-4">
            {searchResults.map(result => (
              <li key={result.id} className="p-4 border border-[var(--border-color)] rounded-lg shadow-sm">
                <strong>{result.fileName}</strong>
                {result.matchedText && <p className="text-[var(--text-light)]">{result.matchedText}</p>}
              </li>
            ))}
          </ul>
        )}
      </main>
      
      <footer className="text-center mt-6 pt-4 border-t border-[var(--border-color)] text-[var(--text-light)]">
        <p>&copy; {new Date().getFullYear()} PDF Search Tool</p>
      </footer>
    </div>
  );
};

export default SearchPage;