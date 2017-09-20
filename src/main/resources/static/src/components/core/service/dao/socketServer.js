/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/2/16
 * Time: 10:41
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * http服务
     */
    angular.module('app.core').factory('socketServer', ['$websocket',
        function ($websocket) {
            // Open a WebSocket connection
            var dataStream = $websocket('ws://' + window.location.host + '/myHandler');

            var collection = [];

            dataStream.onMessage(function (message) {
                collection.push(message.data);
            });

            var methods = {
                collection: collection,
                get: function () {
                    dataStream.send(JSON.stringify({action: 'get'}));
                }
            };

            return methods;
        }
    ]);
})();