var newsfeed_ul = $('#newsfeed_ul');
var countdown_ul = $('#countdown_ul');

var build_status_table = $('#jekins_project_table');

var primary_calendar_ul = $('#primary_calendar_ul');
var primary_calendar_title = $('#primary_calendar_title');

var secondary_calendar_ul = $('#secondary_calendar_ul');
var secondary_calendar_title = $('#secondary_calendar_title');


function load_newsfeed() {
    for (var newsi in newsfeed) {
        newsfeed_ul.append(
            $('<li class="list-group-item">').addClass('text-' + newsfeed[newsi].level).append(newsfeed[newsi].text)
        );
    }
}

function load_countdown_feed() {
    for (var ci in countdown_feed) {
        countdown_ul.append(
            $('<li class="list-group-item">' + countdown_feed[ci] + '</li>')
        );
    }
}

function load_build_status(offset, limit) {
    build_status_table.fadeOut(500, function() {
        build_status_table.empty();

        build_status_table.append($('<tr><th class="heavy">Project</th><th class="heavy">Since Last Fail</th></tr>'));

        for (var bsi = offset; bsi < offset + limit && bsi < build_status.length; bsi++) {
            var project = build_status[bsi];

            if (project.status == PROJECT_FAIL) {
                build_status_table.append(
                    $('<tr>')
                        .addClass(build_status_text[project.status])
                        .append('<td class="heavy">' + project.project + '</td>')
                        .append('<td class="heavy">' + project.info + '</td>')
                );
            }
            else
            {
                build_status_table.append(
                    $('<tr class="text-success">')
                        .append('<td class="heavy">' + project.project + '</td>')
                        .append('<td class="heavy">' + project.info + '</td>')
                )
            }
        }

        build_status_table.fadeIn();
    });
}

function load_primary_calendar(calendarId)
{
    load_calendar(calendarId, primary_calendar_ul, primary_calendar_title);
}

function load_secondary_calendar(calendarId)
{
    load_calendar(calendarId, secondary_calendar_ul, secondary_calendar_title);
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

    load_build_status(current_build_status_id, BUILD_STATUS_SINGLE_PAGE_ITEMS);
}

$(document).ready(function() {
    load_newsfeed();
    load_countdown_feed();
    load_build_status(0, BUILD_STATUS_SINGLE_PAGE_ITEMS);

    window.setInterval(calendar_iterate, CALENDAR_FLIP_INTERVAL);
    window.setInterval(build_status_iterate, BUILD_STATUS_FLIP_INTERVAL);
});