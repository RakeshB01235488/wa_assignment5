var dataFields = [
	{
		id: 1,
		name: "Data Value 1",
		meta: {
			units: "Farenheit",
			dataType: "Average",
			timeUnitsName: "Minutes",
			generalCategory: "Meterology",
			timeInterval: "00:01:00",
			timeZone: "UTC"
		}
	},
	{
		id: 2,
		name: "Data Value 2",
		meta: {
			units: "Celsius",
			dataType: "Below Average",
			timeUnitsName: "Light Years",
			generalCategory: "Meterology",
			timeInterval: "00:01:02",
			timeZone: "UTC"
		}
	},
	{
		id: 3,
		name: "Data Value 3",
		meta: {
			units: "Kelvin",
			dataType: "Average",
			timeUnitsName: "Minutes",
			generalCategory: "Mineralology",
			timeInterval: "00:01:03",
			timeZone: "UTC"
		}
	},
	{
		id: 4,
		name: "Data Value 4",
		meta: {
			units: "Random Units",
			dataType: "Above Average",
			timeUnitsName: "Minutes",
			generalCategory: "Astrology",
			timeInterval: "00:01:04",
			timeZone: "UTC"
		}
	},
	{
		id: 5,
		name: "Data Value 5",
		meta: {
			units: "Parsecs",
			dataType: "Star Warsy",
			timeUnitsName: "Parsec",
			generalCategory: "Smugglers Boasts",
			timeInterval: "00:14:00",
			timeZone: "SWT"
		}
	}
];

var currentDataField = 0;

function loadDataFieldList() {
	for (var i = 0; i < dataFields.length;i++) {
		$('#data-field-list').append(`<li class="data-field-list-item" onclick="loadFieldMetaData(${i})">${dataFields[i].name}</li>`);
	}
};
function openModifyModal() {
	$('#units').val(dataFields[currentDataField].meta.units)
	$('#data-type').val(dataFields[currentDataField].meta.dataType)
	$('#time-units-name').val(dataFields[currentDataField].meta.timeUnitsName)
	$('#general-category').val(dataFields[currentDataField].meta.generalCategory)
	$('#time-interval').val(dataFields[currentDataField].meta.timeInterval)
	$('#time-zone').val(dataFields[currentDataField].meta.timeZone)

	$('#modifyModalLabel').html(`${dataFields[currentDataField].name}`)
	$('#modifyModal').modal('show');
}

function openTestModal() {
	$('#testModal').modal('show');
}

function removeSelectedQCTest() {
	$('.selected-qc-test').remove();
}

function makeSelectedQCTest(qcID) {
	$('.qc-test').removeClass('selected-qc-test');
	$('#' + qcID).addClass('selected-qc-test');
}

function saveTestModal() {
	$('.qc-test').removeClass('selected-qc-test');

	var option = $('#test-types option:selected').text();
	var qcID = "qc-" + Math.floor((Math.random() * 10000000) + 1);
	$('#metadata-field').append(`<p class="qc-test selected-qc-test" id="${qcID}" onclick="makeSelectedQCTest('${qcID}')">${option}</p>`);

	enableButton('modify-test');
	enableButton('remove-test');
	enableButton('continue-button');
}
function saveModifyModal() {
	dataFields[currentDataField].meta.units = $('#units').val()
	dataFields[currentDataField].meta.dataType = $('#data-type').val()
	dataFields[currentDataField].meta.timeUnitsName = $('#time-units-name').val()
	dataFields[currentDataField].meta.generalCategory = $('#general-category').val()
	dataFields[currentDataField].meta.timeInterval = $('#time-interval').val()
	dataFields[currentDataField].meta.timeZone = $('#time-zone').val()
	loadFieldMetaData(currentDataField);
	$('#modifyModal').modal('hide');
}

function enableButton(buttonId) {
	$("#" + buttonId).prop('disabled', false);
	$("#" + buttonId).addClass('btn-success');
	$("#" + buttonId).removeClass('btn-secondary');
	$('#testModal').modal('hide');
}

function gotoNextPage() {
	window.location.href = 'runtests.html';
}

function loadFieldMetaData(index) {
	currentDataField = index;

	enableButton('modify-meta-data');
	enableButton('add-test');		
	
	$('#meta-data-text-box').html(`
		<h3>${dataFields[index].name}</h3>
		<br>
		<ul class="data-field-metadata-list">
			<li>Units: ${dataFields[index].meta.units}</li>
			<li>Data Type: ${dataFields[index].meta.dataType}</li>
			<li>Time Units Name: ${dataFields[index].meta.timeUnitsName}</li>
			<li>General Category: ${dataFields[index].meta.generalCategory}</li>
			<li>Time Interval: ${dataFields[index].meta.timeInterval}</li>
			<li>Time Zone: ${dataFields[index].meta.timeZone}</li>
		<ul>
	`);
}

loadDataFieldList();

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Random Data', 'Pretend Comparisons'],
  [ 8,      12],
  [ 4,      5.5],
  [ 11,     14],
  [ 4,      5.5],
  [ 11,     14],
  [ 4,      5],
  [ 15,      3.5],
  [ 4,      5],
  [ 3,      3.5],
  [ 6.5,    7]
]);

var options = {
  title: 'Random Data With Pretend Comparisons',
  hAxis: {title: 'Random Data', minValue: 0, maxValue: 15},
  vAxis: {title: 'Pretend Comparisons', minValue: 0, maxValue: 15},
  legend: 'none'
};

var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

chart.draw(data, options);
}
