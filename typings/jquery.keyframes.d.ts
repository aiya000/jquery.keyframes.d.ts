interface JQueryStatic {
	keyframe?: JQueryKeyFrames;
}

interface JQueryKeyFrames {
	debug: boolean;
	getVendorPrefix: () => string;
	isSupported: () => boolean;
	generate: (frameData: string[]) => void;
	define: (frameData: any) => void;
}
