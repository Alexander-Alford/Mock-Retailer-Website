

function SendRecieveJSON(data)
{
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

export function CatalogSelector(input)
{
const data = { category: input };

return SendRecieveJSON(data);
}

export function NameSelector(input)
{
const data = { name: input };

return SendRecieveJSON(data); 	
}


