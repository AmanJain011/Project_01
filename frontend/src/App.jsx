import "./index.css"
import FormPage from "./components/FormPage"
import SnippetsPage from "./components/SnippetsPage";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [snippets, setSnippets] = useState([]);

  const handleSubmit = (newSnippet) => {
    // Add the new snippet to the list of snippets
    setSnippets([...snippets, newSnippet]);
  };
  return (
    <Router>
      <Routes>
        {/* Use inline function to pass props to FormPage */}
        <Route path="/" element={<FormPage onSubmit={handleSubmit} />} />
        {/* Use inline function to pass props to SnippetsPage */}
        <Route path="/snippets" element={<SnippetsPage snippets={snippets} />} />
      </Routes>
    </Router>
  )
}

export default App;