<script>
	import AfterLogin from '../components/AfterLogin.svelte';
	import { store } from '../hooks/auth';
	import LoginComponent from '../components/LoginComponent.svelte';

</script>

{#if $store != null }
	<AfterLogin />
{:else }
	<LoginComponent />
{/if}