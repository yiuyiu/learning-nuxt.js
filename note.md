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
