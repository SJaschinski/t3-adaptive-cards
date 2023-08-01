import { Action, StringProperty, Versions, property } from "adaptivecards";
import ReactDOM from "react-dom";

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

  reactRender() {
    return (
      <button
        className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white"
        onClick={(e) => this.onClick(e)}
        title={this.tooltip}
        type="button"
      >
        {this.title}
      </button>
    );
  }

  render() {
    const element = document.createElement("div");
    ReactDOM.render(this.reactRender(), element);
    this._renderedElement = element;

    // this.renderButtonContent();
    // this.updateCssClasses();
    // this.setupElementForAccessibility(buttonElement);
  }
}
