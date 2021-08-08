import React from "react";
import CardTable from './card.js';
import Header from './header.js';
import Footer from './footer.js';
import SignOnPage from './signOn';



export var flags = {
		isSignedIn: false,
		userName: "",
		numberOfCartItems: 0,
		productPageNumber: 0,
		websiteState: "Product Showcase",
		catalogStartIndex: 1,
		catalogLoadNum: 8
	};

function App() {
  
  //Add another data set that is read/writable for username/password.
  
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  
    
  
return (
    
    <div id="application">
        <Header flags={flags} />
		
		<div className="container-fluid" id="center-piece">
          <div className="main-content">
			{(!data) ? "Loading..." : <CardTable productCollection={data} flags={flags}/>}
		  
		  <SignOnPage flags={flags}/>
		  </div>
		</div>
			
		  
    <Footer flags={flags}/>    
       
    
	</div>
  );
}


export default App;
