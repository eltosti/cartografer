<script lang="ts">
    import {store} from "../../stores/board";

    let coat = "";
    (async _ => {
        let resp = await fetch(`https://armoria.herokuapp.com/svg/500/${$store.seed}`)
        let svg = await resp.text()
        svg = svg.replace("width=\"500\"", "width=\"8rem\"")
        svg = svg.replace("height=\"500\"", "height=\"8rem\"")
        coat = svg
    })()


</script>

<div>
    {@html coat}
</div>

<style global>
    .coat {
        background-color: #00a5bb;
    }
</style>
