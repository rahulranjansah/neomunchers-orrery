# Orrery

An interactive map of the Solar System created with Three.js and jQuery, featuring visualizations of asteroid flybys and predictions of the probability distribution of Near-Earth Objects (NEOs). The project is live at [Orrery](https://neomunchers-orrery.vercel.app/). For optimal performance, especially on desktop, please reload the page if loading takes time.

[https://neomunchers-orrery.vercel.app/](https://neomunchers-orrery-one.vercel.app/)

## Features

- **Ephemerides** for astronomical bodies in the Solar System, searchable for all bodies above 1 km in radius.
- **Exaggerated orrery view** at the solar system scale, with the ability to zoom to true scale for planetary systems.
- **Live data readouts** including right ascension/declination, altitude/azimuth coordinates relative to your current location, rise/set times, and magnitude adjusted for atmospheric dispersion.
- **Background stars** include all above 7th magnitude.
- **3D rendered visualizations** from the OSIRIS-REx, Rosetta, and DART missions.
- **Data analysis** for an unbiased NEO model, showing the probability distribution of undiscovered NEOs.

## Datasets

This project includes various datasets stored within the `datasets` sub-directory. The datasets are organized as follows:

- **/neo-datasets/databases/neos/**: Contains NEODys data for NEOs system bodies both biased and unbiased of Granvik model.
- **/neo-datasets/kernels/**: Includes lsk, dsk, spk, pck for conversion and rendering
- **/public/data**: Provides information on background stars, Moons, planets, and pictures.

Each dataset is accompanied by a README file detailing its structure, source, and usage.

## Setup

To set up the project, run the following commands:

1. Install dependencies:
   ```sh
   yarn install

2. Start server:
    ```
    yarn run dev



## Usage

### Navigation

To control the Orrery, use the following keys:

- **SPACE BAR**: Pause or resume time.
- **LEFT/RIGHT ARROW KEYS**: Adjust the speed of time.
- **DOWN ARROW KEY**: Reset the view to the current time.
- **UP ARROW KEY**: Toggle chase mode on the focused object.
- **ESC**: Release focus on an object.

You can also:

- Show/hide UI panels with **F2**.
- Display the celestial sphere with **F4**.
- Reveal extra time info with **F8**.

Click on labels to focus on objects and view detailed information. Use mouse buttons to rotate, zoom, or move around the focused object, and scroll with the wheel to zoom in. The **flyby navbar** directs you to a gallery with updates on NEO progress and upcoming missions, while the **model navbar** shows NEO concentration and distribution across the sky.

## Potential Upgrades

- UI scaling for Android/iOS devices
- Object count throttling based on FPS observation
- Search bar functionality
- Support for non-periodic comets and hyperbolic orbits (e.g., `Oumuamua`)
- Extended data and add-ins for smaller objects
- 3D shapes for asteroids
- Ring shadows
- Spacecraft/Two-Line Element (TLE) reader
- Additional data from NASA SPICE kernels
- Procedural textures
- Exoplanetary systems
- Hohmann transfer orbits
- Gravitational simulations
