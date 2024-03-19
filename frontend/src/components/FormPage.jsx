// FormPage.js
import React, { useState } from 'react';

const FormPage = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [codeLanguage, setCodeLanguage] = useState('');
  const [stdin, setStdin] = useState('');
  const [sourceCode, setSourceCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, codeLanguage, stdin, sourceCode });
    // Clear form fields after submission
    setUsername('');
    setCodeLanguage('');
    setStdin('');
    setSourceCode('')
    window.history.pushState({}, "", "http://localhost:5173/snippets");
  };

  return (
    <div className="form-container">
      <h2>Submit Code Snippet</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="codeLanguage">Preferred Code Language:</label>
          <select
            id="codeLanguage"
            value={codeLanguage}
            onChange={(e) => setCodeLanguage(e.target.value)}
            required
          >
            <option value="">Select Language</option>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="stdin">Standard Input (stdin):</label>
          <input
            type="text"
            id="stdin"
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sourceCode">Source Code:</label>
          <textarea
            id="sourceCode"
            value={sourceCode}
            onChange={(e) => setSourceCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
