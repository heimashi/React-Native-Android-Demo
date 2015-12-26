package com.sw.react.viewmanager;

import android.widget.ImageView;
import android.widget.TextView;

import com.facebook.react.uimanager.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.views.text.ReactTextView;

import javax.annotation.Nullable;

/**
 * Created by sunshi on 15/12/25.
 */
public class MyTextViewManager extends SimpleViewManager<ReactTextView>{

    public static final String REACT_CLASS = "MyTextView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected ReactTextView createViewInstance(ThemedReactContext reactContext) {
        return new ReactTextView(reactContext);
    }

    @ReactProp(name = "text")
    public void setText(ReactTextView view, @Nullable String text) {
        view.setText(text);
    }

}
