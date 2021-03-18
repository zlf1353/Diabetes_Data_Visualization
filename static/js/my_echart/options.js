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
  function roundDatas (num) {
    var datas = [];
    for (var i = 0; i < num; i++) {
      datas.push({
        name: 'circle' + i
      });
    }
    return datas;
  }
  let color = ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700', '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5']
  var nameindex = {
    'NEPHROPATHY': "1-肾病 ",
    'CHD': '2-冠心病 ',
    'LEADDP': '3-下肢动脉病变',
    'OTHER_TUMOR': '4-其他肿瘤',
    'RESPIRATORY_SYSTEM_DISEASE': '5-呼吸系统疾病',
    'RENAL_FALIURE': '6-肾衰',
    'HYPERLIPIDEMIA': '7-高脂血',
    'GYNECOLGICAL_TUMOR': '8-妇科肿瘤',
    'ENDOCRINE_DISEASE': '9-其他内分泌疾病',
    'HEMATONOSIS': '10-血液病',
    'CLD': '11-其他慢性肝病',
    'LUNG_TUMOR': '12-肺部肿瘤',
    'DIGESTIVE_CARCINOMA': '13-消化系肿瘤',
    'FLD': '14-脂肪肝',
    'HYPERTENTION': '15-高血压',
    'CEREBRAL_APOPLEXTY': '16-脑卒中',
    'CAROTID_ARTERY_STENOSIS': '17-颈动脉狭窄',
    'ARRHYTHMIAS': '18-心律失常',
    'NERVOUS_SYSTEM_DISEASE': '19-神经系统疾病',
    'MEN': '20-内分泌腺瘤',
    'BILIARY_TRACT_DISEASE': '21-胆道疾病',
    'A_S': '22-动脉粥样硬化',
  }
  var abnormalAttrData = []
  for (let item in data[1]) {
    abnormalAttrData.push({
      value: data[1][item].length, name: item
    })
  }

  let dis = []
  for (let i of data[2]) {
    dis.push({ name: nameindex[i] })
  }

  let details = []
  for (let i in data[1]) {
    for (let j of data[1][i]) {
      details.push({ name: j })
    }
  }
  //统一颜色
  var colorindex = 0
  let index1 = 0
  let index2 = 0
  for (let item in data[1]) {
    abnormalAttrData[index1].itemStyle = {
      color: color[colorindex]
    }
    for (let count = 0; count < data[1][item].length; count++) {
      //因为从0开始，所以要先加
      index2 += count
      details[index2].itemStyle = {
        color: color[colorindex]
      }
    }
    index1++
    index2++
    colorindex++
  }

  let angel = 0
  angel = details.length / 360

  var centervalue = 0
  centervalue = details.length / 27
  centervalue = centervalue.toFixed(2)
  //console.log(data)
  /*console.log(abnormalAttrData)
  console.log(data[1])
  console.log(data[1]['凝血相关'][0])
  for(let i in data[1]){
    console.log(typeof(i),i)
    console.log(data[1][i].length)
  }*/

  return {
    title: {
      text: "Abnormal index",
      top: "top",
      left: "left",
      textStyle: {
        color: '#292421'
      }
    },
    backgroundColor: '#fff',
    tooltip: {
      trigger: 'item'
    },
    focusNodeAdjacency: true,
    series: [
      {
        name: '异常指标类型',
        type: 'pie',
        startAngle: angel,
        radius: [90, 150],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {
          show: true,
          position: 'inside',
        },
        data: abnormalAttrData
      },
      {
        type: 'liquidFill',
        name: '异常指标比', // 系列名称，用于tooltip的显示，legend 的图例筛选
        radius: '25%', // 水球图的半径
        center: ['50%', '50%'], // 水球图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
        // 水填充图的形状 circle 默认圆形  rect 圆角矩形  triangle 三角形  
        // diamond 菱形  pin 水滴状 arrow 箭头状  还可以是svg的path
        shape: 'circle',
        phase: 0, // 波的相位弧度 不设置  默认自动
        direction: 'right', // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
        outline: {
          show: true,
          borderDistance: 0, // 边框线与图表的距离 数字
          itemStyle: {
            borderColor: 'transparent',
            borderWidth: 1
          },
          borderDistance: 0
        },
        // 图形样式
        color: "#FE8704",
        itemStyle: {
          opacity: 0.8, // 波浪的透明度
          shadowBlur: 10,// 波浪的阴影范围
          shadowColor: '#FFB931'//阴影颜色
        },
        backgroundStyle: {
          color: '#fff'
        },
        // 图形上的文本标签
        /*label: {
          fontSize: 25,
          fontWeight: 20,
          color: '#fff'
        },*/
        label: {
          normal: {
            formatter: '',
            textStyle: {
              fontSize: 12
            }
          }
        },
        data: [centervalue] // 系列中的数据内容数组
      },
      {
        //最外圈
        type: 'graph',
        tooltip: {
          show: false
        },
        ribbonType: true,
        layout: 'circular',
        hoverAnimation: false,
        z: 0,
        width: '70%',
        height: '70%',
        circular: {
          rotateLabel: true
        },
        //这里可以调出不同效果
        symbolSize: 5,
        data: roundDatas(100),
        itemStyle: {
          color: '#555'
        }
      },
      {
        type: 'graph',
        ribbonType: true,
        layout: 'circular',
        width: '70%',
        height: '70%',
        circular: {
          rotateLabel: true
        },
        symbolSize: 30,
        symbol: 'triangle',
        label: {
          show: true,
          position: 'inside'
        },
        itemStyle: {
          normal: {
            label: {
              show: true,
              color: '#555',
            }
          }
        },
        data: dis,
      },
      {
        type: 'graph',
        tooltip: {},
        ribbonType: true,
        layout: 'circular',
        hoverAnimation: true,
        layoutAnimation: true,
        width: '60%',
        height: '60%',
        circular: {
          rotateLabel: true
        },
        symbolSize: 1,
        data: roundDatas(300),
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            color: '#6E7467',
          },
          emphasis: {
            label: {
              show: false,
            }
          }
        },
      },
      {
        type: 'graph',
        //ribbonType: true,
        startAngle: 50,
        layout: 'circular',
        width: '60%',
        height: '70%',
        symbolSize: 40,
        label: {
          show: true,
          position: 'inside'
        },

        data: details
      }/**/

    ]
  };

}

function pieRingOption (data, id) {
  var index = ['NEPHROPATHY',
    'CHD',
    'LEADDP',
    'OTHER_TUMOR',
    'RESPIRATORY_SYSTEM_DISEASE',
    'RENAL_FALIURE',
    'HYPERLIPIDEMIA',
    'GYNECOLGICAL_TUMOR',
    'ENDOCRINE_DISEASE',
    'HEMATONOSIS',
    'CLD',
    'LUNG_TUMOR',
    'DIGESTIVE_CARCINOMA',
    'FLD',
    'HYPERTENTION',
    'CEREBRAL_APOPLEXTY',
    'CAROTID_ARTERY_STENOSIS',
    'ARRHYTHMIAS',
    'NERVOUS_SYSTEM_DISEASE',
    'MEN',
    'BILIARY_TRACT_DISEASE',
    'A_S',]
  console.log((data[2][index[1]]), id, index[1])
  return {
    legend: {
      left: 0,
      top: 0,
      orient: 'vertical',
      itemGap: 2,
      itemHeight: 10,
      itemWidth: 15
    },
    grid: {
      left: '20%',
      top: 0,
    },
    series: [
      {
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
          position: 'inner',
          fontSize: 14,
          formatter: '{d}%'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: data[3][index[id]], name: '有并发症' },
          { value: data[2][index[id]] - data[3][index[id]], name: '无并发症' }
        ]
      },
      {
        type: 'pie',
        radius: ['45%', '60%'],
        label: {
          position: 'inner',
          formatter: '{d}%'
        },
        data: [
          { value: data[2][index[id]], name: '患病比例' },
          { value: 300 - data[2][index[id]], name: '无病比例' },
        ]
      }
    ]
  }
}