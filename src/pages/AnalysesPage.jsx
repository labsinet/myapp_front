import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnalysisList from '../components/AnalysisList';

const AnalysesPage = () => {
  const [analyses, setAnalyses] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAnalyses = async () => {
      const response = await axios.get(`/api/analysis?page=${page}`);
      setAnalyses(response.data.analyses);
      setTotalPages(response.data.totalPages);
    };
    fetchAnalyses();
  }, [page]);

  return (
    <div>
      <h1>Analyses</h1>
      <AnalysisList analyses={analyses} />
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnalysesPage;