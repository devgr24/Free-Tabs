<template>
	<v-toolbar fixed class="cyan">
		<v-toolbar-title class="mr-4">
			<span class="home" @click="navigateTo({name:'root'})">Free Tabs</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
			<v-toolbar-items v-if="!$store.state.isUserLoggedIn">
				<v-btn flat dark @click="navigateTo({name :'login'})">
					Login
				</v-btn>
				<v-btn flat dark @click="navigateTo({name :'register'})">
					Sign Up
				</v-btn>
			</v-toolbar-items>
	</v-toolbar>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
	methods : {
		navigateTo (route) {
			this.$router.push(route)
		}
	}
}
</script>
<style scoped>
.home {
	cursor : pointer;
}
.home:hover {
	color : #eeeeee;
}	
</style>