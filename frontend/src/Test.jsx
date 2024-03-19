// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [codeLanguage, setCodeLanguage] = useState('');
  const [stdin, setStdin] = useState('');
  const [sourceCode, setSourceCode] = useState('');
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    // Fetch snippets when component mounts
    fetchSnippets();
  }, []);

  const fetchSnippets = () => {
    axios.get('/api/snippets')
      .then(response => {
        setSnippets(response.data);
      })
      .catch(error => {
        console.error('Error fetching snippets:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Submit new snippet
    axios.post('/api/snippets', {
      username,
      codeLanguage,
      stdin,
      sourceCode
    })
    .then(response => {
      console.log('Snippet submitted successfully');
      // Refresh snippets
      fetchSnippets();
      // Clear form fields
      setUsername('');
      setCodeLanguage('');
      setStdin('');
      setSourceCode('');
    })
    .catch(error => {
      console.error('Error submitting snippet:', error);
    });
  };

  return (
    <div>
      <h1>Code Snippets</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Code Language:
          <input type="text" value={codeLanguage} onChange={(e) => setCodeLanguage(e.target.value)} />
        </label>
        <label>
          Standard Input:
          <input type="text" value={stdin} onChange={(e) => setStdin(e.target.value)} />
        </label>
        <label>
          Source Code:
          <textarea value={sourceCode} onChange={(e) => setSourceCode(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Submitted Snippets</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Code Language</th>
            <th>Standard Input</th>
            <th>Source Code Preview</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {snippets.map(snippet => (
            <tr key={snippet.id}>
              <td>{snippet.username}</td>
              <td>{snippet.code_language}</td>
              <td>{snippet.stdin}</td>
              <td>{snippet.source_code_preview}</td>
              <td>{snippet.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
