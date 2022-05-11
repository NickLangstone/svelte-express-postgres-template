import { writable } from 'svelte/store';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const itemData = writable([]);

export const loadItems = function loadItems() {
  fetch("http://localhost:3001/api")
  .then(response => response.json())
  .then(data => {
        console.log("Got some data from the server" + JSON.stringify( data.data) );
        itemData.set(data.data);
  }).catch(error => {
    console.log(error);
    return [];
  });
};


export const saveItem =  async function  saveItem( /** @type {any} */ id, /** @type {string} */ name, /** @type {string} */ description, /** @type {Number} */ quantity) {
  //alert("saving : " + name + "  " + description   + " qty: " + quantity );

  let newitem = { name: name , description: description , quantity: quantity };
	console.log("payload : " +  JSON.stringify(newitem) );


  fetch("http://localhost:3001/api",
      {   method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(newitem)
        })
    .then(function(res){ console.log( "res : " +  JSON.stringify( res)  );
                          loadItems();}  )
    .then(function(data){ console.log( "data : " + JSON.stringify( data ) ) })

	}


