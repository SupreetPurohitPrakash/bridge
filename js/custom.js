jQuery(document).ready(function ($) {
  //smooth scroll
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    var topSpacer = 60;

    if ($('.menu-cat-tab').length === 1) {
      if ($(window).width() < 1201) {
        var headerHeight = $('.header').height();
        var menuBarHeight = $('.menu-cat-tab-list').height();
        if (menuBarHeight == null) {
          menuBarHeight = 0;
        }
        topSpacer = headerHeight + menuBarHeight;
        console.log(headerHeight);
        console.log(menuBarHeight);
      }
    }

    if ($('.order').length === 1) {
      topSpacer = 90
    }

    $("html, body").stop().animate({
      scrollTop: $($anchor.attr("href")).offset().top - topSpacer
    }, 1500, "easeInOutExpo");

    event.preventDefault();
  });

  //tooltip init
  $('[data-toggle="tooltip"]').tooltip()

  //addClass formfield
  $(".formfield input, .formfield textarea, .formfield select").addClass(
    "form-control"
  );

  //carousel init
  $("#carousel1").carousel({
    interval: 6000,
    pause: "false"
  });

  if ($('#scene')[0]) {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });
  }


  //limit characters
  $("p").each(function () {
    "use strict";
    var maxLength = parseInt($(this).attr("data-maxlength"));
    var txt = $(this).text();
    if (txt.length > maxLength)
      $(this).text(txt.substring(0, maxLength) + ".....");
  });

  //dropdown toggle
  $(".has-submenu").click(function () {
    "use strict";
    var $this = $(this);
    var menu = $(this).children('ul');

    $this.toggleClass("open");
  });

  //changing img to wrapped div's background
  imgToBg();

  // sticky init
  $(".sticky-div").stick_in_parent({});


  //if clicked outside container remove said class
  containerOutClock('.has-submenu', 'open');

  //animation or transition delay automate
  function showDelay(classList, delayType, plusValue) {
    "use strict";
    var unList = String(classList);
    var num = $(unList).length;

    var listAdd = 150;
    for (let i = 1; i <= num; i++) {
      $(unList + ":nth-child(" + i + ")").css(delayType, "" + listAdd + "ms");
      listAdd = listAdd + plusValue;
    }
  }

  function headerOnScroll() {
    var $window = $(window);
    var header = $('.header');
    var headerHeight = header.height();

    var headerTop = header.find('.header-top');
    var headerTopHeight = headerTop.height();

    $(window).scroll(function () {
      if ($window.scrollTop() >= (headerHeight / 2)) {
        header.addClass('headerfixit');
        header.css('top', -headerTopHeight);
      } else {
        header.removeClass('headerfixit');
        header.css('top', '');
      }
    });
  }

  headerOnScroll();

  // if the target of the click isn't the container nor a descendant of the container
  function containerOutClock(target, toAddClass) {
    $(document).mouseup(function (e) {
      var container = $(target);

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(target).removeClass(toAddClass);
      }
    });
  }

  $('.expertise-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 7000,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="20.965" height="7.969" viewBox="0 0 20.965 7.969"> <g id="next_hover_" data-name="next ( hover )" transform="translate(1841.004 623.979) rotate(180)"> <path id="next" d="M1836.219,623.73a.841.841,0,0,1,0-1.219l1.723-1.655h-16.025c-1.035,0-1.877-.387-1.877-.859s.842-.866,1.877-.866h16.024l-1.723-1.653a.84.84,0,0,1-.263-.61.822.822,0,0,1,.263-.6.917.917,0,0,1,1.268,0l3.254,3.121a.837.837,0,0,1,.263.608v0s0,.008,0,.012a.853.853,0,0,1-.263.6l-3.254,3.124a.932.932,0,0,1-1.268,0Z" fill="#200d09"/> </g> </svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="20.965" height="7.969" viewBox="0 0 20.965 7.969"> <g id="next_hover_" data-name="next ( hover )" transform="translate(-1820.039 -616.01)"> <path id="next" d="M1836.219,623.73a.841.841,0,0,1,0-1.219l1.723-1.655h-16.025c-1.035,0-1.877-.387-1.877-.859s.842-.866,1.877-.866h16.024l-1.723-1.653a.84.84,0,0,1-.263-.61.822.822,0,0,1,.263-.6.917.917,0,0,1,1.268,0l3.254,3.121a.837.837,0,0,1,.263.608v0s0,.008,0,.012a.853.853,0,0,1-.263.6l-3.254,3.124a.932.932,0,0,1-1.268,0Z" fill="#200d09"/> </g> </svg></button>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.customerlove-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 7000,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //copy img to background
  function imgToBg() {
    "use strict";
    var $classForBg = $(".imgtobg-img");
    $classForBg.addClass("imgtobg");
    $(".imgtobg").each(function () {
      "use strict";
      var $this = $(this);
      var thissrc = $(this).attr("src");
      $this.wrap(
        '<div class="imgtobg-o" style="background-image:url(' +
        thissrc +
        ')"></div>'
      );
      $this.hide();
    });

    var $classForBgSm = $(".imgtobg-img-sm");
    $classForBgSm.addClass("imgtobg-sm");
    $(".imgtobg-sm").each(function () {
      "use strict";
      var $this = $(this);
      var thissrc = $(this).attr("src");
      $this.wrap(
        '<div class="imgtobg-o-sm app-xs" style="background-image:url(' +
        thissrc +
        ')"></div>'
      );
      $this.hide();
    });
  }


  $('.header-nav-toggle').click(function () {
    var headerHeight = $('.header').outerHeight();
    var overlayNav = $('.overlay-nav');

    // overlayNav.css({
    //   top: headerHeight
    // });

    // overlayNavHeight();

    if ($(overlayNav).hasClass('active')) {
      overlayNav.removeClass('active');
      $(this).removeClass('active');
      $('html').removeClass('overflowYStop');
    } else {
      overlayNav.addClass('active');
      $(this).addClass('active');
      $('html').addClass('overflowYStop');
    }

  });

  function overlayNavHeight() {
    var headerHeight = $('.header').outerHeight();
    var overlayNav = $('.overlay-nav');

    overlayNav.css({
      height: ($(window).height() - headerHeight)
    })
  }

  function headerPadBody() {
    var header = $('.header');
    var headerHeight = header.height();
    $('body').css('paddingTop', headerHeight);
  }
  headerPadBody();

  $(window).resize(overlayNavHeight);

  $('.fav-btn').click(function () {
    $(this).toggleClass('active')
  });

  $('.homesearch-box-nav button').click(function () {
    var dataTarget = $(this).attr('data-target');
    $('.homesearch-box-form input').removeClass('active');
    $('.' + dataTarget).addClass('active');
    $('.' + dataTarget).prop("checked", true);
  });

  $('.navul li a').each(function () {
    var text = $(this).text();
    $(this).attr('title', text);
  });

  function sliderVid() {
    var video = $('#heroVideo');
    $('#heroVideo').trigger('play');
    setTimeout(function () {
      // video.removeClass('d-none');
    }, 2000)
  }

  function equalHeightFixer(targetClass) {
    // Select and loop the container element of the elements you want to equalise
    var highestBox = 0;

    $(targetClass).each(function () {
      if ($(this).outerHeight() > highestBox) {
        highestBox = $(this).outerHeight();
      }
    });
    $(targetClass).css({
      'min-height': highestBox
    });
    console.log(targetClass, highestBox)
  }
  if ($('.customerlove-slider .slick-slide')[0]) {
    equalHeightFixer('.customerlove-slider .slick-slide');
  }
  if ($('.pricingcompare-table-header')[0]) {
    equalHeightFixer('.pricingcompare-table-header');
  }

  function storyBoxSquare() {
    $(".story-box").each(function () {
      $(this).css("minHeight", $(this).outerWidth());
    });
  }
  storyBoxSquare();
  $(window).resize(function () {
    storyBoxSquare();
  })


  // $('.story-list').each(function () {
  //   var objAHeight = $(this).outerHeight(),
  //     objATop = $(this).offset().top;
  //   console.log($(this), objAHeight, objATop);
  // });

  function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return {
      top: _y,
      left: _x
    };
  }



  function storyLine() {
    var storyList = $('.story-list');

    storyList.each(function (index) {
      if (index === (storyList.length - 1)) {
        return;
      }
      var fromPoint = getOffset(storyList[index]),
        toPoint = getOffset(storyList[index + 1]),
        fromPointCenterY = storyList.eq(index).outerHeight() / 2,
        toPointCenterY = storyList.eq(index + 1).outerHeight() / 2;


      var from = function () {},
        to = new String('to');
      from.y = fromPoint.top + fromPointCenterY;
      from.x = fromPoint.left;
      to.y = toPoint.top + toPointCenterY;
      to.x = toPoint.left;

      $.line(from, to);

    });
  }

  storyLine();

  $(window).resize(function () {
    $('.jquery-line').remove();
    storyLine();
  });

  $(document).on('submit', '#freeTrialForm', function (event) {
    var submitBtn = $(this).find('#submitBtn');
    submitBtn.attr('value', 'Loading Bridge...');
  });

  function trialFileUpload() {

    // ************************ Drag and drop ***************** //
    let dropArea = document.getElementById("uploadDrop")

    // Prevent default drag behaviors
    ;
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, preventDefaults, false)
      document.body.addEventListener(eventName, preventDefaults, false)
    })

    // Highlight drop area when item is dragged over it
    ;
    ['dragenter', 'dragover'].forEach(eventName => {
      dropArea.addEventListener(eventName, highlight, false)
    })

    ;
    ['dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, unhighlight, false)
    })

    // Handle dropped files
    dropArea.addEventListener('drop', handleDrop, false)

    function preventDefaults(e) {
      e.preventDefault()
      e.stopPropagation()
    }

    function highlight(e) {
      dropArea.classList.add('highlight')
    }

    function unhighlight(e) {
      dropArea.classList.remove('active')
    }

    function handleDrop(e) {
      var dt = e.dataTransfer
      var files = dt.files

      handleFiles(files)
    }

    let uploadProgress = []
    // let progressBar = document.getElementById('progress-bar')

    // function initializeProgress(numFiles) {
    //   progressBar.value = 0
    //   uploadProgress = []

    //   for (let i = numFiles; i > 0; i--) {
    //     uploadProgress.push(0)
    //   }
    // }

    // function updateProgress(fileNumber, percent) {
    //   uploadProgress[fileNumber] = percent
    //   let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
    //   console.debug('update', fileNumber, percent, total)
    //   progressBar.value = total
    // }

    function handleFiles(files) {
      files = [...files]
      // initializeProgress(files.length)
      // files.forEach(uploadFile)
      files.forEach(previewFile)
    }

    function previewFile(file) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = function () {
        let img = document.createElement('img')
        img.src = reader.result
        document.getElementById('uploadGallery').appendChild(img)
      }
    }

    function uploadFile(file, i) {
      var url = 'https://api.cloudinary.com/v1_1/joezimim007/image/upload'
      var xhr = new XMLHttpRequest()
      var formData = new FormData()
      xhr.open('POST', url, true)
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

      // Update progress (can be used to show progress indicator)
      xhr.upload.addEventListener("progress", function (e) {
        updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
      })

      xhr.addEventListener('readystatechange', function (e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
          updateProgress(i, 100) // <- Add this
        } else if (xhr.readyState == 4 && xhr.status != 200) {
          // Error. Inform the user
        }
      })

      formData.append('upload_preset', 'ujpu6gyk')
      formData.append('file', file)
      xhr.send(formData)
    }
  }
  trialFileUpload();

  $(document).on({
    mouseleave: function () {
      $(this).removeClass('highlight');
    }
  }, '#uploadDrop');

  $('[data-toggle="modal"]').click(function () {
    $(this).parents('.modal').modal('hide');
  })

  function stickyTableHeader() {
    var tableObj = $('#tableCauseAssign'),
      tableHead = tableObj.find('thead'),
      tableWidth = tableHead.outerWidth(),
      tableHeadHeight = tableHead.outerHeight(),
      tableHeadOffset = tableHead.offset().top;
    console.log(tableObj, tableHead, tableHeadHeight, tableHeadOffset);

    $(window).scroll(function () {
      if ($(window).scrollTop() > tableHeadOffset) {
        tableHead.css({
          'position': 'fixed',
          'top': 0,
          'width': tableWidth
        });
        tableObj.css('paddingTop', tableHeadHeight);
        console.log('PUT');
      } else {
        tableHead.css({
          'position': '',
          'top': '',
          'width': ''
        });
        tableObj.css('paddingTop', '');
        console.log('REMOVED');
      }
    })
  }

  stickyTableHeader();
});