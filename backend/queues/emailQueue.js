const sendEmail = require('../helpers/sendEmail')
const Queue = require('bull');

const emailQueue = new Queue('audio transcoding', { redis: { port: 6379, host: '127.0.0.1' } });
emailQueue.process(async(job) => {
    await sendEmail(job.data);
});

module.exports = emailQueue;