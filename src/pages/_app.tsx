import { GlobalRegistry } from "adaptivecards";
import { type AppType } from "next/dist/shared/lib/utils";
import { AlertAction } from "~/elements/alertAction";
import { ChoiceSetInput } from "~/elements/choiceSetInput";
import { ProgressBar } from "~/elements/progressbar";
import { SubmitAction } from "~/elements/submitAction";
import "~/styles/globals.css";

GlobalRegistry.actions.register(AlertAction.JsonTypeName, AlertAction);
GlobalRegistry.actions.register(SubmitAction.JsonTypeName, SubmitAction);
GlobalRegistry.elements.register(ChoiceSetInput.JsonTypeName, ChoiceSetInput);
GlobalRegistry.elements.register(ProgressBar.JsonTypeName, ProgressBar);

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
