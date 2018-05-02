
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>前端</title>
	<style type="text/css">
		.div{
			text-align: center;
		}
		.so{
			width: 500px;
			height: 30px;
			line-height: 30px;
			font-size: 22px;
		}
		.bt{
			height: 36px;
			font-size: 22px;
			margin-left: -10px;

		}
		#login{
			position: absolute;
			right: 50px;
			top: 5px;
		}
		#loginform{
			position: absolute;
			left: 40%;
			top: 30%;
			width:300px;
			height: 160px;
			background: #F6F5F6;
			text-align: center;
			padding-top: 30px;
			display: none;
		}
		#loginform div{
			height: 40px;
		}
	</style>
	<script type="text/javascript" src="./jquery-1.11.3.js"></script>
	<script type="text/javascript">
		function ajax(param,callback){
			var xhr = null;
			if(window.ActiveXObject){
				xhr = new ActiveXObject('Microsoft.XMLHTTP');
			}else if(window.XMLHttpRequest){
				xhr = new XMLHttpRequest();
			}
			if(xhr == null){
				return;
			}
			xhr.open("POST","./tologin.php",true);
			xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						callback(xhr.responseText);
					}else{
						alert("请求失败!");
					}
				}
			};
			param = (function(obj){ 
			    var str = "";
			    for(var prop in obj){
			        str += prop + "=" + obj[prop] + "&"
			    }
			    return str;
			})(param);
			xhr.send(param);
		}

		window.onload = function(){
		    var login = document.getElementById('login');
			var form = document.getElementById('loginform');
			var tologin = document.getElementById('loginid');
			tologin.onclick = function(){
				var postData = {};
				postData.username = document.getElementById('username').value;
				postData.password = document.getElementById('password').value;
				var callback = function(flag){
					if(flag==1){
						//登录成功
						document.getElementById('login').innerHTML = document.getElementById('username').value;
						document.getElementById('loginform').style.display = 'none';
					}else{
						alert("用户名或密码错误！");
					}
				}
				ajax(postData,callback);
				// jQuery的ajax请求
				// $.ajax({
				// 	url: './tologin.php',
				// 	type: 'POST',
				// 	dataType: 'html',
				// 	data: {username: 'qqq',password:"123"},
				// 	success:function(data){
				// 		alert(data);
				// 	},error:function() {
				// 		alert(0);
				// 	}
				// })
				
			}
			login.onclick = function(){
				form.style.display = 'block';
			};
			var cancel = document.getElementById('cancelid');
			cancel.onclick = function(){
				form.style.display = 'none';
			};
		};
	</script>
</head>
<body>
<?php
	$logoPath = "./baidu.png";
?>
<div id="login"><a href="javascript:void(0);">登录</a></div>
<form action="./search.php" method="post">
    <div class="div">
      <img src="<?php echo $logoPath ?>">
	</div>
	<div class="div">
	    <input class="so" type="text" name="keyWord">
		<input class="bt" type="button" value="百度一下">
	</div>
</form>
<div id="loginform">
	<div>
		用户名：<input type="text" id="username">
	</div>
	<div>
		密&nbsp;码：<input type="password" id="password">
	</div>

	<div>
		<input id="loginid" type="button" value="登录">
		<input id="cancelid" type="button" value="取消">
	</div>
</div>

</body>
</html>
