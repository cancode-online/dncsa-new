<script lang="ts">

    const setTheme = (theme: string) => () => {
        
        document.documentElement.setAttribute('data-theme', theme);

    };

</script>

<div class="navbar bg-base-100 absolute">
	<div class="flex-1">
		<a href='/' class="btn btn-ghost normal-case text-xl">daisyUI</a>
	</div>
    <div class="flex-none z-10 mr-4">
        <ul class="menu menu-horizontal px-1">
            <li>
                <span>
                    Theme
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </span>
                <ul class="p-2 bg-base-100">
                    <li>
                        <button on:click={setTheme("dark")}>Dark</button>
                    </li>
                    <li>
                        <button on:click={setTheme("light")}>Light</button>
                    </li>
                    <li>
                        <button on:click={setTheme("cupcake")}>Cupcake</button>
                    </li>
                    <li>
                        <button on:click={setTheme("emerald")}>Emerald</button>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
</div>
