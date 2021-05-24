import Vue from "vue";
import { PluginObject } from "vue/types/umd";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGL from "mapbox-gl";

import "@watergis/mapbox-gl-legend/css/styles.css";

type MapBoxPluginOptions = {
    token: string;
}

type MapId = number | string;

export default class MapBoxPlugin implements PluginObject<MapBoxPluginOptions> {
    maps: Map<MapId, MapboxGL.Map> = new Map();
    accessToken: string;

    constructor(token: string) {
        this.accessToken = token;
    }

    install(vue: typeof Vue, options?: MapBoxPluginOptions) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        vue.prototype.$mapbox = {
            get Token() {return self.accessToken;},
            get Maps() { return self.maps as ReadonlyMap<MapId, MapboxGL.Map>;},
            getMap(id: MapId) { return self.maps.get(id); },
            createMap(id: MapId, options?: MapboxGL.MapboxOptions) {
                if(self.maps.has(id))
                    return undefined;
                
                const mapOptions = Object.assign(options, {accessToken: self.accessToken});
                const map = new MapboxGL.Map(mapOptions);
                self.maps.set(id, map);
                return map;
            },
            createOrGetMap(id: MapId, options?: MapboxGL.MapboxOptions) {
                if(self.maps.has(id))
                    return self.maps.get(id);
                else
                    return this.createMap(id, options);
            }
        }
    }
}