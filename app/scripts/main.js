var newsfeed_ul = $('#newsfeed_ul');
var deploy_ul = $('#deploy_ul');

var build_status_fail_table = $('#project_fail_table');
var build_status_success_table = $('#project_success_table');

var primary_calendar_ul = $('#primary_calendar_ul');
var primary_calendar_title = $('#primary_calendar_title');

var secondary_calendar_ul = $('#secondary_calendar_ul');
var secondary_calendar_title = $('#secondary_calendar_title');

var not_in_the_office_ul = $('#not_in_office_ul');

var charts_placeholder_div = $('#charts_placeholder');
var charts_canvas_div = $('#chart_canvas_div');

function _load_newsfeed(offset, limit) {
    newsfeed_ul.empty();

    var newsi = offset;
    for (var i = 0; i < limit; i++)
    {
        newsfeed_ul.append(
            $('<li class="list-group-item">')
                .addClass('text-' + newsfeed[newsi].level)
                .append(newsfeed[newsi].timestamp + '</br>' + newsfeed[newsi].text)
        );

        newsi = (newsi + 1) % newsfeed.length;
    }
}

function load_newsfeed(offset, limit) {
    var first_child = newsfeed_ul.children(':first');
    console.log(first_child);

    if (first_child.length)
        first_child.fadeOut(500, function() {_load_newsfeed(offset, limit);});
    else
        _load_newsfeed(offset, limit);
}

function load_deploy_feed() {
    for (var ci in deploy_feed) {
        var classname = 'info';
        if (deploy_feed[ci].toLowerCase().search('deploying') >= 0)
        {
            classname = 'warning'
        }
        if (deploy_feed[ci].toLowerCase().search('deployed') >= 0)
        {
            classname = 'success'
        }

        deploy_ul.append(
            $('<li class="list-group-item text-' + classname + '">' + deploy_feed[ci] + '</li>')
        );
    }
}

function load_build_fail_status() {
    build_status_fail_table.fadeOut(500, function() {
        build_status_fail_table.empty();

        for (var bsi = 0; bsi < build_status.length; bsi++) {
            var project = build_status[bsi];

            if (project.status === PROJECT_FAIL)
            {
                build_status_fail_table.append(
                    $('<tr>')
                        .addClass(build_status_text[project.status])
                        .append('<td class="heavy">' + project.project + '</td>')
                        .append('<td class="heavy">' + project.info + '</td>')
                );
            }
        }

        build_status_fail_table.fadeIn();
    });
}

function load_build_success_status(offset, limit) {
    build_status_success_table.fadeOut(500, function() {
        build_status_success_table.empty();

        build_status_success_table.append($('<tr><th class="heavy">Project</th><th class="heavy">Since Last Fail</th></tr>'));

        for (var bsi = offset; bsi < offset + limit && bsi < build_status.length; bsi++) {
            var project = build_status[bsi];

            if (project.status == PROJECT_SUCCESS)
            {
                build_status_success_table.append(
                    $('<tr class="text-success">')
                        .append('<td class="heavy">' + project.project + '</td>')
                        .append('<td class="heavy">' + project.info + '</td>')
                )
            }
        }

        build_status_success_table.fadeIn();
    });
}

function load_primary_calendar(calendarId)
{
    load_calendar(calendarId, primary_calendar_ul, primary_calendar_title);
}

function load_secondary_calendar(calendarId)
{
    // TODO: cache calendar events in JS, instead of querying Google every load
    load_calendar(calendarId, secondary_calendar_ul, secondary_calendar_title);
}

function load_not_in_the_office()
{
    not_in_the_office_ul.empty();
    for (var i in people_not_in_the_office)
    {
        not_in_the_office_ul.append(
            $('<li>' + people_not_in_the_office[i] + '</li>')
        );
    }
}

function load_warn()
{
    charts_placeholder_div.empty();
    charts_canvas_div.hide();

    //Warn
    var source   = $("#warning-template").html();
    var template = Handlebars.compile(source);
    var context  = {warn_text: "fire alarm test at 3pm. Don't panic"};
    var html     = template(context);

    charts_placeholder_div.html(html);
}

function load_gross_chart()
{
    charts_placeholder_div.empty();
    charts_canvas_div.hide();

    //Load and compile handlebar template
    var source   = $("#gross-chart-template").html();
    var template = Handlebars.compile(source);
    var context  = {download: 5001200, active_users: 121234, review_stars: '4.7 Stars'};
    var html     = template(context);

    charts_placeholder_div.html(html);
}

function load_game_chart()
{
    charts_placeholder_div.empty();
    charts_canvas_div.show();

    //Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#game_chart").get(0).getContext("2d");
    //This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx);

    var data = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                strokeColor : "rgb(243,156,18)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [30,40,60,54,85,90,100]
            },
            {
                strokeColor : "rgb(0,188,140)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19,96,27,110]
            }
        ]
    };

    var options = {
        scaleLineColor : "rgb(52,152,213)",
        scaleFontStyle : "bold",
        scaleLineWidth : 3,
        animation: false,
        scaleShowGridLines: true,
        bezierCurve: false,
        datasetFill: false,
        datasetStrokeWidth : 10
    };

    myNewChart.Line(data, options);
}

var current_calendar_id = 0;
function calendar_iterate() {
    current_calendar_id += 1;
    if (current_calendar_id >= secondary_calendar_ids.length)
    {
        current_calendar_id = 0;
    }

    load_secondary_calendar(secondary_calendar_ids[current_calendar_id]);
}

var current_build_status_id = 0;
function build_status_iterate() {
    current_build_status_id += BUILD_STATUS_SINGLE_PAGE_ITEMS;
    if (current_build_status_id >= build_status.length)
    {
        current_build_status_id = 0;
    }

    load_build_success_status(current_build_status_id, BUILD_STATUS_SINGLE_PAGE_ITEMS);
}

var current_newsfeed_id = 0;
function newsfeed_iterate() {
    current_newsfeed_id ++;
    if (current_newsfeed_id >= newsfeed.length)
    {
        current_newsfeed_id = 0;
    }

    load_newsfeed(current_newsfeed_id, NEWSFEED_SINGLE_PAGE_ITEMS);
}

var current_charts = 0;
function charts_iterate() {
    current_charts = (current_charts + 1) % 3;

    switch (current_charts)
    {
        case 0:
            load_warn();
            break;
        case 1:
            load_gross_chart();
            break;
        case 2:
            load_game_chart();
            break;
    }
}

// Update static information, usually in a longer time interval
function update_info() {
    load_primary_calendar(PRIMARY_CALENDAR_ID);
    load_build_fail_status();
}

$(document).ready(function() {
    load_newsfeed(0, NEWSFEED_SINGLE_PAGE_ITEMS);
    load_deploy_feed();
    load_build_success_status(0, BUILD_STATUS_SINGLE_PAGE_ITEMS);
    load_build_fail_status();
    load_not_in_the_office();
    load_gross_chart();
    calendar_iterate();

    //Update animation (fliping, fadeOut/In)
    window.setInterval(calendar_iterate, CALENDAR_FLIP_INTERVAL);
    window.setInterval(build_status_iterate, BUILD_STATUS_FLIP_INTERVAL);
    window.setInterval(newsfeed_iterate, NEWSFEED_STATUS_FLIP_INTERVAL);
    window.setInterval(charts_iterate, CHARTS_FLIP_INTERVAL);

    //Update information
    window.setInterval(update_info, UPDATE_INFORMATION_INTERVAL);
});