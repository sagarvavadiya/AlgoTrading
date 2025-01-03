import React from 'react';

const PageLoader = ({ show }) => {
  return (
    <>
      {show && (
        <div id='preloader'>
          <div>
            <img src='assets/images/pre.gif' alt='' />
          </div>
        </div>
      )}
    </>
  );
};

export default PageLoader;
