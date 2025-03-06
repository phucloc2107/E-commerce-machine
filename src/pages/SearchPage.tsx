import React, { useState } from "react";
import dummySearchResults from "../assets/dummyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState<typeof dummySearchResults>([]);
  const [leftSelectedPdf, setLeftSelectedPdf] = useState<typeof dummySearchResults[0] | null>(null);
  const [rightSelectedPdf, setRightSelectedPdf] = useState<typeof dummySearchResults[0] | null>(null);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredResults([]);
      setLeftSelectedPdf(null);
      setRightSelectedPdf(null);
      return;
    }

    const results = dummySearchResults.filter((pdf) =>
      pdf.fileName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center bg-[rgb(244,245,240)] p-6">
      <div className="bg-white px-5 pt-2 flex flex-col justify-center">
        <h2 className="text-center text-2xl font-bold text-blue-600 mb-4">PDF Search Tool</h2>
        <p className="text-center text-gray-600 mb-6">Search for keywords in your PDF documents</p>
      </div>

      <div className={`w-full flex justify-between mt-10 ${filteredResults.length > 0 ? 'h-auto' : 'h-0'}`}>
        <div className="w-[48%]">
          {filteredResults.filter(pdf => pdf.id % 2 !== 0).map((pdf) => (
            <div
              key={pdf.id}
              onClick={() => setLeftSelectedPdf(pdf)}
              className="w-[90%] border rounded-lg shadow-md bg-gray-50 flex items-center mx-auto border-gray-500 cursor-pointer mb-4"
            >
              <div className="w-1/12 h-auto flex justify-center items-center border border-r-black mr-5 p-2">
                <FontAwesomeIcon icon={faFilePdf} className="w-5 h-5 object-cover text-[rgb(120,56,121)]" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{pdf.fileName}</h3>
            </div>
          ))}
        </div>

        <div className="w-[48%]">
          {filteredResults.filter(pdf => pdf.id % 2 === 0).map((pdf) => (
            <div
              key={pdf.id}
              onClick={() => setRightSelectedPdf(pdf)}
              className="w-[90%] border rounded-lg shadow-md bg-gray-50 flex items-center mx-auto border-gray-500 cursor-pointer mb-4"
            >
              <div className="w-1/12 h-auto flex justify-center items-center border border-r-black mr-5 p-2">
                <FontAwesomeIcon icon={faFilePdf} className="w-5 h-5 object-cover text-[rgb(120,56,121)]" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{pdf.fileName}</h3>
            </div>
          ))}
        </div>
      </div>

      {filteredResults.length > 0 && (leftSelectedPdf || rightSelectedPdf) && (
        <div className="w-full h-96 mt-10 flex flex-row justify-between">
          <div className="w-[48%] h-full border-4 border-black rounded-3xl bg-white p-4">
            <h3 className="text-lg font-semibold">Left Panel (Odd ID)</h3>
            {leftSelectedPdf ? (
              <>
                <p className="text-blue-600 font-bold">{leftSelectedPdf.fileName}</p>
                <p className="text-gray-700 mt-2">{leftSelectedPdf.matchedText}</p>
              </>
            ) : (
              <p className="text-gray-500">Click on an odd ID file to view content here</p>
            )}
          </div>

          <div className="w-[48%] h-full border-4 border-black rounded-3xl bg-white p-4">
            <h3 className="text-lg font-semibold">Right Panel (Even ID)</h3>
            {rightSelectedPdf ? (
              <>
                <p className="text-blue-600 font-bold">{rightSelectedPdf.fileName}</p>
                <p className="text-gray-700 mt-2">{rightSelectedPdf.matchedText}</p>
              </>
            ) : (
              <p className="text-gray-500">Click on an even ID file to view content here</p>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-200 w-1/2 h-20 mt-5 flex items-center justify-center p-4 rounded-full">
        <div className="w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-3 pl-4 pr-20 text-gray-700 rounded-tl-full rounded-bl-full focus:outline-none"
            placeholder="Enter keyword to search in PDFs..."
          />
        </div>
        <div className="w-1/5">
          <button
            onClick={handleSearch}
            className="bg-gray-500 text-white px-5 py-3 rounded-tr-full rounded-br-full font-bold"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
