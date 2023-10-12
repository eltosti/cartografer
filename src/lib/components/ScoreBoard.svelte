<script>
    import SeasonPoints from "./SeasonPoints.svelte";

    let points = {
        primavera: {
            objective1: 6,
            objective2: 6,
            coins: 3,
            ambush: -9,
        },
        verano: {
            objective1: 9,
            objective2: 12,
            coins: 5,
            ambush: -1,
        },
        otonio: {
            objective1: 9,
            objective2: 3,
            coins: 8,
            ambush: -12,
        },
        invierno: {
            objective1: 3,
            objective2: 18,
            coins: 9,
            ambush: -10,
        }
    }
    let total = null
    let max_coins = 0
    for (const season of Object.keys(points)) {
        max_coins = Math.max(max_coins, points[season].coins)
        for (const seasonElement of Object.keys(points[season])) {
            total += points[season][seasonElement]

        }
    }


</script>
<div class="my-2 flex flex-col justify-center items-center">
    <div class="flex items-center mb-2 ">
        {#each  Array(max_coins) as x}
            <div class="h-4 w-4 mx-0.5 flex align-top border-2 border-[#b37a3a] rounded-full bg-amber-400"></div>
        {/each}
    </div>
    <div class="flex justify-evenly items-center ">
        <SeasonPoints
                objective1="{points.primavera.objective1}"
                objective2="{points.primavera.objective2}"
                coins="{points.primavera.coins}"
                ambush="{points.primavera.ambush}"
        />
        +
        <SeasonPoints
                objective1="{points.verano.objective1}"
                objective2="{points.verano.objective2}"
                coins="{points.verano.coins}"
                ambush="{points.verano.ambush}"
        />
        +
        <SeasonPoints
                objective1="{points.otonio.objective1}"
                objective2="{points.otonio.objective2}"
                coins="{points.otonio.coins}"
                ambush="{points.otonio.ambush}"
        />
        +
        <SeasonPoints
                objective1="{points.invierno.objective1}"
                objective2="{points.invierno.objective2}"
                coins="{points.invierno.coins}"
                ambush="{points.invierno.ambush}"
        />
        =
        {total != null ? total : ""}
    </div>
</div>
