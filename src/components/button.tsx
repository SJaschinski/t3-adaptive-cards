import { ActionIconPlacement } from "adaptivecards";
import { type MouseEventHandler } from "react";

export interface ButtonProps {
  label?: string;
  tooltip?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconPlacement?: ActionIconPlacement;
  iconSize?: number;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={props.onClick}
      title={props.tooltip}
    >
      {props.label}
    </button>
  );
}
