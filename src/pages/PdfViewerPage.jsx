// PdfViewerPage.js

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

function PdfViewerPage() {
    const {orderId} = useParams();
  const [pdfUrl, setPdfUrl] = useState("");

  const fetchPdf = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2000/orders/pdf/${orderId}`
      );
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">PDF Viewer</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={fetchPdf}
        >
          Fetch PDF
        </button>
        {pdfUrl && (
          <div>
            <embed
              src={pdfUrl}
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PdfViewerPage;
