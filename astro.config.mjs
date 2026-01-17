// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';

export default defineConfig({
	site: 'https://xanderap25.github.io',
	base: '/AlexPuskaricDev',
	integrations: [
		starlight({
			title: '',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/XanderAP25' },
			],

			sidebar: [
				{
					label: 'leadingNavLinks',
					
					items: [
						{ label: 'Home', link: '/' },
						{ label: 'Projects', link: '/projects/' },
						{ label: 'Resume', link: '/resume/' },
						{ label: 'About', link: '/about/' },
					],
				},

				{ slug: 'projects' },
			],

			plugins: [
				starlightUtils({
					navLinks: {
						leading: { useSidebarLabelled: 'leadingNavLinks' },
					},
				}),
			],

			pagefind: false,
			pagination: false
		}),
		
	],

});
