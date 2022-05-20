$('#collapse-navbar').on('show.bs.collapse', function () {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, 10%')
    // do something…
  });

  $('#collapse-navbar').on('hide.bs.collapse', function () {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, -35%')
    // do something…
  });