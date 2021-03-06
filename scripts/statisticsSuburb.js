

// Initial Variables-------------------------------------------------------------------------------------------------------------------------------------
var barChartSub1 = document.getElementById('barChart1').getContext('2d');
var barChartSub2 = document.getElementById('barChart2').getContext('2d');
var barChartSub3 = document.getElementById('barChart3').getContext('2d');
var barChartSub4 = document.getElementById('barChart4').getContext('2d');
var barChartSub5 = document.getElementById('barChart5').getContext('2d');
var barChartSub6 = document.getElementById('barChart6').getContext('2d');
var barChartSub7 = document.getElementById('barChart7').getContext('2d');
var barChartSub8 = document.getElementById('barChart8').getContext('2d');

// BAR Charts-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function addChartSub1 () {
    var chart = new Chart(barChartSub1, {
        id: 'barChartSub1',
        type: 'bar',

        data: {
            labels: [
                'Herrenstr', 'Europaplatz'
            ],
            datasets: [{
                label: 'Entry P/h',
                backgroundColor: 'rgb(0, 184, 230)', //blue
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'blue',
                data: dummyEntry
            },{
                label: 'Exit P/h',
                backgroundColor: 'rgb(52, 220, 110)', //green
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'green',
                data: dummyExit
            }
        ]
        },

        options:{
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 1000
                    }
                }]
            }
        }
    })
}

function addChartSub2 () {
    var chart = new Chart(barChartSub2, {
        id: 'ChartSubInnenOst',
        type: 'bar',

        data: {
            labels: [
                'Marktplatz', 'Kronenplatz', 'Durlacher Tor'
            ],
            datasets: [{
                label: 'Entry P/h',
                backgroundColor: 'rgb(0, 184, 230)', //blue
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'blue',
                data: dummyEntry
            },{
                label: 'Exit P/h',
                backgroundColor: 'rgb(52, 220, 110)', //green
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'green',
                data: dummyExit
            }
        ]
        }, 
            options:{
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 1000
                        }
                    }]
                }
            }
        
    })
}

function addChartSub3 () {
    var chart = new Chart(barChartSub3, {
        id: 'barChartSub3',
        type: 'bar',

        data: {
            labels: [
                'Haendelstr', 'Yorkstr', 'Klinikum/Moltkestr', 'Muehlburger Tor', 'Kunstakad./Hochschule', 'Schillerstr', 'Sophienstr', 'Weinbrennerplatz', 'Huebschstr' //9x
            ],
            datasets: [{
                label: 'Entry P/h',
                backgroundColor: 'rgb(0, 184, 230)', //blue
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'blue',
                data: dummyEntry
            },{
                label: 'Exit P/h',
                backgroundColor: 'rgb(52, 220, 110)', //green
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'green',
                data: dummyExit
            }
        ]
            
        },

        options:{
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 1000
                    }
                }]
            }
        }
    })
}

function addChartSub4 () {
    var chart = new Chart(barChartSub4, {
        id: 'barChartSub4',
        type: 'bar',

        data: {
            labels: [
                'Weinbrennerplatz', 'Landesbausparkasse', 'Europahalle','Welfenstr', 'Barbarossaplatz', 'Ebertstr','Hbf Vorplatz', 'Poststr', 'Kolpingplatz','Mathystr', 'Karlstor', 'Otto-Sachs-Str', 'Arbeitsagentur', 'Lessingstr', 'ZKM' //15
            ],
            datasets: [{
                label: 'Entry P/h',
                backgroundColor: 'rgb(0, 184, 230)', //blue
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'blue',
                data: dummyEntry
            },{
                label: 'Exit P/h',
                backgroundColor: 'rgb(52, 220, 110)', //green
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'green',
                data: dummyExit
            }
        ]
        },

        options:{
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 1000
                    }
                }]
            }
        }
    })
}

function addChartSub5 () {
    var chart = new Chart(barChartSub5, {
        id: 'barChartSub5',
        type: 'bar',

        data: {
            labels: [
                'Neureuter Str.', 'Feiarbendweg', 'Hertzstr', 'Kussmaulstr', 'Klinikum/Moltkestr', 'Knielinger Allee', 'August-Bebel-Str', 'Kurt-Schumacher-Str', 'Haus Bethlehem' //9x
            ],
            datasets: [{
                label: 'Entry P/h',
                backgroundColor: 'rgb(0, 184, 230)', //blue
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'blue',
                data: dummyEntry
            },{
                label: 'Exit P/h',
                backgroundColor: 'rgb(52, 220, 110)', //green
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'green',
                data: dummyExit
            }
        ]
        },

        options:{
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 1000
                    }
                }]
            }
        }
    })
}

function addChartSub6 () {
    var chart = new Chart(barChartSub6, {
        id: 'barChartSub6',
        type: 'bar',

        data: {
            labels: [
                'Tivoli', 'Werderstr', 'Rueppurer Tor','Philip-Reis-Str.', 'Staatstheater', 'Ostendstr', 'Wolfartsweier Str' //7x
            ],
            datasets: [{
                label: 'Entry P/h',
                backgroundColor: 'rgb(0, 184, 230)', //blue
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'blue',
                data: dummyEntry
            },{
                label: 'Exit P/h',
                backgroundColor: 'rgb(52, 220, 110)', //green
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'green',
                data: dummyExit
            }
        ]
        },

        options:{
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 1000
                    }
                }]
            }
        }
    })
}

function addChartSub7 () {
    var chart = new Chart(barChartSub7, {
        id: 'barChartSub7',
        type: 'bar',

        data: {
            labels: [
                'Heidehof', 'Duale Hochschule', 'Lilienthalstr.', 'Synagoge'
            ],
            datasets: [{
                label: 'Entry P/h',
                backgroundColor: 'rgb(0, 184, 230)', //blue
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'blue',
                data: dummyEntry
            },{
                label: 'Exit P/h',
                backgroundColor: 'rgb(52, 220, 110)', //green
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'green',
                data: dummyExit
            }
        ]
        },

        options:{
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 1000
                    }
                }]
            }
        }
    })
}

function addChartSub8 () {
    var chart = new Chart(barChartSub8, {
        id: 'barChartSub8',
        type: 'bar',

        data: {
            labels: [
                'Weinweg', 'Tullastr.', 'Schloss Gottesaue', 'Gottesauer Platz', 'Karl-Wilhelm-Platz', 'Hauptfriedhof', 'Rintheimer Str', 'Essensweinstr', 'Dunantstr', 'Hirtenweg/Tech.Park' //10x
            ],
            datasets: [{
                label: 'Entry P/h',
                backgroundColor: 'rgb(0, 184, 230)', //blue
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'blue',
                data: dummyEntry
            },{
                label: 'Exit P/h',
                backgroundColor: 'rgb(52, 220, 110)', //green
                borderColor: 'rgb(70,130,180)',
                //fillcolor: 'green',
                data: dummyExit
            }
        ]
        },

        options:{
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 1000
                    }
                }]
            }
        }
    })
}

