import "remixicon/fonts/remixicon.css";
import wraiterLogo from "./assets/wraiter.svg";
import "./App.css";

function App() {
	return (
		<>
			<main className="max-w-md mx-auto px-0">
				<h1 className="px-0">
					<img src={wraiterLogo} className="logo wraiter" alt="Wraiter logo" />
				</h1>
				<p>An open source "Notion-like" text editor React Component with AI assistant integrated.</p>

				<div className="flex items-center justify-center py-6">
					<pre className="p-4 rounded-lg bg-neutral-800 text-white">
						<code>npm i wraiter-react</code>
					</pre>
				</div>

				<div className="read-the-docs text-3xl flex gap-4 justify-center">
					<a href="https://www.npmjs.com/package/@topgroup/wraiter-react" target="_blank">
						<i className="ri-npmjs-fill"></i>
					</a>
					<a href="https://github.com/mrgoonie/wraiter-react" target="_blank">
						<i className="ri-github-fill"></i>
					</a>
				</div>
			</main>
		</>
	);
}

export default App;
