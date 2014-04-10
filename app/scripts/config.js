var newsfeed = [
    {text: 'CRAYFISH RELEASED CASINO X VER 89 ON IOS', level: 'info'},
    {text: 'Steve just fixed Crayfish server! Yeah yeah.', level: 'success'},
    {text: 'Steve just fixed Crayfish server! Yeah yeah.', level: 'success'},
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

var PROJECT_SUCCESS = 0;
var PROJECT_FAIL = 1;

var build_status = [
    {project: 'Crayfish', status: 0, info: '22 days'},
    {project: 'bank', status: 1, info: 'Fail at April 8, 11pm'},
    {project: 'tuna', status: 0, info: '30 days'},
    {project: 'identity', status: 1, info: 'Fail at March 30, 10am'},
    {project: 'Jellyfish', status: 0, info: '200 days'},
    {project: 'Pokethon', status: 0, info: '22 days'},
    {project: 'property', status: 0, info: '1 day'},
    {project: 'news', status: 0, info: '30 days'},
    {project: 'admin', status: 1, info: 'Fail at March 30, 9am'},
    {project: 'panel', status: 0, info: '200 days'},
    {project: 'sponsorpay', status: 0, info: '7 day'},
    {project: 'momo', status: 0, info: '30 days'},
    {project: 'redis', status: 1, info: 'Fail at March 30, 9am'},
];

var build_status_text = ['success', 'danger'];

var PRIMARY_CALENDAR_ID = 'di6nr0eduifi0n03qcdjfmhm44@group.calendar.google.com'; //ATA Downtown

var secondary_calendar_ids = [
    'athinkingape.com_2d36363234303936352d383237@resource.calendar.google.com', //3rd Floor
    'athinkingape.com_31353135333838352d363838@resource.calendar.google.com', //4th Floor war room
    'athinkingape.com_323938303031352d383837@resource.calendar.google.com',
    'athinkingape.com_32333731383537312d313132@resource.calendar.google.com',
    'athinkingape.com_3435383238373533323836@resource.calendar.google.com'
];

// time to flip calendar. in millisecond
var CALENDAR_FLIP_INTERVAL = 5000;

var BUILD_STATUS_FLIP_INTERVAL = 8000;
var BUILD_STATUS_SINGLE_PAGE_ITEMS = 5;
