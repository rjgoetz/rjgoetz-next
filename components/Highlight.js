import PropTypes from 'prop-types';

export default function Highlight({ headline }) {
  return (
    <div className="relative mb-2">
      <h2 className="relative -left-8 inline-block px-8 pb-1 text-white bg-gradient-to-r from-purple-medium to-blue-medium">
        {headline}
      </h2>
    </div>
  );
}

Highlight.propTypes = {
  headline: PropTypes.string.isRequired,
};
