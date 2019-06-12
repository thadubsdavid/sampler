
/*
var geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "marker-size": "medium",
          "marker-symbol": "",
          "title": "Marktplatz",
          "condition": "non-Accessible",
          "lines": "S1, S2, T1",
          "entry": 200,
          "exit": 150,
          "passengerTotal": 175,
          "passengerPreSession": -13,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000001&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.404841423034668,
            49.0095293550832
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-size": "medium",
          "marker-symbol": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.409991264343262,
            49.009247858168976
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.418188095092773,
            49.00910710911502
          ]
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.389272600377645,
            48.99494020698015
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Barbarossaplatz",
          "marker-symbol": "",
          "condition": "limited",
          "lines": "T2",
          "entry": 300,
          "exit": 210,
          "passengerTotal": 265,
          "passengerPreSession": -8,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7005003&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.386214533927864,
            49.026953859132746
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Duale Hochschule\n",
          "condition": "Accessible",
          "lines": "T3",
          "entry": 200,
          "exit": 150,
          "passengerTotal": 175,
          "passengerPreSession": -1,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000012&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.436057759588182,
            49.01146682195984
          ]
        },
        "properties": {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "condition": "limited",
          "lines": "T5",
          "entry": 150,
          "exit": 120,
          "passengerTotal": 135,
          "passengerPreSession": -6,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000310&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]",
          "title": "Dunantstr"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.418213924821744,
            49.00911922518055
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Durlacher Tor ",
          "condition": "limited",
          "lines": "T1, T4, T5, S2, S4, S5",
          "entry": 500,
          "exit": 450,
          "passengerTotal": 475,
          "passengerPreSession": -10,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000003&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.395126179075808,
            48.99453941636861
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Ebertstrasse",
          "condition": "limited",
          "lines": "T2, T3, T4, S52",
          "entry": 200,
          "exit": 180,
          "passengerTotal": 190,
          "passengerPreSession": -3,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000091&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.40388391406952,
            49.003837875074474
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Volkswohnung/Staatstheater",
          "condition": "non-Accessible",
          "lines": "T5, T6",
          "entry": 200,
          "exit": 150,
          "passengerTotal": 175,
          "passengerPreSession": -7,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000072&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.38651506530615,
            49.003611965472054
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Arbeitsagentur\n",
          "condition": "Accessible",
          "lines": "T2",
          "entry": 350,
          "exit": 200,
          "passengerTotal": 275,
          "passengerPreSession": -5,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000064&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.394090675776457,
            49.01006336481249
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Europaplatz",
          "condition": "limited",
          "lines": "T1, T3, T6, S1, S2",
          "entry": 550,
          "exit": 520,
          "passengerTotal": 535,
          "passengerPreSession": -7,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000031&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.360888115527006,
            49.021780820191225
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Feierabendweg",
          "condition": "limited",
          "lines": "T2",
          "entry": 200,
          "exit": 250,
          "passengerTotal": 225,
          "passengerPreSession": -10,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000523&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.369143151491087,
            49.01121555769357
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Haendelstrasse",
          "condition": "non-Accessible",
          "lines": "T6, S2, S5",
          "entry": 100,
          "exit": 200,
          "passengerTotal": 150,
          "passengerPreSession": -4,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000044&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.42956242534933,
            49.01367912834666
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000402&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]",
          "passengerPreSession": -3,
          "entry": 260,
          "exit": 250,
          "passengerTotal": 255,
          "lines": "T4, T5, T6",
          "condition": "Accessible",
          "title": "Hauptfriedhof\n"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.376651924609286,
            49.03388046226364
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Haus Bethlehem",
          "passengerPreSession": -7,
          "entry": 200,
          "condition": "Non-Accessible",
          "lines": "S1",
          "exit": 100,
          "passengerTotal": 150,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.40014161703749,
            48.994511645013795
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Hbf Vorplatz\n",
          "passengerPreSession": -4,
          "entry": 400,
          "condition": "limited",
          "lines": "T2, T3, S1, S4, S5",
          "exit": 50,
          "passengerTotal": 225,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000403&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.3761858867247,
            48.99785558511532
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Europahalle/-bad",
          "passengerPreSession": -5,
          "entry": 300,
          "condition": "Accessible",
          "lines": "T1",
          "exit": 100,
          "passengerTotal": 400,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.372112490441921,
            49.00553974200872
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Huebschstrasse",
          "passengerPreSession": -3,
          "entry": 200,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 50,
          "passengerTotal": 125,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.394588125051548,
            49.0051113230946
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Karlstor",
          "passengerPreSession": -4,
          "entry": 150,
          "condition": "Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 100,
          "passengerTotal": 125,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.423219403161873,
            49.01130965761787
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Karl-Wilhelm-Platz\n",
          "passengerPreSession": -5,
          "entry": 200,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 50,
          "passengerTotal": 125,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.37544038834515,
            49.019225804940135
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Knielinger Allee",
          "passengerPreSession": -8,
          "entry": 200,
          "condition": "Non-Accessible",
          "lines": "S1",
          "exit": 50,
          "passengerTotal": 125,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.393764853229623,
            48.99749067864958
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Kolpingplatz",
          "passengerPreSession": -4,
          "entry": 150,
          "condition": "Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 100,
          "passengerTotal": 125,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.403187096293507,
            49.002674290886766
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Kongresszentrum",
          "passengerPreSession": -5,
          "entry": 200,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 50,
          "passengerTotal": 125,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.399543050699085,
            49.00338374888346
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Konzerthaus",
          "passengerPreSession": -7,
          "entry": 200,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 100,
          "passengerTotal": 125,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.367258238089965,
            49.005702063089366
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Kuehler Krug",
          "passengerPreSession": -4,
          "entry": 250,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 50,
          "passengerTotal": 125,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.387131443440039,
            49.03134686618692
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Heidehof",
          "passengerPreSession": -5,
          "entry": 200,
          "condition": "Non-Accessible",
          "lines": "T3",
          "exit": 100,
          "passengerTotal": 150,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.400231839333074,
            49.00976273703131
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Herrenstrasse",
          "passengerPreSession": -8,
          "entry": 250,
          "condition": "limited",
          "lines": "S1, S2, T1",
          "exit": 50,
          "passengerTotal": 150,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.364495841336215,
            49.019777520136635
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Hertzstrasse",
          "passengerPreSession": -5,
          "entry": 150,
          "condition": "limited",
          "lines": "T2",
          "exit": 50,
          "passengerTotal": 100,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.439362246496787,
            49.017494833283585
          ]
        },
        "properties": {
          "marker-size": "medium",
          "marker-symbol": "",
          "title": "Hirtenweg",
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "condition": "limited",
          "lines": "T4, T6",
          "entry": 150,
          "exit": 70,
          "passengerTotal": 110,
          "passengerPreSession": -11,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000403&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.384277745514057,
            49.00438236339016
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Lessingstrasse",
          "passengerPreSession": -5,
          "entry": 150,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 50,
          "passengerTotal": 100,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.385231856058796,
            49.02236266518885
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Lilienthalstrasse",
          "passengerPreSession": -7,
          "entry": 250,
          "condition": "Accessible",
          "lines": "T3",
          "exit": 50,
          "passengerTotal": 150,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.394375693249804,
            49.00234063720087
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Mathystrasse",
          "passengerPreSession": -4,
          "entry": 100,
          "condition": "Non-Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 100,
          "passengerTotal": 100,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.38571236400596,
            49.0144252036527
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Kunstakademie/Hochschule",
          "passengerPreSession": -3,
          "entry": 250,
          "condition": "Accessible",
          "lines": "T3",
          "exit": 50,
          "passengerTotal": 150,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.376313978399391,
            49.03028180619136
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Kurt-Schumacher-Str.",
          "passengerPreSession": -8,
          "entry": 100,
          "condition": "Non-Accessible",
          "lines": "S1",
          "exit": 70,
          "passengerTotal": 85,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.369194839654211,
            49.0168628826654
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Kussmaulstrasse",
          "passengerPreSession": -3,
          "entry": 100,
          "condition": "Non-Accessible",
          "lines": "T2",
          "exit": 70,
          "passengerTotal": 85,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.41628028949458,
            49.00502525818917
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Ostendstrasse",
          "passengerPreSession": -4,
          "entry": 250,
          "condition": "Non-Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 100,
          "passengerTotal": 175,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.389277613875244,
            49.003473752016454
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Otto-Sachs-Strasse",
          "passengerPreSession": -6,
          "entry": 200,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 70,
          "passengerTotal": 135,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.411147046466505,
            49.004522597371526
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Philipp-Reis-Strasse",
          "passengerPreSession": -6,
          "entry": 250,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 100,
          "passengerTotal": 175,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.40368606821301,
            48.99522240870406
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Poststrasse",
          "passengerPreSession": -7,
          "entry": 100,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 70,
          "passengerTotal": 85,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.410430842148367,
            49.00498652955196
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Rueppurrer Tor",
          "passengerPreSession": -6,
          "entry": 300,
          "condition": "Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 70,
          "passengerTotal": 185,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.379789863864222,
            49.01027514260847
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Schillerstrasse",
          "passengerPreSession": -8,
          "entry": 200,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 100,
          "passengerTotal": 150,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.427885843839034,
            49.00370758367059
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Schloss Gottesaue",
          "passengerPreSession": -6,
          "entry": 250,
          "condition": "Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 50,
          "passengerTotal": 150,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.38294352094167,
            49.010597779472626
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Muehlburger Tor",
          "passengerPreSession": -4,
          "entry": 300,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 70,
          "passengerTotal": 185,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.357831267192758,
            49.023454366346215
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Neureuter Str.",
          "passengerPreSession": -5,
          "entry": 150,
          "condition": "Non-Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 70,
          "passengerTotal": 110,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.385028472088583,
            49.017784606651425
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Synagoge",
          "passengerPreSession": -3,
          "entry": 200,
          "condition": "Accessible",
          "lines": "T3",
          "exit": 100,
          "passengerTotal": 150,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.41083067599313,
            48.996580947831305
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Tivoli\n",
          "passengerPreSession": -7,
          "entry": 180,
          "condition": "Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 60,
          "passengerTotal": 120,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.431244615041937,
            49.00641282502801
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Tullastrasse",
          "passengerPreSession": -8,
          "entry": 150,
          "condition": "Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 60,
          "passengerTotal": 105,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.378071516083109,
            49.00556301865414
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Weinbrennerplatz",
          "passengerPreSession": -5,
          "entry": 150,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 60,
          "passengerTotal": 105,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.441710298919025,
            49.00435078536492
          ]
        },
        "properties": {
          "marker-size": "medium",
          "marker-symbol": "",
          "title": "Weinweg",
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "condition": "Accessible",
          "lines": "S4, S5",
          "entry": 100,
          "exit": 80,
          "passengerTotal": 90,
          "passengerPreSession": -7,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000009&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.384990899153486,
            48.995304127197095
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Welfenstrasse",
          "passengerPreSession": -1,
          "entry": 100,
          "condition": "Non-Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 60,
          "passengerTotal": 80,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.410581470756904,
            49.00032938479778
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Werderstrasse",
          "passengerPreSession": 0,
          "entry": 200,
          "condition": "Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 60,
          "passengerTotal": 130,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.379126751776003,
            49.0075379746936
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Sophienstrasse",
          "passengerPreSession": -7,
          "entry": 200,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 100,
          "passengerTotal": 150,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.374780280223224,
            49.015166793633
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "St. Klinikum/Moltk.",
          "passengerPreSession": -6,
          "entry": 100,
          "condition": "Non-Accessible",
          "lines": "T2, S1",
          "exit": 60,
          "passengerTotal": 80,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.386034445069583,
            48.999347143240946
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "ZKM",
          "passengerPreSession": -8,
          "entry": 300,
          "condition": "Non-Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 60,
          "passengerTotal": 180,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.423282086704068,
            49.003513818376824
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Wolfartsweierer Str",
          "passengerPreSession": -4,
          "entry": 100,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 60,
          "passengerTotal": 80,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.375530631301963,
            49.01091758953185
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Yorckstrasse",
          "passengerPreSession": -6,
          "entry": 200,
          "condition": "Non-Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 100,
          "passengerTotal": 150,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.387919034178886,
            49.03626071646648
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Neureut-Heide\n",
          "passengerPreSession": -5,
          "entry": 200,
          "condition": "Non-Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 60,
          "passengerTotal": 130,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.431871065985112,
            49.00976882144392
          ]
        },
        "properties": {
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)",
          "title": "Essenweinstrsse",
          "passengerPreSession": -3,
          "entry": 100,
          "condition": "limited",
          "lines": "S-Bahn, Tram",
          "exit": 100,
          "passengerTotal": 100,
          "plan": "https://www.kvv.de/"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          "title": "August-Bebel-Str",
          "passengerPreSession": -5,
          "entry": 120,
          "condition": "Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 60,
          "passengerTotal": 90,
          "plan": "https://www.kvv.de/",
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.37583065032959,
            49.024952952777056
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          "title": "Landesbausparkasse",
          "passengerPreSession": -8,
          "entry": 200,
          "condition": "Accessible",
          "lines": "S-Bahn, Tram",
          "exit": 60,
          "passengerTotal": 130,
          "plan": "https://www.kvv.de/",
          "GRUPPENNAME_DE": "Haltestellen (S-Bahn/Tram/Bus)"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.377676010131834,
            49.00209730294435
          ]
        }
      }
    ]
  };
  */
  for (var i = 0; i < geojson.features.length; i++) {
    //var itemTitle = geojson.features[i].title;
   // var itemUrl = geojson.features[i].condition;
    var itemPositv = geojson.features[i].properties.positiv;
   // var itemNegativ = geojson.features[i].properties.negativ;
    //var itemPassengerPreSession = geojson.features[i].properties.passengerPreSession;

          console.log('positv: ' + itemPositv);

         
                      
          if (parseInt(itemPositv) > 5 ) {
            console.log('if1')
              
              geojson.features.forEach(function(marker){
             
              var el = document.createElement('div');
              el.className = 'marker';
                
             
              
              new mapboxgl.Marker(el)
              .setLngLat(marker.geometry.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 25})
              .setHTML('<h4>' + marker.properties.title + '</h4><p1>' + "Accessibility:\n" + marker.properties.condition + '\n' + '</p1><br><p2>' + "\nLines:\n" + marker.properties.lines + '</p2><br><p3>' + "Entry\n(P/h):\n" + marker.properties.entry + '</p3><br><p4>'+ "Exit\n(P/h):\n" + marker.properties.exit + '</p4><br><p5>'+ "Passenger\nFlow\n(P/h):\n" + marker.properties.passengerTotal + '</p5><br><p6>' + "Pre-Hour\n(%):\n" + marker.properties.passengerPreSession + '\n' + '<img src="images/greenTriangle.png" alt="greenTriangle" width="14px" height= "10px"></p6><br><p7>' + "Timetable:\n" + '</p7>' + '<a  href="' + marker.properties.plan +'">LIVE!</a><br><p8>' + "\nP/h = Passenger per hour\n" + '</p8>'))
              .addTo(map)
              });
              //green
            
            
            }

          else  {


              console.log('else')
              geojson.features.forEach(function(marker){
                var pos = document.createElement('div');
                pos.className = 'marker2';
              
                  isPositive = false;
                new mapboxgl.Marker(pos)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25})
                .setHTML('<h4>' + marker.properties.title + '</h4><p1>' + "Accessibility:\n" + marker.properties.condition + '\n' + '</p1><br><p2>' + "\nLines:\n" + marker.properties.lines + '</p2><br><p3>' + "Entry\n(P/h):\n" + marker.properties.entry + '</p3><br><p4>'+ "Exit\n(P/h):\n" + marker.properties.exit + '</p4><br><p5>'+ "Passenger\nFlow\n(P/h):\n" + marker.properties.passengerTotal + '</p5><br><p6>' + "Pre-Hour\n(%):\n" + marker.properties.passengerPreSession + '\n' + '<img src="images/rotesDreieck.jpg" alt="rotesDreieck" width="14px" height= "10px">' + '<img src="images/greenTriangle.png" alt="greenTriangle" width="14px" height= "10px"</p6><br><p7>' + "Timetable:\n" + '</p7>' + '<a  href="' + marker.properties.plan +'">LIVE!</a><br><p8>' + "\nP/h = Passenger per hour\n" + '</p8>'))
                .addTo(map)
                //red
              });
              
            }
          }