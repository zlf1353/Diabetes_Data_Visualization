"use strict";

function barLineOption (data, percent_y) {
  return {
    dataset: {
      source: data
    },
    grid: {
      left: 40,
      right: 48,
      top: 64,
      bottom: 40
    },
    legend: {
      left: 0,
      top: 4,
    },
    xAxis: {
      type: "category"
    },
    tooltip: {
      show: true
    },
    yAxis: [
      {
        name: "比例（%）",
        type: "value",
        splitLine: {
          show: false,
          lineStyle: {
            color: ["#555"],
          }
        },
      },
      {
        name: "数量",
        type: "value",
        splitLine: {
          show: false,
          lineStyle: {
            color: ["#555"],
          }
        },

      }],
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        // start: 1,
        // end: 35
      },
      // {
      //     type: 'slider',
      //     show: true,
      //     yAxisIndex: [0,1],
      //     // left: '93%',
      //     // start: 29,
      //     // end: 36
      // },
      {
        type: 'inside',
        xAxisIndex: [0],
        // start: 1,
        // end: 35
      },
      // {
      //     type: 'inside',
      //     yAxisIndex: [0,1],
      //     // start: 29,
      //     // end: 36
      // }
    ],
    series: [
      {
        type: "bar",
        barWidth: "60%",
        stack: true,
        name: "患并发症",
        itemStyle: {
          color: "rgb(168,143,11)"
        },
        yAxisIndex: 1,
        encode: {
          x: 0,
          y: 2
        }
      },
      {
        type: "bar",
        barWidth: "60%",
        stack: true,
        name: "无并发症",
        itemStyle: {
          color: "rgb(17,116,101)"
        },
        yAxisIndex: 1,
        encode: {
          x: 0,
          y: 1
        }
      },
      {
        type: "line",
        smooth: true,
        name: "患病比例",
        yAxisIndex: 0,
        encode: {
          x: 0,
          y: percent_y
        }
      },
    ]
  };
}

function bloodPressureOption (data) {
  return {
    dataset: {
      source: data
    },
    color: ["#asdasc", "#CCCCCC", "#222222", "#333333", "#gggggg"],
    title: {
      // text: "血压图"
    },
    tooltip: {
      trigger: "axis",
      hideDelay: () => {
        if (isXLabel) return 2000
        else return 0
      },
      formatter: (value) => {
        if (isXLabel) {
          return '查看详情'
        } else {
          let sex = ''
          if (value['0']['data'][8]) {
            sex = '女'
          } else { sex = '男' }
          return 'Case_ID:' + value['0']['data'][0] + '<br />' + '性别:' + sex + '<br />' +
            '年龄:' + value['0']['data'][7] + '<br />' +
            'BMI:' + value['0']['data'][9] + '<br />' +
            '血压（收缩压、舒张压）:' + value['0']['data'][3] + '/' + value['0']['data'][2]
        }

      }
      // console.log(value)

    },
    legend: {
      left: 0,
      top: 4,
      show: false
    },
    grid: {
      left: 70,
      right: 55,
      top: 64,
      bottom: 50,
      containLabel: false
    },
    xAxis: [{
      type: "category",
      triggerEvent: true,
      name: '',
      axisLine: {
        show: true
      },
      splitArea: {
        color: "#111",
        lineStyle: {
          color: "#111"
        }
      },
      axisLabel: {
        color: "#111",
      },
      splitLine: {
        show: false
      },
      boundaryGap: true,
    }],
    yAxis: [
      {
        type: "value",
        show: true,
        name: '血压',
        position: 'left',
        nameLocation: 'end',
        splitNumber: 5,
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,1)"
          }
        },
        axisLine: {
          show: true
        },
        axisLabel: {
          show: true,
          margin: 5,
          textStyle: {
            color: "#111",
          },
          formatter: '{value} mmHg'
        },
        axisTick: {
          show: true
        }
      },
      {
        type: "value",
        show: true,
        name: '体重',

        nameLocation: 'end',
        splitNumber: 5,
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,1)"
          }
        },
        axisLine: {
          show: true
        },
        axisLabel: {
          show: true,
          margin: 4,
          textStyle: {
            color: "#111"
          },
          formatter: '{value} kg'
        },
        axisTick: {
          show: true,
        }
      }
    ],

    dataZoom: [
      {
        type: 'slider',
        show: true,
        realtime: true,
        xAxisIndex: 0,
        start: 0,
        end: 5,
        bottom: '-1px'
      },
      {
        type: 'inside',
        show: true,
        realtime: true,
        xAxisIndex: 0,
        start: 0,
        end: 5
      }
    ],
    series: [
      {
        name: "舒张压",
        type: "line",
        showAllSymbol: true,
        symbol: (value) => {
          //console.log(value, 'value')
          if (value[10]) {
            return 'triangle'
          } else {
            return 'circle'
          }
        },
        symbolRotate: 180,
        symbolSize: (value) => {
          //console.log(value, 'value')
          if (value[10]) {
            return 15
          } else {
            return 10
          }
        },
        lineStyle: {
          opacity: 0
        },
        itemStyle: {
          color: (value) => {
            //console.log(value)
            if (value['data'][10]) return "#FF6161"
            else return "#91cc75"
          },
          borderColor: "#fff",
          borderWidth: 1,
          shadowColor: "rgba(0, 0, 0, .3)"
        },
        tooltip: {
          show: true
        },
        encode: {
          x: 0,
          y: 2
        },
        markLine: {
          silent: true,
          symbol: ['none', 'none'],
          label: {
            show: false
          },
          data: [{
            yAxis: 60
          }, {
            yAxis: 140
          }],
          lineStyle: {
            normal: {
              type: 'dotted',
            },
          },
        }
      },
      {
        name: "收缩压",
        type: "line",
        showAllSymbol: true,
        symbol: (value) => {
          if (value[11]) {
            return 'triangle'
          } else {
            return 'circle'
          }
        },
        symbolSize: (value) => {
          if (value[11]) {
            return 15
          } else {
            return 10
          }
        },
        lineStyle: {
          opacity: 0
        },
        itemStyle: {
          color: (value) => {
            //console.log(value)
            if (value['data'][11]) return "#FF6161"
            else return "#91cc75"
          },
          borderColor: "#fff",
          borderWidth: 1,
          shadowColor: "rgba(0, 0, 0, .3)"
        },
        tooltip: {
          show: true
        },
        encode: {
          x: 0,
          y: 3
        }
      },
      {
        name: "体重",
        type: "line",
        showAllSymbol: true,
        yAxisIndex: 1,
        symbol: 'circle',
        symbolSize: 15,
        lineStyle: {
          opacity: 0
        },
        itemStyle: {
          color: (value) => {
            //console.log(typeof (value['data'][6]), value['data'][6])
            if (value['data'][6] == 0) return "#A79AF4"
            else if (value['data'][6] == 1) return "#D5D2F6"
            else return "#725DF4"
          },
          borderColor: "#fff",
          borderWidth: 1,
          shadowColor: "rgba(0, 0, 0, .3)",
        },
        tooltip: {
          show: true
        },
        encode: {
          x: 0,
          y: 5
        }
      },


      {
        name: "",
        type: "bar",
        stack: "A",
        itemStyle: {
          barBorderColor: "rgba(0,0,0,0)",
          color: "rgba(0,0,0,0)"
        },
        barWidth: "8%",
        emphasis: {
          itemStyle: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)"
          }
        },
        encode: {
          x: 0,
          y: 2
        },
        tooltip: {
          show: false
        }
      },
      {//竖线区
        name: "",
        type: "bar",
        stack: "A",//同个类目轴上系列配置相同的stack值可以堆叠放置-为了不重叠变高
        itemStyle: {
          color: (value) => {
            //console.log(value['data'][1])
            if (value['data'][1]) {
              return '#FB9461 '
            } else return "#516FF1"
          }

        },
        barWidth: "8%",
        /*emphasis: {
          itemStyle: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)"
          }
        },*/
        encode: {
          x: 0,
          y: 4
        },
        tooltip: {
          show: false
        }
      }]
  };
}

function scatterOption (data) {
  return {
    // dataset: {
    //     source: data
    // },
    grid: {
      show: true
    },
    legend: {
      left: 4,
      // top: 4,
    },
    tooltip: {
      show: true
    },
    xAxis: {
      type: "value",
      name: "体重",
      min: function (value) {
        return value.min - 10;
      },
      max: function (value) {
        return value.max + 10;
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: ["#555"],
        }
      },
      axisLine: {
        show: true,
      },
    },
    yAxis: {
      type: "value",
      name: "身高",
      // min: 'dataMin',
      // max: 'dataMax',
      min: function (value) {
        return value.min - 10;
      },
      max: function (value) {
        return value.max + 10;
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: ["#555"],
        }
      },
      axisLine: {
        show: false
      },
    },
    series: [
      {
        type: "scatter",
        name: "女性",
        symbol: "circle",//"circle", "rect", "roundRect", "triangle", "diamond", "pin", "arrow"
        itemStyle: {
          color: function (x) {
            // console.log(x.data);
            if (x.data[3] === 1) {
              return "rgba(234, 186, 14, 1)";
            } else {
              return "rgba(31, 244, 222, 1)";
            }
          },
          borderColor: "#000",
          // shadowColor: "rgba(31, 210, 70, 1)",
        },
        data: data[0],
        // encode: {
        //     x: "weight",
        //     y: "height",
        // }
      },
      {
        type: "scatter",
        name: "男性",
        symbol: "triangle",//"circle", "rect", "roundRect", "triangle", "diamond", "pin", "arrow"
        itemStyle: {
          color: function (x) {
            // console.log(x.data);
            if (x.data[3] === 1) {
              return "rgb(234,135,14)";
            } else {
              return "rgb(31,194,244)";
            }
          },
          borderColor: "#000",
        },
        data: data[1]
      },

    ]
  };
}

function diseaseRelationshipOption (data) {
  var colorList = [
    [
      '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
      '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
      '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
      '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
    [
      '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
      '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
      '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
      '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ],
    [
      '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
      '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
      '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
      '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
    ]][2];
  //console.log('123423',data)
  let points = data[2];
  let links = data[1];
  var data_points = [];
  var data_links = [];
  let i = 0;

  for (var p in points) {
    // p = points[p];
    data_points.push({
      name: p,
      draggable: true, //能否鼠标拖动
      category: p,
      symbolSize: points[p] / 2,
      itemStyle: {
        // "normal": {
        shadowBlur: 10,
        shadowColor: colorList[1],
        color: colorList[(i++) % colorList.length],
        // "color": colorList[1]
        // }
      },
      label: {
        normal: {
          show: true, //控制非高亮时节点名称是否显示
          position: '',
          fontSize: 10,
          color: colorList[(i++) % colorList.length],
        },
      },
    });
  }

  // points.forEach(p => {
  //     data_points.push({
  //         name: p,
  //         draggable: true, //能否鼠标拖动
  //         category: p,
  //         symbolSize: 10,
  //         label: {
  //             normal: {
  //                 show: true, //控制非高亮时节点名称是否显示
  //                 position: '',
  //                 fontSize: 5,
  //                 color: colorList[(i++) % colorList.length],
  //             },
  //         },
  //     });
  // });
  //console.log(data_points);
  i = 0;
  for (var p1 in links) {
    for (var p2 in links[p1]) {
      data_links.push({
        source: p1,
        target: p2,
        value: '',
        label: '',
        lineStyle: {
          normal: {
            show: true,
            width: links[p1][p2] / 5,
            color: colorList[(i++) % colorList.length],
            // color: 'source',
            curveness: 0.3,
            type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
            opacity: '0.5',
            // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
          },
        }
      });
    }
  }


  return {
    title: {
      text: '',
      x: 'center'
    },
    //—— 悬浮框 ——
    tooltip: {
      trigger: 'item',
      formatter: function (x) {
        return x.data.label; //设置提示框的内容和格式 节点和边都显示name属性
      },
    },
    // legend: [{
    //     orient: 'vertical',
    //     x: 'left',
    //     y: '50px',
    //     itemWidth: 14,
    //     itemHeight: 14,
    //     // data: [ //节点数据
    //     //
    //     //     {
    //     //         name: 'stu7',
    //     //         icon: 'circle'
    //     //     },
    //     //     {
    //     //         name: 'stu8',
    //     //         icon: 'circle'
    //     //     }, {
    //     //         name: 'stu9',
    //     //         icon: 'circle'
    //     //     }, {
    //     //         name: 'stu10',
    //     //         icon: 'circle',
    //     //
    //     //     }, {
    //     //         name: 'stu11',
    //     //         icon: 'circle'
    //     //     },
    //     //
    //     // ],
    // },],
    toolbox: {
      show: true, //是否显示工具箱
      feature: {
        saveAsImage: true // 保存为图片，
      }
    },
    //—— 其他设置 ——
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'circular', // 'circular' ,force
        symbolSize: 30, //图形的大小（示例中的圆的大小）
        roam: true, //鼠标缩放及平移
        focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点、节点的边和邻接节点
        label: {
          normal: {
            show: true, //控制非高亮时节点名称是否显示
            position: '',
            fontSize: 18,
            color: 'black'
          },
          emphasis: {
            show: true, //控制非高亮时节点名称是否显示
            position: 'right',
            fontSize: 16,
            color: 'black'
          },
        },
        force: {
          x: 'center',
          y: '50px',
          edgeLength: 180,
          //repulsion: 8000
        },
        //     edgeSymbol: ['circle', 'arrow'],//箭头
        //    edgeSymbolSize: [6, 10],
        edgeLabel: {
          normal: {
            show: false,
            textStyle: {
              fontSize: 12
            },
            formatter: "{c}"
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: 14 //边节点显示的字体大小
            }
          },
        },
        data: data_points,

        links: data_links,
        // categories: [ //节点数据
        //     {
        //         name: 'stu7',
        //         icon: 'circle'
        //     },
        //     {
        //         name: 'stu8',
        //         icon: 'circle'
        //     }, {
        //         name: 'stu9',
        //         icon: 'circle'
        //     }, {
        //         name: 'stu10',
        //         icon: 'circle',
        //
        //     }, {
        //         name: 'stu11',
        //         icon: 'circle'
        //     },
        //
        // ],
      }]
  };
}

function radarOption (data) {
  // var features_str = ['diseaseInfo', 'liverFunction', 'others'];
  // var data = [80, 70, 30, 85, 25];
  var indicatorname = ['diseaseInfo', 'PhysicalIndex', 'PatientsInfo'];
  var maxdata = [100, 100, 100, 100, 100];

  function contains (arrays, obj) {
    var i = arrays.length;
    while (i--) {
      if (arrays[i] === obj) {
        return i;
      }
    }
    return false;
  }

  var indicator = [];
  for (var i = 0; i < indicatorname.length; i++) {
    indicator.push({
      name: indicatorname[i],
      max: maxdata[i]
    });
  }

  function innerdata (i) {
    var innerdata = [];
    for (let j = 0; j < data.length; j++) {
      innerdata.push(100 - 20 * i)
    }
    return innerdata;
  }

  var optionData = getData(data);

  function getData (data) {
    var res = {
      series: [{
        type: 'radar',
        symbolSize: 10,
        symbol: "circle",
        areaStyle: {
          color: "#39B2FF",
          opacity: 0.3
        },
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00A2FF'
          }, {
            offset: 1,
            color: '#0060FF'
          }], false),
          width: 3
        },
        itemStyle: {
          color: "#fff ",
          borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00DEFF'
          }, {
            offset: 1,
            color: '#1598FF'
          }], false),
          borderWidth: 4,
          opacity: 1
        },
        label: {
          show: false,
        },
        data: [{
          value: data,
        }],
        z: 100
      },],
    };
    for (let i = 0; i < data.length; i++) {
      res.series.push({
        type: 'radar',
        data: [{
          value: innerdata(i),
        }],
        symbol: 'none',
        lineStyle: {
          width: 0
        },
        itemStyle: {
          color: '#fff'
        },
        areaStyle: {
          color: '#fff',
          shadowColor: 'rgba(14,122,191,0.15)',
          shadowBlur: 30,
          shadowOffsetY: 20
        }
      });
    }
    return res;
  }

  return {
    backgroundColor: '#fff',
    tooltip: {
      formatter: function () {
        var html = '';
        for (var i = 0; i < data.length; i++) {
          html += indicatorname[i] + ' : ' + data[i] + '%<br>'
        }
        return html
      }
    },
    grid: {
      left: '2%',
      right: '10%',
      bottom: '10%',
      top: '10%',
      containLabel: true
    },
    radar: {
      indicator: indicator,
      splitArea: {
        show: true,
        areaStyle: {
          color: '#fff',
          shadowColor: 'rgba(14,122,191,0.19)',
          shadowBlur: 30,
          shadowOffsetY: 20
        }
      },
      splitLine: {
        show: false,

      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false
      },
      name: {
        textStyle: {
          rich: {
            a: {
              fontSize: 10,
              color: '#333',
              align: 'center',
              // lineHeight: '30',
              fontWeight: 'bold',
            },
            b: {
              fontSize: 10,
              color: '#666',
              align: 'center',
            }
          },
        },
        formatter: function (params, index) {
          var i = contains(indicatorname, params);
          var percent = data[i] / 100 * 100;
          return '{a|' + percent + '%}\n' + '{b|' + params + '}';
        },
      },
    },
    series: optionData.series
  };
}

function radarLineOption (data) {
  // 本月已经完成/目标
  data = parseFloat(parseInt(data * 100)) / 100;
  var chartData = [data];
  // var chartName = ['2015', '2016', '2017'];
  // var unit='亿元';
  var myColor = ['#FFA483', '#F97F53', '#F45922'];
  return {
    //  title: {
    //     text: '单位:  '+unit,
    //     right:0,
    //     textStyle: {
    //         color: '#000',
    //         fontSize:14,
    //     }
    // },

    backgroundColor: '#fff',
    grid: {
      left: '2%',
      right: '20%',
      bottom: '10%',
      top: '10%',
      containLabel: true
    },
    xAxis: [{
      show: false,
    },
    {
      show: false,
    }
    ],
    yAxis: {
      type: 'category',
      inverse: true,
      show: false
    },

    series: [

      //亮色条 百分比
      {
        show: true,
        type: 'bar',
        barGap: '-100%',
        barWidth: '20%',
        z: 2,
        itemStyle: {
          normal: {
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            }
          }
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#000',
              fontSize: 10,
              fontWeight: 'bold'
            },
            position: 'right',
            formatter: function (data) {
              return (chartData[data.dataIndex]).toFixed(2) + '%';
            }
          }
        },
        data: chartData,
      },
      //年份
      {
        show: true,
        type: 'bar',
        xAxisIndex: 1, //代表使用第二个X轴刻度
        barGap: '-100%',
        barWidth: '10%',
        itemStyle: {
          normal: {
            barBorderRadius: 200,
            color: 'transparent'
          }
        },
        // label: {
        //     normal: {
        //         show: true,
        //         position: [0, '-20'],
        //         textStyle: {
        //             fontSize: 14,
        //             color: '#333',
        //         },
        //         // formatter: function (data) {
        //         //     return chartName[data.dataIndex];
        //         // }
        //     }
        // },
        data: chartData
      }
    ]
  };
}

function abnormalAttrOption (data) {
  var colorList = [
    [
      '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
      '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
      '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
      '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
    [
      '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
      '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
      '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
      '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ],
    [
      '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
      '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
      '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
      '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
    ]][2];
  let id = data[0];
  data = data[1];
  let listdata = [];
  let linksdata = [];
  listdata.push({
    category: 0,
    name: id,
    symbolSize: 20,
    draggable: "true",
  });
  console.log(data);
  const n = 10;
  let i = 0;
  for (var x in data) {
    listdata.push({
      category: 1,
      name: x,
      symbolSize: (data[x].length) * n,
      draggable: "true",
      itemStyle: {
        color: colorList[(i++) % colorList.length],
      },
    });
    linksdata.push({
      source: id,
      target: x,
      lineStyle: {
        normal: {
          color: 'source',
        }
      }
    });
    for (var y of data[x]) {
      listdata.push({
        category: 2,
        name: y,
        symbolSize: 1 * n,
        draggable: "true",
        itemStyle: {
          color: colorList[(i++) % colorList.length],
        },
      });
      linksdata.push({
        source: x,
        target: y,
        lineStyle: {
          normal: {
            color: 'source',
          }
        }
      });
    }
  }
  // console.log(listdata);
  // console.log(linksdata);
  return {
    title: {
      text: "Abnormal index",
      top: "top",
      left: "left",
      textStyle: {
        color: '#292421'
      }
    },
    tooltip: {
      // formatter: '{b}'
      formatter: function (params, ticket, callback) {
        if (data.hasOwnProperty(params.name))
          return params.name + ': ' + data[params.name].length;
        let i = 0;
        for (let _ in data)
          ++i;
        return 'id ' + params.name + ': ' + i;
      }
    },
    backgroundColor: '#FFFFFF',

    // legend: {
    //     show: true,
    //     data: [
    //         {
    //             name: 'id',
    //             icon: 'rect'
    //         },
    //         {
    //             name: '特征类型',
    //             icon: 'roundRect'
    //         },
    //         {
    //             name: '特征',
    //             icon: 'circle'
    //         }],
    //     textStyle: {
    //         color: '#292421'
    //     },
    //     icon: 'circle',
    //     type: 'scroll',
    //     orient: 'horizontal',
    //     left: 10,
    //     top: 20,
    //     bottom: 20,
    //     itemWidth: 10,
    //     itemHeight: 10
    // },
    animationDuration: 0,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      // name: '知识图谱',
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: 300,
        gravity: 0.1,
        edgeLength: 15,
        layoutAnimation: true,
      },
      data: listdata,
      links: linksdata,
      categories: [
        {
          name: 'id',
          symbol: 'rect',
          label: {}
        }, {
          name: '特征类型',
          symbol: 'rect'
        }, {
          name: '特征',
          symbol: 'roundRect'
        }],
      roam: true,
      label: {
        normal: {
          show: true,
          position: 'bottom',
          formatter: '{b}',
          fontSize: 10,
          fontStyle: '600',
        }
      },
      lineStyle: {
        normal: {
          opacity: 0.9,
          width: 1.5,
          curveness: 0
        }
      }
    }]
  };
}