const { createHash } = require('crypto');
const https = require('https');

export default function(apiSecret: string) {

    const agent = new https.Agent({ rejectUnauthorized: false, });
    const hash = createHash('sha1');
    hash.update(apiSecret);

    const hash_secret = hash.digest('hex');


    const headers = {
        'Content-Type': 'application/json',
        'api-secret': hash_secret
    };
    return {
        getParams: {
            method: 'GET',
            headers,
            agent,
        },
        postParams: {
            method: 'POST',
            headers,
            agent,
        },
    };
};