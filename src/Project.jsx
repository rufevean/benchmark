
import React, { useEffect, useState } from 'react';

function Project() {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/rufevean/medc')
      .then(response => response.json())
      .then(data => setRepoData(data));
  }, []);

  if (!repoData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', maxWidth: '600px', margin: 'auto' }}>
      <h1>{repoData.name}</h1>
      {repoData.owner && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={repoData.owner.avatar_url} alt={`${repoData.owner.login} avatar`} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }} />
          <a href={repoData.owner.html_url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#0366d6' }}>
            {repoData.owner.login}
          </a>
        </div>
      )}
      <p>{repoData.description}</p>
      <a href={repoData.html_url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', padding: '10px 15px', backgroundColor: '#0366d6', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>
        View on GitHub
      </a>
    </div>
  );
}

export default Project;
