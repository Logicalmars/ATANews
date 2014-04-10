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

function load_calendar(calendarId, calendar_ul, calendar_title)
{
    calendar_ul.empty();

    gapi.client.load('calendar', 'v3', function() {
        var now = new Date();
        var tomorrow = new Date();
        tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));

        var request = gapi.client.calendar.events.list({
            'calendarId': calendarId,
            'timeMin': dateFormat(now, "isoDateTime") + 'Z',
            'timeMax': dateFormat(tomorrow, "isoDateTime") + 'Z',
        });

        request.execute(function(resp) {
            calendar_title.text(resp.summary);
            fill_calender(resp.items, calendar_ul);
        });
    });
}