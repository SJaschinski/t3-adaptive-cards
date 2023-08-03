import { ChoiceSetInput as ChoiceSetInputAC } from "adaptivecards";
import ChoiceSet from "~/components/choiceSet";
import { sharedInternalRender } from "~/components/shared";

export class ChoiceSetInput extends ChoiceSetInputAC {
  static readonly JsonTypeName = "Input.ChoiceSet";

  private _value: string | undefined = undefined;
  public get value(): string | undefined {
    return this._value;
  }

  public isSet(): boolean {
    return this.value !== undefined;
  }

  public isValid(): boolean {
    return this.isSet();
  }

  //#region Schema

  //#endregion

  getJsonTypeName(): string {
    return ChoiceSetInput.JsonTypeName;
  }

  onChange(value: string): void {
    this._value = value;
    this.valueChanged();
  }

  protected renderReact(): JSX.Element {
    return (
      <ChoiceSet
        label={this.label}
        choices={this.choices}
        value={this.value}
        onChange={(v) => this.onChange(v)}
      />
    );
  }

  internalRender(): HTMLElement {
    const element = sharedInternalRender(() => this.renderReact());
    element.style.width = "100%";
    return element;
  }
}
