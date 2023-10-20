import Codeblock from "@tiptap/extension-code-block-lowlight";
import TextColor from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import EditorImage from "@tiptap/extension-image";
import EditorLink from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Youtube from "@tiptap/extension-youtube";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import { common, createLowlight } from "lowlight";
import { useEffect, useState } from "react";

import { WraiterProps } from ".";
import ComposeMenu from "./menu";

const editorStatus = ["compose", "save_fail", "save_success", "publish_fail", "publish_success"] as const;
export type EditorStatus = (typeof editorStatus)[number];

const lowlight = createLowlight(common);

lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);
lowlight.register("json", json);

const Editor = (props?: WraiterProps) => {
	const [status, setStatus] = useState<EditorStatus>("compose");
	const [content, setContent] = useState(props?.defaultContent);

	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				history: { depth: 1000 },
				heading: { levels: [1, 2, 3, 4, 5] },
				dropcursor: { color: "#ff0000" },
				code: {
					HTMLAttributes: { class: "bg-neutral-800 rounded text-orange-600" },
				},
				codeBlock: false,
			}),
			Youtube.configure({
				inline: true,
				HTMLAttributes: { class: "youtube-video" },
			}),
			Underline,
			Codeblock.configure({ lowlight }),
			Highlight.configure({ multicolor: true }),
			EditorImage.configure({
				inline: true,
				allowBase64: true,
				HTMLAttributes: {
					class: "max-w-max mx-auto",
				},
			}),
			EditorLink.configure({
				protocols: ["ftp", "mailto", "http", "https"],
			}),
			TextAlign.configure({
				types: ["heading", "paragraph"],
			}),
			Placeholder,
			TextStyle,
			TextColor.configure({
				types: ["textStyle"],
			}),
		],
		// 		content: `<h1>Hello world</h1>
		//         <h2>This is something</h2>
		//         <h3>Hi how are you</h3>
		//         <ul><li><p>123123</p><ul><li><p>123123</p><ul><li><p>123123</p></li></ul></li></ul></li></ul>
		//         <ol>
		//             <li><p>123123</p><ol><li><p>123123</p><ol><li><p>123123</p></li></ol></li></ol></li></ol>
		//         <p>
		//             <strong>Lorem ipsum dolor sit amet</strong>, <em>consectetur adipiscing elit</em>, <strong><em>sed do eiusmod tempor</em></strong>.
		//             <br/>Incididunt ut labore et dolore magna aliqua. <s>Ut enim ad minim veniam</s>.
		//         </p>
		//         <p>Quis nostrud exercitation <mark>ullamco laboris</mark> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
		//         dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		//         <p><a href="https://www.google.com">Click here</a></p>
		//         <p>This is <code>the code</code></p>
		//         <pre><code class="language-js"><span class="hljs-keyword">var</span> something = <span class="hljs-string">"nothing"</span>;
		// <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`Something is\`</span>, something);</code></pre>
		//         <blockquote><p>Hello world</p></blockquote>
		//         <p><img class="max-w-max" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" contenteditable="false" draggable="true"><br class="ProseMirror-trailingBreak"></p>
		//         <p></p>`,
	});

	useEffect(() => {
		if (!editor || !content) return;

		if (content) {
			editor.chain().setContent(content).run();
		}
		// if (publishedAt) setStatus("publish_success");

		if (props?.onChange) props?.onChange({ editor, value: content });
	}, [editor, content]);

	return (
		<>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"
			/>
			<div
				className={`prose relative ${
					props?.border ? "border border-neutral-200" : ""
				} rounded-md w-full h-full flex flex-col ${
					props?.toolbarPosition === "bottom" ? "flex-col-reverse" : ""
				} text-left dark:prose-invert lg:prose-lg prose-headings:mb-4 prose-headings:mt-0 prose-p:my-2 before:prose-p:content-none after:prose-p:content-none prose-a:text-indigo-400 hover:prose-a:text-indigo-200 hover:prose-a:underline prose-img:my-0 prose-lead:leading-none ${props?.className}`}
			>
				<ComposeMenu
					className=""
					wrap={props?.toolbarWrap}
					// text style
					boldActive={editor?.isActive("bold")}
					onBoldToggle={editor?.chain().toggleBold().run}
					italicActive={editor?.isActive("italic")}
					onItalicToggle={editor?.chain().toggleItalic().run}
					underlineActive={editor?.isActive("underline")}
					onUnderlineToggle={editor?.chain().toggleUnderline().run}
					strikeActive={editor?.isActive("strike")}
					onStrikeToggle={editor?.chain().toggleStrike().run}
					// list
					listBulletActive={editor?.isActive("bulletList")}
					onListBulletToggle={editor?.chain().toggleBulletList().run}
					listOrderedActive={editor?.isActive("orderedList")}
					onListOrderedToggle={editor?.chain().toggleOrderedList().run}
					// heading
					h1Active={editor?.isActive("heading", { level: 1 })}
					onH1Toggle={editor?.chain().toggleHeading({ level: 1 }).run}
					h2Active={editor?.isActive("heading", { level: 2 })}
					onH2Toggle={editor?.chain().toggleHeading({ level: 2 }).run}
					h3Active={editor?.isActive("heading", { level: 3 })}
					onH3Toggle={editor?.chain().toggleHeading({ level: 3 }).run}
					// text align
					alignLeftActive={editor?.isActive({ textAlign: "left" })}
					onAlignLeftToggle={editor?.chain().setTextAlign("left").run}
					alignCenterActive={editor?.isActive({ textAlign: "center" })}
					onAlignCenterToggle={editor?.chain().setTextAlign("center").run}
					alignRightActive={editor?.isActive({ textAlign: "right" })}
					onAlignRightToggle={editor?.chain().setTextAlign("right").run}
					// blocks
					quoteActive={editor?.isActive("blockquote")}
					onQuoteToggle={editor?.chain().toggleBlockquote().run}
					codeActive={editor?.isActive("code")}
					onCodeToggle={editor?.chain().toggleCode().run}
					codeBlockActive={editor?.isActive("codeBlock")}
					onCodeBlockToggle={editor?.chain().toggleCodeBlock().run}
					onInsertLink={(url, options) =>
						editor
							?.chain()
							.setLink({ href: url, ...options })
							.run()
					}
					// color
					highlightActive={editor?.isActive("highlight")}
					onHighlightToggle={editor?.chain().toggleHighlight().run}
					textColor={editor?.getAttributes("textStyle").color}
					onTextColorChange={(color) => editor?.chain().setColor(color.toString()).run()}
					onInsertImage={(url) => editor?.chain().setImage({ src: url }).run()}
					onInsertYoutube={(url) => editor?.chain().setYoutubeVideo({ src: url }).run()}
					// actions
					submitBtn={props?.submitBtn}
					onSubmit={() => (props?.onSubmit ? props?.onSubmit(content) : undefined)}
				/>

				<div className="overflow-auto px-5 py-2 flex-grow">
					<EditorContent editor={editor} placeholder="Write something here" />
				</div>
			</div>
		</>
	);
};

export default Editor;
