import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { withZephyr } from 'vite-plugin-zephyr';

// https://vitejs.dev/config/
export default defineConfig(() => ({
	plugins: [
		angular(),
		withZephyr(),
		federation({
			name: 'host',
			remotes: {
				remote: {
					type: 'module',
					name: 'remote',
					entry: 'http://localhost:5174/remoteEntry.js',
					entryGlobalName: 'remote',
					shareScope: 'default'
				}
			},
			exposes: {},
			filename: 'remoteEntry.js',
			shared: ['@angular/core']
		})
	],
	build: {
		target: 'chrome89',
	}
}));
