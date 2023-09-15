{
	"binhacks": {
		"a": {
			"addr": "0x434f3e",
			"code": "74 00",
			"expected": "74 56",
			"title": "patch some kind of jump?"
		},
		"b": {
			"addr": "0x434fb6",
			"expected": "833d ccd2 6401 060f 8454 0100 0083",
			"code": "833d ccd2 6401 0674 0490 9090 9083",
			"title": "dunno 1"
		},
		"c": {
			"addr": "0x435130",
			"expected": "7466",
			"code": "7400",
			"title": "dunno 2"	
		},
		"d": {
			"addr": "0x435f7b",
			"expected": "83 3d cc d2 64 01 06",
			"code": "83 3d cc d2 64 01 07",
			"title": "dunno 3"
		},
		"e": {
			"addr": "0x439d54",
			"expected": "0f 84 da 00 00 00",
			"code": "0f 84 1a 00 00 00",
			"title": "dunno 4"
		},
		"f": {
			"addr": "0x43c4bf",
			"expected": "8b 80c4 dd03 0089 45f8 837d f800",
			"code": "ff 80c4 dd03 00e9 f900 0000 9090",
			"title": "dunno 5"
		},
		"g": {
			"addr": "0x4437ef",
			"expected": "8b 85e8 feff ff50 68f0 644b 00e8 d0e5 fdff 83c4 08",
			"code": "c7 85e8 feff ffb9 6168 a2c7 85f0 feff ff00 d40c 00",
			"title": "dunno 6"
		}
	}
}
