



export function CatalogSelector(input)
{

const data = { category: input };


fetch("/api", {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => { console.log('Success:', data)})
.then(() => {return data})
.catch((error) => { console.error('Error:', error) })
}



export function Tester(input)
{
	
fetch('/api')
  .then(response => response.json())
  .then(data => console.log(data));
	
	
}