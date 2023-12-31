import { AdaptiveCard } from "adaptivecards-react";
import Head from "next/head";
import cardTemplate from "../cards/template.json";
import cardData from "../cards/template.data.json";
import { type IEvaluationContext, Template } from "adaptivecards-templating";
import { type ExecuteAction, type SubmitAction } from "adaptivecards";

const template = new Template(cardTemplate);
const context: IEvaluationContext = {
  $root: cardData,
};
const card: unknown = template.expand(context);

const submit = (action: SubmitAction) => {
  console.log(action.data);
};

const execute = (action: ExecuteAction) => {
  if (action.getJsonTypeName() === "Action.SharePoint") {
    console.log(action.verb); // TODO: This is undefined although it is part of the template
    console.log(action.data);
  }
};

export default function Cards() {
  return (
    <>
      <Head>
        <title>Adaptive Cards</title>
        <meta name="description" content="Micrsoft Adaptive Cards" />
        <link rel="icon" href="/favicon.ico" />˚
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-einfra-600 to-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Adaptive Cards
          </h1>
          <div className="rounded-lg bg-white p-1 sm:w-full lg:w-[480px]">
            <AdaptiveCard
              payload={card as object}
              onActionSubmit={submit}
              onExecuteAction={execute}
            />
          </div>
        </div>
      </main>
    </>
  );
}
