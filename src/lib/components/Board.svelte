<script lang="ts">
	import { store } from "../../stores/board"
	console.log($store.size);
</script>

<div>
	{#each { length: $store.size.x } as _, i (i)}
		<div class="flex">
			{#each { length: $store.size.y } as _, j (j)}
				<div class="p-7 border bg-amber hover:bg-amber-100 "></div>
			{/each}
		</div>
	{/each}
</div>
