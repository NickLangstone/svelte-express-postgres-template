 <script>
// Svelte-simple-datatable
//https://vincjo.fr/svelte-simple-datatables/?ref=madewithsvelte.com#/
    import  ItemCreate  from "./item-create.svelte";


    import { itemData, loadItems } from "../stores/item.js";
    import { Datatable } from 'svelte-simple-datatables';
    import { onMount } from "svelte";
    onMount(  loadItems);
    const settings = { columnFilter: true,
        rowsPerPage: 10,
        scrollY: false,
        sortable: true,
        pagination: true,
        css: true
     };
    
    let rows
</script>

<Datatable settings={settings} data={$itemData} bind:dataRows={rows}>
    <thead>
        <th data-key="itemID">Item ID</th>
        <th data-key="name">Name</th>
        <th data-key="description">Description</th>
        <th data-key="quantity">Quantity</th>
    </thead>
    <tbody>
    {#if rows}
        {#each $rows as row}
        <tr>
            <td>{row.itemID}</td>
            <td>{row.name}</td>
            <td>{row.description}</td>
            <td>{row.quantity}</td>
        </tr>
        {/each}
    {/if}
    </tbody>
</Datatable>

<style>
    td{text-align:left;padding:10px 0; padding-left: 10px;}
    th{text-align:left;padding:10px 0; padding-left: 10px;}
 

</style>

<ItemCreate />