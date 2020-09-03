const faye = require('faye');

const client = new faye.Client('https://fayeserver-dot-test-socketcluster.oa.r.appspot.com/faye');

client.subscribe('/foo', function(message) {
    console.log('Subscribed message: ', message)
}).then(function() {
    console.log('Subscription is now active!');
});
