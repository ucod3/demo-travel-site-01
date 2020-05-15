import '../css/styles.css';
import MobileMenu from './modules/MobileMenu.js';

let mobileMenu = new MobileMenu();

if (module.hot) {
	module.hot.accept();
}
