<script lang="ts">
	import { store } from "../../stores/board"
	import {store as board} from "$lib/../stores/board"
	import {store as placer} from "$lib/../stores/placer"
	import config from "../../config.json"
	import {Terrain} from "../../local_types/cards";
	// assert {type: "json5"}
	console.log(config)

	const isInShape : (x: number, y: number) => boolean = (x, y)=>{
		if (!!!$placer.shape.shape[x-$board.mousePosition.x+$placer.shape.offset.x]) return false
		let matrixPlacementX = x-$board.mousePosition.x+$placer.shape.offset.x
		let matrixPlacementY = y-$board.mousePosition.y+$placer.shape.offset.y
		return $placer.shape.shape[matrixPlacementX][matrixPlacementY]
	}
	const isValidPosition:(x: number, y: number) => boolean = (x, y)=>{
		return $board.board[x][y].material == Terrain.air
	}


	const middleClick = e => {
		if (e.which == 2){
			placer.mirror()
			$board.mousePosition.x = $board.mousePosition.x
			e.preventDefault()
		}
	}
	const placeCard = ()=> {

		board.placeCard($placer.shape.offset.x ,$placer.shape.offset.y, $placer.shape.shape, $placer.terrain)
		$board.mousePosition.x = $board.mousePosition.x
	}
	let iconFiles = [
		"",
		"src/resources/Village_Icon.png",
		"src/resources/Farm_Icon.png",
		"src/resources/Forest_Icon.png",
		"src/resources/Water_Icon.png",
		"src/resources/Monster_Icon.png",
		"src/resources/Mountain_Icon.png",
	]
</script>



<div class="select-none" on:contextmenu={e => {placer.rotate();e.preventDefault();$board.mousePosition.x = $board.mousePosition.x;return false;}} on:auxclick={middleClick} on:click={placeCard}>
	{#each { length: $store.size.x } as _, i (i)}
		<div class="flex">
			{#each { length: $store.size.y } as _, j (j)}
				<div class="h-10 w-10 relative">
					<div class="h-10 w-10 absolute z-10 {isInShape(i,j) ? ( isValidPosition(i,j) ? 'bg-[#00ff0080]' : 'bg-[#ff000080]'  ):''}"
						 on:mouseenter={_ => {$board.mousePosition.x = i;$board.mousePosition.y = j}}></div>
					<img class="w-10 h-10 z-0 absolute "
						 alt="" src="{$board.board[i][j] ? iconFiles[$board.board[i][j].material] : ''}" />
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>

</style>
