---
title: "MR fluid based wearable haptics interface"
collection: research
permalink: /research/haptics
excerpt: 'Designing an encounter type haptic interface that allows the users to experience virtual stiffness and vibrational tactile feedback'
date: 2023-12-01
---

This work is being done in collaboration with Yang Chen under the guidance of Prof. Heather Culbertson at the <a href="https://sites.usc.edu/culbertson/"  target="_blank">HaRVI Lab</a>.

In this research, we aim to create a magnetorheological fluid (MR fluid) based touch interface that can provide vibration, adhesion, and stiffness feedback during touch interaction. MR fluid is a smart fluid made of magnetic particles and a carrier liquid. A magnetic field applied to the MR fluid rearranges the magnetic particles in the fluid and increases its shear stress, causing a great increase in the apparent viscosity of the fluid When the magnetic fields are switched on and off quickly, a vibration can be induced in MR fluid. We propose a system that utilizes such properties to provide haptic feedback in a Unity-based VR environment through the use of a pair of gloves embedded with MR fluid in the fingertips and a magnet-array-based interface that is capable of producing varying magnetic fields locally. 

Our system addresses feedback of three parameters: vibration, adhesion, and stiffness. 

Vibration can be achieved by controlling magnetic field intensity using a time-series approach, where the strength of the magnetic field translates directly to the amplitude of the vibration; and the frequency of the vibration is based on the signal variation displayed by the magnet. MR fluid has a forming time of about 2ms, which means it is theoretically capable of displaying vibrations up to 500Hz. We set a vibration frequency cap at 300Hz since near-threshold vibration loses its sharpness from our experiments. 

Stiffness and adhesion are also achieved by changing the intensity of the magnetic field, but with different controlling techniques. We aim to render a “stiffness proxy”: as the user drags their finger along the surface, a signal is displayed directly under the user’s fingers’ position. A stiffer material will have a higher amplitude than a softer material with a lower amplitude. Lastly, adhesion is a byproduct of magnetic fields, but instead of directly applying such a field under the user’s finger, we will try to display a magnetic field near the user’s finger, which creates an attraction between the working magnet and MR fluid pouch, allowing us to guide finger positioning and provide adhesion to a specific direction.

Currently, we interfaced this setup with a VR environment built through Unity. We proposed a proof of concept setup using four magnets arranged in a T shape, similar to the arrow keys on a keyboard. Magnets were kept in an acrylic box created by laser cutting with a capacitive touch screen overlay. The user’s hands' position is tracked through Oculus and contact detection is through capacitive touchscreen feedback. The touch inputs are calibrated such that when a finger is touched on top of the magnets, it triggers a custom event defined by the user. We plan to conduct user studies to evaluate our devices in terms of usability, assisting user input, and improving finger motor skills through assistive touch input using our MR fluid Interface. 

I primarily worked on researching the strengths of various electromagnet - MR fluid combinations for best results, and on building VR environments using Unity to map interactions and to run user studies. I also worked on processing raw sensor data from the headsets, and combining it with a time-series signal to activate specific magnets based on user actions and control the magnetic field intensity accordingly.

Below is our current setup:

<figure id="current-setup">
   <img src="/images/research/haptics/setup.jpg" width="400">
   <figcaption>Fig 1: Current setup showing the magnetic interface, MR fluid pouch and HiFiberry driver circuits</figcaption>
</figure>

In this:

1. Magnetic array interface contaning \
   a. Electromagnetic coils (top view) \
   b. Capacitive touch screen interface. 2D signals $(x,y)$ from this are fed to the VR environment to show precise position of user's interaction (see [figure 2](#interaction-map))
2. HiFiberry - RasPi interface to generate PWM signals for controlling localised activation of electromagnets. We are using Hifiberry (AMP2 + raspberry) * 2 as 4 channels output to drive the current setup.
3. Pouch containing the Magneto-rheological (MR) fluid with 24.5g and 70% packing by weight, using mineral oil.

<figure id="interaction-map">
   <img src="/images/research/haptics/interaction.png" width="400">
   <figcaption>Fig 2: Interaction mappin showing a mapping of user's finger on a magnet in to a similar position in VR. Note the small black square highlighted with red in the monitor representing the tracked position.</figcaption>
</figure>

For the electromagnet, we tested a combination of different number of turns, and finally went with a coil with 700 turns made with 34AWG copper wire. The coil (after winding) has a length of 22.6mm, and a diameter of 8mm with a resistance of ~20.7ohms. We use a ferromagnetic core.


<figure id="magnets">
   <img src="/images/research/haptics/magnets.jpg" width="200">
   <figcaption>Fig 3a: Bunch of magnets we ended up winding. The number of turns in these range from 500 - 1500.</figcaption>
</figure>

<figure id="winding-machine">
   <img src="/images/research/haptics/coilwinding.jpg" width="50">
   <figcaption>Fig 3b: The coil-winding machine we used. Initally started with a manual winder (standing blurry in the back), but that nightmare was quickly ditched for the greener pastures of an automated paradise.</figcaption>
</figure>

While the pouch shown in [Figure 1](#current-setup) is a large one, we explored manufacturing small ones that can fit on fingertips while keeping it cost-efficient. Among others, we played around with different forms of heat seals using small plastic pouches, heat-sealable fabric, double-sided tape, and water balloons. While the hardware interface is in place, building these pouches remains a work in progress.


__Recommended citation:__ Yang Chen, _Srikar Mutnuri_, Haylee Mota, Heather Culbertson. "Dense Magnet Array for MR Fluid-Based Fingertip Haptics Interface: Integrating Vibrotactile and Adhesion Feedback" (work-in-progress)