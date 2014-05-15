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
		info:"參與由台灣證券交易所舉辦的程設設計比賽<br>主要是把XBRL這個會計新標準拿來應用<br>而iTree則是提供了讓企業家可以快速方便的找到各個公司之間的關係"
	},
	"2":{
		name:"Rumbleat",
		url:"http://rumbleat.heroku.com/",
		info:"在CCSP這門課堂上的期末Project<br>Rumbleat透過亂數以及大量的圖片來刺激使用者的聯想力，進而找到自己想要吃的餐點<br>而Rumbleat就是為了解決現今大家常常在煩惱中餐晚餐要吃什麼的問題",
	},
	"3":{
		name:"Firebox",
		url:"http://firebox.heroku.com/",
		info:"",
	},
	"4":{
		name:"Take 6",
		url:"https://www.dropbox.com/s/2zyzp8yspqio2mh/OOP_Project.rar",
		info:"",
	},
	"5":{
		name:"Emo-Song",
		url:"http://emo-song.herokuapp.com/",
		info:"",
	}



};
$(".item").on('click',function(){
	var label = $(this).attr("data-label");
	$("html").prepend("<div class='all_mask'></div>")
	$(".all_mask").hide();
	var pre = "<div id='pop_data'><div class='pop_content'>Name : "+data_label[label].name+"</div><a href='"+data_label[label].url+"' target='_blank'><div class='pop_content'>"+data_label[label].url+"</div></a><div class='pop_info'>"+data_label[label].info+"</div><div id='close'><i class='icon-remove-sign icon-2x'></i></div></div>"
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