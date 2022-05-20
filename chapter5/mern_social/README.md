# mern_skeleton


## Temporary Mongo DB

Using docker: 

```sh
docker run -it -p 127.0.0.1:27017:27017/tcp -v mern_skeleton:/data/db mongo:4.2.19
```


## Notes

* mongoose ^6.3.1 option usercreateindex is not supported
    ```
    Server started on port 3000.
    webpack://mern_skeleton/./server/server.js?:16
    throw new Error(`unable to connect to database ${_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].mongoUri}: ${err}`);
    ^

    Error: unable to connect to database mongodb://localhost:27017/mernproject: MongoParseError: option usecreateindex is not supported
        at NativeConnection.eval (webpack://mern_skeleton/./server/server.js?:16:9)
        at NativeConnection.emit (events.js:315:20)
        at /home/empty0x7/src/github/full-stack-react-projects-second-edition-practice/chapter3/mern_skeleton/node_modules/mongoose/lib/connection.js:817:30
        at processTicksAndRejections (internal/process/task_queues.js:79:11)
    [nodemon] app crashed - waiting for file changes before starting...
    ^C
    $
    ```
    * https://stackoverflow.com/questions/68958221/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported

## Images

* `client/assets/images/cottage.jpg`
  * https://pixabay.com/photos/cottage-trees-path-trail-house-2955582/
* `client/assets/images/profile-pic.png`
  * https://iconarchive.com/show/all-flat-icons-by-mahm0udwally/User-icon.html