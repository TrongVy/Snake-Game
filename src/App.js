import React from 'react'
import Board from './Snake/Board';

function App() {
  return (
    <div className="App "
      style={{
        height: '100vh',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
      }}
    >
      <Board />
    </div>
  );
}

export default App;
