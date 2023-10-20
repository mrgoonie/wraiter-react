module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "unused-imports", "tailwindcss", "simple-import-sort"],
	rules: {
		"react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
		"react/require-default-props": "off", // Allow non-defined react props as undefined
		"react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
		"react-hooks/exhaustive-deps": "off", // Incorrectly report needed dependency with Next.js router
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"@typescript-eslint/no-unused-vars": "off",
		"unused-imports/no-unused-imports": "off",
		"no-unknown-property": "off",
		"no-console": "off",
		"import/prefer-default-export": "off", // Named export is easier to refactor automatically
		"simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
		"simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
		"tailwindcss/no-custom-classname": "off",
		"tailwindcss/migration-from-tailwind-2": "off",
		"tailwindcss/enforces-negative-arbitrary-values": "off",
		"@typescript-eslint/naming-convention": "off",
		"@typescript-eslint/no-throw-literal": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"unused-imports/no-unused-vars": "off",
	},
};
