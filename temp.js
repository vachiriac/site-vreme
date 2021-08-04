import './App.css';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import moment from 'moment';
import localization from 'moment/locale/ro';

function App() {
	const [apiData, setApiData] = useState({});
	const [city, setCity] = useState('iasi');
	const judete = [
		'ALBA',
		'ARAD',
		'ARGES',
		'BACAU',
		'BIHOR',
		'BISTRITA-NASAUD',
		'BOTOSANI',
		'BRAILA',
		'BRASOV',
		'BUZAU',
		'CALARASI',
		'CARAS-SEVERIN',
		'CLUJ',
		'CONSTANTA',
		'COVASNA',
		'DIMBOVITA',
		'DOLJ',
		'GALATI',
		'GIURGIU',
		'GORJ',
		'HARGHITA',
		'HUNEDOARA',
		'IALOMITA',
		'IASI',
		'ILFOV',
		'MARAMURES',
		'MEHEDINTI',
		'MURES',
		'NEAMT',
		'NECUNOSCUT',
		'OLT',
		'PRAHOVA',
		'SALAJ',
		'SATU MARE',
		'SIBIU',
		'SUCEAVA',
		'TELEORMAN',
		'TIMIS',
		'TULCEA',
		'VASLUI',
		'VILCEA',
		'VRANCEA'
	];
	const options = [];
	judete.map(foo => options.push({ value: `${foo}`, label: `${foo}` }));
	const apiKey = process.env.REACT_APP_API_KEY;
	const apiUrl = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3&lang=ro`;
	moment.updateLocale('ro', localization);
	useEffect(() => {
		fetch(apiUrl, {
			method: 'GET',
			headers: {
				'x-rapidapi-key': apiKey,
				'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
			}
		})
			.then(response => response.json())
			.then(data => setApiData(data))
			.catch(err => {
				console.error(err);
			});
	}, []);



	const currentData = apiData['current'];
	const tomorrowData = apiData['forecast']['forecastday']['1']['day'];


	if (apiData['current'] === undefined){
		return (
			<div>
				<h1> No data available</h1>
			</div>	
		)
	}
	console.log(apiData);
	return (
		<div className="App min-h-screen text-white flex justify-between">

			<div className="flex justify-between flex-col">
				<h1 className="text-4xl	font-bold pt-12 pl-24 text-left">
					Vremea {city}
				</h1>
				<div className="flex flex-row items-center pb-24 text-right pl-24">
					<h1 className="text-8xl font-semibold">{currentData['temp_c']}°</h1>
					<div className="flex flex-col text-left">
						<h1 className="text-6xl pl-2">{city}, {currentData['condition']['text']}</h1>
						<h1 className="text-4xl">{moment().format("HH:mm - ddd, D MMMM 'YY ")}</h1>
					</div>
				</div>
			</div>

			<div className="flex flex-col w-4/12 max-h-screen	 backdrop-filter	backdrop-blur-xl overflow-y-auto">
				<div className="flex flex-row justify-between">
					<h1 className="text-left pl-6 pt-12 pb-2">
						Selecteaza orasul:
					</h1>
					<Select options={options} />
				</div>

				<div className="border-t-2 border-white mt-6 mr-6 ml-6"></div>

				<h1 className="text-left pl-6 pt-12 pb-2">
					Detalii despre vreme
				</h1>

				<div className="border-t-2 border-white mt-6 mr-6 ml-6"></div>

				<div className="flex flex-row justify-between pt-12 font-light ">
					<h1 className="pl-6">Umiditate</h1>
					<h1 className="pr-6">{currentData['humidity']}%</h1>
				</div>
				<div className="flex flex-row justify-between pt-12 font-light ">
					<h1 className="pl-6">Presiune</h1>
					<h1 className="pr-6">{currentData['pressure_mb']}mb</h1>
				</div>
				<div className="flex flex-row justify-between pt-12 font-light ">
					<h1 className="pl-6">Nori</h1>
					<h1 className="pr-6">{currentData['cloud']}%</h1>
				</div>
				<div className="flex flex-row justify-between pt-12 font-light pb-2">
					<h1 className="pl-6">Se simte ca</h1>
					<h1 className="pr-6">{currentData['feelslike_c']}°</h1>
				</div>

				<div className="border-t-2 border-white mt-6 mr-6 ml-6"></div>
				<h1 className="text-xl text-left pl-6 pt-12 pb-2">
					Vremea mâine
				</h1>
				<div className="flex flex-row justify-between pt-12 font-light ">
					<h1 className="pl-6">{tomorrowData['condition']['text']} </h1>
				</div>
				<div className="flex flex-row justify-between pt-12 font-light ">
					<h1 className="pl-6">Temperatură medie</h1>
					<h1 className="pr-6">{tomorrowData['avgtemp_c']}°</h1>
				</div>
				<div className="flex flex-row justify-between pt-12 font-light pb-2">
					<h1 className="pl-6">Temperatură maximă</h1>
					<h1 className="pr-6">{tomorrowData['maxtemp_c']}°</h1>
				</div>
				<div className="flex flex-row justify-between pt-12 font-light pb-2">
					<h1 className="pl-6">Șanse de ploaie</h1>
					<h1 className="pr-6">{tomorrowData['daily_chance_of_rain']}%</h1>
				</div>
				<div className="flex flex-row justify-between pt-12 font-light pb-2">
					<h1 className="pl-6">Viteză vânt</h1>
					<h1 className="pr-6">{tomorrowData['maxwind_kph']} kph</h1>
				</div>

				<div className="border-t-2 border-white mt-6 mr-6 ml-6"></div>
				<div className="flex flex-row justify-between pt-12 font-light ">
					<h1 className="pl-6">Umiditate</h1>
					<h1 className="pr-6">0%</h1>
				</div>
				<div className="flex flex-row justify-between pt-12 font-light ">
					<h1 className="pl-6">Umiditate</h1>
					<h1 className="pr-6">0%</h1>
				</div>
				<div className="flex flex-row justify-between pt-12 font-light pb-2">
					<h1 className="pl-6">Umiditate</h1>
					<h1 className="pr-6">0%</h1>
				</div>

				<div className="border-t-2 border-white mt-6 mr-6 ml-6"></div>
			</div>
		</div>
	);
}

export default App;
