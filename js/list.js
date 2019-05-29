
let oldColumnsCount;

function createTable(){

	let rows = $("#rowsCount").val();
	let columns = $("#columnsCount").val();
	let content = "";
	let html;

	// empty tablebody before creating new table lines and columns
	$("#scheduleTable tbody").empty();

	// create table lines and columns
	for(let i = 0; i < rows; i++){
		content += '<tr>';
		for(let c = 0; c < columns; c++){
			// content += '<td><input type="text" class="form-control" placeholder="col"></td>';
			content += '<td><input type="text" class="form-control" placeholder="col' + '-' + parseInt(c+1) + '"></td>';
		}
		content += '<td style="width: 16.66%"><button onclick="addLine(this)" type="button" class="btn btn-dark">Add</button><button onclick="deleteLine(this)" type="button" class="btn btn-dark">Del</button></td>';
		content += '</tr>';
		// alert(content);

	}

	// add Button "complete Date"
	if ( $("#completeDate").length == 0){
		$("#addBtns").append('<button type="button" class="btn btn-dark" id="completeDate" onclick="completeDate()">complete Date</button>');
	}

	// add tablecontent
	$("#scheduleTable").append(content);

	// set rows and columns to "0"
	$("#rowsCount").val(0);
	oldColumnsCount = $("#columnsCount").val();
	$("#columnsCount").val(0);
}


function addLine(elem){

	let columns = oldColumnsCount;
	let addedLine = "";

	addedLine += '<tr>'
		for(let c = 0; c < columns; c++){
			// content += '<td><input type="text" class="form-control" placeholder="col"></td>';
			addedLine += '<td><input type="text" class="form-control" placeholder="col' + '-' + parseInt(c+1) + '"></td>';
		}
		addedLine += '<td style="width: 16.66%"><button onclick="addLine(this)" type="button" class="btn btn-dark">Add</button><button onclick="deleteLine(this)" type="button" class="btn btn-dark">Del</button></td>';
		addedLine += '</tr>';

	$(elem).parent().parent().after(addedLine);
}


function deleteLine(elem){
	$(elem).parent().parent().remove();
}


function completeDate(){

}