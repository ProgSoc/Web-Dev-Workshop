function refreshTable() {
	//Returns us the subjects for our table, and our WAM
	$.get('/subjects', function(data) { 
		$("#subjectsTable").empty();

		data.subjects.forEach(subject => {
			$("#subjectsTable").append(
				`<div id="subjectsTable">
					<div class="row">
						<span class="name">${subject.name}</span>
						<span class="mark">${subject.mark}</span>
						<span class="units">${subject.units}</span>
						<button onclick="deleteSubject($(this).siblings('.name').text())">Delete</button>
					</div>
				</div>`
			);
		});
	});
}

function createSubject() {
	//Makes a request to add our current subject
	$.post({
		url: "/subject", 
    contentType: 'application/json',
    data: JSON.stringify({
    	name: $("#subjectName").val(),
    	mark: $("#subjectMark").val(),
    	units: $("#subjectUnits").val(),
    }),
    success: refreshTable
  });

	$('input').val(""); // Resets the input fields so you don't create a duplicate
}

function deleteSubject(subjectName) {
	// TODO: probably in a later workshop
	console.log(subjectName);
}

// This calls when the whole html has loaded.
//This ensures there isn't any problem trying to access unloaded elements.
$( document ).ready(function() { 
	refreshTable();
});