//DNS module
import { error } from 'console';
import dns from 'dns';

// dns.lookup('google.com', (error, address, family) => {
//     if(error) throw error;
//     console.log(address);
//     console.log(family);
// })

dns.resolve('google.com', 'MX', (error, records) => {
    if(error) throw error;
    console.log(records);

})