var dataFields = [
	{
		id: 1,
		name: "Data Value",
		values: "0"
	},
	{
		id: 2,
		name: "LocalDateTime",
		values: "0"
	},
	{
		id: 3,
		name: "UTCOffset",
		
	},
	{
		id: 4,
		name: "DateTimeUTC",
		
	},
	{
		id: 5,
		name: "SiteCode",
		
	}
];

var currentDataField = 0;

function loadDataFieldList() {
	for (var i = 0; i < dataFields.length;i++) {
		$('#data-field-list').append(`<li class="data-field-list-item" onclick="loadFieldMetaData(${i})">${dataFields[i].name}</li>`);
		$('#data-field-list1').append(`<li class="data-field-list-item" onclick="loadFieldMetaData1(${i})">${dataFields[i].name} </li>`);
		
	}
};


        function loadFieldMetaData1(index) {
	$("#verify-button").prop('disabled', false);
	$("#verify-button").addClass('btn-success');
	$("#verify-button").removeClass('btn-secondary');
}
 

function loadFieldMetaData(index) {
	currentDataField = index;
	var i;
	$('#meta-data-text-box').html(`
		<h3>${dataFields[index].name}</h3>
	`);


	$('#data-field-list').empty();
	$('#data-field-list1').empty();
	for (i = 0; i < dataFields.length;i++) {
		if(i != currentDataField){
		$('#data-field-list').append(`<li class="data-field-list-item" onclick="loadFieldMetaData(${i})">${dataFields[i].name}</li>`);
		$('#data-field-list1').append(`<li class="data-field-list-item" onclick="loadFieldMetaData1(${i})">${dataFields[i].name} </li>`);
		}
	}
}

loadDataFieldList();



