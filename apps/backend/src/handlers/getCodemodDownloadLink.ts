import { CustomHandler } from "../customHandler.js";
import { parseGetCodemodLatestVersionQuery } from "../schemata/query.js";

export const getCodemodDownloadLink: CustomHandler<{
	link: string;
}> = async (dependencies) => {
	const { name } = parseGetCodemodLatestVersionQuery(
		dependencies.getRequest()?.query,
	);

	return dependencies.codemodService.getCodemodDownloadLink(name);
};
