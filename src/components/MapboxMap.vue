<template>
    <div
      :id="'map'+mapDivId"
      ref="mapDiv"
    >
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Map } from 'node_modules/@types/mapbox-gl';

export default Vue.extend({
    name: "MapboxMap",
    props: {
        mapId: {
            required: true,
            validator(value: unknown): boolean {
                return typeof value === "string" || typeof value === "number"
            }
        },
        mapboxOptions: {
            required: false,
            type: Object
        }
    },

    data(): Record<string, any> {
        return {
            id: this.$props.mapId,
        }
    },

    computed: {
        mapDivId(): string {
            return "map_" + this.$props.mapId;
        }
    },

    mounted(): void {
        const mapOptions = Object.assign(this.$props.mapboxOptions, { container: this.$refs["mapDiv"]});
        const map = this.$mapbox.createOrGetMap(this.id, mapOptions);
        if(map !== undefined) {
            this.$emit("mapcreated", this.id, map);
            (map as Map).on("load", this.$emit.bind(this, "maploaded", this.id, map));
        }
        else
            console.error("map is undefined");
    }
})
</script>
