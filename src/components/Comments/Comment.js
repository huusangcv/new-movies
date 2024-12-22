import React, { useEffect } from 'react';

const FacebookComments = ({ url }) => {
  useEffect(() => {
    // Gọi FB.XFBML.parse() để tải bình luận
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return <div className="fb-comments" data-href={url} data-width="100%" data-numposts="5" data-mobile={true}></div>;
};

export default FacebookComments;
