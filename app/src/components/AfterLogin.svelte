<script>
    // article   https://ashutosh.dev/how-to-do-authentication-in-svelte-using-store/
    //
	import { getUsersName  } from '../hooks/auth';

</script>

<main>
	User {getUsersName()} is logged in.
</main>