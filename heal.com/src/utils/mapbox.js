import mapboxgl from "mapbox-gl";
// import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

// mapboxgl.workerClass = MapboxWorker;

export const displayMap = (locations, userLocation) => {
	mapboxgl.accessToken =
		"pk.eyJ1IjoicmlzaGFiZHVnYXIiLCJhIjoiY2xjZzQ5dzJ1MDE4YzNubnloZmk0ZnMxMiJ9.SoiERoi5n7up5M96SIVYIQ";

	var map = new mapboxgl.Map({
		container: "map", // <- Id of the container
		style: "mapbox://styles/rishabdugar/clcg4ympe002115qq9wrzyu9x",
		scrollZoom: true,
		center: userLocation,
		zoom: 14,
		interactive: true,
	});
	const bounds = new mapboxgl.LngLatBounds();

	locations.forEach((loc) => {
		// Create Marker ->
		loc.coordinates = { lng: loc.lon, lat: loc.lat };
		console.log(loc.coordinates);
		const el = document.createElement("div");
		el.classList.add("marker");
		// el.style.pointerEvents = "";

		// Add Marker ->
		new mapboxgl.Marker({
			element: el,
			anchor: "bottom",
		})
			.setLngLat(loc.coordinates)
			.setPopup(
				new mapboxgl.Popup({
					offset: 5,
				}).setHTML(
					`<p><b>${loc.name} </b><br> ${loc.specialization}</p>`
				)
			)
			.addTo(map);

		// Extends the map bounds
		bounds.extend(loc.coordinates);

		// add popup
	});

	console.log(locations);

	// map.fitBounds(bounds, {
	// 	padding: {
	// 		top: 200,
	// 		bottom: 100,
	// 		left: 100,
	// 		right: 100,
	// 	},
	// });
};
