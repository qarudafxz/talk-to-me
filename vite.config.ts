import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	root: "./src",
	define: {
		"process.env.VITE_OPENAI_API_KEY": JSON.stringify(
			process.env.VITE_OPENAI_API_KEY
		),
	},
	build: {
		outDir: "../dist",
		minify: false,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, "src/index.html"),
				login: resolve(__dirname, "src/login.html"),
				signup: resolve(__dirname, "src/signup.html"),
				dashboard: resolve(__dirname, "src/dashboard.html"),
				journal: resolve(__dirname, "src/journal.html"),
				home: resolve(__dirname, "src/home.html"),
				quotes: resolve(__dirname, "src/quotes.html"),
				logout: resolve(__dirname, "src/logout.html"),
				message: resolve(__dirname, "src/message.html"),
			},
		},
	},
});
