

async function SendRecieveJSON(data)
{
  const host = "/api";
  const settings = {
    method: 'PUT', 
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(data),
    }

  let getFet = await fetch(host, settings)
    .then(response => {return response.json()})
    .catch(error => console.error('Error:', error));

  return getFet;
}

export async function CatalogSelector(input)
{
const data = { category: input };

const recieve = await SendRecieveJSON(data);

console.log(recieve);

return recieve;
}

export async function NameSelector(input)
{
const data = { name: input };

const recieve = await SendRecieveJSON(data);

return recieve; 	
}


