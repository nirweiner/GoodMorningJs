function getGreeting() {


    var messages = [
{
    message: 'Good night',
    from: 0,
    to: 4
}, {
    message: 'Good morning',
    from: 5,
    to: 11
}, {
    message: 'Good afternoon',
    from: 12,
    to: 17
}, {
    message: 'Good night',
    from: 18,
    to: 24
}
    ];

    var currentHour = new Date().getHours();

    var message = _.find(messages, function (m) {
        return currentHour >= m.from && currentHour <= m.to;
    });

    return message.message;
}