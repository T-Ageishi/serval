import { Reducers } from "@/features/theme/types.ts";

export const reducers: Reducers = {
	lighten(state) {
		state.value = "light";
	},
	darken(state) {
		state.value = "dark";
	},
};
