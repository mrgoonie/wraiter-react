import "remixicon/fonts/remixicon.css";
import "./styles/wraiter.scss";

import TipTap from "@tiptap/react";

import Editor from "./editor";
import { BaseProps } from "./types/BaseProps";

export type OnChangeProps = {
	editor?: TipTap.Editor;
	value?: string;
};

export interface WraiterProps extends BaseProps {
	toolbarPosition?: "top" | "bottom" | "hidden";
	toolbarWrap?: boolean;
	defaultContent?: string;
	theme?: "light" | "dark";
	border?: string | boolean;
	submitBtn?: string | boolean;
	onSubmit?: (value?: string) => void;
	onChange?: (params?: OnChangeProps) => void;
}

const Wraiter = (props?: WraiterProps) => {
	return <Editor {...props} />;
};

export default Wraiter;
