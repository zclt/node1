var moment = require('./node_modules/moment');

exports.dateTimeModule = function(year, month, day, hour, minute) {
	var inputDate = moment(year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00'); //ISO 8601
	
	return 'Now: ' + moment().format('LLL') + '\r\n' +
		'Input\r\n' +
		'Year: ' + year + ' Month: ' + month + ' Day: ' + day + ' Hour: ' + hour + ' Minute: ' + minute + '\r\n' +
		inputDate.format() + ' Local\r\n' +
		inputDate.utc().format() + ' UTC\r\n';
};