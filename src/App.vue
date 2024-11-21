<template>
	<div>
		<nav class="navbar bg-body-primary" style="background-color: #614a43">
			<div class="container-fluid">
				<img src="/images/logo.png" class="navbar-brand" style="max-height: 50px;">
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
