package com.xdbigdata.subsidize_zjut.util;

import com.google.gson.*;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/4/13.
 */
@Component
public class GrantsJWTUtil<T> {

    /**
     * 获取一个
     *
     * @param jsonData
     * @param clazz
     * @return
     * @throws Exception
     */
    public <T> T getOne(final String jsonData, Class<T> clazz) throws Exception {
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.registerTypeAdapter(Date.class, new JsonDeserializer<Date>() {
            @Override
            public Date deserialize(JsonElement json, Type type, JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
                return new Date(json.getAsJsonPrimitive().getAsLong());
            }
        });
        Gson gson = gsonBuilder.create();
        T t = gson.fromJson(jsonData, clazz);
        return t;
    }

    /**
     * 获取对象列表
     *
     * @param json
     * @param cls
     * @param <T>
     * @return
     */
    public <T> List<T> getList(String json, Class<T> cls) {
        List<T> mList = new ArrayList<T>();
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.registerTypeAdapter(Date.class, new JsonDeserializer<Date>() {
            @Override
            public Date deserialize(JsonElement json, Type type, JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
                return new Date(json.getAsJsonPrimitive().getAsLong());
            }
        });
        Gson gson = gsonBuilder.create();
        JsonArray array = new JsonParser().parse(json).getAsJsonArray();
        for (final JsonElement elem : array) {
            mList.add(gson.fromJson(elem, cls));
        }
        return mList;
    }


}
