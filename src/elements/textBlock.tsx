import {
  TextBlock as TextBlockAC,
  ValueSetProperty,
  Versions,
  property,
} from "adaptivecards";
import { sharedInternalRender } from "~/components/shared";
import Text from "~/components/text";

export class TextBlock extends TextBlockAC {
  static readonly JsonTypeName = "TextBlock";

  //#region Schema

  static readonly levelProperty = new ValueSetProperty(Versions.v1_5, "level", [
    { value: "h1" },
    { value: "h2" },
    { value: "h3" },
  ]);

  @property(TextBlock.levelProperty)
  level?: "h1" | "h2" | "h3";

  //#endregion

  getJsonTypeName(): string {
    return TextBlock.JsonTypeName;
  }

  protected renderReact(): JSX.Element {
    return (
      <Text
        label={this.text}
        style={this.style}
        level={this.level}
        separator={this.separator}
      />
    );
  }

  internalRender(): HTMLElement {
    const element = sharedInternalRender(() => this.renderReact());
    element.style.width = "100%";
    return element;
  }
}
