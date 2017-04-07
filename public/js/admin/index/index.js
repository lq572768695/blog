$(function(){
	$("#admin_cancel").click(function(){
		$.ajax({
			url:"/admincancel",
			data:{},
			success:function(rs){
				if(rs.code==0){
					setTimeout(function(){
						location.href = "../admin"
					},500)
				}
			}
		})
	})
<<<<<<< HEAD

	$("#img_upload").click(function(){
	    var files = $('#avatar').prop('files');
	    var data = new FormData();
	    for(var i=0;i<files.length;i++){
			data.append(files[i].name,files[i]);
		}
		$.ajax({
		    url: '/imgupload',
		    type: 'post',
		    data:data,
		    cache: false,
		    processData: false,
		    contentType: false,
		    success:function(rs){
		    	
		    }
		});
	});
})

=======
})
>>>>>>> parent of 6df43b7... 	modified:   package.json
