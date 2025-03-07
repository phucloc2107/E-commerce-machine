import React, { useEffect, useState } from "react";
import dummySearchResults from "../assets/dummyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const SearchResult: React.FC = () => {
  /* const [searchTerm, setSearchTerm] = useState(""); */
  const [filteredResults, setFilteredResults] = useState<typeof dummySearchResults>([]);
  const [leftSelectedPdf, setLeftSelectedPdf] = useState<typeof dummySearchResults[0] | null>(null);
  const [rightSelectedPdf, setRightSelectedPdf] = useState<typeof dummySearchResults[0] | null>(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keywordFromURL = params.get("search") || ""; // Lấy từ khóa từ URL

  const [searchTerm, setSearchTerm] = useState(keywordFromURL);

/*   useEffect(() => {
    if (keyword) {
      setSearchTerm(keyword);
      handleSearch(); // Gọi lại search tự động khi trang load
    }
  }, [keyword]);

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
  }; */
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const results = dummySearchResults.filter((pdf) =>
        pdf.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (pdf.matchedText && pdf.matchedText.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm]); // Gọi lại mỗi khi searchTerm thay đổi

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      const results = dummySearchResults.filter((pdf) =>
        pdf.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (pdf.matchedText && pdf.matchedText.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center bg-[rgb(244,245,240)] p-6">
      <div className={`w-full flex justify-between mt-3 ${filteredResults.length > 0 ? 'h-auto' : 'h-0'}`}>
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

      {filteredResults.length > 0 && (
        <div className="w-full h-[75%] mt-3 flex flex-row justify-between">
          <div className="w-[48%] h-full border-4 border-gray-200 rounded-3xl bg-white p-4">
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

          <div className="w-[48%] h-full border-4 border-gray-200 rounded-3xl bg-white p-4">
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

      <div className="bg-gray-200 w-1/2 h-20 fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center p-4 rounded-2xl shadow-lg z-50">
        <div className="w-4/5">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-3 pl-4 pr-4 text-gray-700 rounded-tl-2xl rounded-bl-2xl focus:outline-none"
            placeholder="Enter keyword to search in PDFs..."
          />
        </div>
        <div className="w-1/5">
          <button
            onClick={handleSearch}
            disabled={searchTerm.trim() === ""}
            className={`w-full py-3 rounded-tr-2xl rounded-br-2xl font-semibold transition-colors 
              ${searchTerm.trim() === "" ? "bg-gray-400 cursor-not-allowed" : "bg-[#6b46fe] text-white"}`}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;