import {
  CardElement,
  NumProperty,
  StringProperty,
  Versions,
  property,
} from "adaptivecards";
import ReactDOM from "react-dom";

const progressBarElement = (
  <div className="h-2 w-full bg-neutral-200">
    <div className="h-full w-[45%] bg-blue-600"></div>
  </div>
);

export class ProgressBar extends CardElement {
  static readonly JsonTypeName = "ProgressBar";

  //#region Schema

  static readonly titleProperty = new StringProperty(
    Versions.v1_0,
    "title",
    true
  );

  static readonly valueProperty = new NumProperty(Versions.v1_0, "value");

  @property(ProgressBar.titleProperty)
  get title(): string | undefined {
    return this.getValue(ProgressBar.titleProperty) as string | undefined;
  }

  set title(value: string) {
    if (this.title !== value) {
      this.setValue(ProgressBar.titleProperty, value);
      this.updateLayout();
    }
  }

  @property(ProgressBar.valueProperty)
  get value(): number {
    return this.getValue(ProgressBar.valueProperty) as number;
  }

  set value(value: number) {
    let adjustedValue = value;

    if (adjustedValue < 0) {
      adjustedValue = 0;
    } else if (adjustedValue > 100) {
      adjustedValue = 100;
    }

    if (this.value !== adjustedValue) {
      this.setValue(ProgressBar.valueProperty, adjustedValue);
      this.updateLayout();
    }
  }

  //#endregion

  protected internalRender(): HTMLElement {
    const element = document.createElement("div");
    ReactDOM.render(progressBarElement, element);
    return element;
  }

  getJsonTypeName(): string {
    return ProgressBar.JsonTypeName;
  }
}
