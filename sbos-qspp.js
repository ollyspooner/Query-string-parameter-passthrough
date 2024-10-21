document.addEventListener('DOMContentLoaded', () => {
  
  const urlParams = new URLSearchParams(window.location.search);
  const donateButtons = document.querySelectorAll('[data-param-prefix]');
  
  for( const donateButton of donateButtons ) {
    const entries = urlParams.entries();
    
    const baseUrl = new URL(donateButton.href);
    const baseUrlParams = new URLSearchParams(baseUrl.searchParams);
    const baseUrlEntries = baseUrlParams.entries();

    const prefix = donateButton.dataset.paramPrefix; 

    var params = [];

    for( const entry of baseUrlEntries ) {
      if(!urlParams.has(prefix + entry[0])) {
        params.push(entry[0] + '=' + entry[1]);
      }
    }

    for( const entry of entries ) {
      if(entry[0].startsWith(prefix)) {
        params.push(entry[0].substring(prefix.length) + '=' + entry[1]);
      }
    }

    donateButton.href = encodeURI(baseUrl.origin + '?' + params.join('&'));
  }
});
