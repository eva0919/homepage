$(".item").on('mouseenter',function(){
	var name = $(this).attr('name');
	var pre = "<div id='color_mask' class='c_mask'><div class='item_content'>"+name+"</div></div>"
	$(this).prepend(pre);
	$("#color_mask").hide();
	$("#color_mask").slideDown('fast');
});
$(".item").on('mouseleave',function(){
	$("#color_mask").remove();
});

var data_label = {
	"1":{
		name:"itree",
		url:"http://itree.heroku.com/",
		info:"參與由台灣證券交易所舉辦的程設設計比賽，並獲得前五名的佳績，隨後參與龍騰商業、台大創新競賽、台大雲端創新競賽都獲得不錯的成績。系統主要是把XBRL這個會計新標準拿來應用，而iTree另外提供了讓企業家可以快速方便的找到各個公司之間的關係。"
	},
	"2":{
		name:"Rumbleat",
		url:"http://rumbleat.heroku.com/",
		info:"在CCSP這門課堂上的期末Project<br>Rumbleat透過亂數以及大量的圖片來刺激使用者的聯想力，進而找到自己想要吃的餐點<br>而Rumbleat就是為了解決現今大家常常在煩惱中餐晚餐要吃什麼的問題。",
	},
	"3":{
		name:"Firebox",
		url:"http://firebox.heroku.com/",
		info:"Firebox是在由Mozilla所舉辦的Hack Day比賽過程中誕生，雖然可惜以些微票數僅獲得第四高票，但是仍然取得眾人注目。這個比賽是Mozilla為了推行他們所開發新的手機OS,FireFox OS，而Firebox是一個可以多人同時玩的娛樂性App。",
	},
	"4":{
		name:"Take 6",
		url:"https://www.dropbox.com/s/2zyzp8yspqio2mh/OOP_Project.rar",
		link:'<iframe width="480" height="320" src="https://www.youtube.com/embed/ukunBkav3J4" frameborder="0" allowfullscreen></iframe>',
		info:"物件導向課程中的Project , Take 6 , 誰是牛頭王<br>原是一款桌遊，而我們將其改成可以在PC上遊玩。提供多人連線。<br>當時拿到全班最高分的Project。",
	},
	"5":{
		name:"Emo-Song",
		url:"http://emo-song.herokuapp.com/",
		info:"",
	},
	"8":{
		name:"Fiiser",
		url:"https://www.fiiser.com/",
		info:"我進入Fiiser後負責的一項任務，就是維護更新Fiiser的主網站。期間新增分類與排行列表，以及優化主網站在移動端Mobile上的體驗，如lazy loading等加速首屏載入",
	},
	"9":{
		name:"SoQ*Live",
		url:"https://itunes.apple.com/us/app/soqlive/id1133870559?l=zh&ls=1&mt=8",
		info:"在Fiiser期間負責的專案，為一個直播產品。擔任主要開發負責人之一，主導後台架構建設與iOS App開發。獨力完成許多功能：如硬體壓縮直播流、秒開優化、滑動切換頻道等",
		info:"巨量資料的時代來臨，Data mining也正是趨勢之一。<br>這是一個在關於網路資料探勘的課程所做的專題<br>主要是透過使用者輸入的文字心情與歌曲做對照，回饋給使用者最想聽的歌曲",
	},
	"6":{
		name:"GIGO",
		url:"https://youtu.be/L07y1H03zfg",
		link:'<iframe width="480" height="320" src="https://www.youtube.com/embed/L07y1H03zfg" frameborder="0" allowfullscreen></iframe>',
		info:"GIGO是多媒體資訊分析與檢索課程的作品，利用萃取飲料類資源回收物圖片中texture feature、local feature（需另外經過分群轉換為各個圖片的feature）等資訊，並以Weka訓練分類器。使用者只要輸入回收物的照片，便可推薦該垃圾屬於的垃圾分類，減少因為不清楚垃圾所屬分類導致亂丟問題。"
	},
	"7":{
		name:"Pieces",
		url:"http://pieces.hypo.cc",
		info:"Pieces，基於 Instagram 發想的新系列，把手機照片變成生活製品，產品是放在app store上面的ios app，這個網頁以介紹產品為主，是hypo公司的產品網頁，幾乎一人打造，提供三國語言。"
	}



};
$(".item").on('click',function(){
	var label = $(this).attr("data-label");
	$("html").prepend("<div class='all_mask'></div>")
	$(".all_mask").hide();
	if(data_label[label].link){
		var pre = "<div id='pop_data' class='container'><div class='pop_video col-xs-6'>"+data_label[label].link+"</div><div class='col-xs-6'>"+"<div class='pop_content'>Name : "+data_label[label].name+"</div><a href='"+data_label[label].url+"' target='_blank'><div class='pop_content'>Link</div></a><div class='pop_info'>"+data_label[label].info+"</div><div id='close'><i class='icon-remove-sign icon-2x'></i></div></div>"
	}else{
		var pre = "<div id='pop_data' class='container'><div class='col-xs-6 col-xs-offset-4'>"+"<div class='pop_content'>Name : "+data_label[label].name+"</div><a href='"+data_label[label].url+"' target='_blank'><div class='pop_content'>Link</div></a><div class='pop_info'>"+data_label[label].info+"</div><div id='close'><i class='icon-remove-sign icon-2x'></i></div></div>"
	}
	$("html").prepend(pre);
	$(".all_mask").slideDown();

	$("#close").click(function(){

		$("#pop_data").animate({
			opacity: 0
		},500,function(){
			$("#pop_data").remove();
			$("#pop_data").animate({
						opacity: 1
				},100);
		});
		$(".all_mask").animate({
			opacity: 0
		},500,function(){
			$(".all_mask").remove();
			$(".all_mask").animate({
						opacity: 1
				},100);
		});
	});
});