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
          console.log("Got come data from the server" + JSON.stringify( data.data) );
          itemData.set(data.data);
    }).catch(error => {
      console.log(error);
      return [];
    });
  };
