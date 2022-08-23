function transform(line) {
	var values = line.split(',');
	var obj = new Object();
	obj.FlightNo = values[0];
	obj.Leg = values[1];
	obj.STAD = new Date(values[2]);
	obj.OfficialFlightDate = new Date(values[3]);
	obj.FLIGHTDELAYCODE = values[4];
	obj.Memo = values[5];
	obj.RemarkCode = values[6];
	var jsonString = JSON.stringify(obj);
	return jsonString;
}


