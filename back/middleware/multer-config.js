const multer = require("multer");


// Types of files accepted
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
  "video/mp4": "mp4",
  "video/avi": "avi",
    "video/mpeg": "mpeg",
    "video/quicktime": "quicktime",
    "video/x-msvideo": "x-msvideo",
    "video/x-flv": "flv",
    "video/x-ms-wmv": "x-ms-wmv",
    "video/x-ms-asf": "x-ms-asf",
    "video/x-ms-wvx": "x-ms-wvx",
    "video/x-ms-wm": "x-ms-wm",
    "video/x-ms-wmx": "x-ms-wmx",    
};

// Configure multer - creates a storage object
const storage = multer.diskStorage({
  //Setting the destination of the file (images folder)
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  //Setting the name of the file, using the original name of the file, spaces replaced by underscores + timestamp
  filename: (req, file, cb) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    //Checks if extension is allowed
    if (extension === undefined) {
      return cb(new Error("Extension non valide"));
    }
    cb(null, name + Date.now() + "." + extension);
  },
});

//Exports the storage object and declaring the file type accepted
module.exports = multer({ storage }).single("image");