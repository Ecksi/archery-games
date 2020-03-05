<template>
	<section>
		<img :src="require(`../../assets/menus/${asset}.svg`)" alt="Start icon" width="50">
		<h3><slot></slot></h3>
	</section>
</template>

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

<style scoped>
  section {
    display: flex;
    padding: 1.5rem;
		cursor: pointer;
  }

	section:hover {
		background-color: purple;
	}

	section h3 {
    align-self: center;
    font-size: 28px;
    margin-left: 3rem;
  }
</style>
