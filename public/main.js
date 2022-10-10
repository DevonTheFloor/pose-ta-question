import '../src/sass/main.scss';
import { listenForHashInIndex } from '../tijak/builders/page-navigation';
import { listenForHash }from '../tijak/builders/page-navigation/';
import { registerComponents } from '../tijak-register';


listenForHash();
listenForHashInIndex();