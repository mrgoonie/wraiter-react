import { WraiterProps } from ".";
declare const editorStatus: readonly ["compose", "save_fail", "save_success", "publish_fail", "publish_success"];
export type EditorStatus = (typeof editorStatus)[number];
declare const Editor: (props?: WraiterProps) => import("react/jsx-runtime").JSX.Element;
export default Editor;
//# sourceMappingURL=editor.d.ts.map