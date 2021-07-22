// Unsplash API
const count = 10;
const apiKey = 'TGDFcjm__wBxFIcDiPFCQxwfDul5ktD71GyFpC_I8qQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photos from Unsplash API
async function getPhotos(){
    try{
      const response = await fetch(apiUrl);
      const data = await response.json();
        console.log(data);
    }catch (error){
    // Catch Error Here
}
}
// On Load
getPhotos();