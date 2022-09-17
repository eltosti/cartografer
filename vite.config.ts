import {sveltekit} from '@sveltejs/kit/vite';
import type {UserConfig} from 'vite';
import path from "path";

const config: UserConfig = {
    plugins: [sveltekit()],
    resolve: {
        alias: {
            '$stores': path.resolve('./src/stores'),
            '$types': path.resolve('./src/types')
        }
    }
}

export default config;