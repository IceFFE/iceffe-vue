/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function(e) {
        return handleError(e, vm, info + " (Promise/async)");
      });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res;
}

Vue.prototype.$emit = function(event) {
  // 实例本身
  var vm = this;

  // if (process.env.NODE_ENV !== 'production') {
  //   var lowerCaseEvent = event.toLowerCase();
  //   if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
  //     tip(
  //       "Event \"" + lowerCaseEvent + "\" is emitted in component " +
  //       (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
  //       "Note that HTML attributes are case-insensitive and you cannot use " +
  //       "v-on to listen to camelCase events when using in-DOM templates. " +
  //       "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
  //     );
  //   }
  // }

  // 查找回调事件
  var cbs = vm._events[event];
  // 如果存在事件
  if (cbs) {
    cbs = cbs.length > 1 ? toArray(cbs) : cbs;
    var args = toArray(arguments, 1);
    var info = 'event handler for "' + event + '"';
    for (var i = 0, l = cbs.length; i < l; i++) {
      invokeWithErrorHandling(cbs[i], vm, args, vm, info);
    }
  }
  return vm;
};
