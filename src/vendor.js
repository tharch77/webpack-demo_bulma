import 'handlebars';
import * as $$ from './js/shortLib$$';
// import "bootstrap";

// const $$Id = (ss) => {
//   ss = ss.substring(0, 1) === '#' ? ss.substring(1) : ss;
//   return document.getElementById(ss);
// };

$$.Id('contents').innerHTML = handlebars.compile(
  'Handlebars <b>{{doesWhat}}</b>'
)({ doesWhat: 'rocks!' });
