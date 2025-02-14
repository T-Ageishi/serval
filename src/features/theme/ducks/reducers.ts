import { Reducers } from "@/features/theme/ducks/types.ts";

export const reducers: Reducers = {
	lighten(state) {
		state.value = "light";
	},
	darken(state) {
		state.value = "dark";
	},
};
