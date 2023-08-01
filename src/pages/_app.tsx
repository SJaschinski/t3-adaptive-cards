import { GlobalRegistry } from "adaptivecards";
import { type AppType } from "next/dist/shared/lib/utils";
import { ProgressBar } from "~/components/progressbar";
import "~/styles/globals.css";

GlobalRegistry.elements.register(ProgressBar.JsonTypeName, ProgressBar);

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
