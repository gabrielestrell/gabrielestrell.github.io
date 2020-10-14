var countryInitials=["AF",	"AX",	"AL",	"DZ",	"AS",	
"AD",	"AO",	"AI",	"AQ",	"AG",	"AR",	"AM",	"AW",	
"AU",	"AT",	"AZ",	"BS",	"BH",	"BD",	"BB",	"BY",	
"BE",	"BZ",	"BJ",	"BM",	"BT",	"BO",	"BQ",	"BA",	
"BW",	"BV",	"BR",	"IO",	"BN",	"BG",	"BF",	"BI",	
"CV",	"KH",	"CM",	"CA",	"KY",	"CF",	"TD",	"CL",	
"CN",	"CX",	"CC",	"CO",	"KM",	"CG",	"CD",	"CK",	
"CR",	"CI",	"HR",	"CU",	"CW",	"CY",	"CZ",	"DK",	
"DJ",	"DM",	"DO",	"EC",	"EG",	"SV",	"GQ",	"ER",	
"EE",	"SZ",	"ET",	"FK",	"FO",	"FJ",	"FI",	"FR",	
"GF",	"PF",	"TF",	"GA",	"GM",	"GE",	"DE",	"GH",	
"GI",	"GR",	"GL",	"GD",	"GP",	"GU",	"GT",	"GG",	
"GN",	"GW",	"GY",	"HT",	"HM",	"VA",	"HN",	"HK",	
"HU",	"IS",	"IN",	"ID",	"IR",	"IQ",	"IE",	"IM",	
"IL",	"IT",	"JM",	"JP",	"JE",	"JO",	"KZ",	"KE",	
"KI",	"KP",	"KR",	"KW",	"KG",	"LA",	"LV",	"LB",	
"LS",	"LR",	"LY",	"LI",	"LT",	"LU",	"MO",	"MG",	
"MW",	"MY",	"MV",	"ML",	"MT",	"MH",	"MQ",	"MR",	
"MU",	"YT",	"MX",	"FM",	"MD",	"MC",	"MN",	"ME",	
"MS",	"MA",	"MZ",	"MM",	"NA",	"NR",	"NP",	"NL",	
"NC",	"NZ",	"NI",	"NE",	"NG",	"NU",	"NF",	"MK",	
"MP",	"NO",	"OM",	"PK",	"PW",	"PS",	"PA",	"PG",	
"PY",	"PE",	"PH",	"PN",	"PL",	"PT",	"PR",	"QA",	
"RE",	"RO",	"RU",	"RW",	"BL",	"SH",	"KN",	"LC",	
"MF",	"PM",	"VC",	"WS",	"SM",	"ST",	"SA",	"SN",	
"RS",	"SC",	"SL",	"SG",	"SX",	"SK",	"SI",	"SB",	
"SO",	"ZA",	"GS",	"SS",	"ES",	"LK",	"SD",	"SR",	
"SJ",	"SE",	"CH",	"SY",	"TW",	"TJ",	"TZ",	"TH",	
"TL",	"TG",	"TK",	"TO",	"TT",	"TN",	"TR",	"TM",	
"TC",	"TV",	"UG",	"UA",	"AE",	"GB",	"US",	"UM",	
"UY",	"UZ",	"VU",	"VE",	"VN",	"VG",	"VI",	"WF",
"EH",	"YE",	"ZM",	"ZW"];

var countryName=["Afghanistan", "Aland Islands", "Albania",	"Algeria",	"American Samoa",	
"Andorra",	"Angola",	"Anguilla",	"Antarctica",	"Antigua and Barbuda",	"Argentina",	"Armenia",	
"Aruba",	"Australia",	"Austria",	"Azerbaijan",	"Bahamas",	"Bahrain",	"Bangladesh",	"Barbados",	
"Belarus",	"Belgium",	"Belize",	"Benin",	"Bermuda",	"Bhutan",	"Bolivia (Plurinational State of)",	
"Bonaire, Sint Eustatius and Saba",	"Bosnia and Herzegovina",	"Botswana",	"Bouvet Island",	"Brazil",	
"British Indian Ocean Territory",	"Brunei Darussalam",	"Bulgaria",	"Burkina Faso",	"Burundi",	"Cabo Verde",	
"Cambodia",	"Cameroon",	"Canada",	"Cayman Islands",	"Central African Republic",	"Chad",	"Chile",	"China",	
"Christmas Island",	"Cocos (Keeling) Islands",	"Colombia",	"Comoros",	"Congo",	"Congo, Democratic Republic of the",	
"Cook Islands",	"Costa Rica",	"CÃ´te d'Ivoire",	"Croatia",	"Cuba",	"CuraÃ§ao",	"Cyprus",	"Czechia",	"Denmark",	
"Djibouti",	"Dominica",	"Dominican Republic",	"Ecuador",	"Egypt",	"El Salvador",	"Equatorial Guinea",	
"Eritrea",	"Estonia",	"Eswatini",	"Ethiopia",	"Falkland Islands (Malvinas)",	"Faroe Islands",	"Fiji",	
"Finland",	"France",	"French Guiana",	"French Polynesia",	"French Southern Territories",	"Gabon",	
"Gambia",	"Georgia",	"Germany",	"Ghana",	"Gibraltar",	"Greece",	"Greenland",	"Grenada",	
"Guadeloupe",	"Guam",	"Guatemala",	"Guernsey",	"Guinea",	"Guinea-Bissau",	"Guyana",	"Haiti",	
"Heard Island and McDonald Islands",	"Holy See",	"Honduras",	"Hong Kong",	"Hungary",	"Iceland",	"India",	
"Indonesia",	"Iran (Islamic Republic of)",	"Iraq",	"Ireland",	"Isle of Man",	"Israel",	"Italy",	
"Jamaica",	"Japan",	"Jersey",	"Jordan",	"Kazakhstan",	"Kenya",	"Kiribati",	
"Korea (Democratic People's Republic of)",	"Korea, Republic of",	"Kuwait",	"Kyrgyzstan",	
"Lao People's Democratic Republic",	"Latvia",	"Lebanon",	"Lesotho",	"Liberia",	"Libya",	
"Liechtenstein",	"Lithuania",	"Luxembourg",	"Macao",	"Madagascar",	"Malawi",	"Malaysia",	"Maldives",	"Mali",	"Malta",	
"Marshall Islands",	"Martinique",	"Mauritania",	"Mauritius",	"Mayotte",	"Mexico",	"Micronesia (Federated States of)",	
"Moldova, Republic of",	"Monaco",	"Mongolia",	"Montenegro",	"Montserrat",	"Morocco",	"Mozambique",	"Myanmar",	"Namibia",	"Nauru",	
"Nepal",	"Netherlands",	"New Caledonia",	"New Zealand",	"Nicaragua",	"Niger",	"Nigeria",	"Niue",	
"Norfolk Island",	"North Macedonia",	"Northern Mariana Islands",	"Norway",	"Oman",	"Pakistan",	"Palau",	
"Palestine, State of",	"Panama",	"Papua New Guinea",	"Paraguay",	"Peru",	"Philippines",	"Pitcairn",	"Poland",	
"Portugal",	"Puerto Rico",	"Qatar",	"RÃ©union",	"Romania",	"Russian Federation",	"Rwanda",	"Saint BarthÃ©lemy",	
"Saint Helena, Ascension and Tristan da Cunha",	"Saint Kitts and Nevis",	"Saint Lucia",	"Saint Martin (French part)",	
"Saint Pierre and Miquelon",	"Saint Vincent and the Grenadines",	"Samoa",	"San Marino",	"Sao Tome and Principe",	
"Saudi Arabia",	"Senegal",	"Serbia",	"Seychelles",	"Sierra Leone",	"Singapore",	"Sint Maarten (Dutch part)",	
"Slovakia",	"Slovenia",	"Solomon Islands",	"Somalia",	"South Africa",	"South Georgia and the South Sandwich Islands",	
"South Sudan",	"Spain",	"Sri Lanka",	"Sudan",	"Suriname",	"Svalbard and Jan Mayen",	"Sweden",	"Switzerland",	
"Syrian Arab Republic",	"Taiwan, Province of China",	"Tajikistan",	"Tanzania, United Republic of",	"Thailand",	
"Timor-Leste",	"Togo",	"Tokelau",	"Tonga",	"Trinidad and Tobago",	"Tunisia",	"Turkey",	"Turkmenistan",	
"Turks and Caicos Islands",	"Tuvalu",	"Uganda",	"Ukraine",	"United Arab Emirates",	"United Kingdom of Great Britain and Northern Ireland",	
"United States of America",	"United States Minor Outlying Islands",	"Uruguay",	"Uzbekistan",	"Vanuatu",	
"Venezuela (Bolivarian Republic of)",	"Viet Nam",	"Virgin Islands (British)",	"Virgin Islands (U.S.)",	
"Wallis and Futuna",	"Western Sahara",	"Yemen",	"Zambia",	"Zimbabwe"];

let countryList = [];

let a1;
let a2;
let b1;
let b2;

let countryListContainer=document.createElement("");
let countryListElement=document.createElement("");

let countryListCount=countryList.length;
let listItem;
let randomNumbers;

countryListElement.className = "countries";

const btn = document.querySelector('button');

btn.onclick=function randomContries() {
    document.querySelector(".content").appendChild(countryListContainer);
    countryListContainer.appendChild(countryListElement);
    for (let i = 0; i < 25; i++)
    {
        randomNumbers=Math.floor(Math.random() * countryInitials.length);

        a1=document.createElement("p1");
        a2=document.createTextNode(countryName[randomNumbers] + " ");
        a1.appendChild(a2);
        a1.className="countryName";
        
        b1=document.createElement("p2");
        b2=document.createTextNode(countryInitials[randomNumbers]);
        b1.appendChild(b2);
        b1.className="countryCode";

        listItem=document.createElement("p");
        listItem.appendChild(a1);
        listItem.appendChild(b1);

        countryListElement.appendChild(listItem);
    }

}