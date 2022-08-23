function transform(line) {
	var values = line.split(',');
	var obj = new Object();
	obj.FlightNo = values[0];
	obj.STD = new Date(values[1]);
	obj.CounterCode =  values[2];
	obj.SchCounterOpen = new Date(values[3]);
	obj.SchCounterClose = new Date(values[3]);
	obj.AIRCRAFTTYPECODE = values[4];
	obj.AIRCRAFTOPERATORCODE = values[5];
	obj.IATASERVICETYPECODE = values[6];
	obj.SPECIALFLIGHTIND = values[7];
	obj.SCHCOUNTEROPENTIME = new Date(values[8]);
	obj.SCHCOUNTERCLOSETIME = new Date(values[9]);
	obj.SCHGATEOPENTIME = new Date(values[10]);
	obj.SCHGATECLOSETIME = new Date(values[11]);	
	obj.SCHGATEBOARDINGTIME = new Date(values[12]);
	obj.SCHGATEFINALCALLTIME = new Date(values[13]);
	obj.GATELOUNGECODE = values[14];
	obj.TAILNO = values[15];
	var jsonString = JSON.stringify(obj);
	return jsonString;
}
