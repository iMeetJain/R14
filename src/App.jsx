import React from 'react'

const App = () => {
  return (
    <div id="main">
      <div id="centrediv">
        <h1>Welcome to React Web App</h1>
    <p>    
      {import.meta.env.VITE_API_KEY}
    </p>
    <button>Submit</button>
    </div>
    </div>
  )
}

export default App