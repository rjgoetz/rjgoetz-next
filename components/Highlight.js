import PropTypes from 'prop-types';

export default function Highlight({ headline, width }) {
  return (
    <div className="inline-block relative h-6 mb-2">
      <h2 className="absolute top-0 z-10 h-8">{headline}</h2>

      <span
        className={`absolute -bottom-3 -left-2 bg-gradient-to-r from-purple-medium to-blue-medium h-4 inline-block w-${width} z-0`}
      ></span>
    </div>
  );
}

Highlight.propTypes = {
  headline: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};
