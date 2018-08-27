export const fiveDayForecastMock = [{
	'time': '2018-08-27 12:00:00',
	'description': 'clear sky',
	'id': 800,
	'temp': 10.85,
	'temp_max': 10.85,
	'temp_min': 10.84
},
{
	'time': '2018-08-28 12:00:00',
	'description': 'broken clouds',
	'id': 803,
	'temp': 10.11,
	'temp_max': 10.11,
	'temp_min': 10.11
},
{
	'time': '2018-08-29 12:00:00',
	'description': 'clear sky',
	'id': 800,
	'temp': 8.55,
	'temp_max': 8.55,
	'temp_min': 8.55
},
{
	'time': '2018-08-30 12:00:00',
	'description': 'overcast clouds',
	'id': 804,
	'temp': 13.46,
	'temp_max': 13.46,
	'temp_min': 13.46
},
{
	'time': '2018-08-31 12:00:00',
	'description': 'clear sky',
	'id': 800,
	'temp': 15.18,
	'temp_max': 15.18,
	'temp_min': 15.18
}
];

export const forecastDataMock = {
	'cod': '200',
	'message': 0.0058,
	'cnt': 39,
	'list': [{
		'dt': 1535338800,
		'main': {
			'temp': 14.26,
			'temp_min': 14.24,
			'temp_max': 14.26,
			'pressure': 1027.14,
			'sea_level': 1033.23,
			'grnd_level': 1027.14,
			'humidity': 81,
			'temp_kf': 0.02
		},
		'weather': [{
			'id': 803,
			'main': 'Clouds',
			'description': 'broken clouds',
			'icon': '04d'
		}],
		'clouds': {
			'all': 56
		},
		'wind': {
			'speed': 4.12,
			'deg': 187.505
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-27 03:00:00'
	},
	{
		'dt': 1535349600,
		'main': {
			'temp': 13.39,
			'temp_min': 13.37,
			'temp_max': 13.39,
			'pressure': 1027.66,
			'sea_level': 1033.86,
			'grnd_level': 1027.66,
			'humidity': 78,
			'temp_kf': 0.02
		},
		'weather': [{
			'id': 802,
			'main': 'Clouds',
			'description': 'scattered clouds',
			'icon': '03d'
		}],
		'clouds': {
			'all': 48
		},
		'wind': {
			'speed': 4.35,
			'deg': 180.506
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-27 06:00:00'
	},
	{
		'dt': 1535360400,
		'main': {
			'temp': 11.58,
			'temp_min': 11.57,
			'temp_max': 11.58,
			'pressure': 1029.3,
			'sea_level': 1035.56,
			'grnd_level': 1029.3,
			'humidity': 84,
			'temp_kf': 0.01
		},
		'weather': [{
			'id': 500,
			'main': 'Rain',
			'description': 'light rain',
			'icon': '10n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 4.66,
			'deg': 178.502
		},
		'rain': {
			'3h': 0.0099999999999998
		},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-27 09:00:00'
	},
	{
		'dt': 1535371200,
		'main': {
			'temp': 10.85,
			'temp_min': 10.84,
			'temp_max': 10.85,
			'pressure': 1030.4,
			'sea_level': 1036.59,
			'grnd_level': 1030.4,
			'humidity': 85,
			'temp_kf': 0.01
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 4.31,
			'deg': 185.001
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-27 12:00:00'
	},
	{
		'dt': 1535382000,
		'main': {
			'temp': 9.64,
			'temp_min': 9.64,
			'temp_max': 9.64,
			'pressure': 1030.02,
			'sea_level': 1036.3,
			'grnd_level': 1030.02,
			'humidity': 90,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 3.76,
			'deg': 203.506
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-27 15:00:00'
	},
	{
		'dt': 1535392800,
		'main': {
			'temp': 7.71,
			'temp_min': 7.71,
			'temp_max': 7.71,
			'pressure': 1029.48,
			'sea_level': 1035.66,
			'grnd_level': 1029.48,
			'humidity': 95,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 3.75,
			'deg': 219.5
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-27 18:00:00'
	},
	{
		'dt': 1535403600,
		'main': {
			'temp': 6.69,
			'temp_min': 6.69,
			'temp_max': 6.69,
			'pressure': 1029.98,
			'sea_level': 1036.26,
			'grnd_level': 1029.98,
			'humidity': 95,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01d'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 3.62,
			'deg': 229.5
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-27 21:00:00'
	},
	{
		'dt': 1535414400,
		'main': {
			'temp': 10.47,
			'temp_min': 10.47,
			'temp_max': 10.47,
			'pressure': 1029.84,
			'sea_level': 1035.98,
			'grnd_level': 1029.84,
			'humidity': 79,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01d'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 3.26,
			'deg': 231.502
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-28 00:00:00'
	},
	{
		'dt': 1535425200,
		'main': {
			'temp': 13.51,
			'temp_min': 13.51,
			'temp_max': 13.51,
			'pressure': 1027.27,
			'sea_level': 1033.46,
			'grnd_level': 1027.27,
			'humidity': 71,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01d'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 2.57,
			'deg': 223.503
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-28 03:00:00'
	},
	{
		'dt': 1535436000,
		'main': {
			'temp': 13.7,
			'temp_min': 13.7,
			'temp_max': 13.7,
			'pressure': 1026.2,
			'sea_level': 1032.35,
			'grnd_level': 1026.2,
			'humidity': 70,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01d'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 2.16,
			'deg': 202.001
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-28 06:00:00'
	},
	{
		'dt': 1535446800,
		'main': {
			'temp': 10.94,
			'temp_min': 10.94,
			'temp_max': 10.94,
			'pressure': 1026.81,
			'sea_level': 1033.05,
			'grnd_level': 1026.81,
			'humidity': 84,
			'temp_kf': 0
		},
		'weather': [{
			'id': 803,
			'main': 'Clouds',
			'description': 'broken clouds',
			'icon': '04n'
		}],
		'clouds': {
			'all': 56
		},
		'wind': {
			'speed': 2.26,
			'deg': 188.001
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-28 09:00:00'
	},
	{
		'dt': 1535457600,
		'main': {
			'temp': 10.11,
			'temp_min': 10.11,
			'temp_max': 10.11,
			'pressure': 1027.27,
			'sea_level': 1033.61,
			'grnd_level': 1027.27,
			'humidity': 90,
			'temp_kf': 0
		},
		'weather': [{
			'id': 803,
			'main': 'Clouds',
			'description': 'broken clouds',
			'icon': '04n'
		}],
		'clouds': {
			'all': 56
		},
		'wind': {
			'speed': 2.07,
			'deg': 196.004
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-28 12:00:00'
	},
	{
		'dt': 1535468400,
		'main': {
			'temp': 9.94,
			'temp_min': 9.94,
			'temp_max': 9.94,
			'pressure': 1027.31,
			'sea_level': 1033.56,
			'grnd_level': 1027.31,
			'humidity': 90,
			'temp_kf': 0
		},
		'weather': [{
			'id': 801,
			'main': 'Clouds',
			'description': 'few clouds',
			'icon': '02n'
		}],
		'clouds': {
			'all': 24
		},
		'wind': {
			'speed': 2.76,
			'deg': 223.505
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-28 15:00:00'
	},
	{
		'dt': 1535479200,
		'main': {
			'temp': 7.75,
			'temp_min': 7.75,
			'temp_max': 7.75,
			'pressure': 1027.06,
			'sea_level': 1033.35,
			'grnd_level': 1027.06,
			'humidity': 96,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 3.12,
			'deg': 222.502
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-28 18:00:00'
	},
	{
		'dt': 1535490000,
		'main': {
			'temp': 6.63,
			'temp_min': 6.63,
			'temp_max': 6.63,
			'pressure': 1027.65,
			'sea_level': 1034,
			'grnd_level': 1027.65,
			'humidity': 100,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01d'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 2.26,
			'deg': 236.004
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-28 21:00:00'
	},
	{
		'dt': 1535500800,
		'main': {
			'temp': 12.45,
			'temp_min': 12.45,
			'temp_max': 12.45,
			'pressure': 1027.92,
			'sea_level': 1034.11,
			'grnd_level': 1027.92,
			'humidity': 77,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01d'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 1.95,
			'deg': 252.501
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-29 00:00:00'
	},
	{
		'dt': 1535511600,
		'main': {
			'temp': 14.79,
			'temp_min': 14.79,
			'temp_max': 14.79,
			'pressure': 1025.83,
			'sea_level': 1032.03,
			'grnd_level': 1025.83,
			'humidity': 66,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01d'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 2.57,
			'deg': 226.504
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-29 03:00:00'
	},
	{
		'dt': 1535522400,
		'main': {
			'temp': 15.15,
			'temp_min': 15.15,
			'temp_max': 15.15,
			'pressure': 1025.02,
			'sea_level': 1031.23,
			'grnd_level': 1025.02,
			'humidity': 64,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01d'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 2.06,
			'deg': 202.501
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-29 06:00:00'
	},
	{
		'dt': 1535533200,
		'main': {
			'temp': 11.05,
			'temp_min': 11.05,
			'temp_max': 11.05,
			'pressure': 1026.43,
			'sea_level': 1032.63,
			'grnd_level': 1026.43,
			'humidity': 83,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 2.66,
			'deg': 143.501
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-29 09:00:00'
	},
	{
		'dt': 1535544000,
		'main': {
			'temp': 8.55,
			'temp_min': 8.55,
			'temp_max': 8.55,
			'pressure': 1027.48,
			'sea_level': 1033.79,
			'grnd_level': 1027.48,
			'humidity': 100,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 1.49,
			'deg': 155.002
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-29 12:00:00'
	},
	{
		'dt': 1535554800,
		'main': {
			'temp': 6.73,
			'temp_min': 6.73,
			'temp_max': 6.73,
			'pressure': 1026.88,
			'sea_level': 1033.22,
			'grnd_level': 1026.88,
			'humidity': 100,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 1.62,
			'deg': 247.001
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-29 15:00:00'
	},
	{
		'dt': 1535565600,
		'main': {
			'temp': 5.7,
			'temp_min': 5.7,
			'temp_max': 5.7,
			'pressure': 1026.74,
			'sea_level': 1033.07,
			'grnd_level': 1026.74,
			'humidity': 100,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 1.96,
			'deg': 256.003
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-29 18:00:00'
	},
	{
		'dt': 1535576400,
		'main': {
			'temp': 5.41,
			'temp_min': 5.41,
			'temp_max': 5.41,
			'pressure': 1027.56,
			'sea_level': 1033.97,
			'grnd_level': 1027.56,
			'humidity': 100,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '02d'
		}],
		'clouds': {
			'all': 8
		},
		'wind': {
			'speed': 1.7,
			'deg': 289.5
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-29 21:00:00'
	},
	{
		'dt': 1535587200,
		'main': {
			'temp': 12.82,
			'temp_min': 12.82,
			'temp_max': 12.82,
			'pressure': 1027.25,
			'sea_level': 1033.42,
			'grnd_level': 1027.25,
			'humidity': 78,
			'temp_kf': 0
		},
		'weather': [{
			'id': 802,
			'main': 'Clouds',
			'description': 'scattered clouds',
			'icon': '03d'
		}],
		'clouds': {
			'all': 36
		},
		'wind': {
			'speed': 1.26,
			'deg': 315.004
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-30 00:00:00'
	},
	{
		'dt': 1535598000,
		'main': {
			'temp': 15.62,
			'temp_min': 15.62,
			'temp_max': 15.62,
			'pressure': 1025.35,
			'sea_level': 1031.47,
			'grnd_level': 1025.35,
			'humidity': 65,
			'temp_kf': 0
		},
		'weather': [{
			'id': 802,
			'main': 'Clouds',
			'description': 'scattered clouds',
			'icon': '03d'
		}],
		'clouds': {
			'all': 44
		},
		'wind': {
			'speed': 1.57,
			'deg': 335.001
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-30 03:00:00'
	},
	{
		'dt': 1535608800,
		'main': {
			'temp': 16.39,
			'temp_min': 16.39,
			'temp_max': 16.39,
			'pressure': 1024.58,
			'sea_level': 1030.65,
			'grnd_level': 1024.58,
			'humidity': 59,
			'temp_kf': 0
		},
		'weather': [{
			'id': 802,
			'main': 'Clouds',
			'description': 'scattered clouds',
			'icon': '03d'
		}],
		'clouds': {
			'all': 48
		},
		'wind': {
			'speed': 1.41,
			'deg': 323.5
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-30 06:00:00'
	},
	{
		'dt': 1535619600,
		'main': {
			'temp': 13.29,
			'temp_min': 13.29,
			'temp_max': 13.29,
			'pressure': 1024.49,
			'sea_level': 1030.6,
			'grnd_level': 1024.49,
			'humidity': 77,
			'temp_kf': 0
		},
		'weather': [{
			'id': 803,
			'main': 'Clouds',
			'description': 'broken clouds',
			'icon': '04n'
		}],
		'clouds': {
			'all': 56
		},
		'wind': {
			'speed': 2.06,
			'deg': 13.0069
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-30 09:00:00'
	},
	{
		'dt': 1535630400,
		'main': {
			'temp': 13.46,
			'temp_min': 13.46,
			'temp_max': 13.46,
			'pressure': 1023.46,
			'sea_level': 1029.76,
			'grnd_level': 1023.46,
			'humidity': 75,
			'temp_kf': 0
		},
		'weather': [{
			'id': 804,
			'main': 'Clouds',
			'description': 'overcast clouds',
			'icon': '04n'
		}],
		'clouds': {
			'all': 92
		},
		'wind': {
			'speed': 3.2,
			'deg': 0.00866699
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-30 12:00:00'
	},
	{
		'dt': 1535641200,
		'main': {
			'temp': 13.28,
			'temp_min': 13.28,
			'temp_max': 13.28,
			'pressure': 1021.14,
			'sea_level': 1027.43,
			'grnd_level': 1021.14,
			'humidity': 76,
			'temp_kf': 0
		},
		'weather': [{
			'id': 804,
			'main': 'Clouds',
			'description': 'overcast clouds',
			'icon': '04n'
		}],
		'clouds': {
			'all': 92
		},
		'wind': {
			'speed': 3,
			'deg': 17.0062
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-30 15:00:00'
	},
	{
		'dt': 1535652000,
		'main': {
			'temp': 12.65,
			'temp_min': 12.65,
			'temp_max': 12.65,
			'pressure': 1019.56,
			'sea_level': 1025.7,
			'grnd_level': 1019.56,
			'humidity': 79,
			'temp_kf': 0
		},
		'weather': [{
			'id': 803,
			'main': 'Clouds',
			'description': 'broken clouds',
			'icon': '04n'
		}],
		'clouds': {
			'all': 76
		},
		'wind': {
			'speed': 2.92,
			'deg': 7.00156
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-30 18:00:00'
	},
	{
		'dt': 1535662800,
		'main': {
			'temp': 12.17,
			'temp_min': 12.17,
			'temp_max': 12.17,
			'pressure': 1019.11,
			'sea_level': 1025.31,
			'grnd_level': 1019.11,
			'humidity': 78,
			'temp_kf': 0
		},
		'weather': [{
			'id': 804,
			'main': 'Clouds',
			'description': 'overcast clouds',
			'icon': '04d'
		}],
		'clouds': {
			'all': 92
		},
		'wind': {
			'speed': 2.71,
			'deg': 353.519
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-30 21:00:00'
	},
	{
		'dt': 1535673600,
		'main': {
			'temp': 14.41,
			'temp_min': 14.41,
			'temp_max': 14.41,
			'pressure': 1017.45,
			'sea_level': 1023.61,
			'grnd_level': 1017.45,
			'humidity': 69,
			'temp_kf': 0
		},
		'weather': [{
			'id': 804,
			'main': 'Clouds',
			'description': 'overcast clouds',
			'icon': '04d'
		}],
		'clouds': {
			'all': 92
		},
		'wind': {
			'speed': 3.17,
			'deg': 355.502
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-31 00:00:00'
	},
	{
		'dt': 1535684400,
		'main': {
			'temp': 17.45,
			'temp_min': 17.45,
			'temp_max': 17.45,
			'pressure': 1013.48,
			'sea_level': 1019.57,
			'grnd_level': 1013.48,
			'humidity': 63,
			'temp_kf': 0
		},
		'weather': [{
			'id': 804,
			'main': 'Clouds',
			'description': 'overcast clouds',
			'icon': '04d'
		}],
		'clouds': {
			'all': 92
		},
		'wind': {
			'speed': 4.63,
			'deg': 327.002
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-31 03:00:00'
	},
	{
		'dt': 1535695200,
		'main': {
			'temp': 15.69,
			'temp_min': 15.69,
			'temp_max': 15.69,
			'pressure': 1012.15,
			'sea_level': 1018.31,
			'grnd_level': 1012.15,
			'humidity': 76,
			'temp_kf': 0
		},
		'weather': [{
			'id': 500,
			'main': 'Rain',
			'description': 'light rain',
			'icon': '10d'
		}],
		'clouds': {
			'all': 92
		},
		'wind': {
			'speed': 5.56,
			'deg': 318.001
		},
		'rain': {
			'3h': 0.12
		},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-31 06:00:00'
	},
	{
		'dt': 1535706000,
		'main': {
			'temp': 15.48,
			'temp_min': 15.48,
			'temp_max': 15.48,
			'pressure': 1013.59,
			'sea_level': 1019.61,
			'grnd_level': 1013.59,
			'humidity': 77,
			'temp_kf': 0
		},
		'weather': [{
			'id': 500,
			'main': 'Rain',
			'description': 'light rain',
			'icon': '10n'
		}],
		'clouds': {
			'all': 80
		},
		'wind': {
			'speed': 5.26,
			'deg': 300.503
		},
		'rain': {
			'3h': 0.04
		},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-31 09:00:00'
	},
	{
		'dt': 1535716800,
		'main': {
			'temp': 15.18,
			'temp_min': 15.18,
			'temp_max': 15.18,
			'pressure': 1014.24,
			'sea_level': 1020.39,
			'grnd_level': 1014.24,
			'humidity': 76,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 4.92,
			'deg': 296.003
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-31 12:00:00'
	},
	{
		'dt': 1535727600,
		'main': {
			'temp': 15,
			'temp_min': 15,
			'temp_max': 15,
			'pressure': 1014.03,
			'sea_level': 1020.09,
			'grnd_level': 1014.03,
			'humidity': 77,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 4.56,
			'deg': 289.005
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-31 15:00:00'
	},
	{
		'dt': 1535738400,
		'main': {
			'temp': 14.07,
			'temp_min': 14.07,
			'temp_max': 14.07,
			'pressure': 1014.54,
			'sea_level': 1020.64,
			'grnd_level': 1014.54,
			'humidity': 77,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01n'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 3.92,
			'deg': 277
		},
		'rain': {},
		'sys': {
			'pod': 'n'
		},
		'dt_txt': '2018-08-31 18:00:00'
	},
	{
		'dt': 1535749200,
		'main': {
			'temp': 13.72,
			'temp_min': 13.72,
			'temp_max': 13.72,
			'pressure': 1016.11,
			'sea_level': 1022.26,
			'grnd_level': 1016.11,
			'humidity': 79,
			'temp_kf': 0
		},
		'weather': [{
			'id': 800,
			'main': 'Clear',
			'description': 'clear sky',
			'icon': '01d'
		}],
		'clouds': {
			'all': 0
		},
		'wind': {
			'speed': 3.47,
			'deg': 281.5
		},
		'rain': {},
		'sys': {
			'pod': 'd'
		},
		'dt_txt': '2018-08-31 21:00:00'
	}
	],
	'city': {
		'id': 6619279,
		'name': 'City of Sydney',
		'coord': {
			'lat': -33.8678,
			'lon': 151.2084
		},
		'country': 'AU'
	}
};

export const selectedPlaceMock = {
	'address_components': [{
		'long_name': 'Sydney',
		'short_name': 'Sydney',
		'types': ['locality', 'political']
	}, {
		'long_name': 'New South Wales',
		'short_name': 'NSW',
		'types': ['administrative_area_level_1', 'political']
	}, {
		'long_name': 'Australia',
		'short_name': 'AU',
		'types': ['country', 'political']
	}, {
		'long_name': '2000',
		'short_name': '2000',
		'types': ['postal_code']
	}],
	'adr_address': '<span class="locality">Sydney</span> <span class="region">NSW</span> <span class="postal-code">2000</span>, <span class="country-name">Australia</span>',
	'formatted_address': 'Sydney NSW 2000, Australia',
	'geometry': {
		'location': {
			lat: () => -33.8688197,
			lng: () => 151.20929550000005
		},
		'viewport': {
			'south': -33.8797035,
			'west': 151.19703290000007,
			'north': -33.8561088,
			'east': 151.22295099999997
		}
	},
	'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png',
	'id': '33e35d1925474acf2e3a2a509144aff306ef7962',
	'name': 'Sydney',
	'photos': [{
		'height': 768,
		'html_attributions': ['<a href="https://maps.google.com/maps/contrib/107467606495692496908/photos">Visualization Videos</a>'],
		'width': 1024
	}, {
		'height': 1181,
		'html_attributions': ['<a href="https://maps.google.com/maps/contrib/117448470022967272325/photos">Muhammad M. Hassan</a>'],
		'width': 1772
	}, {
		'height': 3000,
		'html_attributions': ['<a href="https://maps.google.com/maps/contrib/118368741301464811028/photos">Diogo Kyrillos</a>'],
		'width': 4000
	}, {
		'height': 3072,
		'html_attributions': ['<a href="https://maps.google.com/maps/contrib/105242518271508205960/photos">Keith Tomline</a>'],
		'width': 5472
	}, {
		'height': 2340,
		'html_attributions': ['<a href="https://maps.google.com/maps/contrib/108454587946160346542/photos">David Reynolds</a>'],
		'width': 4160
	}, {
		'height': 600,
		'html_attributions': ['<a href="https://maps.google.com/maps/contrib/107707534641413214736/photos">Wuyuan Sun孙午元</a>'],
		'width': 800
	}, {
		'height': 510,
		'html_attributions': ['<a href="https://maps.google.com/maps/contrib/111068849321492734411/photos">Cường Tom Tom</a>'],
		'width': 816
	}, {
		'height': 2322,
		'html_attributions': ['<a href="https://maps.google.com/maps/contrib/106852162432629554002/photos">claudio orsini</a>'],
		'width': 4128
	}, {
		'height': 1200,
		'html_attributions': ['<a href="https://maps.google.com/maps/contrib/112935249011664558145/photos">Mo C</a>'],
		'width': 1920
	}, {
		'height': 3120,
		'html_attributions': ['<a href="https://maps.google.com/maps/contrib/102533027158043161628/photos">Han Helen</a>'],
		'width': 4160
	}],
	'place_id': 'ChIJP5iLHkCuEmsRwMwyFmh9AQU',
	'reference': 'CmRbAAAAS9XuegRbPW0OgUk6gXncmCfxqszrzZoNU9BvtjvjQtPqPuNJ6mZ5HSmpADg18UpJZMYinMyzuk5d56AZYSwrYKs3IAnjkdv0eYKXWiX1c4-V6XbUhgmaWa6R4-0g10VPEhA_HjjHjX_9lEW5hrHfvPt6GhRAvT_8sWDOjndmu4YbfRUYz78JJw',
	'scope': 'GOOGLE',
	'types': ['locality', 'political'],
	'url': 'https://maps.google.com/?q=Sydney+NSW+2000,+Australia&ftid=0x6b12ae401e8b983f:0x5017d681632ccc0',
	'utc_offset': 600,
	'vicinity': 'Sydney',
	'html_attributions': []
}
