package com.xdbigdata.subsidize_zjut.util;


import com.google.gson.*;

import java.lang.reflect.Type;
import java.util.Date;

/**
 * Created by sky on 2017/5/5.
 */
public class GsonUtil {

    public static Gson createGsonOfDateIsLong(){
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.registerTypeAdapter(Date.class, new JsonDeserializer<Date>() {
            @Override
            public Date deserialize(JsonElement json, Type type, JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
                return new Date(json.getAsJsonPrimitive().getAsLong());
            }
        });
       return gsonBuilder.create();
    }

    public static  Gson getGson() {
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.registerTypeAdapter(Date.class, new JsonDeserializer<Date>() {
            @Override
            public Date deserialize(JsonElement json, Type type, JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
                return new Date(json.getAsJsonPrimitive().getAsLong());
            }
        });
        Gson gson = gsonBuilder.create();
        return gson;
    }

}
