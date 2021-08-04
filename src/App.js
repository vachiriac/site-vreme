import './App.css';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import moment from 'moment';
import localization from 'moment/locale/ro';
import DataCard from './DataCard';

function App() {
	const [apiData, setApiData] = useState({});
	const [city, setCity] = useState('ARAD');

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
		const fetchApi = async () => {
			const response = await fetch(apiUrl, {
				method: 'GET',
				headers: {
					'x-rapidapi-key': apiKey,
					'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
				}
			});
			const results = await response.json();
			setApiData(results);
		};
		fetchApi();
	}, [apiUrl, apiKey]);
	function updateCity(city) {
		setCity(city['value']);
	}
	if (apiData['current'] === undefined) {
		return (
			<div>
				<h1>API ERROR!!</h1>
			</div>
		);
	}
	return (
		<div className="App min-h-screen text-white flex justify-between flex-col md:flex-row">

			<div className="flex justify-between flex-col backdrop-filter backdrop-blur-xl lg:backdrop-filter-none ">
				<h1 className="text-3xl lg:text-4xl	font-bold pt-12 pl-6 md:pl-24 text-left">
					Vremea {city}
				</h1>
				<div className="flex flex-row items-center pb-6 text-right pl-6 ">
					<h1 className="text-6xl lg:text-8xl font-semibold">
						{apiData['current']['temp_c']}°
					</h1>
					<div className="flex flex-col text-left ">
						<h1 className="text-3xl  lg:text-6xl pl-2  ">
							{city}, {apiData['current']['condition']['text']}
						</h1>
						<h1 className="text-2xl lg:text-4xl lg:pb-12">
							{moment().format("HH:mm - ddd, D MMMM 'YY ")}
						</h1>
					</div>
				</div>
			</div>

			<div className="flex flex-col  lg:w-4/12 md:w-full max-h-screen	 backdrop-filter	backdrop-blur-xl overflow-y-auto ">
				<div className="flex flex-row justify-between">
					<h1 className="text-left pl-6 pt-12 pb-2">
						Selecteaza județul:
					</h1>
					<Select
						options={options}
						onChange={updateCity}
						classNamePrefix="Select"
						className="h-32	w-full pt-12 bg-transparent	border-black border-0 rounded-none pr-6 font-semibold	"
					/>
				</div>
				{apiData['current'] === undefined ? (
					<h1 className="text-4xl	font-bold pt-12 pl-24 text-left">
						Vremea {city}
					</h1>
				) : (
					<DataCard apiData={apiData} />
				)}
			</div>
		</div>
	);
}

export default App;
