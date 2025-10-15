import React from "react";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";

const Hero = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  //This is for handling the uploaded pdf
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="h-[80vh] flex flex-col md:flex-row bg-gray-950 text-gray-200">
      {/* This is for uploading the pdf  */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 border-r border-gray-800">
        <h2 className="text-xl font-semibold mb-4">📂 Upload PDF</h2>

        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-yellow-400 transition">
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileUpload}
          />
          <FaUpload className="text-3xl mb-2 text-yellow-400" />
          <p className="text-sm">
            {selectedFile ? selectedFile.name : "Click or drag to upload PDF"}
          </p>
        </label>

        {selectedFile && (
          <p className="mt-4 text-sm text-green-400">
            ✅ {selectedFile.name} uploaded successfully
          </p>
        )}
      </div>

      {/* This is for chat  */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-6">
        <div className="flex-1 overflow-y-auto border border-gray-800 rounded-lg p-4 mb-4 bg-gray-900">
          <p className="text-gray-400 text-sm italic">
            💬 AI chat about your uploaded PDF will appear here...
          </p>
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Ask something about your PDF..."
            className="flex-1 p-2 rounded-l-lg bg-gray-800 border border-gray-700 outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
          />
          <button className="px-4 bg-yellow-500 text-black rounded-r-lg font-semibold hover:bg-yellow-400 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
