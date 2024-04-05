import { Backspace as BackspaceIcon } from "@phosphor-icons/react";
import Tooltip from "~/components/Tooltip/Tooltip";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useModStore } from "~/store/zustand/mod";
import { useSnippetStore } from "~/store/zustand/snippets";

type Props = { className?: string };

const ClearInputButton = ({ className }: Props) => {
	const { setContent } = useModStore();
	const { setInput, setOutput } = useSnippetStore();

	return (
		<Tooltip
			trigger={
				<Button
					className={cn("flex items-center justify-center", className)}
					onClick={() => {
						setInput("");
						setOutput("");
						setContent("");
					}}
					size="sm"
					variant="outline"
				>
					<BackspaceIcon className="h-4 w-4" />
					<span className="sr-only">Clear Inputs</span>
				</Button>
			}
			content={<p className="font-normal">Clear all inputs</p>}
		/>
	);
};

export default ClearInputButton;
