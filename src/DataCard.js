import React from 'react';
import { useState, useEffect } from 'react';

const DataCard = apiData => {
	console.log(apiData);

	const currentData = apiData['apiData']['current'];
	const tomorrowData =
		apiData['apiData']['forecast']['forecastday']['1']['day'];
	const aftertomorrowData =
		apiData['apiData']['forecast']['forecastday']['2']['day'];
	return (
		<div>
			<div className="border-t-2 border-white mt-6 mr-6 ml-6"></div>

			<h1 className="text-left pl-6 pt-12 pb-2">Detalii despre vreme</h1>

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
			<h1 className="text-xl text-left pl-6 pt-12 pb-2">Vremea mâine </h1>
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
				<h1 className="pr-6">
					{tomorrowData['daily_chance_of_rain']}%
				</h1>
			</div>
			<div className="flex flex-row justify-between pt-12 font-light pb-2">
				<h1 className="pl-6">Viteză vânt</h1>
				<h1 className="pr-6">{tomorrowData['maxwind_kph']} kph</h1>
			</div>

			<div className="border-t-2 border-white mt-6 mr-6 ml-6"></div>

			<h1 className="text-xl text-left pl-6 pt-12 pb-2">Vremea poimâine </h1>
			<div className="flex flex-row justify-between pt-12 font-light ">
				<h1 className="pl-6">{aftertomorrowData['condition']['text']} </h1>
			</div>
			<div className="flex flex-row justify-between pt-12 font-light ">
				<h1 className="pl-6">Temperatură medie</h1>
				<h1 className="pr-6">{aftertomorrowData['avgtemp_c']}°</h1>
			</div>
			<div className="flex flex-row justify-between pt-12 font-light pb-2">
				<h1 className="pl-6">Temperatură maximă</h1>
				<h1 className="pr-6">{aftertomorrowData['maxtemp_c']}°</h1>
			</div>
			<div className="flex flex-row justify-between pt-12 font-light pb-2">
				<h1 className="pl-6">Șanse de ploaie</h1>
				<h1 className="pr-6">
					{aftertomorrowData['daily_chance_of_rain']}%
				</h1>
			</div>
			<div className="flex flex-row justify-between pt-12 font-light pb-2">
				<h1 className="pl-6">Viteză vânt</h1>
				<h1 className="pr-6">{aftertomorrowData['maxwind_kph']} kph</h1>
			</div>

			<div className="border-t-2 border-white mt-6 mr-6 ml-6"></div>
			</div>
	);
};

export default DataCard;
