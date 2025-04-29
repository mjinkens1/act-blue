import parse from "html-react-parser";

import "./band-info.css";

function BandInfo(props) {
  const { band } = props;

  return (
    <section className="band-info">
      <img className="band-info__image" src={band.imgUrl} alt={band.name} />

      <p className="band-info__description">{parse(band.description_blurb)}</p>
    </section>
  );
}

export default BandInfo;
