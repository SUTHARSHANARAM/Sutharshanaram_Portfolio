const fs = require('fs');
const path = require('path');
const https = require('https');

const s3Url = "https://acp-aep-cs-blobstore-prod-jpn3-data.adobe.io/c6590453-1701-4ade-8b78-0fbdbcad9f97?response-content-disposition=attachment%3B%20filename%3D%22Sutharshanaram_Resume%2520%2520%25281%2529.pdf%22&response-content-type=application%2Fpdf&x-user-client-id=CC-CollabService&x-region=jpn3&x-version-id=2&x-partition-prefix=04c00ddda52a0717371cbbde4ac186807544f1ba760ef7c152d1d5723c3d4758&x-resource-length=274617&x-resource-id=57c32fd9a70d724c2c49bcad3fd8f6d77235e8bb7278d0dd21a68879666e6b7a44139761&x-key-id=BN5JZ&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0xIkcwRQIhAL%2FTDBPWzbN%2F1%2Fp3Cpu2cfjDKMw1ODTVyQ4ALX8zDHL5AiA%2F9zVDSZNVbBP086oe5%2FBnkRjkQYhH0xe%2BwWzzR8YFDSr0AQiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDc2Njk2OTg0NDA3OCIMGjkBWgWAsaXYmXn1KsgB%2BlVj8EEOJJtdiOEpZ5qIb%2Br4Rcij7TAl%2FeA7ZgekEncaWLE%2BHYZnnpI0hdRFRM1ka2zZyZMbLY2Dw5AZ67QN%2Bn8BsakFGMqw%2BMgV36VQGIEmaT2caf2mlj5Yvy%2Bhh6pukX9YAQGeaPs2PSiKXALFwx5LxmJKr9SBEBor47E1tLGdKdSx5JGXwcsXD%2FvROvTEPwL5bme1duaknnUVnbXQhAVVrvu95usgcyfQ92PdzTnGWJ5QUT2LPGCPOWRcUO7yQpmwcRbckCkw8eHx0gY6mAHfyDZ8c4jfO7TAWIx2YLNrrN8s3WjwuJKvDoubdkNVVLi39u%2FE2%2BUIEdNYyzRKQ1b5excwAgWkq%2B4acyLwSPCj036m9zRmlu%2FNssfGvJFGk4gbsYVA1%2FWvD5T3CMu3fz3ZZF1oEh8iuAdgFxA3yJRQAGr7zmpnx1naZfyAIsaMNEEqIIDFQTQr5F20FK1yCEcDL8iXys6S3A%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260719T070719Z&X-Amz-SignedHeaders=host&X-Amz-Credential=ASIA3FEXXCFXIQMP4LVT%2F20260719%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Expires=14400&X-Amz-Signature=6ec2e8a3a23aa5bdcccff2da726ad006138fc94848d4db32ab51d05d96e50299";

const destPath = "c:\\Users\\Sutharshanaram\\Downloads\\Portfolio\\public\\resume.pdf";

// Make sure public directory exists
const publicDir = path.dirname(destPath);
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

console.log("Downloading resume to:", destPath);
const file = fs.createWriteStream(destPath);

https.get(s3Url, (response) => {
  if (response.statusCode !== 200) {
    console.error("Failed to download PDF. Status Code:", response.statusCode);
    return;
  }
  
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log("Download completed successfully!");
  });
}).on('error', (err) => {
  fs.unlink(destPath, () => {});
  console.error("Error during download:", err.message);
});
