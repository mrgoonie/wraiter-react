import React from "react";

import { BaseProps } from "./types/BaseProps";
interface ComposeMenuProps extends BaseProps {
    status?: string | React.ReactNode;
    position?: "top" | "bottom";
    wrap?: boolean;
    boldActive?: boolean;
    onBoldToggle?: React.MouseEventHandler<HTMLElement>;
    italicActive?: boolean;
    onItalicToggle?: React.MouseEventHandler<HTMLElement>;
    underlineActive?: boolean;
    onUnderlineToggle?: React.MouseEventHandler<HTMLElement>;
    strikeActive?: boolean;
    onStrikeToggle?: React.MouseEventHandler<HTMLElement>;
    listOrderedActive?: boolean;
    onListOrderedToggle?: React.MouseEventHandler<HTMLElement>;
    listBulletActive?: boolean;
    onListBulletToggle?: React.MouseEventHandler<HTMLElement>;
    h1Active?: boolean;
    onH1Toggle?: React.MouseEventHandler<HTMLElement>;
    h2Active?: boolean;
    onH2Toggle?: React.MouseEventHandler<HTMLElement>;
    h3Active?: boolean;
    onH3Toggle?: React.MouseEventHandler<HTMLElement>;
    alignLeftActive?: boolean;
    onAlignLeftToggle?: React.MouseEventHandler<HTMLElement>;
    alignCenterActive?: boolean;
    onAlignCenterToggle?: React.MouseEventHandler<HTMLElement>;
    alignRightActive?: boolean;
    onAlignRightToggle?: React.MouseEventHandler<HTMLElement>;
    quoteActive?: boolean;
    onQuoteToggle?: React.MouseEventHandler<HTMLElement>;
    codeActive?: boolean;
    onCodeToggle?: React.MouseEventHandler<HTMLElement>;
    codeBlockActive?: boolean;
    onCodeBlockToggle?: React.MouseEventHandler<HTMLElement>;
    onInsertLink?: (url: string, options?: {
        target?: string;
        rel?: string;
        class?: string;
    }) => void;
    highlightActive?: boolean;
    onHighlightToggle?: React.MouseEventHandler<HTMLElement>;
    textColor?: string;
    onTextColorChange?: (color: string) => void;
    onInsertImage?: (url: string) => void;
    onInsertYoutube?: (url: string) => void;
    submitBtn?: string | boolean;
    onSubmit?: React.MouseEventHandler<HTMLElement>;
    onSaveDraft?: React.MouseEventHandler<HTMLElement>;
    saveDraftLabel?: string;
}
declare const ComposeMenu: (props?: ComposeMenuProps) => import("react/jsx-runtime").JSX.Element;
export default ComposeMenu;
//# sourceMappingURL=menu.d.ts.map