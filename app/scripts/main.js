(function () {
    var newsfeed = [
        {text: 'CRAYFISH RELEASED CASINO X VER 89 ON IOS', level: 'info'},
        {text: 'Steve just fixed Crayfish server! Yeah yeah.', level: 'success'},
        {text: 'Steve just fixed Crayfish server! Yeah yeah.', level: 'success'},
        {text: 'Steve just fixed Crayfish server! Yeah yeah.', level: 'success'},
        {text: 'Steve just fixed Crayfish server! Yeah yeah.', level: 'success'},
        {text: 'Steve just fixed Crayfish server! Yeah yeah.', level: 'success'},
        {text: 'Someone break the panel, HELP!', level: 'danger'},
        {text: 'Steve fixed the panel, thanks.', level: 'success'}
    ];

    var countdown_feed = [
        '20 days: Crayfish ad champion',
        '17 days: Tuna ad champion',
        '12 hours: Squid urgent fix'
    ];

    //Status: 0 success, 1 fail
    var build_status = [
        {project: 'Crayfish', status: 0, info: '22 days'},
        {project: 'bank', status: 1, info: 'Fail at April 8, 11pm'},
        {project: 'tuna', status: 0, info: '30 days'},
        {project: 'identity', status: 1, info: 'Fail at March 30, 10am'},
        {project: 'Jellyfish', status: 0, info: '200 days'},
    ];

    var build_status_text = ['success', 'danger'];

    var newsfeed_ul = $('#newsfeed_ul');
    var countdown_ul = $('#countdown_ul');
    var build_status_table = $('#jekins_project_table');

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

    function load_jenkins_status() {
        for (var bsi in build_status) {
            var project = build_status[bsi];

            build_status_table.append(
                $('<tr>')
                    .addClass(build_status_text[project.status])
                    .append('<td class="heavy">' + project.project + '</td>')
                    .append('<td class="heavy">' + project.info + '</td>')
            );
        }
    }

    $(document).ready(function() {
        load_newsfeed();
        load_countdown_feed();
        load_jenkins_status();
    });
})();

var primay_calendar_ul = $('#primary_calendar_ul');

function fill_primary_calendar(items) {
    fill_calender(items, primay_calendar_ul);
}

function append_single_calendar_event(item, calendar_ul)
{
    var datestr = "";

    if ('date' in item.start) {
        datestr = "ALL DAY";
    }
    else {
        datestr = dateFormat(Date.parse(item.start.dateTime), "HH:MM") + ' - ' + dateFormat(Date.parse(item.end.dateTime), "HH:MM");
    }

    calendar_ul.append(
        $('<div class="list-group-item">').append('<p>' + datestr + '</br>' + item.summary + '</p>')
    );
}
function fill_calender(items, calendar_ul)
{
    for (var i in items)
    {
        if ('date' in items[i].start) {
            append_single_calendar_event(items[i], calendar_ul);
        }
    }

    for (var i in items)
    {
        if ('dateTime' in items[i].start) {
            append_single_calendar_event(items[i], calendar_ul);
        }
    }
}