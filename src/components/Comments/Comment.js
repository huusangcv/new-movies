import React, { useEffect } from 'react';

const FacebookComments = ({ url }) => {
  useEffect(() => {
    // Tải SDK của Facebook
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  }, []);

  return <div className="fb-comments" data-href={url} data-width="100%" data-numposts="5" data-mobile="true"></div>;
};

export default FacebookComments;
