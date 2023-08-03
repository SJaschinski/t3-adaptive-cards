import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { classNames } from "./shared";
import { type Choice } from "adaptivecards";

export interface ChoiceSetProps {
  label?: string;
  choices: Choice[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function ChoiceSet(props: ChoiceSetProps) {
  return (
    <RadioGroup value={props.value} onChange={props.onChange}>
      {props.label && (
        <RadioGroup.Label className="text-base font-semibold leading-6 text-gray-900">
          {props.label}
        </RadioGroup.Label>
      )}

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {props.choices.map((choice) => (
          <RadioGroup.Option
            key={choice.value}
            value={choice.value}
            className={({ active }) =>
              classNames(
                active
                  ? "border-indigo-600 ring-2 ring-indigo-600"
                  : "border-gray-300",
                "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {choice.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-500"
                    >
                      Zusätzliche Informationen
                    </RadioGroup.Description>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(
                    !checked ? "invisible" : "",
                    "h-5 w-5 text-indigo-600"
                  )}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-indigo-600" : "border-transparent",
                    "pointer-events-none absolute -inset-px rounded-lg"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
