<script lang="ts">
  import type { Attachment } from 'svelte/attachments';
  import 'leaflet/dist/leaflet.css';
  import { gpx } from '@tmcw/togeojson';
  import type { Map, GeoJSON } from 'leaflet';

  let L: typeof import('leaflet') | undefined = $state();
  let map: Map | undefined = $state();
  let track: GeoJSON | undefined = $state();

  const initMap: Attachment<HTMLElement> = (element: string | HTMLElement) => {
    const mapPromise = (async () => {
      L = await import('leaflet');
      map = L.map(element).setView([53.9045, 27.5615], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
      }).addTo(map);
      map.attributionControl.remove();
      addTrack('/example.gpx');
    })();

    return () => {
      mapPromise.then(() => {
        map?.remove();
        map = undefined;
      });
    };

    // const L = await import('leaflet');
    // const map = L.map(element).setView([53.9045, 27.5615], 13);

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '',
    //   // attributionControl: false
    // }).addTo(map);
    // map.attributionControl.remove();

    // const response = await fetch('/example.gpx');
    // const gpxText = await response.text();
    // const parser = new DOMParser();
    // const gpxDoc = parser.parseFromString(gpxText, 'text/xml');
    // const geojson = gpx(gpxDoc);

    // const trackLayer = L.geoJSON(geojson, {
    //   style: { color: 'red', weight: 2 }
    // }).addTo(map);

    // map.fitBounds(trackLayer.getBounds());
  };

  async function addTrack(path: string) {
    if (!L || !map) {
      return;
    }

    if (track) {
      track.remove();
      track = undefined;
    }

    const response = await fetch(path);
    const gpxText = await response.text();
    const parser = new DOMParser();
    const gpxDoc = parser.parseFromString(gpxText, 'text/xml');
    const geojson = gpx(gpxDoc);

    track = L.geoJSON(geojson, {
      style: { color: 'red', weight: 2 }
    }).addTo(map);
    map.fitBounds(track.getBounds());
  }

  function changeGPX() {
    addTrack('/example-2.gpx');
  }
</script>

<aside class="relative w-128 shrink-0 bg-amber-300">
  <div class="sticky top-0 left-0 h-screen w-full" {@attach initMap}></div>
  <button class="absolute top-4 left-16 cursor-pointer rounded bg-amber-400 p-2" onclick={changeGPX}
    >Change gpx</button
  >
</aside>
