import { ThemeModeScript } from "flowbite-react";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([ThemeModeScript]);
};
