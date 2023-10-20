import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Typography, Upload } from "antd";
import type { RcFile, UploadChangeParam, UploadFile } from "antd/lib/upload";
import { useEffect, useState } from "react";

import type { BaseProps } from "./types/BaseProps";

const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
const sizeLimit = 10 * 1024 * 1024; // 10 MB
const uploadUrl = "/api/upload";

export interface UploadAreaProps extends BaseProps {
	multiple?: boolean;
	imageUrl?: string;
	desc?: string;
	onChange?: (firstImage: string, images: string[]) => void;
}

const UploadArea = (props?: UploadAreaProps) => {
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const [uploadList, setUploadList] = useState<string[]>([]);
	const [imageUrl, setImageUrl] = useState<string>(props?.imageUrl || "");
	const [loading, setLoading] = useState(false);

	const beforeUpload = (file: RcFile) => {
		if (!props?.multiple) {
			setFileList([]);
			setUploadList([]);
			setImageUrl("");
		}
		console.log("beforeUpload > file :>> ", file);
		const isAllowedType = allowedFileTypes.includes(file.type);
		if (!isAllowedType) {
			alert("You can only upload JPG, JPEG, PNG, or GIF files!");
		}

		const isLt10M = file.size < sizeLimit;
		if (!isLt10M) {
			alert("Image must be smaller than 10MB!");
		}

		return isAllowedType && isLt10M;
	};

	const handleChange = (info: UploadChangeParam<UploadFile>) => {
		// console.log("info :>> ", info);
		if (info.fileList.length > 0) setFileList(info.fileList);

		if (info.file.status === "uploading") {
			setLoading(true);
			return;
		}

		// finish (either SUCCESS or FAILURE)
		setLoading(false);

		if (info.file.status === "done") {
			// console.log("info :>> ", info);
			// response data:
			setImageUrl(
				info.file.response?.data.url || (info.file.response?.data ? info.file.response?.data[0].url : undefined)
			);
			setUploadList(info.file.response?.data.map((uploadedFile) => uploadedFile.url));

			// message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === "error") {
			// message.error(`${info.file.name} file upload failed.`);
		}
	};

	useEffect(() => {
		if (props?.imageUrl) {
			setImageUrl(props?.imageUrl);
			setUploadList([props?.imageUrl]);
		}
	}, [props?.imageUrl]);

	useEffect(() => {
		// console.log("uploadList :>> ", uploadList);
		if (props?.onChange) props.onChange(imageUrl, uploadList);
	}, [imageUrl, uploadList]);

	return (
		<div className="flex gap-2">
			{uploadList.length > 0 ? (
				<div
					className="h-[200px] w-[300px] rounded-md bg-cover bg-no-repeat"
					style={{ backgroundImage: `url(${uploadList[0]})` }}
				/>
			) : (
				<></>
			)}
			<Upload
				multiple
				name="files"
				action={uploadUrl}
				listType="picture-card"
				className="flex overflow-hidden"
				showUploadList={false}
				beforeUpload={beforeUpload}
				onChange={handleChange}
				onRemove={(file) => {
					const index = fileList.indexOf(file);
					const newFileList = fileList.slice();
					newFileList.splice(index, 1);
					setFileList(newFileList);
				}}
				style={{ overflow: "hidden" }}
				fileList={fileList}
			>
				<div>
					{loading ? <LoadingOutlined /> : <PlusOutlined />}
					<div style={{ marginTop: 8 }}>Upload</div>
				</div>
			</Upload>
			{props?.desc ? <Typography.Text className="text-xs">{props.desc}</Typography.Text> : null}
		</div>
	);
};

export default UploadArea;
