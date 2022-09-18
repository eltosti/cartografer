<script lang="ts">
    import {Button, Form, Input} from "spaper";

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
        <Input bind:value placeholder="Username" class="margin-bottom-small" valid="{validUsername}"/>
        <Button disable:value block type="success "  nativeType="submit">
            Sign in
        </Button>
    </form>
</div>
