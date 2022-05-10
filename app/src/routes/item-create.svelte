<script>
        import { saveItem , loadItems } from "../stores/item.js";

    let itemId = 0;
    let name = '';
    let description = '' ;
    let quantity = 0;

    function save(){
        saveItem( 0,  name , description  , quantity );
        loadItems();
    }
</script>

<main>
    <div >
       
    <input bind:value={name} placeholder="enter item name">
    <input bind:value={description} placeholder="enter item description" size="50">
    <input type=number bind:value={quantity} min=0  >
    &nbsp;&nbsp;&nbsp;
    <button on:click="{save}"> Save </button>
    </div>
</main>

<style>
    div {padding: 20px;}
    input[type='number']{ width: 5em; } 
</style>