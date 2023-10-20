import { Button } from "antd";
import React from "react";

import type { BaseProps } from "./types/BaseProps";

interface EditorIconProps extends BaseProps {
	active?: boolean;
	onClick?: React.MouseEventHandler<HTMLElement>;
}

const EditorIcon = (props?: EditorIconProps) => {
	return (
		<div>
			<Button
				className={`editor-icon border-none outline-none focus:border-none focus:outline-none active:border-none active:outline-none ${
					props?.active ? "active" : ""
				} ${props?.className}`}
				style={props?.style}
				onClick={props?.onClick}
				icon={props?.children}
			/>
		</div>
	);
};

export default EditorIcon;
