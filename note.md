## what can you build with nuxt.js

1. universal App
   first view is rendered dynamically on the server ; after first load ,app turns into SPA, it's great for seo
2. spa
3. static app
   pre-rendered views are loaded,after first load,app turns into SPA.you don't need node server.also great for seo.

## nuxt.js pages,routing,views

the most obvious improvement compared to normal vue app.
create folder or files without creating router config.
nuxt components has two more methods or prop compared to normal vue. they are 'validate' and 'layout'

1. <a> tag href will send a new request to server and back a new page.
2. <nuxt-link> will remain spa. nuxt-link will catch each click on <a> tag,prevent default event by sending request.
3. validation : validate method before rendering out.
4. nested routes: <nuxt-child/> can render multi pages.
5. layouts: provide app frame,layouts contain some pages and pages contain childPages or components.
6. error.vue reserved name error page
7. global styles,nuxt.config.js
8. everytime reload the page,nuxt re-render the page.

## project-pages routing view

1. font.google.com
2. '~assets' in css: config by webpack
3. official vue style guide, the component only use once should start with 'the'
4. nuxt-link-active
5. error.vue
   in error.vue use <a>tag instead of <nuxt-link> beacuse when go to this page,our js code crash ,then nuxt-link may not work,our app might be dead,so use a normal <a> reload the page.

> 1. use object spread operation to transfer data to one object
> 2. use vue style guide to naming
> 3. $attrs and$listeners in high order components

## handling data

1. asyncData()
   1. in Pages folder,nuxt excute on the server;
   2. return the data of the component. it can wait until the async method to return something.like sync
   3. data return by asyncData will be merged with data()
   4. this: asyncData runs before the component actually created.
   5. we need give the asyncData an idea of when were done,otherwise it will immediately return the finished page.
      1. promise when resolved
      2. callback when call callback you tell the asyncData that you have done
   6. is not always run on server.when first fetch page from server(refresh or <a> click),then the app turns into spa.then asyncData will be run on the client;callback func first param is like node,if null means no error.but when have error it will route to the errorpage.
   7. context:url params,query and redirect func etc.
   8. when routing into some component with asyncData fetching data. when asyncData failed it will route into that component.
2. vuex
   1. use function to create a store instead of an object,beacuse nodejs can call it when setup the store then return a new object,otherwise all uses will get the same instance.
   2. it will be automatically by nuxt,and be injected into our components
   3. init store on server
   4. nuxtServerInit()
      1. one time only on server
      2. special action will be dispatched auto by nuxt
3. fetch
   1. either runs in server or runs in client
   2. para context like the asyncData
   3. promise but don't return data

## connect app to the backend

1. nuxt run the code in it's 'shell',you can't excute server side code with certain limitation
2. in nuxtServerInit,context.req have the same thing with express cause they use the same middleware.
3. fetch and post data using firebase,url with '.json',
4. when use proxy to fetch data from endpoint with https,we can use 'request' module.
   reference
5. https://stackoverflow.com/questions/17690803/node-js-getaddrinfo-enotfound
6. https://github.com/axios/axios/issues/925
7. https://github.com/axios/axios/pull/959

```
request({
  url:"",
  proxy:'http://127.0.0.1:1087'
})
```

5. terminal proxy http_proxy https_proxy
6. when update data,other page can see the change. can 1. use async data in all page 2. update store (more elegant)
   > 1. var b = {...obj1,id:'x'}

## config plugins modules

1. head:component option can configurate doc's tilte,meta,link
2. progress config in nuxt.config.js
3. loadingIndicator in spa.
4. in nuxt.config 'env' set enviroment variable. which can be access by process.env
5. in nuxt.config 'generate' can change the way nuxt generate pages.
6. in nuxt.confg 'rootDir';'router' config as vue-router as can config 'extendRoutes' which can add extra root besides pages.
7. in nuxt.config 'srcDir' like middleware pages
8. in nuxt.config 'transition' transition when change route.
9. plugins can register global components,global filters etc. any code you want to load before root vue instance mount.
10. modules i think it can not only do what plugins do,but also can inject config into nuxt config .it also seems that it can package the code into vendor

## middleware

a function that excute before a route loaded,
it runs either at the first load on the server,or excute on the client.

1. can be set in layout,page or router config as global
2. firebase auth rest api. we use it's auth to signin signup and write database with auth.
3. firebase outgoing request
4. persist token;
   1. we can first get the token from localstorage when the first page rendered.
   2. middleware
   3. reload the page and get the token can use cookie(token storage on server);
   4. js-cookie set read cookie from js.

## server side

1. serverMiddleware connect your nuxt app to server side code,achieve database etc.
2. use create-nuxt-app to create a new project with using a custom server framework like express
   1. still use nuxt to pre-render the server

## deployment

1. universal app
   1. nodejs host required
   2. npm run build npm run start
   3. need all the folders and files not just .nuxt
2. spa
   1. static host required
   2. change mode to 'spa' just npm run build
   3. just need 'dist' fold
   4. you shouldn't use nuxtServerInit again
   5. always return index.html
3. static

   1. static host required
   2. change mode to 'universal' npm run generate
   3. it'll pre generate all folders
   4. it can pre-render the detail pages too. like post/postId use 'generate' config

   ```
    generate:{
      routes: function(){
        return [
          '/posts/123'
        ]
      }
    }
   ```

   5. besides manually generate by some route, we can request a list of postId then return a array of route like upper

   ```
   generate: {
    routes: function() {
      return axios
        .get("https://nuxt-blog.firebaseio.com/posts.json")
        .then(res => {
          const routes = [];
          for (const key in res.data) {
            routes.push({
              route: "/posts/" + key,
              payload: {postData: res.data[key]}
            });
          }
          return routes;
        });
    }
   }
   ```

   'payload' use upper which can be sent into that detail page hence it need not to request again, it can be access by context.payload in asyncData function
   you just need to re-generate your app when content change it can be setup with a dynamically automate process;

   6. it cannot access 'request' because we do not have server when generating and it also cannot access 'localStorage'
