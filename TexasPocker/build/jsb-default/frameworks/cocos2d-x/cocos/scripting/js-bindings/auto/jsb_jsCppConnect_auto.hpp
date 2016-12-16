#include "base/ccConfig.h"
#ifndef __jsCppConnect_h__
#define __jsCppConnect_h__

#include "jsapi.h"
#include "jsfriendapi.h"

extern JSClass  *jsb_jsCppConnect_class;
extern JSObject *jsb_jsCppConnect_prototype;

bool js_jsCppConnect_jsCppConnect_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_jsCppConnect_jsCppConnect_finalize(JSContext *cx, JSObject *obj);
void js_register_jsCppConnect_jsCppConnect(JSContext *cx, JS::HandleObject global);
void register_all_jsCppConnect(JSContext* cx, JS::HandleObject obj);
bool js_jsCppConnect_jsCppConnect_cppToJs(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsCppConnect_jsCppConnect_getInstence(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsCppConnect_jsCppConnect_testlog(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsCppConnect_jsCppConnect_jsToCpp(JSContext *cx, uint32_t argc, jsval *vp);
bool js_jsCppConnect_jsCppConnect_destory(JSContext *cx, uint32_t argc, jsval *vp);

#endif // __jsCppConnect_h__
