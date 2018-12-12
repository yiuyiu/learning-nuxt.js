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
> 3. $attrs and $listeners in high order components
