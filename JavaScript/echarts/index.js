function city(name) {
  var id = document.getElementById("main");
  var charts = echarts.init(id);
  $.getJSON(`node_modules/echarts/map/json/province/${name}.json`, function(
    usaJson
  ) {
    echarts.registerMap("city", usaJson);
    option = {
      title: {
        text: "IDC市区分布"
        //subtext: '纯属虚构',
        // x: "center"
      },
      tooltip: {
        formatter: function(params) {
          var content = "";
          content = params.name; //+params.value[0]+params.value[1];
          return content;
        }
      },
      backgroundColor: "#fff",

      series: [
        {
          name: name,
          type: "map3D",
          map: "city" /* // 自定义扩展图表类型 */,
          roam: false,

          regionHeight: 2,
          boxWidth: 70,
          //boxHeight:50,
          boxDepth: 50,
          label: {
            show: true,
            formatter: function(params) {
              var content = "",
                content = params.name;
              return content;
            },
            textStyle: {
              color: "#EECBAD",
              fontWeight: "normal",
              fontSize: 5,
              backgroundColor: "rgba(0,23,11,1)"
            },

            emphasis: {
              //对应的鼠标悬浮效果
              show: true,
              textStyle: { color: "#f00" }
            }
          },
          itemStyle: {
            normal: {
              color: "#e0ffff",
              borderWidth: 0.4
            }, //阴影效果
            emphasis: {
              color: "rgb(255,255,255)"
            }
          },

          viewControl: {
            autoRotate: false,
            distance: 70
          },

          data: [
            { name: "斗门区", value: 0 },
            { name: "金湾区", value: 0 },
            { name: "香洲区", value: 0 }
          ]
        }
      ]
    };
    charts.clear();
    //   alert(charts.getOption());
    charts.setOption(option, true);
    id.oncontextmenu = function() {
      return false;
    };
    charts.on("click", function(params) {
      console.log("左键");
    });

    charts.on("contextmenu", function(params) {
      console.log("右键事件");
      console.log(params);
    });
  });
}
// city("heilongjiang");
var myChart = echarts.init(document.getElementById("main"));
$.get("node_modules/echarts/map/json/province/heilongjiang.json", function(
  geoJson
) {
  //   myChart.hideLoading();

  echarts.registerMap("黑龙江", geoJson);
});
let geoCoordMap = {
  黑龙江: [127.9688, 45.368],
  内蒙古: [110.3467, 41.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  西藏: [91.11, 29.97],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  江苏: [118.8062, 31.9208],
  安徽: [117.29, 32.0581],
  湖北: [114.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  福建: [119.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516],
  上海: [121.4648, 31.2891]
};

var alirl = [
  [
    {
      name: "黑龙江",
      value: 100
    }
  ],
  [
    {
      name: "内蒙古",
      value: 300
    }
  ],
  [
    {
      name: "吉林",
      value: 300
    }
  ],
  [
    {
      name: "辽宁",
      value: 300
    }
  ],
  [
    {
      name: "河北",
      value: 300
    }
  ],
  [
    {
      name: "天津",
      value: 300
    }
  ],
  [
    {
      name: "山西",
      value: 300
    }
  ],
  [
    {
      name: "陕西",
      value: 300
    }
  ],
  [
    {
      name: "甘肃",
      value: 300
    }
  ],
  [
    {
      name: "宁夏",
      value: 300
    }
  ],
  [
    {
      name: "青海",
      value: 300
    }
  ],
  [
    {
      name: "新疆",
      value: 300
    }
  ],
  [
    {
      name: "西藏",
      value: 300
    }
  ],
  [
    {
      name: "四川",
      value: 300
    }
  ],
  [
    {
      name: "重庆",
      value: 300
    }
  ],
  [
    {
      name: "山东",
      value: 300
    }
  ],
  [
    {
      name: "河南",
      value: 300
    }
  ],
  [
    {
      name: "江苏",
      value: 300
    }
  ],
  [
    {
      name: "安徽",
      value: 300
    }
  ],
  [
    {
      name: "湖北",
      value: 300
    }
  ],
  [
    {
      name: "浙江",
      value: 300
    }
  ],
  [
    {
      name: "福建",
      value: 300
    }
  ],
  [
    {
      name: "江西",
      value: 300
    }
  ],
  [
    {
      name: "湖南",
      value: 300
    }
  ],
  [
    {
      name: "贵州",
      value: 300
    }
  ],
  [
    {
      name: "广西",
      value: 300
    }
  ],
  [
    {
      name: "海南",
      value: 300
    }
  ],
  [
    {
      name: "上海",
      value: 1300
    }
  ]
];

var convertData = function(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i] && data[i].length > 0) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          regionHeight: data[i].regionHeight,
          height: data[i].regionHeight,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
  }
  // console.log(res)
  return res;
};

option = {
  title: {
    text: "全国行政区划3D地图",
    x: "center",
    top: "20",
    textStyle: {
      color: "#000",
      fontSize: 24
    }
  },
  tooltip: {
    show: true
    // formatter:(params)=>{
    //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
    //   return data;
    // },
  },
  visualMap: [
    {
      type: "continuous",
      seriesIndex: 0,
      text: ["bar3D"],
      calculable: true,
      max: 300,
      inRange: {
        color: ["#87aa66", "#eba438", "#d94d4c"]
      }
    },
    {
      type: "continuous",
      seriesIndex: 1,
      text: ["scatter3D"],
      left: "right",
      max: 100,
      calculable: true,
      inRange: {
        color: ["#000", "blue", "purple"]
      }
    }
  ],
  geo3D: {
    // regions: [
    //   {
    //     name: "黑龙江",
    //     itemStyle: {
    //       areaColor: "red"
    //     }
    //   }
    // ],
    data: convertData(alirl),
    map: "china",
    roam: true,
    itemStyle: {
      areaColor: "rgb(5,101,123)",
      opacity: 1,
      borderWidth: 0.8,
      borderColor: "rgb(62,215,213)"
    },
    label: {
      show: true,
      textStyle: {
        color: "#fff", //地图初始化区域字体颜色
        fontSize: 16,
        opacity: 1,
        backgroundColor: "rgba(0,0,0,0)"
        //backgroundColor: 'rgba(53,171,199,0)'
      }
    },
    emphasis: {
      //当鼠标放上去  地区区域是否显示名称
      label: {
        show: true,
        textStyle: {
          color: "#fff",
          fontSize: 16,
          backgroundColor: "rgba(0,23,11,0)"
        }
      }
    },
    //shading: 'lambert',
    light: {
      //光照阴影
      main: {
        color: "#fff", //光照颜色
        intensity: 1.2, //光照强度
        //shadowQuality: 'high', //阴影亮度
        shadow: false, //是否显示阴影
        alpha: 55,
        beta: 10
      },
      ambient: {
        intensity: 0.3
      }
    },
    realisticMaterial: {
      detailTexture: "asset/leather/leather_albedo.jpg"
    }
  },
  series: [
    {
      name: "heilongjiang",
      map: "heilongjiang",
      type: "map3D",
      //   map: 'city',
      /* // 自定义扩展图表类型 */
      roam: false,

      regionHeight: 10,
      boxWidth: 70,
      //boxHeight:50,
      boxDepth: 50,
      label: {
        show: true,
        formatter: function(params) {
          var content = "",
            content = params.name;
          return content;
        },
        textStyle: {
          color: "red",
          fontWeight: "normal",
          fontSize: 5,
          backgroundColor: "rgba(0,23,11,1)"
        },

        emphasis: {
          //对应的鼠标悬浮效果
          show: true,
          textStyle: {
            color: "#f00"
          }
        }
      },
      itemStyle: {
        areaColor: "red",
        normal: {
          color: "#e0ffff",
          borderWidth: 0.4
        }, //阴影效果
        emphasis: {
          color: "rgb(255,255,255)"
        }
      },

      viewControl: {
        autoRotate: false,
        distance: 70
      }

      //   data: convertData(alirl)
    }
  ]
};
$.get("node_modules/echarts/map/json/province/heilongjiang.json", function(
  csJson
) {
  var json = echarts.registerMap("heilongjiang", csJson);
  console.log(json);
});
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChart.on("mouseover", function(params) {});
myChart.on("click", function(params) {
  // // clearInterval(regions)
  console.log(params);
  // // count = params.dataIndex
  // option.geo3D.regions[0].name = params.name;
  // option.geo3D.regions[0]['regionHeight'] = 9;
  // option.geo3D.regions[0]['color'] = 'yellow';

  // myChart.setOption(option);
});
// city("黑龙江");
// $.get("node_modules/echarts/map/json/province/yunnan.json", function(geoJson) {
//   myChart.hideLoading();

//   echarts.registerMap("YN", geoJson);

//   myChart.setOption(
//     (option = {
//       title: {
//         text: "云南各个州市的地理面积统计"
//       },
//       tooltip: {
//         trigger: "item",
//         formatter: "{b}<br/>{c} (平方千米)"
//       },
//       toolbox: {
//         show: true,
//         orient: "vertical",
//         left: "right",
//         top: "center",
//         feature: {
//           dataView: { readOnly: false },
//           restore: {},
//           saveAsImage: {}
//         }
//       },
//       visualMap: {
//         min: 800,
//         max: 50000,
//         text: ["High", "Low"],
//         realtime: false,
//         calculable: true,
//         inRange: {
//           color: ["lightskyblue", "yellow", "orangered"]
//         }
//       },
//       series: [
//         {
//           name: "云南",
//           type: "map3D",
//           mapType: "YN", // 自定义扩展图表类型
//           itemStyle: {
//             regionHeight: 8,
//             areaColor: "red",
//             normal: { label: { show: true } },
//             emphasis: { label: { show: true } }
//           },
//           data: [
//             { name: "保山市", value: 19637 },

//             { name: "楚雄彝族自治州", value: 29258 },

//             { name: "大理白族自治州", value: 29459 },

//             { name: "德宏傣族景颇族自治州", value: 11526 },

//             { name: "迪庆藏族自治州", value: 23870 },

//             { name: "红河哈尼族彝族自治州", value: 32931 },

//             { name: "昆明市", value: 21473 },

//             { name: "丽江市", value: 21219 },

//             { name: "临沧市", value: 24469 },

//             { name: "怒江傈僳族自治州", value: 14703 },

//             { name: "曲靖市", value: 29855 },

//             { name: "普洱市", value: 45385 },

//             { name: "文山壮族苗族自治州", value: 32239 },

//             { name: "西双版纳傣族自治州", value: 19107 },

//             { name: "玉溪市", value: 15285 },

//             { name: "昭通市", value: 23021 }
//           ]
//         }
//       ]
//     })
//   );
// });
// if (option && typeof option === "object") {
//   myChart.setOption(option, true);
// }
