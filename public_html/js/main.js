$(function(){

	$('#draggable li').draggable({ revert: true });

	$('#droppable li').sortable();
	$('#droppable li').droppable({
		drop: function( event, ui ){
			console.log(ui.draggable.text());

			$(this).text(ui.draggable.text());
		//ajax functie
		}
	}); //-- !#Droppable --
	
	$( "#sortable" ).sortable();
	$( "#sortable" ).disableSelection();

});