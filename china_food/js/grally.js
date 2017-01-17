//照片墙
//点击浏览图集
	document.getElementById("btn_food_photo").onclick= function(){
			document.getElementById("grally").style.display="block";
			addPhotos();
	}
	document.getElementById("btn_grally").onclick= function(){
			document.getElementById("grally").style.display="block";
			addPhotos();
	}
	document.getElementById("cuo").onclick = function(){ 
		document.getElementById("grally").style.display="none"; 
	} 
	// 3.通用函数，返回被选择的元素或元素集合
   function g(selector){
		return selector.substring(0, 1) == '.' ? document.getElementsByClassName(selector.substring(1)) : document.getElementById(selector.substring(1));
	}
	function random(range){
		var min = Math.min(range[0], range[1]);
		var max = Math.max(range[0], range[1]);
		var diff = max - min;
		var number = Math.round(Math.random() * diff) + min;
		return number;
	}
	function addPhotos(){
		var _wrap = '';
		var _nav = '';
		for(var i = 0; i < data.length; i++){//for in 循环中的循环计数器是字符串，而不是数字它包含当前属性的名称或当前数组元素的索引
			_wrap += '<div class="photo  photo_front" onclick="turn(this)" id="photo_' + (i + 1) + '"><div class="photo-wrap"><div class="side side-front"><p class="image"><img src="images/food_eight/' + data[i].img + '"></p></div><div class="side side-back"><p class="desc">' + data[i].desc + '</p></div></div></div></div>';
			
			_nav += '<span id="nav_' + (i + 1) + '" onclick="turn(g(\'#photo_' + (i + 1) + '\'))" class="i"></span>';
		}
		var navigation = '<div class="nav">' + _nav + '</div>'
		g('#wrap').innerHTML = _wrap + navigation;
		
		rsort(random([1, data.length]));
	}
	// 6.计算左右分区的范围，使其他海报的显示不会超出此范围
	function range(){
		var range = {
			left: {
				x: [], 
				y: []
			}, 
			right: {
				x: [], 
				y: []
			}
		};
		//获取最外围容器的宽度和高度
		var wrap = {
			width: g('#wrap').clientWidth,
			height: g('#wrap').clientHeight
		};
		//获取每一张海报的宽度和高度，因为海报的大小都是一样的，所以取第一张
		var photo = {
			width: g('.photo')[0].clientWidth,
			height: g('.photo')[0].clientHeight
		};
		//按照自己想要显示的区域进行计算，左右区域的高度 (top) 范围是一样的
		range.left.x = [0 - photo.width / 4 + 130, wrap.width / 2 - photo.width * 5 / 4 + 130];
		range.left.y = [0 - photo.height / 4 + 160, wrap.height - photo.height * 3 / 4 + 160];
		range.right.x = [wrap.width / 2 + photo.width / 4 + 130, wrap.width - photo.width / 4 + 130];
		range.right.y = range.left.y;
		return range;
	}
	// 5.排序海报
	function rsort(n){
		var _photo = g('.photo');
		var photos = [];
		for(var i = 0; i < _photo.length; i++){
			_photo[i].className = 'photo photo_front';
			/*重排序之前去除所有图片样式*/
			_photo[i].style.left = '';
			_photo[i].style.top = '';
			_photo[i].style['transform'] = _photo[i].style['-webkit-transform'] = 'scale(1.3)';

			photos.push(_photo[i]);
		}
		var photo_center = g('#photo_' + n);
		photo_center.className += ' photo_center';

		photo_center = photos.splice(n-1, 1);//把photo_center从数组里删掉，splice() 方法会改变原始数组
		// 把剩下的海报分为左右两部分
		var photos_left = photos.splice(0, Math.ceil(photos.length / 2));
		var photos_right = photos;
		var ranges = range();
		// 对左右区域的海报位置进行随机赋值
		for(var j = 0; j < photos_left.length; j++){
			var photo = photos_left[j];
			photo.style.left = random(ranges.left.x) + 'px';
			photo.style.top = random(ranges.left.y) + 'px';
			photo.style['transform'] = photo.style['-webkit-transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
		}
		for(var s = 0; s < photos_right.length; s++){
			var photo = photos_right[s];
			photo.style.left = random(ranges.right.x) + 'px';
			photo.style.top = random(ranges.right.y) + 'px';
			photo.style['transform'] = photo.style['-webkit-transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
		}
		// 控制按钮处理
		var navs = g('.i');
		for(var k = 0; k < navs.length; k++){
			navs[k].className = 'i';
		}
		g('#nav_' + n).className += ' i_current';
	}
	/*1.翻面控制，每个元素的 onclick() 事件都绑定此函数，如果点击的元素不是中间的海报，则取得其
	 * id 进行重新排序，使其在中间显示；如果点击的是中间的海报则让它翻面，同时控制按钮也要翻面
	 */
	function turn(elem){
		var cls = elem.className;
		var n = elem.id.split('_')[1];//var n = elem.id.substr(-1, 1)，但是不推荐 substr;
		if(!/photo_center/.test(cls)){//判断当前点击的元素是不是 photo_center，不是的话不执行后面的翻转而进行海报排序
			return rsort(n);
		}
		if(/photo_front/.test(cls)){
			cls = cls.replace(/photo_front/, 'photo_back');
			g('#nav_' + n).className += ' i_back';//同时处理控制按钮
		} else{
			cls = cls.replace(/photo_back/, 'photo_front');
			g('#nav_' + n).className = g('#nav_' + n).className.replace(/\s*i_back\s*/, ' ');//同时处理控制按钮
		}

		elem.className = cls;
	}