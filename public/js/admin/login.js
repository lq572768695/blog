$(function(){
	$("#admin_regist").click(function(){
		var name=$("input[name='name']").val()
		var password=$("input[name='password']").val()
		$.ajax({
			url : "/regist",
			type : "get",
			data : {
				name:name,
				password:password
			},
			success : function(rs){
				$(".code_info").html(rs.message)
				if(rs.code==0){
					setTimeout(function(){
						location.href = "../loadlogin"
					},1000)
				}
			}
		})
	})
	$("#admin_login").click(function(){
		var name=$("input[name='name']").val()
		var password=$("input[name='password']").val()
		$.ajax({
			url:"/login",
			data:{
				name:name,
				password:password
			},
			success : function(rs){
				if(rs.code==0){
					$(".code_info").html(rs.message)
					setTimeout(function(){
						location.href = "../admin"
					},1000)
				}else{
					$(".code_info").html(rs.message)
				}
			}
		})
	})
	$("#load_regist").click(function(){
		location.href = "../loadregist"
	})
	$("#load_login").click(function(){
		location.href = "../loadlogin"
	})
})