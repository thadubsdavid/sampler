
// Layer Suburb On/Off----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$('#sub1').change(function() {
    if($(this).is(":checked")) {
        
      addLayerSub1();
      addChartSub1();

      $('#statisticsSub1').show();
      $('#statisticsSub2').hide();
      $('#statisticsSub3').hide();
      $('#statisticsSub4').hide();
      $('#statisticsSub5').hide();
      $('#statisticsSub6').hide();
      $('#statisticsSub7').hide();
      $('#statisticsSub8').hide();


      
    }else{
      $('#statisticsSub1').remove();

    
      //map.removeSource('subStadtWest')
      map.removeLayer('subWS')
      map.removeSource('subInnenWest')
    }
           
  });
  // Polygon Suburb Innenstadt West--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  function addLayerSub1 () {
    console.log('TEST')
      map.addSource("subInnenWest", {
        type: "geojson",
        data: "geodata/polygonInnenWest.json"
    });
      map.addLayer({
        id: "subWS",
        type: "fill",
        source: "subInnenWest",
        paint: {
              'fill-color': '#ff6633', //red
              'fill-opacity': 0.2
      }
    });
    }
  /*
  function addLayerSub1 () {
    console.log('hereSub')
  
    
      map.addLayer({
          'id': 'subWS',
            'type': 'fill',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                          'type': 'Polygon',
                              'coordinates':[[
                  [8.3967791,49.0233835],
                  [8.3951109,49.0226734],
                  [8.3931635,49.0217165],
                  [8.3914417,49.02055],
                  [8.389623,49.0188318],
                  [8.3884642,49.0167491],
                  [8.3880008,49.0146422],
                  [8.3878291,49.0135444],
                  [8.3876789,49.0125311],
                  [8.3876145,49.01156],
                  [8.3874214,49.0105185],
                  [8.38734,49.008752],
                  [8.3871898,49.0075979],
                  [8.3870611,49.0066407],
                  [8.3869538,49.0054302],
                  [8.3893356,49.0054021],
                  [8.3912883,49.0054021],
                  [8.3946786,49.0054443],
                  [8.397908,49.0054584],
                  [8.4000966,49.0054724],
                  [8.4035084,49.0055006],
                  [8.4036264,49.0068848],
                  [8.4037766,49.0081234],
                  [8.4038839,49.0089257],
                  [8.4040127,49.0100798],
                  [8.4040663,49.0107132],
                  [8.4050212,49.0108117],
                  [8.4060404,49.0109947],
                  [8.4068451,49.0112902],
                  [8.4075854,49.0115717],
                  [8.4069094,49.0120924],
                  [8.4062657,49.012571],
                  [8.4057293,49.0129369],
                  [8.4053645,49.0132606],
                  [8.4059224,49.013528],
                  [8.4060511,49.0142035],
                  [8.4057293,49.014682],
                  [8.4052885,49.014981],
                  [8.4056319,49.015551],
                  [8.4061039,49.0161913],
                  [8.4065438,49.0168034],
                  [8.4070803,49.017493],
                  [8.4059913,49.0177674],
                  [8.4048969,49.0179504],
                  [8.4052569,49.0213345],
                  [8.405448,49.0241855],
                  [8.4018216,49.024284],
                  [8.399354,49.0239745],
                  [8.3967791,49.0233835]
                      
                    ]]
                      
                              }
                            }
                          },
                        'layout': {},
                        'paint': {
                                  'fill-color': '#ff6633', //red
                                  'fill-opacity': 0.2
                                  }
           });
     
          }
  */
  // Layer Suburb On/Off----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  $('#sub2').change(function() {
    if($(this).is(":checked")) {
        
      addLayerSub2();
      addChartSub2();

      $('#statisticsSub2').show();
      $('#statisticsSub1').hide();
      $('#statisticsSub3').hide();
      $('#statisticsSub4').hide();
      $('#statisticsSub5').hide();
      $('#statisticsSub6').hide();
      $('#statisticsSub7').hide();
      $('#statisticsSub8').hide();

      
    }else{

      $('statisticsSub2').remove();    
      //map.removeSource('subStadtWest')
      map.removeLayer('subOstStadt')
    }
           
  });
  
  // Polygon Suburb Innenstadt Ost--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  function addLayerSub2 () {
    console.log('hereSub')
  
    
      map.addLayer({
          'id': 'subOstStadt',
            'type': 'fill',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                          'type': 'Polygon',
                              'coordinates':[[
                  
                [8.4084158,49.0236357,0],
                [8.405448,49.0241855,0],
                [8.4052569,49.0213345,0],
                [8.4048969,49.0179504,0],
                [8.4059913,49.0177674,0],
                [8.4070803,49.017493,0],
                [8.4065438,49.0168034,0],
                [8.4061039,49.0161913,0],
                [8.4056319,49.015551,0],
                [8.4052885,49.014981,0],
                [8.4057293,49.014682,0],
                [8.4060511,49.0142035,0],
                [8.4059224,49.013528,0],
                [8.4053645,49.0132606,0],
                [8.4057293,49.0129369,0],
                [8.4062657,49.012571,0],
                [8.4069094,49.0120924,0],
                [8.4075854,49.0115717,0],
                [8.4068451,49.0112902,0],
                [8.4060404,49.0109947,0],
                [8.4050212,49.0108117,0],
                [8.4040663,49.0107132,0],
                [8.4040127,49.0100798,0],
                [8.4038839,49.0089257,0],
                [8.4037766,49.0081234,0],
                [8.4036264,49.0068848,0],
                [8.4035084,49.0055006,0],
                [8.4062985,49.0055335,0],
                [8.4085945,49.0057587,0],
                [8.4102682,49.0059558,0],
                [8.4115342,49.0061247,0],
                [8.4134975,49.0070678,0],
                [8.4155682,49.0081023,0],
                [8.4172204,49.0088272,0],
                [8.4186472,49.0086256,0],
                [8.4189154,49.0096742,0],
                [8.4178426,49.0097938,0],
                [8.4180142,49.0112013,0],
                [8.4181644,49.012285,0],
                [8.4183485,49.01342,0],
                [8.4183807,49.0151933,0],
                [8.4178921,49.0169164,0],
                [8.4168193,49.0186684,0],
                [8.4152769,49.0202585,0],
                [8.4133457,49.0216727,0],
                [8.4122353,49.0222708,0],
                [8.4109961,49.0228125,0],
                [8.4096926,49.0232768,0],
                [8.4084158,49.0236357,0]
                                 ]]
                      
                              }
                            }
                          },
                        'layout': {},
                        'paint': {
                                  'fill-color': '#ff6633',
                                  'fill-opacity': 0.2
                                  }
           });
     
          }
  // ON/OFF OSTSTADT----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  $('#sub5').change(function() {
    if($(this).is(":checked")) {
        
      addLayerSub5();
      addChartSub5();

      $('#statisticsSub1').hide();
      $('#statisticsSub2').hide();
      $('#statisticsSub3').hide();
      $('#statisticsSub4').hide();
      $('#statisticsSub5').show();
      $('#statisticsSub6').hide();
      $('#statisticsSub7').hide();
      $('#statisticsSub8').hide();

      
    }else{
      $('statisticsSub5').remove();
      
      map.removeSource('subOst')
      map.removeLayer('subOst')
    }
           
  });
  
  //Polygon Oststadt------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  function addLayerSub5 () {
  console.log('TEST')
    map.addSource("subOst", {
      type: "geojson",
      data: "geodata/polygonOst.json"
  });
    map.addLayer({
      id: "subOst",
      type: "fill",
      source: "subOst",
      paint: {
            'fill-color': '#D6BB35', //yellow
            'fill-opacity': 0.2
    }
  });
  }
  
  //On/Off Suburb SUED------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  $('#sub6').change(function() {
    if($(this).is(":checked")) {
        
      addLayerSub6();
      addChartSub6();

      $('#statisticsSub1').hide();
      $('#statisticsSub2').hide();
      $('#statisticsSub3').hide();
      $('#statisticsSub4').hide();
      $('#statisticsSub5').hide();
      $('#statisticsSub6').show();
      $('#statisticsSub7').hide();
      $('#statisticsSub8').hide();

      
    }else{
      $('#statisticsSub6').remove();
      
      map.removeSource('subSued')
      map.removeLayer('subSued')
    }
           
  });
  
  
  //Polygon Suburb Suedstadt-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  function addLayerSub6 () {
      console.log('TEST')
      map.addSource("subSued", {
        type: "geojson",
        data: "geodata/polygonSued.json"
    });
      map.addLayer({
        id: "subSued",
        type: "fill",
        source: "subSued",
        paint: {
              'fill-color': '#588d3f', //green
              'fill-opacity': 0.2
      }
    });
      
  }
  // ON OFF Nordstadt-----------------------------------------------------------------------------------------------------------------------------------------------------
  
  $('#sub3').change(function() {
    if($(this).is(":checked")) {
        
      addLayerSub3();
      addChartSub3();

      $('#statisticsSub1').hide();
      $('#statisticsSub2').hide();
      $('#statisticsSub3').show();
      $('#statisticsSub4').hide();
      $('#statisticsSub5').hide();
      $('#statisticsSub6').hide();
      $('#statisticsSub7').hide();
      $('#statisticsSub8').hide();

      
    }else{
      $('statisticsSub3').remove();
      
      map.removeSource('subNord')
      map.removeLayer('subNord')
    }
           
  });
  
  
  //Polygon Nordstadt-----------------------------------------------------------------------------------------------------------------------------------------
  
  function addLayerSub3() {
    console.log('TESTNord')
    map.addSource("subNord", {
      type: "geojson",
      data: "geodata/polygonNord.json"
  });
    map.addLayer({
      id: "subNord",
      type: "fill",
      source: "subNord",
      paint: {
            'fill-color': '#588d3f', //green
            'fill-opacity': 0.2
    }
  });
  }
  // ON OFF NordWest-------------------------------------------------------------------------------------------------------------------------------------------
  
  $("#sub7").change(function () {
    if($(this).is(':checked')) {
  
      addLayerSub7();
      addChartSub7();

      $('#statisticsSub1').hide();
      $('#statisticsSub2').hide();
      $('#statisticsSub3').hide();
      $('#statisticsSub4').hide();
      $('#statisticsSub5').hide();
      $('#statisticsSub6').hide();
      $('#statisticsSub7').show();
      $('#statisticsSub8').hide();

      
  
    } else {
      $('statisticsSub7').remove();
      
      map.removeSource("subNordWest")
      map.removeLayer("subNordWest")
    }
  
  });
  
  //Polygon NordWest--------------------------------------------------------------------------------------------------------------------------------------------
  
  function addLayerSub7() {
    
    console.log('TESTNordWest')
    map.addSource("subNordWest", {
      type: "geojson",
      data: "geodata/polygonNordWest.json"
  });
    map.addLayer({
      id: "subNordWest",
      type: "fill",
      source: "subNordWest",
      paint: {
            'fill-color': '#588d3f', //green
            'fill-opacity': 0.2
    }
  
  });
  }
  // ON OFF West-------------------------------------------------------------------------------------------------------------------------------------------
  
  $('#sub4').change(function() {
    if ($(this).is(':checked')) {
      
      addLayerSub4();
      addChartSub4();

      $('#statisticsSub1').hide();
      $('#statisticsSub2').hide();
      $('#statisticsSub3').hide();
      $('#statisticsSub4').show();
      $('#statisticsSub5').hide();
      $('#statisticsSub6').hide();
      $('#statisticsSub7').hide();
      $('#statisticsSub8').hide();

  
    } else {
      $('statisticsSub4').remove();
  
      map.removeSource('subWestFar')
      map.removeLayer('subWestFar')
  }
  
  });
  
  //Polygon WestFar-----------------------------------------------------------------------------------------------------------------------------------------
  
  function addLayerSub4 () {
  
    map.addSource("subWestFar", {
      type: "geojson",
      data: "geodata/polygonWestFar.json"
  });
    map.addLayer({
    id: "subWestFar",
    type: "fill",
    source: "subWestFar",
    paint: {
          'fill-color': '#D6BB35', //yellow
          'fill-opacity': 0.2
  }
  });
  }
  
  //ON OFF SuedWest-------------------------------------------------------------------------------------------------------------------------------------------------------------
  $('#sub8').change(function() {
    if ($(this).is(':checked')) {
      
      addLayerSub8();
      addChartSub8();

      $('#statisticsSub1').hide();
      $('#statisticsSub2').hide();
      $('#statisticsSub3').hide();
      $('#statisticsSub4').hide();
      $('#statisticsSub5').hide();
      $('#statisticsSub6').hide();
      $('#statisticsSub7').hide();
      $('#statisticsSub8').show();

      $('#h3').remove();


    } else {
      $('statisticsSub8').remove();
  
      map.removeSource('subSuedWest')
      map.removeLayer('subSuedWest')
  }
  
  });
  
  //Polygon SuedWest-------------------------------------------------------------------------------------------------------------------------------------------------------------
  function addLayerSub8 () {
  
    map.addSource("subSuedWest", {
      type: "geojson",
      data: "geodata/polygonSuedWest.json"
  });
    map.addLayer({
    id: "subSuedWest",
    type: "fill",
    source: "subSuedWest",
    paint: {
          'fill-color': '#ff6633', //red
          'fill-opacity': 0.2
  }
  });
  }
  






