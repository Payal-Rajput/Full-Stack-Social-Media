import Imagekit from 'imagekit';
import config from '../config/config.js';

var imagekit=new Imagekit({
    publicKey:config.PUBLIC_KEY,
    privateKey:config.PRIVATE_KEY,
    urlEndpoint:config.URL_ENDPOINT
});


export async function uploadFile(file,filename) {
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file: file.buffer, // required
            fileName: filename, // required
            folder: "n22-social-application" // optional
        }, function(error, result) {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}