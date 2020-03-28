<script>
	export default {
		name: 'MenuOption',
		props: {
			asset: {
				type: String,
				default: 'finish',
				required: true
			}
		}
	};
</script>

<template>
	<section class="flex p-6 cursor-pointer">
		<img :src="require(`../../assets/menus/${asset}.svg`)" alt="Start icon" width="50">
		<h3 class="text-center text-3xl ml-12"><slot></slot></h3>
	</section>
</template>

<style scoped>
	section:hover {
		background-color: rgba(144, 238, 144, 0.2);
	}
</style>
