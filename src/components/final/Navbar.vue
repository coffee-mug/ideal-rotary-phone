<template>
<nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <router-link :to="{ path: 'home' }" class="navbar-brand">Tereza</router-link>
            </div> 
        </div>
    </nav>
</template>   

<script>
export default {
  name: 'navbar',
  data() {
    return {};
  },
}
</script>

<style>
.navbar{
    margin-bottom:0px;
}
</style>
