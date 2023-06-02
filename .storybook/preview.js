import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import 'react-toastify/dist/ReactToastify.min.css';
import "../src/assets/scss/node-sass/main.scss"
import "react-spring-bottom-sheet/dist/style.css"

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}