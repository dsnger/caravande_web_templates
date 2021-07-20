$(document).ready(function () {
  function e(e, a) {
    if ($('.' + e).length) {
      var o = $('.' + e),
        t = ($('header.page-header'), o.offset().top);
      $('main');
      if (!0) o.outerHeight();
      $(window).scroll(function () {
        if (1023 < $(window).width()) {
          var e = $(this).scrollTop();
          t - 90 <= e
            ? o.addClass('search-fixed')
            : (o.removeClass('search-fixed'), o.removeAttr('style'));
        } else o.removeClass('search-fixed'), o.removeAttr('style');
      });
    }
  }
  function a(e, a) {
    if ($(window).width() < a) {
      var o = '';
      (obj_tabs = $(e + ' li').toArray()),
        (obj_cont = $('.tab-content .tab-pane').toArray()),
        $.each(obj_tabs, function (e, a) {
          (o += '<div id="' + e + '" class="panel panel-default">'),
            (o +=
              '<div class="panel-heading" role="tab" id="heading' + e + '">'),
            (o +=
              '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#DetailsAccordion" href="#collapse' +
              e +
              '" aria-expanded="false" aria-controls="collapse' +
              e +
              '" class="collapsed">' +
              a.innerText +
              '</a></h4>'),
            (o += '</div>'),
            (o +=
              '<div id="collapse' +
              e +
              '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' +
              e +
              '">'),
            (o +=
              '<div class="panel-body">' + obj_cont[e].innerHTML + '</div>'),
            (o += '</div>'),
            (o += '</div>');
        }),
        $('#DetailsAccordion').html(o),
        $('#DetailsAccordion').find('.panel-collapse:first').addClass('in'),
        $('#DetailsAccordion')
          .find('.panel-title a:first')
          .attr('aria-expanded', 'true'),
        $(e).remove(),
        $('.tab-content').remove();
    }
  }
  $('[data-toggle="tooltip"]').tooltip({ container: 'body' }),
    $('[data-toggle-search="tooltip"]').tooltip({
      container: '.hero-searchform',
    }),
    $('[data-labelfor]').click(function () {
      $('#' + $(this).attr('data-labelfor')).click();
    }),
    $('[data-labelfor]').on('hover', function (e) {
      $('#' + $(this).attr('data-labelfor')).mouseover(),
        console.log($(this).attr('data-labelfor'));
    }),
    $('#preisRange').slider({ tooltip: 'always' }),
    $('#searchFilterForm button[type=reset]').click(function () {
      $('#searchFilterForm .btn-group-toggle > label').each(function () {
        $(this).removeClass('active');
      }),
        $('#preisRange').slider('refresh');
    });
  var o = ['<a href="#top" class="back-to-top"></a>'].join('');
  $('body').append(o),
    $('.back-to-top').hide(),
    $(function () {
      $(window).scroll(function () {
        100 < $(this).scrollTop()
          ? $('.back-to-top').fadeIn()
          : $('.back-to-top').fadeOut();
      }),
        $('.back-to-top').click(function () {
          return $('body,html').animate({ scrollTop: 0 }, 800), !1;
        });
    }),
    baguetteBox.run('#DetailFotoslider'),
    $('input[name="daterange"]').attr('readonly', 'readonly'),
    $('input[name="daterange"]').daterangepicker(
      {
        showDropdowns: !0,
        showWeekNumbers: !0,
        locale: {
          format: 'DD.MM.YYYY',
          separator: ' - ',
          applyLabel: 'bestätigen',
          cancelLabel: 'abbrechen',
          fromLabel: 'Vom',
          toLabel: 'bis',
          customRangeLabel: 'Eigene',
          weekLabel: 'W',
          daysOfWeek: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
          monthNames: [
            'Januar',
            'Februar',
            'März',
            'April',
            'Mai',
            'Juni',
            'Juli',
            'August',
            'September',
            'Oktober',
            'November',
            'Dezember',
          ],
          firstDay: 1,
        },
        parentEl: '.hero-searchform__form',
        opens: 'left',
        applyButtonClasses: 'btn-secondary',
      },
      function (e, a, o) {
        console.log(
          'New date range selected: ' +
            e.format('YYYY-MM-DD') +
            ' to ' +
            a.format('YYYY-MM-DD') +
            ' (predefined range: ' +
            o +
            ')'
        );
      }
    );
  var t = function () {
    767 < $(window).width()
      ? $('.list-view .img-frame').each(function () {
          $(this).children('.card-img').removeAttr('style');
          var e = $(this).height();
          $(this).children('.card-img').css('height', e), console.log(e);
        })
      : $('.list-view .img-frame').each(function () {
          $(this).children('.card-img').removeAttr('style');
        });
  };
  t(),
    $(window).resize(function () {
      t();
    }),
    $(window).on('scroll touchmove', function () {
      $('header.page-header').toggleClass(
        'sticky',
        100 < $(document).scrollTop()
      );
    }),
    $(window).on('load', function () {
      $('header.page-header').toggleClass(
        'sticky',
        100 < $(document).scrollTop()
      );
    }),
    $(window).on('load', function () {
      $('.carousel').carousel('pause');
    }),
    $('.carousel').each(function () {
      var e = $(this);
      $(this).carousel('pause'),
        e.find('.carousel-control-next').on('click', function () {
          e.carousel('next'), console.log('next');
        }),
        e.find('.carousel-control-prev').on('click', function () {
          e.carousel('prev'), console.log('prev');
        });
    });
  var l = $('.gallery-grid-results'),
    i = $('#BtnListView'),
    n = $('#BtnModuleView');
  i.click(function () {
    l.hasClass('list-view') ||
      ($(this).toggleClass('active'),
      n.removeClass('active'),
      l.removeClass('module-view'),
      l.addClass('list-view'),
      t());
  }),
    n.click(function () {
      l.hasClass('module-view') ||
        ($(this).toggleClass('active'),
        i.removeClass('active'),
        l.removeClass('list-view'),
        l.addClass('module-view'));
    }),
    e('hero-searchform'),
    e('slider-searchform'),
    $('#DetailTabsLoading')
      .fadeOut()
      .promise()
      .done(function () {
        a('#DetailsTabs', 800);
      });
  var r = $(window).width();
  $(window).resize(function () {
    $(window).width() != r &&
      ((r = $(window).width()), location.reload(), a('#DetailsTabs', 800));
  });
});
//# sourceMappingURL=app-dist.js.map
