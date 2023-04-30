<script lang='ts'>
	import '../theme.postcss';
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';

	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
  
	import type { LayoutData } from './$types'

	export let data: LayoutData;
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><strong class="text-xl">Kioskberry</strong></a>
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
				{#each data.collections as collection}
				<a href="/collections/{collection.slug}">
				<ListBoxItem bind:group={data.slug} name="medium" value={collection.slug}>
					{collection.title.en}
				</ListBoxItem>
				</a>
				{/each}
				<!-- <ListBoxItem bind:group={valueSingle} name="medium" value="movies">Movies</ListBoxItem>
				<ListBoxItem bind:group={valueSingle} name="medium" value="tv">TV</ListBoxItem> -->
			</ListBox>

		</div>
	</svelte:fragment>

	<slot />
</AppShell>
