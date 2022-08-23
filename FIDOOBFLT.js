function transform(line) {
	var values = line.split(',');
	var obj = new Object();
	obj.FlightNo = values[0];
	obj.OfficialFlightDate = new Date(values[1]);
	obj.STAD = new Date(values[2]);
	obj.Leg = values[3];
	obj.Station1 = values[4];
	obj.Station2 = values[5];
	obj.Station3 = values[6];
	obj.Station4 = values[7];
	obj.Station5 = values[8];
	obj.Station6 = values[9];
	obj.StandCode = values[10];
	obj.ChockIndicator = values[11];
	obj.OnOffBlockTime = new Date(values[12]);
	var jsonString = JSON.stringify(obj);
	return jsonString;
}
