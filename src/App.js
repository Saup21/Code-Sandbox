import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';

function App() {
  const [fontSize, setFontSize] = useState(16);
  return (
    <div className="App">
      <Header size={fontSize} func={setFontSize} />
      <Editor size={fontSize} />
    </div>
  );
}

export default App;
