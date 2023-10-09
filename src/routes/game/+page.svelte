<script lang="ts">
	import Board from '$lib/components/Board.svelte';
	import MiniCard from "$lib/components/MiniCard.svelte";
	import Card from "$lib/components/Card.svelte"
	import MapInfo from "$lib/components/MapInfo.svelte"
	import {Terrain} from "../../local_types/cards.js";
	import SeasonPoints from "../../lib/components/SeasonPoints.svelte";
	import ScoreBoard from "../../lib/components/ScoreBoard.svelte";
	import {longT} from "../../local_types/shapes.js";


</script>

<div class="bg-amber-50 h-screen">
	<div class="grid overflow-hidden w-screen grid-cols-12 grid-rows-2 gap-2 h-screen">
		<div class="bg-blue-200 box row-span-2 col-span-4">1</div>
		<div class="box row-span-2 col-span-4 ">
			<div class="flex flex-col ">
				<div class="mb-12 mt-2"><MapInfo/></div>
				<div class="flex justify-center"><Board/></div>
				<div><ScoreBoard/></div>
			</div>
		</div>
		<div class="bg-green-200 box row-span-2 col-span-4">
			<MiniCard time="{2}" material="{Terrain.River}" coin="{true}"/>
			<MiniCard time="{1}" material="{Terrain.Ambush}" shape="{longT}"/>
			<MiniCard time="{0}" material="{Terrain.Mountain}"/>
			<Card/>
		</div>
	</div>

</div>
