var myChart = echarts.init(document.getElementById("chart"))
var option = {
  title: {
    text: "4月10日签到情况"
  },
  series: {
    type: "pie",
    data: [
      {name: '已签到', value: 50},
      {name: '未签到', value: 10}
    ],
  },
  tooltip: {
    trigger: 'item',
    formatter: "{b} : {c}人 ({d}%)"
  }
}
myChart.setOption(option)