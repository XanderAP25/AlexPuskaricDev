// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';



// https://astro.build/config
export default defineConfig({
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
