import {
  CardElement,
  NumProperty,
  StringProperty,
  TextBlock,
  Versions,
  property,
  stringToCssColor,
} from "adaptivecards";

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

  private _titleElement: HTMLElement | undefined;
  private _leftBarElement: HTMLElement | undefined;
  private _rightBarElement: HTMLElement | undefined;

  protected internalRender(): HTMLElement {
    const element = document.createElement("div");

    const textBlock = new TextBlock();
    textBlock.setParent(this);
    textBlock.text = this.title;
    textBlock.wrap = true;

    this._titleElement = textBlock.render();
    this._titleElement!.style.marginBottom = "6px";

    const progressBarElement = document.createElement("div");
    progressBarElement.style.display = "flex";

    this._leftBarElement = document.createElement("div");
    this._leftBarElement.style.height = "6px";
    this._leftBarElement.style.backgroundColor = stringToCssColor(
      this.hostConfig.containerStyles.emphasis.foregroundColors.accent.default
    )!;

    this._rightBarElement = document.createElement("div");
    this._rightBarElement.style.height = "6px";
    this._rightBarElement.style.backgroundColor = stringToCssColor(
      this.hostConfig.containerStyles.emphasis.backgroundColor
    )!;

    progressBarElement.append(this._leftBarElement, this._rightBarElement);

    element.append(this._titleElement!, progressBarElement);

    return element;
  }

  getJsonTypeName(): string {
    return ProgressBar.JsonTypeName;
  }

  updateLayout(processChildren = true) {
    super.updateLayout(processChildren);

    if (this.renderedElement) {
      if (this.title) {
        this._titleElement!.style.display = "none";
      } else {
        this._titleElement!.style.removeProperty("display");
      }

      this._leftBarElement!.style.flex = "1 1 " + this.value + "%";
      this._rightBarElement!.style.flex = "1 1 " + (100 - this.value) + "%";
    }
  }
}
