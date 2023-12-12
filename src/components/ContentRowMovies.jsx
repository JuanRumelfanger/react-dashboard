import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';

function ContentRowMovies({ title, borderColor, value, icon }) {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className={`card ${borderColor} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  {title}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {value}
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas ${icon} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ContentRowMovies.propTypes = {
  title: PropTypes.string.isRequired,
  borderColor: PropTypes.oneOf([
    'border-left-primary',
    'border-left-success',
    'border-left-warning',
  ]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.string.isRequired,
};

ContentRowMovies.defaultProps = {
  title: 'Sin titulo',
  borderColor: 'border-left-primary',
  value: 'No hay cifra',
  icon: 'fas fa-user fa-2x text-gray-300',
};

export default ContentRowMovies;
