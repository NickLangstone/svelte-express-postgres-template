<script>
	import AfterLogin from '../components/AfterLogin.svelte';
	import { checkLoggedIn } from '../hooks/auth';
	import LoginComponent from '../components/LoginComponent.svelte';

</script>

{#if $checkLoggedIn != null }
	<AfterLogin />
{:else }
	<LoginComponent />
{/if}