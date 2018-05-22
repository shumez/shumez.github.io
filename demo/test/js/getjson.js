// get JSON
// $(document).ready(function(){
// 	$.getJSON('data/bib.json', function(bib){
// 		$('#my-bib').append("<li>" + bib.article[0].tag + "</li>");

		
// 	});
// });

$jQuery.getJSON('data/data.json', function(data){
	// $('ul#my-bib').append('<li>' + data[0].division + '</li>');
	$('main').append('<p>' + data[0].division + '</p>');
});

// $(document).ready(function(){
// 	$.getJSON('data/data.json', function(data){
// 		// $('ul#my-bib').append('<li>' + data[0].division + '</li>');
// 		$('body').append('<p>' + data[0].division + '</p>');
// 	});
// });

// $(document).ready(function () {
//     $.getJSON("data.json", function(data){
//         for(var i in data){
//         $("#output").append("<li><strong>" + data[i].division + "</strong></li>");
//             for(var j in data[i].person){
//                 $("#output").append("<li>" + data[i].person[j].name + "（" + data[i].person[j].age + "才）</li>n");
//             }
//         }
//     });
// });