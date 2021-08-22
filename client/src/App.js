import React from "react";
import CardTable from './card.js';
import Header from './header.js';
import Footer from './footer.js';
import SignOnPage from './signOn';
import {RenderApp} from './index.js';
import {CartPage} from './cart.js';
import {CatalogSelector} from './http.js';



export var flags = {
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
	RenderApp();
}

function Loading(props)
{
	return(<div className="container-fluid" style={{textAlign: "center", margin: "100px 0px"}}>
			<i className="fas fa-sync fa-spin fa-10x"></i>
			</div>
			);
}




function App() {
  
    const [data, setData] = React.useState(null);

	const UpdateData = (dat) => {setData(dat)};

	/*
	fetch("/api")
	.then((res) => res.json())
	.then((data) => setData(data));
	*/

	React.useEffect(() => {
		
		async function getInitData() {
			let buf = await CatalogSelector("");
			setData(buf);
		}

		getInitData();
    }, []);
  

    
  
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
			
		  
    <Footer />    
       
    
	</div>
  );
}


export default App;
