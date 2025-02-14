import { RootState } from "@/app/store.ts";

export const selectTheme = (state: RootState) => state.theme.value;