<template>
  <div>

    <mapbox
      access-token="pk.eyJ1IjoiYmVuaWduIiwiYSI6ImNqZHppb3oxeTFmcWQyeHFpZzg3ZW9pYTgifQ.I83xnOPUMG4jqNhuOq0r3w"
      :map-options="{ container: 'map', style: 'mapbox://styles/mapbox/streets-v10',  center:center,  zoom: 10}"

      options.trackResize
      @map-load="mapLoaded"
    >
    </mapbox>
  </div>

</template>

<script>

  import Mapbox from 'mapbox-gl-vue';
  import MapboxGeocoder from 'mapbox-gl-geocoder';
  export default {
    data () {
      return {
        accessToken: '',
        inputValue: '',
        center:[this.$store.state.lon,this.$store.state.lat]
      }
    },

    components: {
      mapbox: Mapbox,
      mapboxGeocoder: MapboxGeocoder
    },
    methods: {
      mapLoaded(map) {
        console.log("========map======");
        console.log(this.center);
         console.log("========map======");
        var mapboxGeocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken
        });
        let marker = new mapboxgl.Marker().setLngLat([this.$store.state.lon,this.$store.state.lat]).addTo(map);
        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [{
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': [this.$store.state.lon,this.$store.state.lat]
                },
                'properties': {
                  'title': this.$store.state.address,
                  'icon': 'monument'
                }
              }]
            }
          },
          'layout': {
            'icon-image': '{icon}-15',
            'text-field': '{title}',
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top'
          }
        });

      },
      mapClicked(map, e) {
        let that = this;

        console.log(sessionStorage.getItem("Lng"))
        console.log("=====")

        console.log("/*删除上次标记*/")
        let oldlng = sessionStorage.getItem("Lng");
        let oldlat = sessionStorage.getItem("Lat");
        let oldmarker = new mapboxgl.Marker()
          .setLngLat([oldlng, oldlat])
          .addTo(map);
        oldmarker.remove();

        console.log("mapClicked");
        console.log(e);
        console.log(map);
        let lng = e.lngLat.lng;
        let lat = e.lngLat.lat;
        sessionStorage.setItem("Lng", lng);
        sessionStorage.setItem("Lat", lat);
        // marker.remove();
        let marker = new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .addTo(map);

        that.$emit('getlnglat', e.lngLat);
      }

    }
  }
</script>

<style>
  #map {
    position:relative;
    width: 100%;
    height: 440px;
    top: 0px;
    border-top: 0px;
  }

</style>
