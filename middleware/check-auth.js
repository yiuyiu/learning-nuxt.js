export default function(context) {
  context.store.dispatch("initAuth", context.req);
  // context.req on the client should be null
}
