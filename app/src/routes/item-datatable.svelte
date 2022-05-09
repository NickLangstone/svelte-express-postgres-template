 <script>
   import { itemData, loadItems } from "../stores/item.js";
    import { Datatable } from 'svelte-simple-datatables';
    import { onMount } from "svelte";
    onMount(  loadItems);
    const settings = { columnFilter: true,
        rowsPerPage: 10,
        scrollY: false,
        sortable: true,
        pagination: true
     };
    
    let rows
</script>

<Datatable settings={settings} data={$itemData} bind:dataRows={rows}>
    <thead>
        <th data-key="itemID">First Name</th>
        <th data-key="name">Last Name</th>
        <th data-key="quantity">Email</th>
    </thead>
    <tbody>
    {#if rows}
        {#each $rows as row}
        <tr>
            <td>{row.itemID}</td>
            <td>{row.name}</td>
            <td>{row.quantity}</td>
        </tr>
        {/each}
    {/if}
    </tbody>
</Datatable>

<style>
    td{text-align:center;padding:10px 0}

    .datatable{ height:fit-content;}
</style>

