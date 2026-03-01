<script lang="ts">
  import type { Attachment } from 'svelte/attachments';
  import 'leaflet/dist/leaflet.css';
  import { gpx } from '@tmcw/togeojson';
  import type { Map, GeoJSON } from 'leaflet';
  import { rideMap } from '$lib/store/content.svelte';
  import { untrack } from 'svelte';
  import { slide } from 'svelte/transition';

  let L: typeof import('leaflet') | undefined = $state();
  let map: Map | undefined = $state();
  let track: GeoJSON | undefined = $state();
  let trackPath: string | null = $derived(rideMap.track);

  $effect(() => {
    if (trackPath) {
      untrack(() => addTrack(trackPath));
    }
  });

  const initMap: Attachment<HTMLElement> = (element: string | HTMLElement) => {
    const mapPromise = (async () => {
      L = await import('leaflet');
      map = L.map(element).setView([53.9045, 27.5615], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
      }).addTo(map);
      map.attributionControl.remove();
      addTrack(trackPath);
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

  const initResizer = (resizer: HTMLElement) => {
    let isResizing = false;

    resizer.addEventListener('mousedown', (e) => {
      isResizing = true;
      document.documentElement.classList.add('select-none');
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    });

    function handleMouseMove(event: MouseEvent) {
      if (!isResizing) return;

      const newWidth = rideMap.sidebarWidth + resizer.getBoundingClientRect().left - event.clientX;

      rideMap.sidebarWidth = newWidth > 256 ? newWidth : 256;
    }

    function handleMouseUp() {
      isResizing = false;
      document.documentElement.classList.remove('select-none');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  };

  async function addTrack(path: string | null) {
    if (!L || !map || !path) {
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
</script>

<aside class="relative shrink-0" transition:slide={{ duration: 300, axis: 'x' }}>
  <div class="sticky top-0 left-0 h-screen" style="width: {rideMap.sidebarWidth}px">
    <div
      class="absolute top-0 left-0 flex h-full w-2 cursor-col-resize justify-center before:top-0 before:h-full before:border-l before:border-stone-200 hover:bg-stone-50 hover:before:border-stone-300"
      {@attach initResizer}
    ></div>

    <div class="absolute top-0 right-0 left-2 h-full" {@attach initMap}></div>

    <button
      aria-label="Скрыть карту"
      class="absolute top-2 right-2 z-1000 cursor-pointer rounded-sm border-2 border-black/20 bg-white bg-clip-padding p-1 hover:bg-stone-100"
      onclick={() => (rideMap.visible = false)}
    >
      <svg class="block h-5 w-5">
        <use href="/sprite.svg#close" />
      </svg>
    </button>
  </div>
</aside>
