function transform(line) {
	var values = line.split(',');
	var obj = new Object();
	obj.FlightNo = values[0];
	obj.Leg = values[1];
	obj.STAD = new Date(values[2]);
	obj.LngRecCtrCode = values[3];
	obj.OperationTime = new Date(values[4]);
	obj.StandCode = values[5];
	obj.LoungeCode = values[6];
	obj.CategoryCode = values[7];
	obj.RemarkCode = values[8];
	var jsonString = JSON.stringify(obj);
	return jsonString;
}
