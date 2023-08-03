import ReactDOM from "react-dom";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const getDiv = (): HTMLDivElement => document.createElement("div");

export const sharedInternalRender = (
  renderReact: () => JSX.Element
): HTMLElement => {
  const div = getDiv();
  ReactDOM.render(renderReact(), div);
  return div;
};
