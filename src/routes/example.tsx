import Wraiter from "@/wraiter";

const Examples = () => {
	return (
		<div className="flex items-center flex-col w-full">
			<div className="w-full max-w-3xl relative h-[500px]">
				<Wraiter
					border
					toolbarWrap
					submitBtn={false}
					// toolbarPosition="bottom"
				/>
			</div>
		</div>
	);
};

export default Examples;
