
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownPage() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Fetch or import your markdown file here
    fetch('/path/to/your/markdown-file.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  return (
    <div>
      <h1>Resources</h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default MarkdownPage;
