(() => {
  if (location.hostname !== 'open-coworking-stack.vercel.app') return;
  if (document.documentElement.dataset.ocsAnalyticsInitialized) return;
  document.documentElement.dataset.ocsAnalyticsInitialized = 'true';
  const id = 'G-P123CVWY99';
  const key = 'ocs:google-analytics-consent:v1';
  let sent = false;
  let panel;
  const choice = () => {
    if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl) return 'disabled';
    try {
      return localStorage.getItem(key) || 'pending';
    } catch {
      return 'disabled';
    }
  };
  const context = () => {
    let referrer = '';
    try {
      const u = new URL(document.referrer);
      referrer = u.origin + u.pathname;
    } catch {
      /* Direct visit. */
    }
    return {
      page_location: location.origin + location.pathname,
      page_title: document.title,
      page_referrer: referrer,
    };
  };
  function render(expanded = false) {
    const value = choice();
    window['ga-disable-' + id] = value !== 'granted';
    panel?.remove();
    if (value === 'disabled') return;
    if (value === 'granted') {
      window.dataLayer ||= [];
      window.gtag ||= function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('set', 'send_page_view', false);
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
      if (!document.getElementById('ocs-ga4')) {
        window.gtag('js', new Date());
        window.gtag('config', id, {
          send_page_view: false,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          ...context(),
        });
        const script = document.createElement('script');
        script.id = 'ocs-ga4';
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
        document.head.appendChild(script);
      }
      if (!sent) {
        window.gtag('event', 'page_view', context());
        sent = true;
      }
    } else {
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    }
    panel = document.createElement('section');
    panel.setAttribute('aria-label', 'Analytics privacy choices');
    panel.style.cssText =
      'position:fixed;bottom:12px;right:12px;z-index:1000;max-width:350px;padding:12px;border:1px solid #9ca3af;border-radius:8px;background:#fff;color:#172033;font:14px/1.5 sans-serif';
    function button(label, action) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = label;
      b.style.cssText =
        'margin:4px;padding:7px 10px;border:1px solid #9ca3af;border-radius:5px;background:#fff;color:#172033;cursor:pointer';
      b.onclick = action;
      panel.appendChild(b);
    }
    function choose(next) {
      try {
        localStorage.setItem(key, next);
      } catch {
        return;
      }
      render();
    }
    if (value === 'pending' || expanded) {
      const p = document.createElement('p');
      p.textContent =
        'Allow optional Google Analytics cookies to measure visits and interest in these free coworking resources? Search terms and form details are not sent to Google.';
      panel.appendChild(p);
      button('Essential only', () => choose('denied'));
      button('Allow analytics', () => choose('granted'));
    } else button('Privacy choices', () => render(true));
    document.body.appendChild(panel);
  }
  document.addEventListener('click', (event) => {
    if (
      choice() === 'granted' &&
      event.target instanceof Element &&
      event.target.closest('[data-tool-id] a')
    )
      window.gtag?.('event', 'resource_tool_interest', context());
  });
  window.addEventListener('storage', () => render());
  render();
})();
