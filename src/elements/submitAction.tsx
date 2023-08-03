import {
  StringProperty,
  SubmitActionBase,
  Versions,
  property,
} from "adaptivecards";
import ReactDOM from "react-dom";
import Button from "~/components/button";

export class SubmitAction extends SubmitActionBase {
  static readonly JsonTypeName = "Action.Submit";

  //#region Schema

  static readonly textProperty = new StringProperty(
    Versions.v1_0,
    "text",
    true
  );

  @property(SubmitAction.textProperty)
  text?: string;

  //#endregion

  getJsonTypeName(): string {
    return SubmitAction.JsonTypeName;
  }

  private onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (this.isEnabled) {
      e.preventDefault();
      super.execute();
    }
  }

  renderReact() {
    return (
      <Button
        label={this.title}
        onClick={(e) => this.onClick(e)}
        tooltip={this.tooltip}
      />
    );
  }

  render() {
    const element = document.createElement("div");
    ReactDOM.render(this.renderReact(), element);
    this._renderedElement = element;

    // this.renderButtonContent();
    // this.updateCssClasses();
    // this.setupElementForAccessibility(buttonElement);
  }
}
