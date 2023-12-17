---
title: "FireFly A Synthetic Dataset for Ember Detection in Wildfire"
collection: research
permalink: /research/firefly
excerpt: 'Synthetic data generation for ML using game engines'
date: 2023-08-23
---
<!-- _Abstract:_

This paper presents "FireFly", a synthetic dataset for ember detection created using Unreal Engine 4 (UE4), designed to overcome the current lack of ember-specific training resources. To create the dataset, we present a tool that allows the automated generation of the synthetic labeled dataset with adjustable parameters, enabling data diversity from various environmental conditions, making the dataset both diverse and customizable based on user requirements. We generated a total of 19,273 frames that have been used to evaluate FireFly on four popular object detection models. Further to minimize human intervention, we leveraged a trained model to create a semi-automatic labeling process for real-life ember frames. Moreover, we demonstrated an up to 8.57% improvement in mean Average Precision (mAP) in real-world wildfire scenarios compared to models trained exclusively on a small real dataset.

--- -->

## Introduction & Background

This work was done in collaboration with Yue, Hu under the guidance of Prof. Peter Beerel at the <a href="https://sites.usc.edu/eessc/"  target="_blank">EESSC Group</a>.

The paper was presented as a poster at the Artificial Intelligence for Humanitarian Assistance and Disaster Response Workshop (AI + HADR - <a href="https://www.hadr.ai/previous-versions/iccv-2023/accepted-papers-iccv23"  target="_blank">link</a>).

<figure id="iccv">
   <img src="/images/research/firefly/firefly_iccv.jpg" width="200">
   <figcaption>Fig 1a: Our poster at the workshop (thanks <a href="https://tarun005.github.io"  target="_blank">Tarun</a>!) </figcaption>
</figure>

<figure id="usc">
   <img src="/images/research/firefly/firefly_usc.jpg" width="200">
   <figcaption>Fig 1b: Our poster at the ECE department research festival at USC in October 2022 </figcaption>
</figure>

I joined the team as a Directed Research student in Fall 2022, given my experience with building apps and simulations in Unity and UE4, and continued work through my graduation in May 2023. Specifically, below are my contributions to the project:

* Constructed Unreal Engine environments and graphics pipelines to generate photorealistic synthetic geospatial data
* Programmed simulations and wrote data processing pipelines to handle diverse datasets by varying scene parameters
* Wrote scripts for training/evaluating various computer vision models (like YOLO and Sparse-RCNN) using transfer learning, for object detection
* Explored generation of infrared views and aireal views to track fires

<figure id="firesample">
   <img src="/images/research/firefly/fireburn.jpg" width="200">
   <figcaption>Fig 2: A sample screenshot from our Unreal setup showing a burning fire</figcaption>
</figure>

While the main goal was to utilize this data in combating wildfires, our proposed system can be easily extended for edge inference, allowing us to build better UAVs and autonomous vehicles.

## Details

As is evident from the description, our main focus was to build a pipeline system that can generate synthetic data out of game engines for ML Inference.

For this, we start by building a UE scene with a forest (given our target usecase - wildfires), and setup particle system using <a href="https://docs.unrealengine.com/5.0/en-US/creating-visual-effects-in-niagara-for-unreal-engine/"  target="_blank">Niagara</a> to mimic a fire burning with embers.

We then capture real-time data to track each embers across frames using their world-space coordinates. This data looks something like this:

<figure id="rawdata">
   <img src="/images/research/firefly/rawtrackingdata.png" width="200">
   <figcaption>Fig 3: Raw tracking data from the game engine, showing coordinates for each ember (per frame)</figcaption>
</figure>

After processing, we end up with a frame-level data like this:

```
Frame: 2
CLASS: Embers
ID: 0.0
Center: X=1251.366 Y=690.728
BBOX: X=1.615 Y=1.183
CLASS: FIRE
ID: 0.0
Center: X=2193.368 Y=1239.878
BBOX:X=4274.819 Y=3975.728
```

This data is used to generate ember boxes for training, and we apply masks to validate if these are accurate. Below is a sample screen:

<figure id="fire">
   <img src="/images/research/firefly/fire.jpg" width="200">
   <figcaption>Fig 4a: Sceenshot of fire</figcaption>
</figure>

<figure id="fire_wbbox">
   <img src="/images/research/firefly/fire_wbbox.jpg" width="200">
   <figcaption>Fig 4b: Same fire screenshot with the bounding box masks</figcaption>
</figure>

This is then converted into a COCO format JSON, with the below fields:

```json
{
    "info": [...],
    "images": [...],
    "categories": [...],
    "annotations": [...]
}
```

In these:
* `images` contains a list of all images in the data, with details like height, width, date captured and file-name. 
* `categories` has a list of categories. We set 1 for type fire, and 2 for type embers.
* `annotations` is a list of annotations (bounding boxes) for each image and each ember/fire within that image. We also assign IDs to each ember to track them across multiple frames.

This JSON is now fed to our ImageNet based models to train on, like YOLO and Sparse-RCNN. We validated the training by checking on a real-world dataset. 

<figure id="realworld">
   <img src="/images/research/firefly/sycanmarsh.jpg" width="200">
   <figcaption>Fig 5: Validating ember detection (Sycan Marsh Preserve, Oregon - obtained from U.S. Department of Agriculture) </figcaption>
</figure>

## Other Experiments

Given our goal to extend it to drones, we built a scene to track aerial views:

<figure id="aerial-view">
   <img src="/images/research/firefly/aerialview.png" width="200">
   <figcaption>Fig 6: aerial view of a forest with a couple of fires, like a monitoring drone might see</figcaption>
</figure>

We also explored using infrared views to see if we could use thermal sensing to better track the embers

<figure id="infrared">
   <img src="/images/research/firefly/infraredview.png" width="200">
   <figcaption>Fig 7: Sample of an infrared/thermal view of the scene </figcaption>
</figure>

## Citation

Hu, Yue, Xinan Ye, Yifei Liu, Souvik Kundu, Gourav Datta, _Srikar Mutnuri_, Namo Asavisanu, Nora Ayanian, Konstantinos Psounis, and Peter Beerel. "FireFly: A Synthetic Dataset for Ember Detection in Wildfire." In Proceedings of the IEEE/CVF International Conference on Computer Vision, pp. 3765-3769. 2023.

Download the paper [here](https://openaccess.thecvf.com/content/ICCV2023W/AIHADR/papers/Hu_FireFly_A_Synthetic_Dataset_for_Ember_Detection_in_Wildfire_ICCVW_2023_paper.pdf)