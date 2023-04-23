<script lang='ts'>
	import '../theme.postcss';
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';

	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	let valueSingle: string = 'products';
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">Kioskberry</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- <a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden lg:block">
			<ListBox>
				<ListBoxItem bind:group={valueSingle} name="medium" value="products">Products</ListBoxItem>
				<ListBoxItem bind:group={valueSingle} name="medium" value="collections">Collections</ListBoxItem>
				<!-- <ListBoxItem bind:group={valueSingle} name="medium" value="movies">Movies</ListBoxItem>
				<ListBoxItem bind:group={valueSingle} name="medium" value="tv">TV</ListBoxItem> -->
			</ListBox>

		</div>
	</svelte:fragment>

	<slot />
</AppShell>
