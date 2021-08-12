import React from "react";
import CardTable from './card.js';
import Header from './header.js';
import Footer from './footer.js';
import SignOnPage from './signOn';
import {RenderApp} from './index.js';
import {CartPage} from './cart.js';

export var flags = {
		isSignedIn: false,
		userName: "",
		numberOfCartItems: 0,
		productPageNumber: 0,
		websiteState: "Product Showcase",
		catalogStartIndex: 0,
		catalogLoadNum: 8
	};

export function ChangePage(page)
{
	flags.websiteState = page;
	RenderApp();
}

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
		  <CartPage flags={flags}/>
		  
		  
		  </div>
		</div>
			
		  
    <Footer flags={flags}/>    
       
    
	</div>
  );
}


export default App;
