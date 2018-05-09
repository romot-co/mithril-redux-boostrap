(function ($) {
  'use strict'

  $(function () {
    $('.puldown-menu-area').removeClass('puldown-menu-open')
    $('.puldown-menu-close').hide()
    $('.puldown-menu').hide()

    $('.puldown-menu-btn').on({
      click: function () {
        if ($(this).parent().hasClass('puldown-menu-area')) {
          $(this).parent().toggleClass('puldown-menu-open')
          if ($(this).parent().hasClass('puldown-menu-open')) {
            $(this).next().show()
            $(this).next().next().show()
          } else {
            $(this).next().hide()
            $(this).next().next().hide()
          }
        }
      }
    })

    $('.puldown-menu-close').on({
      click: function () {
        $('.puldown-menu-area').removeClass('puldown-menu-open')
        $('.puldown-menu-close').hide()
        $('.puldown-menu').hide()
      }
    })
  })
}(jQuery))
