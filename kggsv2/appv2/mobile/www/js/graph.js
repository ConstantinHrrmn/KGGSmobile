/*
File name : graph.js
Description : Display some graphs according to their settings
 */

function displayColumnChart(containerId, categories, data) {
    Highcharts.chart(containerId, {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b>'
        },
        xAxis: {
            categories: categories,
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    format: '{point.y}%'
                }
            }
        },
        series: data,
    });
}

function displayPolarSpider(containerId, categories, series) {
    Highcharts.chart(containerId, {
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: '',
        },
        pane: {
            size: '100%'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        plotOptions: {
            series: {
                pointPlacement: 'on'
            }
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y}%</b><br/>'
        },
        series: series,
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 800
                },
                chartOptions: {
                    pane: {
                        size: '50%'
                    }
                }
            }]
        }
    });
}