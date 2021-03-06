import Img from '../Img';

export default () => (
  <div className="container">
    <footer className="footer">
      <div className="col-md-4">
        <a href="http://mozilla.org">
          <Img className="footer__logo" src="/static/img/moz-logo.svg" alt="Mozila" />
        </a>
      </div>
      <div className="col-md-4">
        <span className="footer__title">Additional Links</span>
        <ul className="footer__list">
          <li><a href="https://developer.mozilla.org/docs/Web/API/WebVR_API/Using_the_WebVR_API">Using WebVR API (MDN)</a></li>
          <li><a href="https://w3c.github.io/webvr/">WebVR Spec</a></li>
          <li><a href="https://mail.mozilla.org/listinfo/web-vr-discuss">WebVR Newsletter</a></li>
          <li><a href="https://webvr-slack.herokuapp.com/">WebVR Slack</a></li>
          <li><a href="https://aframe.io/blog/">A-Frame Blog</a></li>
        </ul>
      </div>
      <div className="col-md-4 col-last">
        <span className="footer__title">Mozilla</span>
        <ul className="footer__list">
          <li><a href="https://www.mozilla.org/about/">About</a></li>
          <li><a href="https://www.mozilla.org/contact/">Contact Us</a></li>
          <li><a href="https://donate.mozilla.org/en-US/?presets=100,50,25,15&amount=50&utm_source=mozilla.org&utm_medium=referral&utm_content=footer&currency=usd">Donate</a></li>
        </ul>
      </div>
      <div className="footer__legal">
        <ul className="footer__legal-list">
          <li><a href="https://www.mozilla.org/privacy/">Privacy</a></li>
          <li><a href="https://www.mozilla.org/privacy/websites/#cookies">Cookies</a></li>
          <li><a href="https://www.mozilla.org/about/legal/">Legal</a></li>
        </ul>
      </div>
    </footer>
  </div>
);
