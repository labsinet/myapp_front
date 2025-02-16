import React from 'react';

const AnalysisList = ({ analyses }) => {
  return (
    <ul>
      {analyses.map((analysis) => (
        <li key={analysis.id}>
          {analysis.title} - {analysis.description}
        </li>
      ))}
    </ul>
  );
};

export default AnalysisList;