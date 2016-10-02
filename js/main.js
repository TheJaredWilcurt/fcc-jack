$(".cardItem").hover(function () {
    $(this).find('.cardContent').toggle();
});

function makeListItem (link, id) {
    var title = '';
    if (link.url) {
        title = '<strong><a href="' + link.url + '">' + link.title + '</a></strong>';
    } else {
        title = '<strong>' + link.title + '</strong>';
    }
    $('#' + id).append('<li>' + title + ' - ' + link.text + '</li>');
}

$.get('js/mock.json', function (json) {
    console.log(json);
    var payload = [
        { "list": json.gamedev.links,           "id": "gamedevlinks"           },
        { "list": json.gamedev.software,        "id": "gamedevsoftware"        },
        { "list": json.graphics.paths,          "id": "graphicspaths"          },
        { "list": json.graphics.terminology,    "id": "graphicsterminology"    },
        { "list": json.graphics.resources,      "id": "graphicsresources"      },
        { "list": json.graphics.software,       "id": "graphicssoftware"       },
        { "list": json.web.terminology,         "id": "webterminology"         },
        { "list": json.web.software,            "id": "websoftware"            },
        { "list": json.web.links,               "id": "weblinks"               },
        { "list": json.programming.languages,   "id": "programminglanguages"   },
        { "list": json.programming.comparisons, "id": "programmingcomparisons" },
        { "list": json.programming.resources,   "id": "programmingresources"   }
    ];
    for (var j = 0; j < payload.length; j++) {
        var listJson = payload[j].list;
        var id = payload[j].id;
        for (var i = 0; i < listJson.length; i++) {
            makeListItem(listJson[i], id);
        }
    }
});
