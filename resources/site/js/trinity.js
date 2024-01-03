$(function () {
  //GNB
  $('body').on('click', ".depth1 > li", function () {
    $(".depth1 > li").removeClass("on");
    $(this).addClass("on");
  });


  //탭메뉴
  var tabWrap = (function () {
    function init() {
      setBtns();
      subTabBtns();
    }

    function setBtns() {
      var m_$btnIrTabs = $(".tabWrap .btns_tab a"),
        m_$tabContents = $(".tabWrap .contents_tab");

      /* 탭메뉴 */
      m_$btnIrTabs.on("click", function () {

        var m_idx = $(this).index();

        m_$btnIrTabs.removeClass('on');
        $(this).addClass('on');
        m_$tabContents.removeClass("on");
        m_$tabContents.eq(m_idx).addClass("on");
        subTabBtns();
      });
    }

    /* 서브탭메뉴 */
    function subTabBtns() {
      var m_$btnSubTabs = $(".tabWrap .contents_tab.on .list_tab a"),
        m_$subTabContents = $(".tabWrap .contents_tab.on .sub_contents_tab");

      m_$btnSubTabs.removeClass('on');
      m_$subTabContents.removeClass('on');
      m_$btnSubTabs.eq(0).addClass('on');
      m_$subTabContents.eq(0).addClass('on');

      m_$btnSubTabs.click(function () {
        var m_idx = $(this).index();

        m_$btnSubTabs.removeClass('on');
        $(this).addClass('on')

        if (m_$subTabContents.length > 0) {
          m_$subTabContents.removeClass('on');
          m_$subTabContents.eq(m_idx).addClass('on');
        }

      });
    }

    init();

    return {
      init: init
    }
  })();


});