import {
  StringProperty,
  SubmitActionBase,
  Versions,
  property,
} from "adaptivecards";
import ReactDOM from "react-dom";
import Button from "~/components/button";

export class SharePointAction extends SubmitActionBase {
  static readonly JsonTypeName = "Action.SharePoint";

  //#region Schema

  static readonly baseUrlProperty = new StringProperty(
    Versions.v1_0,
    "baseUrl",
    true
  );

  @property(SharePointAction.baseUrlProperty)
  baseUrl?: string;

  static readonly contextSiteProperty = new StringProperty(
    Versions.v1_0,
    "contextSite",
    true
  );

  @property(SharePointAction.contextSiteProperty)
  contextSite?: string;

  static readonly formDataSourceContextSiteProperty = new StringProperty(
    Versions.v1_0,
    "formDataSourceContextSite",
    true
  );

  @property(SharePointAction.formDataSourceContextSiteProperty)
  formDataSourceContextSite?: string;

  static readonly formDataSourceListNameProperty = new StringProperty(
    Versions.v1_0,
    "formDataSourceListName",
    true
  );

  @property(SharePointAction.formDataSourceListNameProperty)
  formDataSourceListName?: string;

  static readonly formDataTargetContextSiteProperty = new StringProperty(
    Versions.v1_0,
    "formDataTargetContextSite",
    true
  );

  @property(SharePointAction.formDataTargetContextSiteProperty)
  formDataTargetContextSite?: string;

  static readonly formDataTargetListNameProperty = new StringProperty(
    Versions.v1_0,
    "formDataTargetListName",
    true
  );

  @property(SharePointAction.formDataTargetListNameProperty)
  formDataTargetListName?: string;

  //#endregion

  getJsonTypeName(): string {
    return SharePointAction.JsonTypeName;
  }

  private onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (this.isEnabled) {
      e.preventDefault();
      console.log("SharePointAction.baseUrl", this.baseUrl);
      console.log("SharePointAction.contextSite", this.contextSite);
      console.log(
        "SharePointAction.formDataSourceContextSite",
        this.formDataSourceContextSite
      );
      console.log(
        "SharePointAction.formDataSourceListName",
        this.formDataSourceListName
      );
      console.log(
        "SharePointAction.formDataTargetContextSite",
        this.formDataTargetContextSite
      );
      console.log(
        "SharePointAction.formDataTargetListName",
        this.formDataTargetListName
      );
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
