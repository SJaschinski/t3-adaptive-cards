import { GlobalRegistry } from "adaptivecards";
import { type AppType } from "next/dist/shared/lib/utils";
import { AlertAction } from "~/elements/alertAction";
import { ChoiceSetInput } from "~/elements/choiceSetInput";
import { ProgressBar } from "~/elements/progressbar";
import { SubmitAction } from "~/elements/submitAction";
import { TextBlock } from "~/elements/textBlock";
import "~/styles/globals.css";

GlobalRegistry.actions.register(AlertAction.JsonTypeName, AlertAction);
GlobalRegistry.actions.register(SubmitAction.JsonTypeName, SubmitAction);
GlobalRegistry.elements.register(ChoiceSetInput.JsonTypeName, ChoiceSetInput);
GlobalRegistry.elements.register(ProgressBar.JsonTypeName, ProgressBar);
GlobalRegistry.elements.register(TextBlock.JsonTypeName, TextBlock);

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
