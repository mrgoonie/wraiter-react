import type { BaseProps } from "./types/BaseProps";
export interface UploadAreaProps extends BaseProps {
    multiple?: boolean;
    imageUrl?: string;
    desc?: string;
    onChange?: (firstImage: string, images: string[]) => void;
}
declare const UploadArea: (props?: UploadAreaProps) => import("react/jsx-runtime").JSX.Element;
export default UploadArea;
//# sourceMappingURL=UploadArea.d.ts.map