var dom = document.getElementById('grade_wq');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});

var app = {};

var option;

option = {
    series: [
    {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '75%'],
        radius: '90%',
        min: 0,
        max: 1,
        splitNumber: 8,
        axisLine: {
            lineStyle: {
                width: 6,
                color: [
                    [0.25, '#FF6E76'],
                    [0.5, '#FDDD60'],
                    [0.75, '#58D9F9'],
                    [1, '#7CFFB2']
                ]
            }
        },
        pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '72%',
            width: 10,
            offsetCenter: [0, '-60%'],
            itemStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            length: 12,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        },
        splitLine: {
            length: 20,
            lineStyle: {
                color: 'auto',
                width: 5
            }
        },
        axisLabel: {
            color: '#ffffff',
            fontSize: 20,
            distance: -60,
            rotate: 'tangential',
            formatter: function (value) {
                if (value === 0.875) {
                    return '良好';
                } else if (value === 0.625) {
                    return '适宜';
                } else if (value === 0.375) {
                    return '普通';
                } else if (value === 0.125) {
                    return '危险';
                }
                return '';
            }
        },
        title: {
            offsetCenter: [0, '-10%'],
            fontSize: 20
        },
        detail: {
            fontSize: 30,
            offsetCenter: [0, '-35%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value * 100) + '';
            },
            color: 'inherit'
        },
        data: [
            {
                value: 0.7,
            }
        ]
    }]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);