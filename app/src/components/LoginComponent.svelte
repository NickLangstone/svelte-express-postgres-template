<script>
    // article   https://ashutosh.dev/how-to-do-authentication-in-svelte-using-store/
    //
	import { checkLoggedIn , getUserDetails , logout } from '../hooks/auth';
    import { browser } from '$app/env';

	let username = '';
	let password = '';
	let error = ''

	async function login() {
		const user = await getUserDetails( username, password )

		if ( user ) {
			if ( error ) error = ''
            if ( browser) window.location = window.location.href;  // hack -- but works. force to go to the app root


		}
		else {
			error = 'Incorrect username and password.'
			console.log("Incorrect username and password.")
		}
	}

    function formLogout(){
        logout();
    }
</script>

<form on:submit|preventDefault={login} class="flex mx-auto col-6">

	<div class="mb-3">
		<label for="username" class="form-label">Username</label>
		<input type="email" class="form-control" id="username" bind:value={username} />
        any email address
	</div>

	<div class="mb-3">
		<label for="password" class="form-label">Password</label>
		<input type="password" class="form-control" id="password" bind:value={password} />
        password = 123456
	</div>

	<button type="submit" class="btn btn-primary">Login</button>
	<div id="error_message" class="text-danger">
		<small>{error}</small>
	</div>
    <br />
    <button on:click="{formLogout}"> Logout </button>

</form>