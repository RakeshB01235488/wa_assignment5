function loadLoadingModal() {
	$('#loadingModal').modal('show');
	setTimeout(function () {
        $('#drag-and-drop-modal').addClass('no-display');
        $('.table-responsive').removeClass('no-display');

        $('#continue-button').prop('disabled', false);
        $('#continue-button').removeClass('btn-secondary');
        $('#continue-button').addClass('btn-success');
        
        $('#loadingModal').modal('hide');
    }, 2500);
}