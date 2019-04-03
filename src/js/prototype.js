
$('body').on('change', '[data-behavior~="inspections-filter"]', function(event) {


})


$('body').on('change', '[data-behavior~="inspections-select-all"]', function(event) {

  var $self = $(this);
  var $row = $self.closest('.fic-inspections__row--thead');
  var $table = $self.closest('.fic-inspections');
  var $rowsAll = $table.find('.fic-inspections__row:not([data-status="is-complete"])');
  var $rowsAllChecks = $rowsAll.find('.fsa-checkbox:not([disabled])');
  var isChecked = $self.is(':checked');

  if(isChecked) {
    $rowsAll.addClass('fic-inspections__row--selected');
    $rowsAllChecks.prop('checked', true);
  }
  else {
    $rowsAll.removeClass('fic-inspections__row--selected');
    $rowsAllChecks.prop('checked', false);
  }

  return false;

})
