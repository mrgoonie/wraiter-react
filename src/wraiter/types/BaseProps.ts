import { ReactElement, ReactNode } from "react";

export interface BaseProps {
	children?: ReactNode | ReactElement;
	className?: string;
	style?: React.CSSProperties;
}
