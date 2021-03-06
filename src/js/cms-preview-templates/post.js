import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
    let molecule = getAsset(entry.getIn(["data", "molecule"]));

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="flex justify-between grey-3">
        <div style={{
          width: "80px",
          height: "80px"
        }}></div>
        <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
      </div>
      <div className="cms mw6">
        <p>{ entry.getIn(["data", "description"]) }</p>
        <p>{ molecule && <canvas width="200" height="200" data-smiles={ molecule }></canvas> }</p>
        <p>{ image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }</p>
        <p>{ widgetFor("body") }</p>
      </div>
      <p>{ fileInfo.cdnUrl && <a href={ fileInfo.cdnUrl }>uploaded file(s)</a>}</p>
    </div>;
  }
}
