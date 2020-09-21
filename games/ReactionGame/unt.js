(function ($, ElementQueries) {
  document.addEventListener("arlojscontrolsloaded", function () {
    var platformID = "websitetestdata.arlo.co"; // Change platformID to point at your own account

    var eventTemplate = {
      moduleType: "EventTemplate",
      targetElement: "#event-template",
      template: "#event-template-template",
      queryStringConfig: ["eventtemplate"],
      maxCount: 1,
      includeLoadMoreButton: false,
      filter: {
        code: "TC_11",
      },
    };

    var app = new window.ArloWebControls();

    app.start({
      platformID: platformID,
      googleMapsAPIKey: "AIzaSyAQecSspMnsipB9oV0N4WKbqFNy5zhlNwg",
      showDevErrors: false,
      modules: [eventTemplate],
    });
  });

  window.eventTemplateOnShow = function (getEventItems) {
    var eventItems = $(getEventItems());
    var listParent = eventItems.parent();

    listParent.removeClass("events-1 events-2 events-3 events-4");

    // if (!listParent.hasClass('events-1') &&
    //     !listParent.hasClass('events-2') &&
    //     !listParent.hasClass('events-3') &&
    //     !listParent.hasClass('events-4')) {
    switch (listParent.find(".arlo-event-listitem").length) {
      case 1:
        listParent.addClass("events-1");
        break;
      case 2:
        listParent.addClass("events-2");
        break;
      case 3:
        listParent.addClass("events-3");
        break;
      default:
        listParent.addClass("events-4");
        break;
    }
    // }

    ElementQueries.init();

    eventItems.find(".event-container").css("min-height", "0");

    var highest = 0;

    eventItems.each(function (i, event) {
      var $event = $(event);
      var $eventItem = $(event).find(".event");

      $event.find(".event-container").off("click");
      $event.find(".event-container").off("focusout");

      $event.find(".event-container").on({
        focusout: function (e) {
          if ($(e.relatedTarget).is("a")) {
            var href = $(e.relatedTarget).attr("href");
            if (href) {
              window.location = href;
            }
          }
          $(event).find(".event").removeClass("expanded");
        },
        click: function (e) {
          if ($eventItem.hasClass("expanded")) {
            setTimeout(function () {
              $eventItem.find(".event-container").focusout();
            }, 0);
          } else {
            $eventItem.addClass("expanded");
          }
        },
      });

      if ($eventItem.height() > highest) {
        highest = $eventItem.height();
      }

      if ($event.find(".session-popup-content").length > 0) {
        var modal = new tingle.modal({
          footer: true,
          closeMethods: ["overlay", "button", "escape"],
          cssClass: ["arlo"],
        });

        modal.setContent($event.find(".session-popup-content").html());

        modal.addFooterBtn("Close", "arlo-btn-primary", function () {
          modal.close();
        });

        $event.find(".session-popup-trigger").click(function () {
          modal.open();
        });
      }
    });

    if (eventItems.width() > 767) {
      eventItems.find(".event").height(highest);
      eventItems.find(".event-container").css("min-height", highest);
    }
  };

  window.oaOnShow = function (getOAItems) {
    var oaItems = $(getOAItems());

    oaItems.each(function (i, oa) {
      var $oa = $(oa);
      $oa.click(function (e) {
        $oa.toggleClass("expanded");
      });
    });
  };

  window.onEventFilterLoad = function () {
    $("#arlo-filter-toggle")
      .off()
      .click(function () {
        $(this).parent().toggleClass("arlo-show-filter");
      });
  };
})(jQuery, window.ElementQueries);
