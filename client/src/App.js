import React from "react";
//import './App.css';
import GenerateCardTable from './card.js';
import Header from './header.js';

//<Card product={data[1]} />

function App() {
  
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  
  
  
  return (
    
      <div id="application">
        <Header />
		
		<div className="container-fluid" id="center-piece">
          <div className="main-content">
			{(!data) ? "Loading..." : <GenerateCardTable productCollection={data} catalogNumberStart={1} numToLoad={8} />}
		  </div>	
		</div>
			
			
		  
        
       
    
	</div>
  );
}

export default App;
