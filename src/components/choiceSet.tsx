import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { classNames } from "./shared";
import { type Choice } from "adaptivecards";
import { useState } from "react";

export interface ChoiceSetProps {
  label?: string;
  choices: Choice[];
  descriptions?: string[];
  value?: string;
  onChange?: (value: string) => void;
  isValid?: () => boolean;
}

export default function ChoiceSet(props: ChoiceSetProps) {
  const [valid, setValid] = useState<boolean>(false);

  const onChange = (value: string) => {
    props.onChange && props.onChange(value);
    setValid(props.isValid ? props.isValid() : true);
  };

  return (
    <div className="pb-2">
      <RadioGroup value={props.value} onChange={onChange}>
        {props.label && (
          <RadioGroup.Label className="flex items-center space-x-2 text-base font-semibold leading-6 text-gray-900">
            <span>{props.label}</span>
            {!valid && (
              <ExclamationCircleIcon className="inline-block h-5 w-5 text-red-600" />
            )}
          </RadioGroup.Label>
        )}

        <div className="mt-2 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
          {props.choices.map((choice, i) => (
            <RadioGroup.Option
              key={choice.value}
              value={choice.value}
              className={({ active }) =>
                classNames(
                  active
                    ? "border-einfra-600 ring-2 ring-einfra-600"
                    : "border-gray-300",
                  "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <span className="flex flex-1">
                    <span className="flex flex-1 flex-col">
                      <span className="flex justify-between">
                        <RadioGroup.Label
                          as="span"
                          className="block text-sm font-medium text-gray-900"
                        >
                          {choice.title}
                        </RadioGroup.Label>
                        <CheckCircleIcon
                          className={classNames(
                            !checked ? "invisible" : "",
                            "h-5 w-5 text-einfra-600"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                      <RadioGroup.Description
                        as="span"
                        className="mt-1 flex items-center text-sm text-gray-500"
                      >
                        {props.descriptions?.[i]}
                      </RadioGroup.Description>
                    </span>
                  </span>
                  <span
                    className={classNames(
                      active ? "border" : "border-2",
                      checked ? "border-einfra-600" : "border-transparent",
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
    </div>
  );
}
