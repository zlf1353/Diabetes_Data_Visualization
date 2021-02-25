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
      }/*,
          {
              type: "bar",
              barWidth: "60%",
              stack: true,
              name: "男性患并发症",
              itemStyle: {
                  color: "rgba(196, 155, 10, 1)"
              },
              yAxisIndex: 1,
              encode: {
                  x: 0,
                  y: 4
              }
          }*/,
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
      },/*
          {
              type: "bar",
              barWidth: "60%",
              stack: true,
              name: "男性无并发症",
              itemStyle: {
                  color: "rgba(64, 119, 123, 1)"
              },
              yAxisIndex: 1,
              encode: {
                  x: 0,
                  y: 3
              }
          },*/
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
      trigger: "axis"
    },
    legend: {
      left: 0,
      top: 4,
    },
    grid: {
      left: 70,
      right: 55,
      top: 64,
      bottom: 40,
      containLabel: false
    },
    xAxis: [{
      type: "category",
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
        color: "#111"
      },
      splitLine: {
        show: false
      },
      boundaryGap: false,
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
        end: 5
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
            else return "#b894fa"
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
            else return "#b894fa"
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
      }/*,
      {
        name: "",
        type: "line",
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
          opacity: 0
        },
        itemStyle: {
          color: "#a6a491",
          borderColor: "#fff",
          borderWidth: 1,
          shadowColor: "rgba(0, 0, 0, .3)"
        },
        tooltip: {
          show: false
        },
        encode: {
          x: 0,
          y: 4
        }
      }*/,
      {
        name: "体重",
        type: "line",
        showAllSymbol: true,
        yAxisIndex: 1,
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
          opacity: 0
        },
        itemStyle: {
          color: (value) => {
            console.log(typeof (value['data'][6]), value['data'][6])
            if (value['data'][6] == 0) return "RGB(110,97,227,1)"
            else if (value['data'][6] == 1) return "RGB(110,97,227,0.7)"
            else return "RGB(110,97,227,0.3)"
          },
          borderColor: "#fff",
          borderWidth: 1,
          shadowColor: "rgba(0, 0, 0, .3)",
          opacity: 1,
          /*
          opacity: (value) => {
            console.log(value)
            return 0
          }*/
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
        barWidth: "1%",
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
          //borderColor: "green",
          color: (value) => {
            //console.log(value, value['data'][1])
            if (value['data'][1]) {
              //console.log('data', data[1], typeof (data[1]))
              return '#FB9461 '
            } else return "#516FF1"
          }

        },
        barWidth: "2%",
        emphasis: {
          itemStyle: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)"
          }
        },
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
    // dataZoom: [
    //     {
    //         type: 'slider',
    //         show: true,
    //         xAxisIndex: [0],
    //         rangeMode: ['percent', 'percent'],
    //         // start: 1,
    //         // end: 35
    //     },
    //     {
    //         type: 'slider',
    //         show: true,
    //         yAxisIndex: [0],
    //         rangeMode: ['percent', 'percent'],
    //         // left: '93%',
    //         // start: 29,
    //         // end: 36
    //     },
    //     {
    //         type: 'inside',
    //         xAxisIndex: [0],
    //         rangeMode: ['percent', 'percent'],
    //         // start: 1,
    //         // end: 35
    //     },
    //     {
    //         type: 'inside',
    //         yAxisIndex: [0],
    //         rangeMode: ['percent', 'percent'],
    //         // start: 29,
    //         // end: 36
    //     }
    // ],
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
        // encode: {
        //     x: "weight",
        //     y: "height",
        // }
      },
      // {
      //     type: "scatter",
      //     name: "女性有并发症",
      //     symbol: "circle",//"circle", "rect", "roundRect", "triangle", "diamond", "pin", "arrow"
      //     data: data[1]
      //     // encode: {
      //     //     x: "weight",
      //     //     y: "height",
      //     // }
      // },
      // {
      //     type: "scatter",
      //     name: "男性无并发症",
      //     symbol: "triangle",//"circle", "rect", "roundRect", "triangle", "diamond", "pin", "arrow"
      //     data: data[2]
      //     // encode: {
      //     //     x: "weight",
      //     //     y: "height",
      //     // }
      // },
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
  console.log(data_points);
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

function biochemicalIndexesOption (data) {
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
  var data_points = [];
  let i = 0;
  for (var p in data) {
    data_points.push(
      {
        "name": p,
        // "value": 2058124,
        "symbolSize": data[p],
        "draggable": true,
        "itemStyle": {
          // "normal": {
          "shadowBlur": 10,
          "shadowColor": colorList[1],
          color: colorList[(i++) % colorList.length],
          // "color": colorList[1]
          // }
        }
      }
    );
  }
  return {
    // 图表标题
    title: {
      show: true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
      text: 'biochemicalIndexesData',//主标题文本，'\n'指定换行
      x: 'center',        // 水平安放位置，默认为左对齐，可选为：
      // 'center' ¦ 'left' ¦ 'right'
      // ¦ {number}（x坐标，单位px）
      y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
      // 'top' ¦ 'bottom' ¦ 'center'
      // ¦ {number}（y坐标，单位px）
      //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#ccc',    // 标题边框颜色
      borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
      padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
      // 接受数组分别设定上右下左边距，同css
      itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
      textStyle: {
        fontSize: 18,
        fontWeight: 'bolder',
        color: '#eee'        // 主标题文字颜色
      },
      subtextStyle: {
        color: '#aaa'        // 副标题文字颜色
      }
    },
    // backgroundColor: '#000',
    tooltip: {
      show: true
    },
    animationDurationUpdate: function (idx) {
      // 越往后的数据延迟越大
      return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: 250,
        edgeLength: 10
      },
      roam: true,
      label: {
        normal: {
          show: true
        }
      },
      data: data_points
    }]
  };
}

function parallelOption () {
  // Schema:
  // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
  var schema = [
    { name: 'AQIindex', index: 1, text: 'AQI' },
    { name: 'PM25', index: 2, text: 'PM 2.5' },
    { name: 'PM10', index: 3, text: 'PM 10' },
    { name: 'CO', index: 4, text: 'CO' },
    { name: 'NO2', index: 5, text: 'NO₂' },
    { name: 'SO2', index: 6, text: 'SO₂' },
    { name: '等级', index: 7, text: '等级' }
  ];

  var rawData = [
    [55, 9, 56, 0.46, 18, 6, "良", "北京"],
    [25, 11, 21, 0.65, 34, 9, "优", "北京"],
    [56, 7, 63, 0.3, 14, 5, "良", "北京"],
    [33, 7, 29, 0.33, 16, 6, "优", "北京"],
    [42, 24, 44, 0.76, 40, 16, "优", "北京"],
    [82, 58, 90, 1.77, 68, 33, "良", "北京"],
    [74, 49, 77, 1.46, 48, 27, "良", "北京"],
    [78, 55, 80, 1.29, 59, 29, "良", "北京"],
    [267, 216, 280, 4.8, 108, 64, "重度", "北京"],
    [185, 127, 216, 2.52, 61, 27, "中度", "北京"],
    [39, 19, 38, 0.57, 31, 15, "优", "北京"],
    [41, 11, 40, 0.43, 21, 7, "优", "北京"],
    [64, 38, 74, 1.04, 46, 22, "良", "北京"],
    [108, 79, 120, 1.7, 75, 41, "轻度", "北京"],
    [108, 63, 116, 1.48, 44, 26, "轻度", "北京"],
    [33, 6, 29, 0.34, 13, 5, "优", "北京"],
    [94, 66, 110, 1.54, 62, 31, "良", "北京"],
    [186, 142, 192, 3.88, 93, 79, "中度", "北京"],
    [57, 31, 54, 0.96, 32, 14, "良", "北京"],
    [22, 8, 17, 0.48, 23, 10, "优", "北京"],
    [39, 15, 36, 0.61, 29, 13, "优", "北京"],
    [94, 69, 114, 2.08, 73, 39, "良", "北京"],
    [99, 73, 110, 2.43, 76, 48, "良", "北京"],
    [31, 12, 30, 0.5, 32, 16, "优", "北京"],
    [42, 27, 43, 1, 53, 22, "优", "北京"],
    [154, 117, 157, 3.05, 92, 58, "中度", "北京"],
    [234, 185, 230, 4.09, 123, 69, "重度", "北京"],
    [160, 120, 186, 2.77, 91, 50, "中度", "北京"],
    [134, 96, 165, 2.76, 83, 41, "轻度", "北京"],
    [52, 24, 60, 1.03, 50, 21, "良", "北京"],
    [46, 5, 49, 0.28, 10, 6, "优", "北京"],

    [26, 37, 27, 1.163, 27, 13, "优", "广州"],
    [85, 62, 71, 1.195, 60, 8, "良", "广州"],
    [78, 38, 74, 1.363, 37, 7, "良", "广州"],
    [21, 21, 36, 0.634, 40, 9, "优", "广州"],
    [41, 42, 46, 0.915, 81, 13, "优", "广州"],
    [56, 52, 69, 1.067, 92, 16, "良", "广州"],
    [64, 30, 28, 0.924, 51, 2, "良", "广州"],
    [55, 48, 74, 1.236, 75, 26, "良", "广州"],
    [76, 85, 113, 1.237, 114, 27, "良", "广州"],
    [91, 81, 104, 1.041, 56, 40, "良", "广州"],
    [84, 39, 60, 0.964, 25, 11, "良", "广州"],
    [64, 51, 101, 0.862, 58, 23, "良", "广州"],
    [70, 69, 120, 1.198, 65, 36, "良", "广州"],
    [77, 105, 178, 2.549, 64, 16, "良", "广州"],
    [109, 68, 87, 0.996, 74, 29, "轻度", "广州"],
    [73, 68, 97, 0.905, 51, 34, "良", "广州"],
    [54, 27, 47, 0.592, 53, 12, "良", "广州"],
    [51, 61, 97, 0.811, 65, 19, "良", "广州"],
    [91, 71, 121, 1.374, 43, 18, "良", "广州"],
    [73, 102, 182, 2.787, 44, 19, "良", "广州"],
    [73, 50, 76, 0.717, 31, 20, "良", "广州"],
    [84, 94, 140, 2.238, 68, 18, "良", "广州"],
    [93, 77, 104, 1.165, 53, 7, "良", "广州"],
    [99, 130, 227, 3.97, 55, 15, "良", "广州"],
    [146, 84, 139, 1.094, 40, 17, "轻度", "广州"],
    [113, 108, 137, 1.481, 48, 15, "轻度", "广州"],
    [81, 48, 62, 1.619, 26, 3, "良", "广州"],
    [56, 48, 68, 1.336, 37, 9, "良", "广州"],
    [82, 92, 174, 3.29, 0, 13, "良", "广州"],
    [106, 116, 188, 3.628, 101, 16, "轻度", "广州"],
    [118, 50, 0, 1.383, 76, 11, "轻度", "广州"],

    [91, 45, 125, 0.82, 34, 23, "良", "上海"],
    [65, 27, 78, 0.86, 45, 29, "良", "上海"],
    [83, 60, 84, 1.09, 73, 27, "良", "上海"],
    [109, 81, 121, 1.28, 68, 51, "轻度", "上海"],
    [106, 77, 114, 1.07, 55, 51, "轻度", "上海"],
    [109, 81, 121, 1.28, 68, 51, "轻度", "上海"],
    [106, 77, 114, 1.07, 55, 51, "轻度", "上海"],
    [89, 65, 78, 0.86, 51, 26, "良", "上海"],
    [53, 33, 47, 0.64, 50, 17, "良", "上海"],
    [80, 55, 80, 1.01, 75, 24, "良", "上海"],
    [117, 81, 124, 1.03, 45, 24, "轻度", "上海"],
    [99, 71, 142, 1.1, 62, 42, "良", "上海"],
    [95, 69, 130, 1.28, 74, 50, "良", "上海"],
    [116, 87, 131, 1.47, 84, 40, "轻度", "上海"],
    [108, 80, 121, 1.3, 85, 37, "轻度", "上海"],
    [134, 83, 167, 1.16, 57, 43, "轻度", "上海"],
    [79, 43, 107, 1.05, 59, 37, "良", "上海"],
    [71, 46, 89, 0.86, 64, 25, "良", "上海"],
    [97, 71, 113, 1.17, 88, 31, "良", "上海"],
    [84, 57, 91, 0.85, 55, 31, "良", "上海"],
    [87, 63, 101, 0.9, 56, 41, "良", "上海"],
    [104, 77, 119, 1.09, 73, 48, "轻度", "上海"],
    [87, 62, 100, 1, 72, 28, "良", "上海"],
    [168, 128, 172, 1.49, 97, 56, "中度", "上海"],
    [65, 45, 51, 0.74, 39, 17, "良", "上海"],
    [39, 24, 38, 0.61, 47, 17, "优", "上海"],
    [39, 24, 39, 0.59, 50, 19, "优", "上海"],
    [93, 68, 96, 1.05, 79, 29, "良", "上海"],
    [188, 143, 197, 1.66, 99, 51, "中度", "上海"],
    [174, 131, 174, 1.55, 108, 50, "中度", "上海"],
    [187, 143, 201, 1.39, 89, 53, "中度", "上海"]
  ];

  var CATEGORY_DIM_COUNT = 6;
  var GAP = 1;
  var BASE_LEFT = 5;
  var BASE_TOP = 10;
  // var GRID_WIDTH = 220;
  // var GRID_HEIGHT = 220;
  var GRID_WIDTH = (100 - BASE_LEFT - GAP) / CATEGORY_DIM_COUNT - GAP;
  var GRID_HEIGHT = (100 - BASE_TOP - GAP) / CATEGORY_DIM_COUNT - GAP;
  var CATEGORY_DIM = 7;
  var SYMBOL_SIZE = 3;

  function retrieveScatterData (data, dimX, dimY) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
      var item = [data[i][dimX], data[i][dimY]];
      item[CATEGORY_DIM] = data[i][CATEGORY_DIM];
      result.push(item);
    }
    return result;
  }

  function generateGrids (option) {
    var index = 0;

    for (var i = 0; i < CATEGORY_DIM_COUNT; i++) {
      for (var j = 0; j < CATEGORY_DIM_COUNT; j++) {
        if (CATEGORY_DIM_COUNT - i + j >= CATEGORY_DIM_COUNT) {
          continue;
        }

        option.grid.push({
          left: BASE_LEFT + i * (GRID_WIDTH + GAP) + '%',
          top: BASE_TOP + j * (GRID_HEIGHT + GAP) + '%',
          width: GRID_WIDTH + '%',
          height: GRID_HEIGHT + '%'
        });

        option.brush.xAxisIndex && option.brush.xAxisIndex.push(index);
        option.brush.yAxisIndex && option.brush.yAxisIndex.push(index);

        option.xAxis.push({
          splitNumber: 3,
          position: 'top',
          axisLine: {
            show: j === 0,
            onZero: false
          },
          axisTick: {
            show: j === 0,
            inside: true
          },
          axisLabel: {
            show: j === 0
          },
          type: 'value',
          gridIndex: index,
          scale: true
        });

        option.yAxis.push({
          splitNumber: 3,
          position: 'right',
          axisLine: {
            show: i === CATEGORY_DIM_COUNT - 1,
            onZero: false
          },
          axisTick: {
            show: i === CATEGORY_DIM_COUNT - 1,
            inside: true
          },
          axisLabel: {
            show: i === CATEGORY_DIM_COUNT - 1
          },
          type: 'value',
          gridIndex: index,
          scale: true
        });

        option.series.push({
          type: 'scatter',
          symbolSize: SYMBOL_SIZE,
          xAxisIndex: index,
          yAxisIndex: index,
          data: retrieveScatterData(rawData, i, j)
        });

        option.visualMap.seriesIndex.push(option.series.length - 1);

        index++;
      }
    }
  }


  return {
    animation: false,
    brush: {
      brushLink: 'all',
      xAxisIndex: [],
      yAxisIndex: [],
      inBrush: {
        opacity: 1
      }
    },
    visualMap: {
      type: 'piecewise',
      categories: ["北京", "上海", "广州"],
      dimension: CATEGORY_DIM,
      orient: 'horizontal',
      top: 0,
      left: 'center',
      inRange: {
        color: ['#c23531', '#2f4554', '#61a0a8']
      },
      outOfRange: {
        color: '#ddd'
      },
      seriesIndex: [0]
    },
    tooltip: {
      trigger: 'item'
    },
    parallelAxis: [
      { dim: 0, name: schema[0].text },
      { dim: 1, name: schema[1].text },
      { dim: 2, name: schema[2].text },
      { dim: 3, name: schema[3].text },
      { dim: 4, name: schema[4].text },
      { dim: 5, name: schema[5].text },
      {
        dim: 6, name: schema[6].text,
        type: 'category', data: ['优', '良', '轻度', '中度', '重度', '严重']
      }
    ],
    parallel: {
      bottom: '5%',
      left: '5%',
      // height: '31%',
      // width: '55%',
      parallelAxisDefault: {
        type: 'value',
        name: 'AQI指数',
        nameLocation: 'end',
        nameGap: 20,
        splitNumber: 3,
        nameTextStyle: {
          fontSize: 14
        },
        axisLine: {
          lineStyle: {
            color: '#555'
          }
        },
        axisTick: {
          lineStyle: {
            color: '#555'
          }
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#555'
        }
      }
    },
    grid: [],
    xAxis: [],
    yAxis: [],
    series: [
      {
        name: 'parallel',
        type: 'parallel',
        smooth: true,
        lineStyle: {
          width: 1,
          opacity: 0.3
        },
        data: rawData
      }
    ]
  };
  // generateGrids(option);
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