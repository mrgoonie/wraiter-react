export default {
	"*.{js,jsx,ts,tsx}": ["eslint ./src --fix"],
	// "**/*.ts?(x)": () => "bun run check-types",
	"*.{json,yaml}": ["prettier --write"],
};
