import { Oval } from "react-loader-spinner";

export default function Spinner() {
	return (
		<Oval
			visible={true}
			height="80"
			width="80"
			color="rgba(97, 95, 255, 1)"
			secondaryColor="rgba(97, 95, 255, 0.1)"
			wrapperClass=""
		/>
	);
}
