//
// Auto Generated Code
//

// Generate From Skill.xlsx
module.exports = {
	1: {
		1: {
			ID: 1,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.57},
			Actions: {damage:{"dmg":(LvUp) => {return 60+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 151,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2: {
		1: {
			ID: 2,
			Index: 1,
			Target: {"type":"single","team":0,"singing":0.7},
			Actions: {addBuff:{buffID:2,"time":(LvUp) => {return 15+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3: {
		1: {
			ID: 3,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.57},
			Actions: {damage:{"dmg":(LvUp) => {return 60+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 151,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4: {
		1: {
			ID: 4,
			Index: 1,
			Target: {"type":"single","team":0,"singing":0.7},
			Actions: {addBuff:{buffID:2,"time":(LvUp) => {return 15+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1001: {
		1: {
			ID: 1001,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {damage:{"dmg":(LvUp) => {return 100+LvUp;}},addBuff:{"buffID":1001,"count":(LvUp) => {return 1+LvUp;}}},
			ActionCount: 2,
			CriticalTime: 66,
			EffectiveTime: 151,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 1001,
			Index: 2,
			Target: {},
			Actions: {spawnSummoned:{"type":"wSword","num":(LvUp) => {return 1+LvUp;},"area":"random"}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1002: {
		1: {
			ID: 1002,
			Index: 1,
			Target: {"type":"all","team":1,"singing":0.7},
			Actions: {damage:{"dmg":80},addBuff:{"buffID":1001,"count":(LvUp) => {return 1+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 151,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 1002,
			Index: 2,
			Target: {},
			Actions: {spawnSummoned:{"type":"wSword","num":(LvUp) => {return 5+LvUp;},"area":"random"}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1003: {
		1: {
			ID: 1003,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.57},
			Actions: {addBuff:{"buffID":1003}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1103: {
		1: {
			ID: 1103,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {getMP:{"MP":(LvUp) => {return 1+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1004: {
		1: {
			ID: 1004,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.57},
			Actions: {addBuff:{"buffID":1004}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1104: {
		1: {
			ID: 1104,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {create:{"cardID":1001,"rate":0.02,"num":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1005: {
		1: {
			ID: 1005,
			Index: 1,
			Target: {"type":"all","team":1,"singing":0.7},
			Actions: {crushedIce:{"type":"wSword","buffID":1001,"time":(LvUp) => {return 5+LvUp;},"consume":1}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 33,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1006: {
		1: {
			ID: 1006,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {blackSnow:{buffID:1001,times:(LvUp) => {return 2+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 33,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1011: {
		1: {
			ID: 1011,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.57},
			Actions: {addBuff:{"buffID":1011}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1012: {
		1: {
			ID: 1012,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {copy:{"num":(LvUp) => {return 1+LvUp;},"pileType":4,"reduceMP":"all","effectTimes":(LvUp) => {return 1+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1013: {
		1: {
			ID: 1013,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.57},
			Actions: {drawCard:{"num":(LvUp) => {return 2+LvUp;},"cardType":2,"piletype":2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1014: {
		1: {
			ID: 1014,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.57},
			Actions: {addBuff:{"buffID":1014}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1114: {
		1: {
			ID: 1114,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {create:{"cardID":1017,"rate":1,"num":(LvUp) => {return 1+LvUp;},"pileType":2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1015: {
		1: {
			ID: 1015,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.57},
			Actions: {powerUp:{"powerUp":(LvUp) => {return 0.25+LvUp;},"cardType":1,"pileType":4,"effectTimes":(LvUp) => {return 1+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1016: {
		1: {
			ID: 1016,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.57},
			Actions: {dropCard:{"num":(LvUp) => {return 2+LvUp;},"piletype":2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 1016,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {normalDrawCard:{"num":(LvUp) => {return 2+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	1017: {
		1: {
			ID: 1017,
			Index: 1,
			Target: {type:"self","team":0},
			Actions: {addBuff:{"buffID":1017,"time":(LvUp) => {return 0.5+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2001: {
		1: {
			ID: 2001,
			Index: 1,
			Target: {type:"self","team":0},
			Actions: {addBuff:{"buffID":2001}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2002: {
		1: {
			ID: 2002,
			Index: 1,
			Target: {type:"self","team":0},
			Actions: {drawCard:{"num":2,"cardType":1,"piletype":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2003: {
		1: {
			ID: 2003,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":(LvUp) => {return 30+LvUp;}}},
			ActionCount: 5,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2004: {
		1: {
			ID: 2004,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":(LvUp) => {return 50+LvUp;}}},
			ActionCount: 4,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 2004,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {comboTrigger:{"combo":15,"skillID":2104}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2104: {
		1: {
			ID: 2104,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":(LvUp) => {return 30+LvUp;}}},
			ActionCount: 3,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2005: {
		1: {
			ID: 2005,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":(LvUp) => {return 120+LvUp;}}},
			ActionCount: 3,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 2005,
			Index: 2,
			Target: {type:"self","team":0},
			Actions: {comboTrigger:{"combo":25,"skillID":2105}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2105: {
		1: {
			ID: 2105,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":(LvUp) => {return 120+LvUp;}}},
			ActionCount: 3,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2006: {
		1: {
			ID: 2006,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {comboBoxing:{"dmg":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2011: {
		1: {
			ID: 2011,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {currentHPDamage:{"dmg":0.1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 2011,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":2011,"time":15}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2012: {
		1: {
			ID: 2012,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {addBuff:{"buffID":2012,"time":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2013: {
		1: {
			ID: 2013,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {exchangeArm:{} },
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2014: {
		1: {
			ID: 2014,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":2014}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2114: {
		1: {
			ID: 2114,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":2114,"time":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2015: {
		1: {
			ID: 2015,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.7},
			Actions: {addBuff:{"buffID":2015}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2016: {
		1: {
			ID: 2016,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":2016}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	2106: {
		1: {
			ID: 2106,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {breakArm:{"breakArm":100}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3001: {
		1: {
			ID: 3001,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.7},
			Actions: {addBuff:{"buffID":3001}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 3001,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":3008}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3101: {
		1: {
			ID: 3101,
			Index: 1,
			Target: {"type":"all","team":0},
			Actions: {addBuff:{"buffID":3101,"time":300}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3108: {
		1: {
			ID: 3108,
			Index: 1,
			Target: {"type":"all","team":0},
			Actions: {getMP:{"MP":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3002: {
		1: {
			ID: 3002,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {create:{"cardID":3007,"rate":1,"num":1,"pileType":4}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3003: {
		1: {
			ID: 3003,
			Index: 1,
			Target: {"type":"single","team":0},
			Actions: {addBuff:{"buffID":3003,"time":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3004: {
		1: {
			ID: 3004,
			Index: 1,
			Target: {"type":"single","team":0},
			Actions: {addBuff:{"buffID":3004,"time":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3005: {
		1: {
			ID: 3005,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {damage:{"dmg":100}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 3005,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {cleanBuff:{"type":1,"num":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3006: {
		1: {
			ID: 3006,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {damage:{"dmg":50}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 3006,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {addBuff:{"buffID":3006,"time":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3007: {
		1: {
			ID: 3007,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":3007}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3011: {
		1: {
			ID: 3011,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":3011}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3012: {
		1: {
			ID: 3012,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":3012}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3112: {
		1: {
			ID: 3112,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":3112}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3013: {
		1: {
			ID: 3013,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {currentHPDamage:{"dmg":0.15}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 3013,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":150}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3014: {
		1: {
			ID: 3014,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {currentHPDamage:{"dmg":0.05}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 3014,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":500}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3015: {
		1: {
			ID: 3015,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":3015}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 3015,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {damage:{"dmg":800,"delay":10}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	3016: {
		1: {
			ID: 3016,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":3016,"time":20}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4001: {
		1: {
			ID: 4001,
			Index: 1,
			Target: {"type":"single","team":0,"singing":1.3},
			Actions: {heal:{"heal":(LvUp) => {return 200+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 434,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4002: {
		1: {
			ID: 4002,
			Index: 1,
			Target: {"type":"single","team":0,"singing":1.3},
			Actions: {heal:{"heal":250}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 434,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 4002,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {heal:{"heal":250}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4003: {
		1: {
			ID: 4003,
			Index: 1,
			Target: {"type":"single","team":0,"dead":1,"singing":1.3},
			Actions: {reliveTarget:{"heal":100}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 434,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4004: {
		1: {
			ID: 4004,
			Index: 1,
			Target: {"type":"all","team":0,"singing":1.3},
			Actions: {addBuff:{"buffID":4004}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 434,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 4004,
			Index: 2,
			Target: {"type":"lowHP","team":0},
			Actions: {addBuff:{"buffID":4004}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4005: {
		1: {
			ID: 4005,
			Index: 1,
			Target: {"type":"self","team":0,"singing":1.3},
			Actions: {addBuff:{"buffID":4007,"time":10}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4105: {
		1: {
			ID: 4105,
			Index: 1,
			Target: {"type":"single","team":0},
			Actions: {reliveTarget:{"ownPercent":0.5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4006: {
		1: {
			ID: 4006,
			Index: 1,
			Target: {"type":"self","team":0,"singing":1.3},
			Actions: {addBuff:{"buffID":4006}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4106: {
		1: {
			ID: 4106,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {getMP:{"MP":2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4011: {
		1: {
			ID: 4011,
			Index: 1,
			Target: {"type":"single","team":1,"singing":1.3},
			Actions: {damage:{"dmg":50}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 333,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 4011,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {addBuff:{"buffID":4011,"time":15}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4012: {
		1: {
			ID: 4012,
			Index: 1,
			Target: {"type":"single","team":1,"singing":1.3},
			Actions: {bounce:{dmg:30,"buffID":4011,"count":1,"time":15,"bounce":2}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 333,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4013: {
		1: {
			ID: 4013,
			Index: 1,
			Target: {"type":"self","team":0,"singing":1.3},
			Actions: {addBuff:{"buffID":4013}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4113: {
		1: {
			ID: 4113,
			Index: 1,
			Target: {"type":"random","team":1},
			Actions: {addBuff:{"buffID":4011,"time":15}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4014: {
		1: {
			ID: 4014,
			Index: 1,
			Target: {"type":"self","team":0,"singing":1.3},
			Actions: {drawCard:{"num":2,"cardType":1,"piletype":2}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4015: {
		1: {
			ID: 4015,
			Index: 1,
			Target: {"type":"random","team":1},
			Actions: {addBuff:{"buffID":4011,"time":15}},
			ActionCount: 9,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	4016: {
		1: {
			ID: 4016,
			Index: 1,
			Target: {"type":"all","team":1,"singing":1.3},
			Actions: {buffTime:{"buffID":4011,"addTime":10}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 333,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5001: {
		1: {
			ID: 5001,
			Index: 1,
			Target: {"type":"single","team":0},
			Actions: {getMP:{"MP":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5002: {
		1: {
			ID: 5002,
			Index: 1,
			Target: {"type":"single","team":0},
			Actions: {addBuff:{"buffID":5002,"time":20}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5003: {
		1: {
			ID: 5003,
			Index: 1,
			Target: {"type":"single","team":0},
			Actions: {randomAddBuff:{"buffIDs":[5003,5007],"rateList":[0.5,0.5],"timeList":[10,10]}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5004: {
		1: {
			ID: 5004,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {randomAddBuff:{"buffIDs":[5004,5008],"rateList":[0.5,0.5],"timeList":[10,10]}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5005: {
		1: {
			ID: 5005,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {heal:{"heal":(LvUp) => {return 100+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 5005,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {addBuff:{"buffID":5005}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5006: {
		1: {
			ID: 5006,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {heal:{"heal":(LvUp) => {return 200+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 5006,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {addBuff:{"buffID":5006}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5011: {
		1: {
			ID: 5011,
			Index: 1,
			Target: {},
			Actions: {},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5012: {
		1: {
			ID: 5012,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {create:{"cardID":5017,"rate":1,"num":1,"pileType":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5017: {
		1: {
			ID: 5017,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {bomb:{"dmg":500,"time":20,"dmgDown":0.2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 5017,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {create:{"cardID":5018,"rate":1,"num":2,"pileType":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5018: {
		1: {
			ID: 5018,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {bomb:{"dmg":100,"time":20,"dmgDown":0.2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5013: {
		1: {
			ID: 5013,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {create:{"cardID":5019,"rate":1,"num":1,"pileType":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5019: {
		1: {
			ID: 5019,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {bomb:{"dmg":800,"time":20,"dmgDown":0.2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5014: {
		1: {
			ID: 5014,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {create:{"cardID":5020,"rate":1,"num":1,"pileType":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5020: {
		1: {
			ID: 5020,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {bomb:{"dmg":200,"time":20,"dmgDown":0.2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 5020,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {breakArm:{"breakArm":300}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		3: {
			ID: 5020,
			Index: 3,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":5020,"time":3}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5015: {
		1: {
			ID: 5015,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {normalDrawCard:{"num":2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 5015,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {normalDrawCard:{"num":2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	5016: {
		1: {
			ID: 5016,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {drawCard:{"num":1,"piletype":3}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6001: {
		1: {
			ID: 6001,
			Index: 1,
			Target: {},
			Actions: {},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6002: {
		1: {
			ID: 6002,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {addBuff:{"buffID":6002,"time":3}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6003: {
		1: {
			ID: 6003,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {addBuff:{"buffID":6003,"time":3}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6004: {
		1: {
			ID: 6004,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {copy:{"num":(LvUp) => {return 2+LvUp;},"pileType":4,"reduceMP":0}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6005: {
		1: {
			ID: 6005,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {damage:{"dmg":50}},
			ActionCount: 2,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 6005,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {cleanBuff:{"type":1,"num":1}},
			ActionCount: 2,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6006: {
		1: {
			ID: 6006,
			Index: 1,
			Target: {},
			Actions: {},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6011: {
		1: {
			ID: 6011,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {armBomb:{"delay":10,"dmgRate":0.5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6012: {
		1: {
			ID: 6012,
			Index: 1,
			Target: {"type":"all","team":1},
			Actions: {addBuff:{"buffID":6012,"time":2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6013: {
		1: {
			ID: 6013,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":6013,"time":15}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 6013,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {breakArm:{"breakArm":400,"delay":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6014: {
		1: {
			ID: 6014,
			Index: 1,
			Target: {"type":"single","team":0},
			Actions: {exchangeArm:{"exchangeArm":1} },
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6015: {
		1: {
			ID: 6015,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":6015}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	6016: {
		1: {
			ID: 6016,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":6016,"time":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	7001: {
		1: {
			ID: 7001,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {conditionSkill:{"combo":144,"comboType":1,"skillID":7101}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	7101: {
		1: {
			ID: 7101,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":800}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 7101,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {addBuff:{"buffID":7011,"time":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	7002: {
		1: {
			ID: 7002,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {repetitiousDmg:{"dmg":18,"count":30}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	7003: {
		1: {
			ID: 7003,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {repetitiousDmg:{"dmg":18,"count":18}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	7004: {
		1: {
			ID: 7004,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {repetitiousDmg:{"dmg":18,"count":12}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	7005: {
		1: {
			ID: 7005,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":7005}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	7006: {
		1: {
			ID: 7006,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {getMP:{"MP":3}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 7006,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {comboTrigger:{"combo":100,"skillID":7106}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	7106: {
		1: {
			ID: 7106,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {getMP:{"MP":2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8001: {
		1: {
			ID: 8001,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":8001}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8101: {
		1: {
			ID: 8101,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":8101,"time":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8002: {
		1: {
			ID: 8002,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":8002}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8003: {
		1: {
			ID: 8003,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {damage:{"dmg":200}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 8003,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {getMP:{"MP":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		3: {
			ID: 8003,
			Index: 3,
			Target: {"type":"self","team":0},
			Actions: {comboTrigger:{"combo":25,"skillID":8103}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8103: {
		1: {
			ID: 8103,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {getMP:{"MP":3}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8004: {
		1: {
			ID: 8004,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {strengthTransition:{"rate":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8005: {
		1: {
			ID: 8005,
			Index: 1,
			Target: {"type":"all","team":1},
			Actions: {repetitiousDmg:{"dmg":45,"count":4}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8006: {
		1: {
			ID: 8006,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {repetitiousDmg:{"dmg":50,"count":7}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8011: {
		1: {
			ID: 8011,
			Index: 1,
			Target: {},
			Actions: {},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8012: {
		1: {
			ID: 8012,
			Index: 1,
			Target: {"type":"single","team":0},
			Actions: {addBuff:{"buffID":6016,"time":10}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8013: {
		1: {
			ID: 8013,
			Index: 1,
			Target: {},
			Actions: {},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8014: {
		1: {
			ID: 8014,
			Index: 1,
			Target: {"type":"all","team":1,"singing":0.7},
			Actions: {addBuff:{"buffID":2012,"time":3}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8015: {
		1: {
			ID: 8015,
			Index: 1,
			Target: {},
			Actions: {},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	8016: {
		1: {
			ID: 8016,
			Index: 1,
			Target: {},
			Actions: {},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	18001: {
		1: {
			ID: 18001,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":60}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 18001,
			Index: 2,
			Target: {},
			Actions: {spawnSummoned:{"type":"wSword","num":2,"area":"random"}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	18003: {
		1: {
			ID: 18003,
			Index: 1,
			Target: {"type":"all","team":1,"singing":0.7},
			Actions: {damage:{"dmg":60}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 151,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 18003,
			Index: 2,
			Target: {},
			Actions: {spawnSummoned:{"type":"wSword","numType":"hit","area":"random"}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	18004: {
		1: {
			ID: 18004,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.57},
			Actions: {addBuff:{"buffID":18004}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	18104: {
		1: {
			ID: 18104,
			Index: 1,
			Target: {"type":"random","team":1},
			Actions: {damage:{"dmg":20}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	18005: {
		1: {
			ID: 18005,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.57},
			Actions: {addBuff:{"buffID":18005}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	18105: {
		1: {
			ID: 18105,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {normalDrawCard:{"num":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	18006: {
		1: {
			ID: 18006,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.7},
			Actions: {create:{"cardID":1001,"num":3}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	18007: {
		1: {
			ID: 18007,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.7},
			Actions: {normalDrawCard:{"num":2}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	18008: {
		1: {
			ID: 18008,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.7},
			Actions: {normalDrawCard:{"num":1}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 18008,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {create:{"cardID":18002,"num":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	18009: {
		1: {
			ID: 18009,
			Index: 1,
			Target: {"type":"all","team":1,"singing":0.7},
			Actions: {reverse:{"type":"wSword","dmg":45,"consume":1}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 33,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	18010: {
		1: {
			ID: 18010,
			Index: 1,
			Target: {"type":"single","team":1,"singing":1.17},
			Actions: {swordWheel:{"type":"wSword","dmg":25,"consume":0}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 484,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: 1
		}
	},
	100001: {
		1: {
			ID: 100001,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.4},
			Actions: {damage:{"dmg":90}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	100002: {
		1: {
			ID: 100002,
			Index: 1,
			Target: {"type":"single","team":1,"singing":1},
			Actions: {damage:{"dmg":250}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 100002,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {addBuff:{"buffID":100002,"time":8}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	100003: {
		1: {
			ID: 100003,
			Index: 1,
			Target: {"type":"all","team":1,"singing":0.83},
			Actions: {damage:{"dmg":300}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 100003,
			Index: 2,
			Target: {"type":"all","team":1},
			Actions: {addBuff:{"buffID":100003,"time":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	100004: {
		1: {
			ID: 100004,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.2},
			Actions: {damage:{"dmg":360}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 100004,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {dropCard:{"num":2,"cardType":1,"cardQuality":1,"cardAttributes":1,"piletype":2}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	100005: {
		1: {
			ID: 100005,
			Index: 1,
			Target: {"type":"self","team":0,"singing":1.1},
			Actions: {monsterSummoned:{"monsterID":"100002","num":1,"matrixType":"random","time":12}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 100005,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":100105,"time":12}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	100101: {
		1: {
			ID: 100101,
			Index: 1,
			Target: {"type":"single","team":1,"singing":1},
			Actions: {damage:{"dmg":60}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	100102: {
		1: {
			ID: 100102,
			Index: 1,
			Target: {"type":"single","team":1,"singing":1},
			Actions: {damage:{"dmg":90}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 100102,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {addBuff:{"buffID":100102}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	100201: {
		1: {
			ID: 100201,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":180}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	100202: {
		1: {
			ID: 100202,
			Index: 1,
			Target: {"type":"all","team":1},
			Actions: {damage:{"dmg":150}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	100301: {
		1: {
			ID: 100301,
			Index: 1,
			Target: {"type":"single","team":1,"singing":1},
			Actions: {damage:{"dmg":150}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	100302: {
		1: {
			ID: 100302,
			Index: 1,
			Target: {"type":"single","team":1,"singing":1},
			Actions: {damage:{"dmg":50}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 100302,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {create:{"cardID":100303,"num":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	100303: {
		1: {
			ID: 100303,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {damage:{"dmg":300}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101101: {
		1: {
			ID: 101101,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":100}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101102: {
		1: {
			ID: 101102,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":50}},
			ActionCount: 3,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101201: {
		1: {
			ID: 101201,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":100}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101202: {
		1: {
			ID: 101202,
			Index: 1,
			Target: {"type":"all","team":1},
			Actions: {damage:{"dmg":220}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101203: {
		1: {
			ID: 101203,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":101203,"time":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101301: {
		1: {
			ID: 101301,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.57},
			Actions: {damage:{"dmg":100}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101302: {
		1: {
			ID: 101302,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.57},
			Actions: {heal:{"healPct":0.3}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 99,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101303: {
		1: {
			ID: 101303,
			Index: 1,
			Target: {"type":"all","team":1,"singing":0.57},
			Actions: {damage:{"dmg":300}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 99,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101401: {
		1: {
			ID: 101401,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":150}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101402: {
		1: {
			ID: 101402,
			Index: 1,
			Target: {"type":"single","team":0},
			Actions: {addBuff:{"buffID":101402,"time":5}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101403: {
		1: {
			ID: 101403,
			Index: 1,
			Target: {"type":"single","team":0},
			Actions: {},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101404: {
		1: {
			ID: 101404,
			Index: 1,
			Target: {"type":"all","team":1},
			Actions: {damage:{"dmg":200}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	101405: {
		1: {
			ID: 101405,
			Index: 1,
			Target: {"type":"single","team":1},
			Actions: {damage:{"dmg":300}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90002: {
		1: {
			ID: 90002,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {damage:{"dmg":(LvUp) => {return 90+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 151,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 90002,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {normalDrawCard:{"num":(LvUp) => {return 1+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		3: {
			ID: 90002,
			Index: 3,
			Target: {},
			Actions: {spawnSummoned:{"type":"wSword","num":(LvUp) => {return 1+LvUp;},"area":"random"}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90004: {
		1: {
			ID: 90004,
			Index: 1,
			Target: {"type":"single","team":1,"singing":0.7},
			Actions: {bounce:{dmg:(LvUp) => {return 70+LvUp;},"buffID":1001,"count":(LvUp) => {return 1+LvUp;},"bounce":(LvUp) => {return 2+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90006: {
		1: {
			ID: 90006,
			Index: 1,
			Target: {"type":"self","team":0,"singing":0.57},
			Actions: {normalDrawCard:{"num":(LvUp) => {return 1+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 90006,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {getMP:{"MP":(LvUp) => {return 1+LvUp;}}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90008: {
		1: {
			ID: 90008,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {addBuff:{"buffID":1008}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 90008,
			Index: 2,
			Target: {},
			Actions: {costSummoned:{"costSummoned":(LvUp) => {return 5+LvUp;},"type":"wSword"}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90005: {
		1: {
			ID: 90005,
			Index: 1,
			Target: {"type":"self","team":0,"singing":1.3},
			Actions: {addBuff:{"buffID":4005}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90105: {
		1: {
			ID: 90105,
			Index: 1,
			Target: {"type":"self","team":0},
			Actions: {getMP:{"MP":1}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90006: {
		1: {
			ID: 90006,
			Index: 1,
			Target: {"type":"self","team":0,"singing":1.3},
			Actions: {normalDrawCard:{"num":2}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 90006,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {damage:{"dmg":120}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0.3,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90009: {
		1: {
			ID: 90009,
			Index: 1,
			Target: {"type":"single","team":1,"singing":1.3},
			Actions: {damage:{"dmg":150}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 66,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 90009,
			Index: 2,
			Target: {"type":"self","team":0},
			Actions: {damage:{"dmg":30}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90010: {
		1: {
			ID: 90010,
			Index: 1,
			Target: {"type":"single","team":1,"singing":1.3},
			Actions: {damage:{"dmg":300}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 333,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		},
		2: {
			ID: 90010,
			Index: 2,
			Target: {"type":"single","team":1},
			Actions: {addBuff:{"buffID":4010,"time":8}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90013: {
		1: {
			ID: 90013,
			Index: 1,
			Target: {"type":"single","team":1,"singing":1.3},
			Actions: {bounce:{dmg:20,"buffID":4011,"count":1,"time":15,"bounce":4}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 333,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90014: {
		1: {
			ID: 90014,
			Index: 1,
			Target: {"type":"self","team":0,"singing":1.3},
			Actions: {addBuff:{"buffID":4014}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90114: {
		1: {
			ID: 90114,
			Index: 1,
			Target: {"type":"random","team":1},
			Actions: {damage:{"dmg":20}},
			ActionCount: 0,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90017: {
		1: {
			ID: 90017,
			Index: 1,
			Target: {"type":"self","team":0,"singing":1.3},
			Actions: {normalDrawCard:{"num":2}},
			ActionCount: 0,
			CriticalTime: 66,
			EffectiveTime: 0,
			HatredCoef: 1,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
	90020: {
		1: {
			ID: 90020,
			Index: 1,
			Target: {"type":"all","team":1,"singing":1.3},
			Actions: {addBuff:{"buffID":4011,"time":15}},
			ActionCount: 3,
			CriticalTime: 0,
			EffectiveTime: 0,
			HatredCoef: 0,
			HatredConst: 0,
			DmgFlag: ""
		}
	},
};
