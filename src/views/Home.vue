<template>
    <v-container
      fluid
      fill-height
      class="pa-0"
    >

        <mapbox
          :mapId="'main'"
          :mapboxOptions="{
            style: 'mapbox://styles/hippodamos/ckozj7bp11o7f18mpta2is5rv',
            attributionControl: true,
            customAttribution: ['hippodamos']
          }"
          class="map"
          @mapcreated="onMapCreated"
          @maploaded="onMapLoaded"
        />

    </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Mapbox from "mapbox-gl";
  import MapBoxComponent from "@/components/MapboxMap.vue";

  export default Vue.extend({
    name: 'Home',

    components: {
        mapbox: MapBoxComponent
    },

    methods: {
        onMapCreated(id: string | number, map: Mapbox.Map) {
            (window as any).map = map;

            // Nav control
            map.addControl(new Mapbox.NavigationControl);
            // Geolocate
            map.addControl(new Mapbox.GeolocateControl);
            // Scale Bar
            map.addControl(new Mapbox.ScaleControl);
        },
        onMapLoaded(id: string | number, map: Mapbox.Map) {
            //
        },
    }
  })
</script>

<style lang="less">
    .map {
        width: 100%;
        height: 100%;
    }
</style>
