<script>
    import { onMount } from "svelte";
    import { itemData } from "../stores/item.js"
    
    onMount(async () => {
      fetch("http://localhost:3001/api")
      .then(response => response.json())
      .then(data => {
            console.log("Got come data from the server" + data.data);
            itemData.set(data.data);
      }).catch(error => {
        console.log(error);
        return [];
      });
    });
    </script>
    
    <main>
        <h1>Inventory Items</h1>
        <ul>
        {#each $itemData as item}
            <li>{item.name} - {item.description}  -    quantity on hand = {item.quantity} </li>
        {/each}
        </ul>
    </main>
    
    <style>
    
    </style>