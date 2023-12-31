import { Action, StringProperty, Versions, property } from "adaptivecards";
import ReactDOM from "react-dom";
import Button from "~/components/button";

export class AlertAction extends Action {
  static readonly JsonTypeName = "Action.Alert";

  //#region Schema

  static readonly textProperty = new StringProperty(
    Versions.v1_0,
    "text",
    true
  );

  @property(AlertAction.textProperty)
  text?: string;

  //#endregion

  getJsonTypeName(): string {
    return AlertAction.JsonTypeName;
  }

  execute() {
    alert(this.text);
  }

  private onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (this.isEnabled) {
      e.preventDefault();
      this.execute();
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
