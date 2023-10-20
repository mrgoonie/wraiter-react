/// <reference types="react" />
declare module "src/wraiter/types/BaseProps" {
    import { ReactElement, ReactNode } from "react";
    export interface BaseProps {
        children?: ReactNode | ReactElement;
        className?: string;
        style?: React.CSSProperties;
    }
}
declare module "src/wraiter/EditorIcon" {
    import React from "react";
    import type { BaseProps } from "src/wraiter/types/BaseProps";
    interface EditorIconProps extends BaseProps {
        active?: boolean;
        onClick?: React.MouseEventHandler<HTMLElement>;
    }
    const EditorIcon: (props?: EditorIconProps) => import("react/jsx-runtime").JSX.Element;
    export default EditorIcon;
}
declare module "src/wraiter/SeperatorIcon" {
    const SeperatorIcon: () => import("react/jsx-runtime").JSX.Element;
    export default SeperatorIcon;
}
declare module "src/wraiter/UploadArea" {
    import type { BaseProps } from "src/wraiter/types/BaseProps";
    export interface UploadAreaProps extends BaseProps {
        multiple?: boolean;
        imageUrl?: string;
        desc?: string;
        onChange?: (firstImage: string, images: string[]) => void;
    }
    const UploadArea: (props?: UploadAreaProps) => import("react/jsx-runtime").JSX.Element;
    export default UploadArea;
}
declare module "src/wraiter/index" {
    import "remixicon/fonts/remixicon.css";
    import "./styles/wraiter.scss";
    import TipTap from "@tiptap/react";
    import { BaseProps } from "src/wraiter/types/BaseProps";
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
    const Wraiter: (props?: WraiterProps) => import("react/jsx-runtime").JSX.Element;
    export default Wraiter;
}
declare module "src/wraiter/menu" {
    import React from "react";
    import { BaseProps } from "src/wraiter/types/BaseProps";
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
    const ComposeMenu: (props?: ComposeMenuProps) => import("react/jsx-runtime").JSX.Element;
    export default ComposeMenu;
}
declare module "src/wraiter/editor" {
    import { WraiterProps } from "src/wraiter/index";
    const editorStatus: readonly ["compose", "save_fail", "save_success", "publish_fail", "publish_success"];
    export type EditorStatus = (typeof editorStatus)[number];
    const Editor: (props?: WraiterProps) => import("react/jsx-runtime").JSX.Element;
    export default Editor;
}
//# sourceMappingURL=index.d.ts.map