import React from "react";
import CardTable from './card.js';
import Header from './header.js';



function App() {
  
  //Add another data set that is read/writable for username/password.
  
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  
  
	var flags = {
		isSignedIn: false,
		userName: "",
		numberOfCartItems: 5,
		productPageNumber: 0,
		websiteState: "Product Showcase",
		catalogStartIndex: 1,
		catalogLoadNum: 8
	};
  
    
  
  
  return (
    
      <div id="application">
        <Header state={flags.websiteState} numInCart={flags.numberOfCartItems} />
		
		<div className="container-fluid" id="center-piece">
          <div className="main-content">
			{(!data) ? "Loading..." : <CardTable productCollection={data} catalogNumberStart={flags.catalogStartIndex} numToLoad={flags.catalogLoadNum} />}
		  </div>	
		</div>
			
			
		  
        
       
    
	</div>
  );
}


export default App;
