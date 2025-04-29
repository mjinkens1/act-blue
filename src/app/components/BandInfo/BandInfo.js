import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html";

import "./band-info.css";

function BandInfo(props) {
  const { band } = props;

  const safeHTML = sanitizeHtml(band.description_blurb);

  return (
    <section className="band-info">
      <img className="band-info__image" src={band.imgUrl} alt={band.name} />

      <div className="band-info__description">{parse(safeHTML)}</div>
    </section>
  );
}

export default BandInfo;
