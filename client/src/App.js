import React from "react";
//import './App.css';
import GenerateCard from './genCard.js';


//<Card product={data[1]} />

function App() {
  
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        
		{(!data) ? "Loading..." : <GenerateCard product={data[1]} />}
			
			
			
			 
			
		  
        
       
      </header>
    </div>
  );
}

export default App;
