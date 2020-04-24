
# ReactJS + PhoneGap boilerplate

This project is a manual combination of the following generators' output:

* [PhoneGap](http://docs.phonegap.com/getting-started/3-create-your-app/cli), `phonegap create app --id "com.interactivestrategies.phonegap" --name "Demo";`
* [Create React App](https://create-react-app.dev), `create-react-app app;`
* [Artax](https://www.npmjs.com/package/artax), `artax new;`

Useful commands:

    # Start Gulp + ReactJS component watcher:
    cd ./app;
    yarn watch;
    
    # Production build:
    cd ./app;
    yarn build;
    
    # Serve packaged ./www outout to PhoneGap mobile dev app:
    phonegap serve --autoreload;
