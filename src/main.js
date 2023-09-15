import '../public/styles/modern-normalize.css'
import '../public/styles/style.css'
import '../public/styles/components/header.css'
import '../public/styles/components/hero.css'
import '../public/styles/components/about.css'
import '../public/styles/components/featured.css'
import '../public/styles/components/work.css'
import '../public/styles/components/contact.css'
import '../public/styles/components/footer.css'
import '../public/styles/components/mobile-nav.css'
import '../public/styles/utils.css'

// Javascript functions

import MobileNav from './utils/mobile-nav.js';
import DarkModeListener from './utils/theme-toggle.js';
import LazyLoad  from './utils/lazy-loading.js';

DarkModeListener();
MobileNav();
LazyLoad();
