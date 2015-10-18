interface JQueryStatic {
	keyframe?: JQueryKeyFrames;
}

interface JQueryKeyFrames {
	debug: boolean;
	getVendorPrefix: () => string;
	isSupported: () => boolean;
	generate: (frameData: string[]) => void;
	//TODO: add typing to argument
	define: (frameData: any) => void;
}
