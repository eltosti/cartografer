<script lang="ts">


    const login = () => {

    }
    let value = ""
    const validUsername = async () => {
        if (!value) return false
        let response = await fetch("api/validUsername/" + value)
        let res = await response.json()
        console.log(res)
       return (res)
    }


</script>

<div class="flex justify-center items-center bg-amber-50 h-screen">
    <form action="/api/login" method="POST">
        <input bind:value placeholder="Username"  name="nombre" class="margin-bottom-small" valid="{validUsername}"/>
        <button disable:value block type="success "  nativeType="submit">
            Sign in
        </button>
    </form>
</div>
