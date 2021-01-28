<template>
  <q-page class="flex flex-center">
    <div class="full-height">
		<span>Leitura</span>
		<button @click="getBooks()">Get books</button>
	</div>
  </q-page>
</template>

<script>

import {mapActions} from 'vuex'

export default {
	data(){
		return{

		}
	},
	methods:{
		...mapActions('biblia',["getBooks"])
	}
}
</script>

<style>

</style>