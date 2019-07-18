<template>
    <v-app>
        <page-header/>
        <main>
            <router-view/>
        </main>
    </v-app>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import Login from '@/components/Login.vue'

export default {
    name: 'App',
    components: {
        PageHeader,
        Login
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
