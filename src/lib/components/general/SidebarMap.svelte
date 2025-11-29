<script lang="ts">
  import type { Attachment } from 'svelte/attachments';
  import 'leaflet/dist/leaflet.css';
  import { gpx } from '@tmcw/togeojson';

  const initMap: Attachment = async (element) => {
    const L = await import('leaflet');
    const map = L.map(element).setView([53.9045, 27.5615], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
      attributionControl: false
    }).addTo(map);
    map.attributionControl.remove();

    const response = await fetch('/example.gpx');
    const gpxText = await response.text();
    const parser = new DOMParser();
    const gpxDoc = parser.parseFromString(gpxText, 'text/xml');
    const geojson = gpx(gpxDoc);

    const trackLayer = L.geoJSON(geojson, {
      style: { color: 'red', weight: 2 }
    }).addTo(map);

    map.fitBounds(trackLayer.getBounds());
  };
</script>

<aside class="w-128 shrink-0 bg-amber-300">
  <div class="sticky top-0 left-0 h-screen w-full" {@attach initMap}></div>
</aside>
