package com.sw.react;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.sw.react.module.MyToastModule;
import com.sw.react.viewmanager.MyTextViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by sw on 15/12/25.
 */
public class CustomReactPackage implements ReactPackage{

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<NativeModule>();
        modules.add(new MyToastModule(reactContext));
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagers = new ArrayList<ViewManager>();
        viewManagers.add(new MyTextViewManager());
        return viewManagers;
    }

}
