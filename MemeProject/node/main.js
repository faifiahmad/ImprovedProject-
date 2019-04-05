
	let db = firebase.firestore().collection('memeCollection')
    let memeUrl = "https://api.imgflip.com/get_memes"
	var TX;
	var BX;
    var DATA;
	var I;
	var img = document.getElementById("img")
	var topText = document.getElementById('top-text')
	var canvas = document.getElementById("myCanvas")
	var ctx = canvas.getContext("2d")
	var form = document.createElement("form")
    document.body.appendChild(form)
    form.method = "POST"
    form.action = "http://199.192.27.9:3000"
    var element1 = document.createElement("INPUT")
    form.appendChild(element1)
	//console.log(topText);
	//form.appendChild(element1);
	element1.name="moka"
    var topTextSizeInput = document.getElementById('top-text-size-input').value
    var bottomTextSizeInput = document.getElementById('bottom-text-size-input').value
	
    $.get(memeUrl, function(data){
		DATA=data.data.memes
        loadMenu(DATA)
    })

	//setTimeout(function(){loadMenu(DATA); }, 5000);
   

	function loadMenu(data) {
		//console.log(data)
		for (i=0;i<data.length;i++){
		item=data[i]
		var newItem=document.createElement("a")
		newItem.setAttribute("onclick","show("+i+")")
		//newItem.data=item.url
		newItem.setAttribute("class","active")
		newItem.innerHTML=item.name
		document.getElementById("drop").appendChild(newItem)
		}
//document.getElementById("drop").append('<a href="" data-h="'+item.url+'" class="active">'+item.name+'</a>');
}
function load(i) {
			
			
			var dims=resize(DATA[i].width,DATA[i].height)
			img.width=dims.width;img.height=dims.height
			canvas.width=dims.width ; canvas.height=dims.height 
			ctx.drawImage(img, 0, 0,img.width,img.height)
			console.log(img.width,img.height)
			console.log(dims)
			
			};
			function resize(width,height){
			return {"width":width,"height":height};
				var w,h;
				var maxWidth=900
				var maxHeight=600
				if (width > maxWidth){
					w=maxWidth;
					h=height/width*maxWidth
					height=h
				}
				if (height > maxHeight){
					h=maxHeight
					w=width/height*maxHeight
					width=w
				}
				return {"width":width,"height":height}
			}
			
			function clean(){console.log("Hi")
			var ctx = canvas.getContext("2d")
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			show(I)
			}
			
			function show(i){
			I=i
			//console.log(DATA[i]);
			var img = document.getElementById("img")
			img.src=DATA[i].url
			img.crossOrigin = "Anonymous"
			img.onload = function(){
			load(i)
			};
			}
			function writeAll(){
			console.log(topText)
			topTextSizeInput = document.getElementById('top-text-size-input').value
			bottomTextSizeInput = document.getElementById('bottom-text-size-input').value
			var topTextInput = document.getElementById('top-text').value
			var bottomTextInput = document.getElementById('bottom-text').value
			//console.log(topTextInput);
			write(topTextInput,topTextSizeInput,10,10+Number(topTextSizeInput))
			write(bottomTextInput,bottomTextSizeInput,10,img.height-Number(bottomTextSizeInput)-50)
			}
	function write(txt,size,x,y){
			var canvas = document.getElementById("myCanvas")
			var ctx = canvas.getContext("2d")
      ctx.font = size+"px Arial"
      ctx.fillStyle = "white"
			ctx.fillText(txt, x, y)
			console.log(txt, x, y,ctx.font)
	}
	function generate(){
	var imgdata = canvas.toDataURL('image/png')

    element1.value=imgdata
    
    //var dataURL = canvas.toDataURL();
//$.ajax({
// type: "POST",
//// url: "http://199.192.27.9:3000",
// data: { 
// moka: dataURL
// }
//}).done(function(o) {
 // console.log(o); 
//  // If you want the file to be visible in the browser 
  // - please modify the callback in javascript. All you
  // need is to return the url to the file, you just saved 
  // and than put the image in your browser.
//});
    
    
    form.submit()
	//console.log(imgdata);
	}
