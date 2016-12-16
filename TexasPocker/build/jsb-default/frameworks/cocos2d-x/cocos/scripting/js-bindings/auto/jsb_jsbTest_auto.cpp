#include "scripting/js-bindings/auto/jsb_jsbTest_auto.hpp"
#include "scripting/js-bindings/manual/cocos2d_specifics.hpp"
#include "../../../../runtime-src/Classes/jsbTest.h"

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
JSClass  *jsb_jsbTest_class;
JSObject *jsb_jsbTest_prototype;

bool js_jsbTest_jsbTest_reciveMsg(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    JS::RootedObject obj(cx, args.thisv().toObjectOrNull());
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    jsbTest* cobj = (jsbTest *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "js_jsbTest_jsbTest_reciveMsg : Invalid Native Object");
    if (argc == 1) {
        const char* arg0 = nullptr;
        std::string arg0_tmp; ok &= jsval_to_std_string(cx, args.get(0), &arg0_tmp); arg0 = arg0_tmp.c_str();
        JSB_PRECONDITION2(ok, cx, false, "js_jsbTest_jsbTest_reciveMsg : Error processing arguments");
        cobj->reciveMsg(arg0);
        args.rval().setUndefined();
        return true;
    }

    JS_ReportError(cx, "js_jsbTest_jsbTest_reciveMsg : wrong number of arguments: %d, was expecting %d", argc, 1);
    return false;
}
bool js_jsbTest_jsbTest_sendVectorMsg(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    if (argc == 1) {
        std::vector<std::string> arg0;
        ok &= jsval_to_std_vector_string(cx, args.get(0), &arg0);
        JSB_PRECONDITION2(ok, cx, false, "js_jsbTest_jsbTest_sendVectorMsg : Error processing arguments");
        jsbTest::sendVectorMsg(arg0);
        args.rval().setUndefined();
        return true;
    }
    JS_ReportError(cx, "js_jsbTest_jsbTest_sendVectorMsg : wrong number of arguments");
    return false;
}

bool js_jsbTest_jsbTest_jjsToCpp(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= jsval_to_std_map_string_string(cx, args.get(0), &arg0);
        JSB_PRECONDITION2(ok, cx, false, "js_jsbTest_jsbTest_jjsToCpp : Error processing arguments");
        jsbTest::jjsToCpp(arg0);
        args.rval().setUndefined();
        return true;
    }
    JS_ReportError(cx, "js_jsbTest_jsbTest_jjsToCpp : wrong number of arguments");
    return false;
}

bool js_jsbTest_jsbTest_getMsg(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    if (argc == 1) {
        const char* arg0 = nullptr;
        std::string arg0_tmp; ok &= jsval_to_std_string(cx, args.get(0), &arg0_tmp); arg0 = arg0_tmp.c_str();
        JSB_PRECONDITION2(ok, cx, false, "js_jsbTest_jsbTest_getMsg : Error processing arguments");

        std::string ret = jsbTest::getMsg(arg0);
        jsval jsret = JSVAL_NULL;
        jsret = std_string_to_jsval(cx, ret);
        args.rval().set(jsret);
        return true;
    }
    JS_ReportError(cx, "js_jsbTest_jsbTest_getMsg : wrong number of arguments");
    return false;
}

bool js_jsbTest_jsbTest_testlog(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    if (argc == 1) {
        const char* arg0 = nullptr;
        std::string arg0_tmp; ok &= jsval_to_std_string(cx, args.get(0), &arg0_tmp); arg0 = arg0_tmp.c_str();
        JSB_PRECONDITION2(ok, cx, false, "js_jsbTest_jsbTest_testlog : Error processing arguments");
        jsbTest::testlog(arg0);
        args.rval().setUndefined();
        return true;
    }
    JS_ReportError(cx, "js_jsbTest_jsbTest_testlog : wrong number of arguments");
    return false;
}

bool js_jsbTest_jsbTest_cppSendMsg(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    if (argc == 1) {
        const char* arg0 = nullptr;
        std::string arg0_tmp; ok &= jsval_to_std_string(cx, args.get(0), &arg0_tmp); arg0 = arg0_tmp.c_str();
        JSB_PRECONDITION2(ok, cx, false, "js_jsbTest_jsbTest_cppSendMsg : Error processing arguments");
        jsbTest::cppSendMsg(arg0);
        args.rval().setUndefined();
        return true;
    }
    JS_ReportError(cx, "js_jsbTest_jsbTest_cppSendMsg : wrong number of arguments");
    return false;
}

bool js_jsbTest_jsbTest_sendMsg(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    if (argc == 1) {
        const char* arg0 = nullptr;
        std::string arg0_tmp; ok &= jsval_to_std_string(cx, args.get(0), &arg0_tmp); arg0 = arg0_tmp.c_str();
        JSB_PRECONDITION2(ok, cx, false, "js_jsbTest_jsbTest_sendMsg : Error processing arguments");
        jsbTest::sendMsg(arg0);
        args.rval().setUndefined();
        return true;
    }
    JS_ReportError(cx, "js_jsbTest_jsbTest_sendMsg : wrong number of arguments");
    return false;
}

bool js_jsbTest_jsbTest_connect(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    if (argc == 1) {
        const char* arg0 = nullptr;
        std::string arg0_tmp; ok &= jsval_to_std_string(cx, args.get(0), &arg0_tmp); arg0 = arg0_tmp.c_str();
        JSB_PRECONDITION2(ok, cx, false, "js_jsbTest_jsbTest_connect : Error processing arguments");
        jsbTest::connect(arg0);
        args.rval().setUndefined();
        return true;
    }
    JS_ReportError(cx, "js_jsbTest_jsbTest_connect : wrong number of arguments");
    return false;
}


void js_register_jsbTest_jsbTest(JSContext *cx, JS::HandleObject global) {
    jsb_jsbTest_class = (JSClass *)calloc(1, sizeof(JSClass));
    jsb_jsbTest_class->name = "jsbTest";
    jsb_jsbTest_class->addProperty = JS_PropertyStub;
    jsb_jsbTest_class->delProperty = JS_DeletePropertyStub;
    jsb_jsbTest_class->getProperty = JS_PropertyStub;
    jsb_jsbTest_class->setProperty = JS_StrictPropertyStub;
    jsb_jsbTest_class->enumerate = JS_EnumerateStub;
    jsb_jsbTest_class->resolve = JS_ResolveStub;
    jsb_jsbTest_class->convert = JS_ConvertStub;
    jsb_jsbTest_class->flags = JSCLASS_HAS_RESERVED_SLOTS(2);

    static JSPropertySpec properties[] = {
        JS_PS_END
    };

    static JSFunctionSpec funcs[] = {
        JS_FN("reciveMsg", js_jsbTest_jsbTest_reciveMsg, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FS_END
    };

    static JSFunctionSpec st_funcs[] = {
        JS_FN("sendVectorMsg", js_jsbTest_jsbTest_sendVectorMsg, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FN("jjsToCpp", js_jsbTest_jsbTest_jjsToCpp, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FN("getMsg", js_jsbTest_jsbTest_getMsg, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FN("testlog", js_jsbTest_jsbTest_testlog, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FN("cppSendMsg", js_jsbTest_jsbTest_cppSendMsg, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FN("sendMsg", js_jsbTest_jsbTest_sendMsg, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FN("connect", js_jsbTest_jsbTest_connect, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FS_END
    };

    jsb_jsbTest_prototype = JS_InitClass(
        cx, global,
        JS::NullPtr(),
        jsb_jsbTest_class,
        dummy_constructor<jsbTest>, 0, // no constructor
        properties,
        funcs,
        NULL, // no static properties
        st_funcs);

    JS::RootedObject proto(cx, jsb_jsbTest_prototype);
    JS::RootedValue className(cx, std_string_to_jsval(cx, "jsbTest"));
    JS_SetProperty(cx, proto, "_className", className);
    JS_SetProperty(cx, proto, "__nativeObj", JS::TrueHandleValue);
    JS_SetProperty(cx, proto, "__is_ref", JS::FalseHandleValue);
    // add the proto and JSClass to the type->js info hash table
    jsb_register_class<jsbTest>(cx, jsb_jsbTest_class, proto, JS::NullPtr());
}

void register_all_jsbTest(JSContext* cx, JS::HandleObject obj) {
    // Get the global ns
    JS::RootedObject ns(cx, ScriptingCore::getInstance()->getGlobalObject());

    js_register_jsbTest_jsbTest(cx, ns);
}

