<script lang="ts">
	import Board from '$lib/components/Board.svelte';
	import MiniCard from "$lib/components/MiniCard.svelte";
	import Card from "$lib/components/Card.svelte"


</script>

<div class="bg-amber-50 h-screen">
	<div class="grid overflow-hidden w-screen grid-cols-12 grid-rows-2 gap-2 h-screen">
		<div class="bg-blue-200 box row-span-2 col-span-3">1</div>
		<div class="box row-span-2 col-span-4">
			<div class="flex justify-center h-screen items-center">
				<Board  />

			</div>
		</div>
		<div class="bg-green-200 box row-span-2 col-span-5">
			<MiniCard time="{2}"/>
			<MiniCard time="{1}"/>
			<MiniCard time="{0}"/>
			<Card/>
		</div>
	</div>

</div>
