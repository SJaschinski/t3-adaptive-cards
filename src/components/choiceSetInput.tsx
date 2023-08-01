import { ChoiceSetInput as ChoiceSetInputAC } from "adaptivecards";
import ReactDOM from "react-dom";

export class ChoiceSetInput extends ChoiceSetInputAC {
  static readonly JsonTypeName = "Input.ChoiceSet";

  //#region Schema

  //#endregion

  getJsonTypeName(): string {
    return ChoiceSetInput.JsonTypeName;
  }

  reactRender() {
    return (
      <fieldset>
        <legend className="text-base font-semibold leading-6 text-gray-900">
          Select a mailing list
        </legend>

        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
          {this.choices.map((choice) => (
            <label
              key={choice.value}
              className={`${
                (this.value ?? this.defaultValue) !== choice.value
                  ? "border-gray-300"
                  : "border-indigo-600 ring-2 ring-indigo-600"
              } relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none`}
            >
              <input
                type="radio"
                name={this.id}
                value={choice.value}
                className="sr-only"
                aria-labelledby="project-type-0-label"
                aria-describedby="project-type-0-description-0 project-type-0-description-1"
                onChange={() => {
                  alert("changed to " + choice.value);
                  this.valueChanged();
                  this.render();
                }}
              />
              <span className="flex flex-1">
                <span className="flex flex-col">
                  <span
                    id="project-type-0-label"
                    className="block text-sm font-medium text-gray-900"
                  >
                    {choice.title}
                  </span>
                  <span
                    id="project-type-0-description-0"
                    className="mt-1 flex items-center text-sm text-gray-500"
                  >
                    Zusätzliche Beschreibung
                  </span>
                </span>
              </span>
              {/* Not Checked: "invisible" */}
              <svg
                className={`${
                  (this.value ?? this.defaultValue) !== choice.value && "hidden"
                } h-5 w-5 text-indigo-600`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
              {/*
                Active: "border", Not Active: "border-2"
                Checked: "border-indigo-600", Not Checked: "border-transparent"
              */}
              <span
                className="pointer-events-none absolute -inset-px rounded-lg border-2"
                aria-hidden="true"
              ></span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  render(): HTMLElement | undefined {
    const element = document.createElement("div");
    ReactDOM.render(this.reactRender(), element);
    return element;
  }
}
