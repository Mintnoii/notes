import DefaultTheme from "vitepress/theme";
import AllTags from "./components/AllTags.vue";

import "./styles/vars.css";

export default {
	...DefaultTheme,
	enhanceApp({app}) {
		app.component("AllTags", AllTags);
	},
};
