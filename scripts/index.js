import Home from './views/Home.js';
import AboutUs from './views/AboutUs.js';
import Contact from './views/Contac.js';

import * as leaflet from './leaflet.js';

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  const routes = [
    { path: '/', view: Home },
    { path: '/about-us', view: AboutUs },
    { path: '/contact', view: Contact }
  ]

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    }
  })

  let matchRoute = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if (!matchRoute) {
    matchRoute = {
      route: routes[0],
      isMatch: true
    }
  }

  const view = new matchRoute.route.view();
  document.querySelector("#content").innerHTML = await view.getHtml();
  document.getElementById("title").innerText = await view.getTitle();
  document.getElementById("subtitle").innerText = await view.getSubtitle();

  if (matchRoute.route.path === '/') {
    leaflet.instanceMap();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches('[nav-link')) {
      e.preventDefault();
      navigateTo(e.target.href);
      window.scrollTo(0, 0);
    }

    if (e.target.matches('[fav-button')) {
      e.preventDefault();
      leaflet.favoriteMarker();
    }
  })
  router();
});

window.addEventListener("popstate", router);



