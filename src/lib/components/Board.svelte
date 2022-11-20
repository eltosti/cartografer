<script lang="ts">
	import { store } from "../../stores/board"
	import {store as board} from "$lib/../stores/board"
	import {store as placer} from "$lib/../stores/placer"
	import {Terrain} from "../../local_types/cards";

	//$: console.log($placer.shape)

	const isInShape : (x: number, y: number) => boolean = (x, y)=>{
		if (!!!$placer.shape.shape[x-$board.mousePosition.x+$placer.shape.offset.x]) return false
		let matrixPlacementX = x-$board.mousePosition.x+$placer.shape.offset.x
		let matrixPlacementY = y-$board.mousePosition.y+$placer.shape.offset.y
		return $placer.shape.shape[matrixPlacementX][matrixPlacementY]
	}


	const middleClick = e => {
		if (e.which == 2){
			placer.mirror()
			$board.mousePosition.x = $board.mousePosition.x
			e.preventDefault()
		}
	}
	const placeCard = ()=> {
		board.placeCard($board.mousePosition.x -$placer.shape.offset.x , $board.mousePosition.y-$placer.shape.offset.y, $placer.shape.shape, $placer.terrain)
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
//bg-amber hover:bg-amber-100
	//src="{$board.board[i][j] ? iconFiles[$board.board[i][j].material] : ''}"
</script>



<div on:contextmenu={e => {placer.rotate();e.preventDefault();$board.mousePosition.x = $board.mousePosition.x;return false;}} on:auxclick={middleClick} on:click={placeCard}>
	{#each { length: $store.size.x } as _, i (i)}
		<div class="flex">
			{#each { length: $store.size.y } as _, j (j)}
				<img class="w-10 h-10 border  {isInShape(i,j) ? 'bg-red-300' : 'bg-amber' }"
					 on:mouseenter={_ => {$board.mousePosition.x = i;$board.mousePosition.y = j}}
				 alt="" src="{$board.board[i][j] ? iconFiles[$board.board[i][j].material] : ''}" />
			{/each}
		</div>
	{/each}
</div>

<style>

</style>
