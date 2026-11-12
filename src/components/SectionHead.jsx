import Reveal from './Reveal';

const SectionHead = ({ index, title, note }) => (
  <Reveal className="section-head">
    <span className="section-index">({index})</span>
    <h2 className="section-title">{title}</h2>
    {note && <span className="section-note label">{note}</span>}
  </Reveal>
);

export default SectionHead;
