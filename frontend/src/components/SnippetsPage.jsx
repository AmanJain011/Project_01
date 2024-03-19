// SnippetsPage.js
import React from 'react';

const SnippetsPage = ({ snippets }) => {
  return (
    <div className="snippets-container">
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
              <td>{snippet.codeLanguage}</td>
              <td>{snippet.stdin}</td>
              <td>{snippet.sourceCode.substring(0, 100)}...</td> {/* Limit display to 100 characters */}
              <td>{snippet.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SnippetsPage;
