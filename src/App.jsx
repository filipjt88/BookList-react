import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const books = [
  {
    id: 1,
    title: 'Python intenzivni kurs, prevod 3. izdanja',
    author: 'Eric Matthes',
    img: 'https://kombib.rs/images/566%20Python%20intezivni%20kurs.png',
    price: '2100 rsd',
    description:
      'Python intenzivni kurs je najprodavaniji vodič na svetu za programski jezik Python. Uz ovaj dinamičan i temeljan priručnik ćete za čas posla pisati programe, rešavati probleme i razvijati funkcionalne aplikacije',
  },
  {
    id: 2,
    title: 'React i React Native',
    author: 'Adam Boduch',
    img: 'https://kombib.rs/images/561-react-i-react-native.png',
    price: '2290 rsd',
    description:
      'Tokom godina, React i React Native su se, među JavaScript programerima, pokazali kao popularan izbor za kompletan i praktičan vodič za React ekosistem. Ovo četvrto izdanje prati najnove funkcije, poboljšanja i ispravke verzije React 18, a istovremeno je kompatibilno i sa platformom React Native. Nova poglavlja obuhvataju važne funkcije i koncepte modernog razvoja međuplatformskih aplikacija, pomoću React-a',
  },
  {
    id: 3,
    title: 'Kali Linux',
    author: 'Glen D. Singh',
    img: 'https://kombib.rs/images/562_kali_linux_prednje_korice.png',
    price: '2640 rsd',
    description:
      'Kali Linux je najpopularnija i najnaprednija Linux distribucija za penetraciono testiranje u industriji sajber bezbednosti. Pomoću Kali Linuxa profesionalac za sajber bezbednost će moći da otkrije i iskoristi različite propuste i izvrši napredno pen testiranje, kako na žičanim tako i na bežičnim mrežama preduzeća',
  },
  {
    id: 4,
    title: 'C++',
    author: 'Siddhartha Rao',
    img: 'https://kombib.rs/images/c++-20-i-23-jedna-lekcija-dnevno.jpg',
    price: '2640 rsd',
    description:
      'Učeći jednu lekciju dnevno, možete da steknete sve veštine koje su vam potrebne za početak programiranja u C++ jeziku. Ovaj kompletan vodič će vam pomoći da brzo ovladate osnovama objektno-orijentisanog programiranja, kao i naprednim funkcijama i konceptima jezika C++. Potpuno ažurirana za standard C++20, ova praktična knjiga je dizajnirana da vam pomogne da napišete C++ kod koji je brži, jednostavniji i pouzdaniji',
  },
  {
    id: 5,
    title: 'JavaScript od početnika do profesionalca',
    author: 'Laurence Lars Svekis',
    img: 'https://kombib.rs/images/557-JavaScript-od-pocetnika-do-profesionalca.PNG',
    price: '2120 rsd',
    description:
      '„JavaScript od početnika do profesionalaca“ se fokusira na ključne koncepte programiranja i manipulacije objektnim modelom dokumenta koji se koriste za rešavanje uobičajenih problema u profesionalnim veb aplikacijama. Ovo uključuje validaciju podataka, manipulisanje izgledom veb stranica, rad sa asinhronim i konkurentnim kodom',
  },
  {
    id: 6,
    title: 'MySQL radionica',
    author: 'Thomas Pettit',
    img: 'https://kombib.rs/images/556_MySQL_radionica_prednje_korice.png',
    price: '2380 rsd',
    description:
      'Učenje MySQL-a je postalo mnogo lakše, zahvaljujući upravo ovoj praktičnoj radionici i jednostavnim objašnjenjima, zanimljivim primerima i realističnim vežbama fokusiranim na to da vam pomognu da efikasno izradite i održavate baze podataka.',
  },
];
const App = () => {
  return <h1>Hello</h1>;
};

export default App;
