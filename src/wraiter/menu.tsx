import {
	AlignCenterOutlined,
	AlignLeftOutlined,
	AlignRightOutlined,
	BoldOutlined,
	FileImageOutlined,
	FontColorsOutlined,
	HighlightOutlined,
	ItalicOutlined,
	OrderedListOutlined,
	StrikethroughOutlined,
	UnderlineOutlined,
	UnorderedListOutlined,
	YoutubeOutlined,
} from "@ant-design/icons";
import { Button, ColorPicker, Input, Modal, Segmented, Switch } from "antd";
import React, { useState } from "react";

import EditorIcon from "./EditorIcon";
import SeperatorIcon from "./SeperatorIcon";
import { BaseProps } from "./types/BaseProps";
import UploadArea from "./UploadArea";

interface ComposeMenuProps extends BaseProps {
	status?: string | React.ReactNode;
	position?: "top" | "bottom";
	wrap?: boolean;
	// text style
	boldActive?: boolean;
	onBoldToggle?: React.MouseEventHandler<HTMLElement>;
	italicActive?: boolean;
	onItalicToggle?: React.MouseEventHandler<HTMLElement>;
	underlineActive?: boolean;
	onUnderlineToggle?: React.MouseEventHandler<HTMLElement>;
	strikeActive?: boolean;
	onStrikeToggle?: React.MouseEventHandler<HTMLElement>;
	// list
	listOrderedActive?: boolean;
	onListOrderedToggle?: React.MouseEventHandler<HTMLElement>;
	listBulletActive?: boolean;
	onListBulletToggle?: React.MouseEventHandler<HTMLElement>;
	// heading
	h1Active?: boolean;
	onH1Toggle?: React.MouseEventHandler<HTMLElement>;
	h2Active?: boolean;
	onH2Toggle?: React.MouseEventHandler<HTMLElement>;
	h3Active?: boolean;
	onH3Toggle?: React.MouseEventHandler<HTMLElement>;
	// text align
	alignLeftActive?: boolean;
	onAlignLeftToggle?: React.MouseEventHandler<HTMLElement>;
	alignCenterActive?: boolean;
	onAlignCenterToggle?: React.MouseEventHandler<HTMLElement>;
	alignRightActive?: boolean;
	onAlignRightToggle?: React.MouseEventHandler<HTMLElement>;
	// blocks
	quoteActive?: boolean;
	onQuoteToggle?: React.MouseEventHandler<HTMLElement>;
	codeActive?: boolean;
	onCodeToggle?: React.MouseEventHandler<HTMLElement>;
	codeBlockActive?: boolean;
	onCodeBlockToggle?: React.MouseEventHandler<HTMLElement>;
	onInsertLink?: (url: string, options?: { target?: string; rel?: string; class?: string }) => void;
	// color
	highlightActive?: boolean;
	onHighlightToggle?: React.MouseEventHandler<HTMLElement>;
	textColor?: string;
	onTextColorChange?: (color: string) => void;
	onInsertImage?: (url: string) => void;
	onInsertYoutube?: (url: string) => void;
	// actions
	submitBtn?: string | boolean;
	onSubmit?: React.MouseEventHandler<HTMLElement>;
	onSaveDraft?: React.MouseEventHandler<HTMLElement>;
	saveDraftLabel?: string;
}

const ComposeMenu = (props?: ComposeMenuProps) => {
	const [isImageOpen, setIsImageOpen] = useState(false);
	const [insertImageType, setInsertImageType] = useState<"url" | "upload">("url");
	const [imageURL, setImageURL] = useState<string>();

	const [isYoutubeOpen, setIsYoutubeOpen] = useState(false);
	const [youtubeURL, setYoutubeURL] = useState<string>();

	const [isLinkOpen, setIsLinkOpen] = useState(false);
	const [linkOptions, setLinkOptions] = useState<any>({ target: "_blank", rel: "nofollow" });
	const [linkURL, setLinkURL] = useState<string>();

	// IMAGE
	const showImageModal = () => {
		setIsImageOpen(true);
	};

	const handleInsertImage = () => {
		if (!imageURL) return console.error(`Invalid image URL.`);
		setIsImageOpen(false);
		console.log("setImage > imageURL :>> ", imageURL);
		if (props?.onInsertImage) props.onInsertImage(imageURL);
		setImageURL("");
	};

	const handleImageCancel = () => {
		setIsImageOpen(false);
	};

	// YOUTUBE
	const showYoutubeModal = () => {
		setIsYoutubeOpen(true);
	};

	const handleInsertYoutube = () => {
		if (!youtubeURL) return console.error(`Invalid Youtube URL.`);
		setIsYoutubeOpen(false);
		console.log("setImage > youtubeURL :>> ", youtubeURL);
		if (props?.onInsertYoutube) props.onInsertYoutube(youtubeURL);
		setYoutubeURL("");
	};

	const handleYoutubeCancel = () => {
		setIsYoutubeOpen(false);
	};

	// LINK
	const showLinkModal = () => {
		setIsLinkOpen(true);
	};

	const handleInsertLink = () => {
		if (!linkURL) return console.error(`Invalid URL.`);
		setIsLinkOpen(false);
		console.log("setLink > linkURL :>> ", linkURL);
		if (props?.onInsertLink) props.onInsertLink(linkURL, linkOptions);
		setYoutubeURL("");
	};

	const handleLinkCancel = () => {
		setIsLinkOpen(false);
	};

	return (
		<div
			className={`flex w-full items-center justify-center bg-neutral-200 !p-5 dark:bg-neutral-900 md:px-10 md:py-6 ${props?.className}`}
		>
			<div className="flex w-full max-w-5xl flex-row flex-wrap items-center justify-center gap-2">
				<div
					className={
						!props?.wrap ? "flex flex-grow items-center gap-1 overflow-auto" : "flex flex-wrap items-center gap-1"
					}
				>
					{props?.onBoldToggle && (
						<EditorIcon onClick={props?.onBoldToggle} active={props?.boldActive}>
							<BoldOutlined />
						</EditorIcon>
					)}
					{props?.onItalicToggle && (
						<EditorIcon onClick={props?.onItalicToggle} active={props?.italicActive}>
							<ItalicOutlined />
						</EditorIcon>
					)}
					<EditorIcon onClick={props?.onUnderlineToggle} active={props?.underlineActive}>
						<UnderlineOutlined />
					</EditorIcon>
					<EditorIcon onClick={props?.onStrikeToggle} active={props?.strikeActive}>
						<StrikethroughOutlined />
					</EditorIcon>

					<SeperatorIcon />

					<EditorIcon onClick={props?.onListBulletToggle} active={props?.listBulletActive}>
						<UnorderedListOutlined />
					</EditorIcon>
					<EditorIcon onClick={props?.onListOrderedToggle} active={props?.listOrderedActive}>
						<OrderedListOutlined />
					</EditorIcon>
					<SeperatorIcon />
					<EditorIcon onClick={props?.onH1Toggle} active={props?.h1Active}>
						H1
					</EditorIcon>
					<EditorIcon onClick={props?.onH2Toggle} active={props?.h2Active}>
						H2
					</EditorIcon>
					<EditorIcon onClick={props?.onH3Toggle} active={props?.h3Active}>
						H3
					</EditorIcon>
					<SeperatorIcon />
					<EditorIcon onClick={props?.onAlignLeftToggle} active={props?.alignLeftActive}>
						<AlignLeftOutlined />
					</EditorIcon>
					<EditorIcon onClick={props?.onAlignCenterToggle} active={props?.alignCenterActive}>
						<AlignCenterOutlined />
					</EditorIcon>
					<EditorIcon onClick={props?.onAlignRightToggle} active={props?.alignRightActive}>
						<AlignRightOutlined />
					</EditorIcon>

					<SeperatorIcon />

					<EditorIcon onClick={showLinkModal}>
						<i className="ri-link" />
					</EditorIcon>
					<EditorIcon onClick={props?.onQuoteToggle} active={props?.quoteActive}>
						<i className="ri-double-quotes-l" />
					</EditorIcon>
					<EditorIcon onClick={props?.onCodeToggle} active={props?.codeActive}>
						<i className="ri-braces-line" />
					</EditorIcon>
					<EditorIcon onClick={props?.onCodeBlockToggle} active={props?.codeBlockActive}>
						<i className="ri-code-s-slash-line" />
					</EditorIcon>

					<SeperatorIcon />

					<EditorIcon onClick={props?.onHighlightToggle} active={props?.highlightActive}>
						<HighlightOutlined />
					</EditorIcon>
					<ColorPicker
						value={props?.textColor}
						onChange={(color, hex) => {
							if (props?.onTextColorChange) props?.onTextColorChange(hex);
						}}
					>
						<EditorIcon>
							<FontColorsOutlined />
						</EditorIcon>
					</ColorPicker>
					<EditorIcon onClick={showImageModal}>
						<FileImageOutlined />
					</EditorIcon>
					<EditorIcon onClick={showYoutubeModal}>
						<YoutubeOutlined />
					</EditorIcon>
				</div>

				{/* Insert Link Modal */}
				<Modal
					title="Insert Link"
					open={isLinkOpen}
					okText="Insert"
					onOk={handleInsertLink}
					onCancel={handleLinkCancel}
				>
					<Input
						placeholder="Your URL"
						value={linkURL}
						onChange={(e) => setLinkURL(e.currentTarget.value)}
						onPressEnter={handleInsertLink}
					/>
					<div className="flex">
						<label>
							Open in new tab?{" "}
							<Switch
								checked={linkOptions.target === "_blank"}
								onChange={(checked) => setLinkOptions((_) => ({ ..._, target: checked ? "_blank" : "_self" }))}
							/>
						</label>
						<label>
							Follow?{" "}
							<Switch
								checked={linkOptions.rel === "nofollow"}
								onChange={(checked) => setLinkOptions((_) => ({ ..._, rel: checked ? "" : "nofollow" }))}
							/>
						</label>
					</div>
				</Modal>

				{/* Upload Modal */}
				<Modal
					title="Insert image"
					open={isImageOpen}
					okText="Insert"
					onOk={handleInsertImage}
					onCancel={handleImageCancel}
				>
					<div className="flex flex-col gap-3">
						<Segmented
							block
							options={["Image URL", "Upload"]}
							onChange={(val) => setInsertImageType(val === "Image URL" ? "url" : "upload")}
						/>
						<div className={`${insertImageType !== "url" ? "hidden" : ""}`}>
							{/* URL */}
							<Input
								placeholder="Image URL"
								value={imageURL}
								onChange={(e) => setImageURL(e.currentTarget.value)}
								onPressEnter={handleInsertImage}
							/>
						</div>
						<div className={`${insertImageType !== "upload" ? "hidden" : ""}`}>
							{/* UPLOAD */}
							<UploadArea
								desc="Click to upload"
								imageUrl={imageURL}
								onChange={(image) => {
									console.log("imgUrl :>> ", image);
									setImageURL(image);
								}}
							/>
						</div>
					</div>
				</Modal>

				{/* Youtube Modal */}
				<Modal
					title="Insert Youtube"
					open={isYoutubeOpen}
					okText="Insert"
					onOk={handleInsertYoutube}
					onCancel={handleYoutubeCancel}
				>
					<Input
						placeholder="Youtube URL"
						value={youtubeURL}
						onChange={(e) => setYoutubeURL(e.currentTarget.value)}
						onPressEnter={handleInsertYoutube}
					/>
				</Modal>

				<div className="flex items-center gap-2">
					{props?.status}
					{props?.onSaveDraft && <Button onClick={props?.onSaveDraft}>{props?.saveDraftLabel ?? "Save draft"}</Button>}
					{props?.submitBtn === false ? null : (
						<Button htmlType="submit" type="primary" className="bg-[#1668dc]" onClick={props?.onSubmit}>
							{typeof props?.submitBtn === "string" ? props?.submitBtn : "Submit"}
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ComposeMenu;
