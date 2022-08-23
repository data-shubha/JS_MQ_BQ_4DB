function transform(line) {
	var values = line.split(',');
	var obj = new Object();
	obj.AFSkey = parseFloat(values[0]);
	obj.FlightNo = values[1];
	obj.Leg = values[2];
	obj.STAD = new Date(values[3]);
	obj.OfficialFlightDate = new Date(values[4]);
	obj.OperationTime = new Date(values[5]);
	obj.RemarkCode = values[6];
	obj.Station1 = values[7];
	obj.Station2 = values[8];
	obj.Station3 = values[9];
	obj.Station4 = values[10];
	obj.Station5 = values[11];
	obj.Station6 = values[12];
	obj.FlightPlanId = parseFloat(values[13]);
	var jsonString = JSON.stringify(obj);
	return jsonString;
}
