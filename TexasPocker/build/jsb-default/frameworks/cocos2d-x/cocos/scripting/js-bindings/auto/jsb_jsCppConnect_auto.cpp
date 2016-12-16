#include "scripting/js-bindings/auto/jsb_jsCppConnect_auto.hpp"
#include "scripting/js-bindings/manual/cocos2d_specifics.hpp"
#include "../../../../runtime-src/Classes/jsCppConnect.h"

template<class T>
static bool dummy_constructor(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS_ReportError(cx, "Constructor for the requested class is not available, please refer to the API reference.");
    return false;
}

static bool empty_constructor(JSContext *cx, uint32_t argc, jsval *vp) {
    return false;
}

static bool js_is_native_obj(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    args.rval().setBoolean(true);
    return true;
}
JSClass  *jsb_jsCppConnect_class;
JSObject *jsb_jsCppConnect_prototype;

bool js_jsCppConnect_jsCppConnect_cppToJs(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    JS::RootedObject obj(cx, args.thisv().toObjectOrNull());
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    jsCppConnect* cobj = (jsCppConnect *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "js_jsCppConnect_jsCppConnect_cppToJs : Invalid Native Object");
    if (argc == 1) {
        const char* arg0 = nullptr;
        std::string arg0_tmp; ok &= jsval_to_std_string(cx, args.get(0), &arg0_tmp); arg0 = arg0_tmp.c_str();
        JSB_PRECONDITION2(ok, cx, false, "js_jsCppConnect_jsCppConnect_cppToJs : Error processing arguments");
        cobj->cppToJs(arg0);
        args.rval().setUndefined();
        return true;
    }

    JS_ReportError(cx, "js_jsCppConnect_jsCppConnect_cppToJs : wrong number of arguments: %d, was expecting %d", argc, 1);
    return false;
}
bool js_jsCppConnect_jsCppConnect_getInstence(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    if (argc == 0) {

        jsCppConnect* ret = jsCppConnect::getInstence();
        jsval jsret = JSVAL_NULL;
        if (ret) {
        jsret = OBJECT_TO_JSVAL(js_get_or_create_jsobject<jsCppConnect>(cx, (jsCppConnect*)ret));
    } else {
        jsret = JSVAL_NULL;
    };
        args.rval().set(jsret);
        return true;
    }
    JS_ReportError(cx, "js_jsCppConnect_jsCppConnect_getInstence : wrong number of arguments");
    return false;
}

bool js_jsCppConnect_jsCppConnect_testlog(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    if (argc == 1) {
        const char* arg0 = nullptr;
        std::string arg0_tmp; ok &= jsval_to_std_string(cx, args.get(0), &arg0_tmp); arg0 = arg0_tmp.c_str();
        JSB_PRECONDITION2(ok, cx, false, "js_jsCppConnect_jsCppConnect_testlog : Error processing arguments");
        jsCppConnect::testlog(arg0);
        args.rval().setUndefined();
        return true;
    }
    JS_ReportError(cx, "js_jsCppConnect_jsCppConnect_testlog : wrong number of arguments");
    return false;
}

bool js_jsCppConnect_jsCppConnect_jsToCpp(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= jsval_to_std_map_string_string(cx, args.get(0), &arg0);
        JSB_PRECONDITION2(ok, cx, false, "js_jsCppConnect_jsCppConnect_jsToCpp : Error processing arguments");
        jsCppConnect::jsToCpp(arg0);
        args.rval().setUndefined();
        return true;
    }
    JS_ReportError(cx, "js_jsCppConnect_jsCppConnect_jsToCpp : wrong number of arguments");
    return false;
}

bool js_jsCppConnect_jsCppConnect_destory(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    if (argc == 0) {
        jsCppConnect::destory();
        args.rval().setUndefined();
        return true;
    }
    JS_ReportError(cx, "js_jsCppConnect_jsCppConnect_destory : wrong number of arguments");
    return false;
}


void js_register_jsCppConnect_jsCppConnect(JSContext *cx, JS::HandleObject global) {
    jsb_jsCppConnect_class = (JSClass *)calloc(1, sizeof(JSClass));
    jsb_jsCppConnect_class->name = "jsCppConnect";
    jsb_jsCppConnect_class->addProperty = JS_PropertyStub;
    jsb_jsCppConnect_class->delProperty = JS_DeletePropertyStub;
    jsb_jsCppConnect_class->getProperty = JS_PropertyStub;
    jsb_jsCppConnect_class->setProperty = JS_StrictPropertyStub;
    jsb_jsCppConnect_class->enumerate = JS_EnumerateStub;
    jsb_jsCppConnect_class->resolve = JS_ResolveStub;
    jsb_jsCppConnect_class->convert = JS_ConvertStub;
    jsb_jsCppConnect_class->flags = JSCLASS_HAS_RESERVED_SLOTS(2);

    static JSPropertySpec properties[] = {
        JS_PS_END
    };

    static JSFunctionSpec funcs[] = {
        JS_FN("cppToJs", js_jsCppConnect_jsCppConnect_cppToJs, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FS_END
    };

    static JSFunctionSpec st_funcs[] = {
        JS_FN("getInstence", js_jsCppConnect_jsCppConnect_getInstence, 0, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FN("testlog", js_jsCppConnect_jsCppConnect_testlog, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FN("jsToCpp", js_jsCppConnect_jsCppConnect_jsToCpp, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FN("destory", js_jsCppConnect_jsCppConnect_destory, 0, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FS_END
    };

    jsb_jsCppConnect_prototype = JS_InitClass(
        cx, global,
        JS::NullPtr(),
        jsb_jsCppConnect_class,
        dummy_constructor<jsCppConnect>, 0, // no constructor
        properties,
        funcs,
        NULL, // no static properties
        st_funcs);

    JS::RootedObject proto(cx, jsb_jsCppConnect_prototype);
    JS::RootedValue className(cx, std_string_to_jsval(cx, "jsCppConnect"));
    JS_SetProperty(cx, proto, "_className", className);
    JS_SetProperty(cx, proto, "__nativeObj", JS::TrueHandleValue);
    JS_SetProperty(cx, proto, "__is_ref", JS::FalseHandleValue);
    // add the proto and JSClass to the type->js info hash table
    jsb_register_class<jsCppConnect>(cx, jsb_jsCppConnect_class, proto, JS::NullPtr());
}

void register_all_jsCppConnect(JSContext* cx, JS::HandleObject obj) {
    // Get the global ns
    JS::RootedObject ns(cx, ScriptingCore::getInstance()->getGlobalObject());

    js_register_jsCppConnect_jsCppConnect(cx, ns);
}

