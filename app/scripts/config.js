var newsfeed = [
    {timestamp: "April 5th", text: 'Happy wins a jackpot of 1,000 diamonds', level: 'success'},
    {timestamp: "April 4th", text: 'CRAYFISH RELEASED CASINO X VER 89 ON IOS', level: 'info'},
    {timestamp: "March 4th 10am", text: 'ATA just received best company award!', level: 'warning'},
    {timestamp: "April 10th", text: 'Steve just fixed Crayfish server!', level: 'success'},
    {timestamp: "April 4th", text: 'CRAYFISH RELEASED CASINO X VER 89 ON IOS', level: 'info'},
    {timestamp: "April 4th", text: 'Steve just fixed Crayfish server! Yeah yeah.', level: 'success'},
    {timestamp: "April 4th", text: 'Someone break the panel, HELP!', level: 'danger'},
    {timestamp: "April 4th", text: 'Steve just fixed Crayfish server! Yeah yeah.', level: 'success'},
    {timestamp: "April 4th", text: 'Steve fixed the panel, thanks.', level: 'success'}
];

var deploy_feed = [
    'Crayfish: David deploying...',
    'Tuna: recently deployed at 04/01 10:20am',
    'Jellyfish: Derek deploying...'
];

var PROJECT_SUCCESS = 0;
var PROJECT_FAIL = 1;

var build_status = [
    {project: 'Crayfish', status: 0, info: '22 days'},
    {project: 'bank', status: 0, info: '23 days'},
    {project: 'tuna', status: 0, info: '30 days'},
    {project: 'identity', status: 1, info: 'March 30, 10am'},
    {project: 'Jellyfish', status: 0, info: '200 days'},
    {project: 'Pokethon', status: 0, info: '22 days'},
    {project: 'property', status: 0, info: '1 day'},
    {project: 'news', status: 0, info: '30 days'},
    {project: 'admin', status: 1, info: 'March 30, 9am'},
    {project: 'panel', status: 0, info: '200 days'},
    {project: 'sponsorpay', status: 0, info: '7 day'},
    {project: 'momo', status: 0, info: '30 days'},
    {project: 'redis', status: 1, info: 'March 30, 9am'},
    {project: 'db02.slave01', status: 1, info: 'March 30, 10am'},
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
var CALENDAR_FLIP_INTERVAL = 10000;
var BUILD_STATUS_FLIP_INTERVAL = 8000;
var NEWSFEED_STATUS_FLIP_INTERVAL = 10000;
// time to update static information
var UPDATE_INFORMATION_INTERVAL = 10 * 60 * 1000;

var BUILD_STATUS_SINGLE_PAGE_ITEMS = 5;
var NEWSFEED_SINGLE_PAGE_ITEMS = 4;

var people_not_in_the_office = [
    'Dan',
    'Steve',
    'Eric'
];
