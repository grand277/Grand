

var iptcha = document.getElementById("iptcha");


// 切换页
function tabit(id,cid) {
    tab1.className="menu2";
    tab2.className="menu2";
    id.className="menu1";
    ctab1.style.display="none";
    ctab2.style.display="none";
    cid.style.display="block";
}

// 弹出框
function msgbox(n){
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
}
function msgbox2(n){
    document.getElementById('light-2').style.display='block';
    document.getElementById('fade').style.display='block';
}

// 表格
$(document).ready(function () {
    $("#confirm").click(function () {
        for(var i=0; i<2; i++) {  // 循环次数根据需求更改
            var td1 = $("<td></td>").text(""),  // 数据根据需求修改
                td2 = $("<td></td>").text(""),
                td3 = $("<td></td>").text(""),
                td4 = $("<td></td>").text(""),
                td5 = $("<td></td>").text(""),
                td6 = $("<td></td>").text(""),
                td7 = $("<td></td>").text(""),
                td8 = $("<td></td>").text(""),
                chakan = $('<button  class="click"  onclick = "msgbox(1)"></button>').text("查看"),
                zhou = $('<button   class="click"  ></button>').text('删除'),
                zhou1 = $('<button   class="click"  ></button>').text('开启'),
                td11 = $("<td></td>").text("data4");
            var td9 = $("<td></td>").append(chakan);
            var td10 = $("<td></td>").append(zhou, zhou1);
            var tr = $("<tr></tr>").append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11);
            $("#tbody").append(tr);
        }
    })
});

$(document).ready(function () {
    $("#confirm2").click(function () {
        for(var i=0; i<2; i++) {  // 循环次数根据需求更改
            var td1 = $("<td></td>").text(""),  // 数据根据需求修改
                td2 = $("<td></td>").text(""),
                td3 = $("<td></td>").text(""),
                td4 = $("<td></td>").text(""),
                td5 = $("<td></td>").text(""),
                td6 = $("<td></td>").text(""),
                td7 = $("<td></td>").text(""),
                td8 = $("<td></td>").text(""),
                chakan = $('<button  class="click"  onclick = "msgbox2(1)"></button>').text("查看"),
                zhou = $('<button   class="click"  ></button>').text('删除'),
                zhou1 = $('<button   class="click"  ></button>').text('开启'),
                td11 = $("<td></td>").text("data4");
            var td9 = $("<td></td>").append(chakan);
            var td10 = $("<td></td>").append(zhou, zhou1);
            var tr = $("<tr></tr>").append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11);
            $("#tbody2").append(tr);
        }
    })
});






// var sUrl = 'http://core.mrd5.5mrj.com/login';
// var btn = document.getElementById('btnquery');
//
// btn.onclick = queryDevice;
//
//
// var baseUrl = 'http://core.mrd5.5mrj.com/';
// var address = 'ordered/device/list';
// var mSid = 'b796522fc0964898974ba6076f7aac5b';
// var deviceRequestData = '{"online":"2","funcValues":[],"keyword":"","instanceId":"0","used":"2","pageIndex":1,"pageSize":50}';
//
// function queryDevice() {
//     $.ajax({
//         //接口地址
//         url: baseUrl + address,
//         //请求类型为 post
//         type: 'POST',
//         //请求参数为 json参数
//         contentType: "application/json;charset=utf-8",
//         //请求参数
//         data: deviceRequestData,
//         //请求头
//         headers: {'mSid': mSid},
//         //返回值为 json 类型
//         dataType: "json",
//         //请求成功返回处理
//            success:function (sMessage) {
//             console.log(sMessage.data.rows[0].alias);
//         },
//         //请求返回失败处理
//         error:function (eMessage) {
//             alert("提交失败" + JSON.stringify(eMessage));
//         }
//     });
// }
