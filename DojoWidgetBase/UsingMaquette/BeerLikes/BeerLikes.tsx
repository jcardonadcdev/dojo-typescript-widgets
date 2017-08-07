import * as _WidgetBase from "dijit/_WidgetBase";
import * as i18n from "dojo/i18n!./nls/nlsBeerlikes";
import declare from "../../../support/declareDecorator";
import * as maquette from "../../../node_modules/maquette/src/maquette";

//interface BeerLikes extends _WidgetBase { }

const projector: maquette.Projector = maquette.createProjector();
const h = maquette.h;

@declare(_WidgetBase)
class BeerLikes {

  constructor(params: Object, srcNodeRef: string | Node) { }

  domNode: HTMLElement;

  chosenBeer: string;

  // -----------------------------------------
  //  Widget Lifecycle
  // -----------------------------------------
  startup = () => {
    projector.append(this.domNode, this.render);
  };

  render = () => {
    const beerChoices = i18n.widgetBeerTypes;
    const title = i18n.widgetDescription;
    const feedbackText = (this.chosenBeer && this.chosenBeer !== "Don't like beer") ?
      i18n.widgetFeedbackText : i18n.widgetSurpriseText;

    const choiceElement = beerChoices.map((beerName: string) => {
      return h("div", [
        h("input", {
          type: "radio",
          value: beerName,
          name: "beer",
          onchange: this.handleBeerChoiceChange
        }), beerName
      ]);
    });

    const titleElement = h("div", [
      h("h3", [title])
    ]);

    const feedbackElement = h("h4", [this.chosenBeer ? this.chosenBeer + "!  " + feedbackText : ""]);

    return h("div", [titleElement, choiceElement, feedbackElement]);
  };

  handleBeerChoiceChange = (evt: any) => {
    this.chosenBeer = evt.target.value;
  };
}

export default BeerLikes;
