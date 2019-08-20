/*

run ajax2.html
user.php
create  database  with usersql.sql
change url in $ajas to url of user.php
https://www.youtube.com/watch?time_continue=99&v=z5SFVYgoXiw
https://www.dyclassroom.com/jquery/jquery-ajax-method
*/



$(function(){
   
	var page = 1,
		pagelimit = 10,
		totalrecord = 0;

	fetchData();

	// handling the prev-btn
	$(".prev-btn").on("click", function(){
		if (page > 1) {
			page--;
			fetchData();
		}
		console.log("Prev Page: " + page);
	});

	// handling the next-btn
	$(".next-btn").on("click", function(){
		if (page * pagelimit < totalrecord) {
			page++;
			fetchData();
		}
		console.log("Next Page: " + page);
	});

	function fetchData() {
		// ajax() method to make api calls
		$.ajax({
		    url:"http://localhost/prj/ajax/12%20-%2014/user.php",
            type: "GET",
			data: {
				page: page,
				pagelimit: pagelimit
			},
			success: function(data) {
				 
                  console.log('data ',data ); 
				 console.log('data.success',data.success);
				if (data.success) {
					var dataArr = data.success.data;

					totalrecord = data.success.totalrecord;
                    
					var html = "";
					for (var i = 0; i < dataArr.length; i++) {
						html += "<div class='sample-user'>"+
							"<h3>ID: " + dataArr[i].id + "</h3>"+
							"<p>First Name: " + dataArr[i].firstname + "</p>" +
							"<p>Last Name: " + dataArr[i].lastname + "</p>" +
							"<p>Last Modified At: " + dataArr[i].lastmodified + "</p>" +
							"<p>Created At: " + dataArr[i].created + "</p>" +
						"</div>"+
						"<hr />";
					}
					$("#result").html(html);
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
	}
});