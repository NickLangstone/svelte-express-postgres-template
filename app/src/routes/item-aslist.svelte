<script>
    import { onMount } from "svelte";
    import { itemData, loadItems } from "../stores/item.js"
    


    onMount(  loadItems);

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