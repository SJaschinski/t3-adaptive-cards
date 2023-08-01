import { GlobalRegistry } from "adaptivecards";
import { type AppType } from "next/dist/shared/lib/utils";
import { AlertAction } from "~/components/alertAction";
import { ChoiceSetInput } from "~/components/choiceSetInput";
import { ProgressBar } from "~/components/progressbar";
import "~/styles/globals.css";

GlobalRegistry.actions.register(AlertAction.JsonTypeName, AlertAction);
GlobalRegistry.elements.register(ChoiceSetInput.JsonTypeName, ChoiceSetInput);
GlobalRegistry.elements.register(ProgressBar.JsonTypeName, ProgressBar);

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
