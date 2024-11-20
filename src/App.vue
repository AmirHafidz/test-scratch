<template>
	<div>
		<nav class="navbar bg-body-tertiary">
			<div class="container-fluid">
				<img src="/images/logo.png" class="navbar-brand" style="max-height: 50px;">
				<div class="d-flex justify-conyent-center w">
				</div>
			</div>
		</nav>

		<router-view></router-view>
		
	</div>
</template>

<script>
export default {
	name: 'App',
}
</script>
