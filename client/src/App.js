import React from "react";
//import './App.css';
import GenerateCardTable from './genCard.js';

//<Card product={data[1]} />

function App() {
  
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  
  
  
  return (
    
      
        
		
		<div className="container-fluid" id="center-piece">
          <div className="main-content">
			{(!data) ? "Loading..." : <GenerateCardTable productCollection={data} catalogNumberStart={1} numToLoad={5} />}
		  </div>	
		</div>
			
			
		  
        
       
    
 
  );
}

export default App;
