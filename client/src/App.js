import React from "react";
import CardTable from './card.js';
import Header from './header.js';
import Footer from './footer.js';
import SignOnPage from './signOn';
import {RenderApp} from './index.js';
import {CartPage} from './cart.js';
import {CatalogSelector} from './http.js';



export var flags = {
		isSignedIn: false,
		userName: "",
		numberOfCartItems: 0,
		productPageNumber: 0,
		websiteState: "Product Showcase",
		catalogStartIndex: 0,
		catalogLoadNum: 10,
		popUpFlag: false,
		popUpProd: ""
	};


export function ChangePage(page)
{
	flags.websiteState = page;
	RenderApp();
}

export function UpdateCatalog(newData)
{
	/*data = newData;*/
	RenderApp();
}

function Loading(props)
{
	return(<div className="container-fluid" style={{"text-align": "center", "margin": "100px 0px"}}>
			<i className="fas fa-sync fa-spin fa-10x"></i>
			</div>
			);
}




function App() {
  
  //Add another data set that is read/writable for username/password.
  
    const [data, setData] = React.useState(null);
  
  	const UpdateData = (data) => {console.log(data); setData(data)};
    
	React.useEffect(() => {
      setData(CatalogSelector(""));
    }, []);
	
	React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data));
    });
  

    
  
return (
    
    <div id="application">
        <Header flags={flags} getData={UpdateData} data={data} />
		
		
		<div className="container-fluid" id="center-piece">
          <div className="main-content">
		  
			{(!data) ? <Loading/> : <CardTable productCollection={data} flags={flags}/>}
		  
		  <SignOnPage flags={flags}/>
		  <CartPage flags={flags}/>
		  
		  
		  </div>
		</div>
			
		  
    <Footer flags={flags}/>    
       
    
	</div>
  );
}


export default App;
