$(function () {
	// var value = "en"; //getCookie('language');
	// if(value=="ch"){
	// 	$('title').html('聚火CRM后台管理');
	// 	setEnglish();
	// 	SetCookie('language',value);
	// 	//$("#changeLanguage").find("option[value='ch']").attr("selected",true);
	// }else{
	// 	$("#changeLanguage").find("option[value='en']").attr("selected",true);
	// }

});

function translate(msg){
	window.location.reload();//刷新当前页面.
}

function setEnglish() {
	//var result = $('#body1').html();
	var data;
	Papa.parse('/static/datatable/language.csv', {
		download: true,
		complete: function(results) {
			data = results.data;
			for(var i=0;i<=data.length-1;i++){
				$("._lang").each(function(){
					var alt = parseInt($(this).attr("alt"));
					var val = $(this).html().replace(/[\r\n]/g," ");
					val = val.replace(/&nbsp;/ig,"");
					val = val.replace(/&(gt);/ig,'>');
					if($.trim(val)==$.trim(data[i][0])){
						if(alt>1&&data[i][alt]){
							$(this).html(data[i][alt])
						}else{
							$(this).html(data[i][1])
						}
					}
					if($.trim($(this).attr("placeholder"))==$.trim(data[i][0])){
						if(alt>1&&data[i][alt]){
							$(this).attr("placeholder",data[i][alt])
						}else{
							$(this).attr("placeholder",data[i][1])
						}
					}
					if($.trim($(this).attr("type"))=="submit"&&$.trim($(this).attr("value"))==$.trim(data[i][0])){
						if(alt>1&&data[i][alt]){
							$(this).attr("value",data[i][alt])
						}else{
							$(this).attr("value",data[i][1])
						}
					}
					if($(this).hasClass('_js_tran')){
						var str = translateCards(val);
						$(this).html(str)
					}
					if($(this).hasClass('_js_tran_long')){
						if(val.indexOf("is favorite to purchase insurance with OUTs")!=-1){
							val = val.replaceAll('is favorite to purchase insurance with OUTs','');
							$(this).html(val + "触发保险，OUTs如下")
						}
						if(val.indexOf("OUTs insured by ")!=-1){
							val = val.replaceAll('OUTs insured by ','');
							$(this).html(val + "购买OUTs如下")
						}
					}
				})
				//result = result.replaceAll(data[i][0],data[i][1]);
			}
			//$("#body1").html(result);
		}
	});
	var long_data = [
		["Gross Revenue - indicates the total amount of the revenue recognized for a period, including the revenue generated from the rake, insurance and value-added services;","总收入：正式运营至今的抽水收入、保险收入、增值服务收入总和；"],
		["Rake Revenue - indicates the share revenue generated from the rake after splitting with club owners;","抽水收入：与俱乐部抽水分成后的实际收入；"],
		["Insurance Revenue - indicates the amount of the revenue generated from insurance;","保险收入：俱乐部牌局中产生的实际保险收入；"],
		["Value-added Services Revenue - indicates the amount of the revenue generated from the value-added services; ","增值服务收入：用户购买钻石花费的总金额；"]
	]
	for(var i=0;i<=long_data.length-1;i++){
		$("._lang_long").each(function(){//长句单独翻译
			var val = $(this).html().replace(/[\r\n]/g," ");
			val = val.replace(/&nbsp;/ig,"");
			if($.trim(val)==$.trim(long_data[i][0])){
				$(this).html(long_data[i][1])
			}
		})
	}
}

//牌型匹配替换中文
//    Diamond/Club/Heart/Spade -->方块/梅花/红桃/黑桃
function translateCards(str){
	str = str.replaceAll('Diamond','方块');
	str = str.replaceAll('Club','梅花');
	str = str.replaceAll('Heart','红桃');
	str = str.replaceAll('Spade','黑桃');
	return str;
}

