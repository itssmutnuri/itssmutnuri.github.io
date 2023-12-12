---
title: "FireFly A Synthetic Dataset for Ember Detection in Wildfire"
collection: research
permalink: /research/firefly
excerpt: 'Synthetic data generation for ML using game engines'
date: 2023-08-23
---
_Abstract:_

This paper presents "FireFly", a synthetic dataset for em- ber detection created using Unreal Engine 4 (UE4), designed to overcome the current lack of ember-specific training re- sources. To create the dataset, we present a tool that allows the automated generation of the synthetic labeled dataset with adjustable parameters, enabling data diversity from various environmental conditions, making the dataset both diverse and customizable based on user requirements. We generated a total of 19,273 frames that have been used to evaluate FireFly on four popular object detection models. Further to minimize human intervention, we leveraged a trained model to create a semi-automatic labeling process for real-life ember frames. Moreover, we demonstrated an up to 8.57% improvement in mean Average Precision (mAP) in real-world wildfire scenarios compared to models trained exclusively on a small real dataset.

---

This work was done in collaboration with Yue Hu, under the guidance of Prof. Peter Beerel at the <a href="https://sites.usc.edu/eessc/"  target="_blank">EESSC Group</a>.

The paper was presented as a poster at the Artificial Intelligence for Humanitarian Assistance and Disaster Response Workshop (AI + HADR - <a href="https://www.hadr.ai/previous-versions/iccv-2023/accepted-papers-iccv23"  target="_blank">link</a>). Below is a picture (thanks <a href="https://tarun005.github.io"  target="_blank">Tarun</a>!):

<img src="/images/research/firefly/firefly_iccv.jpg" width="400">

We also presented an earlier version of the work at the ECE department research festival at USC in October 2022:

<img src="/images/research/firefly/firefly_usc.jpg" width="400">

I joined the team as a Directed Research student in Fall 2022, given my experience with building apps and simulations in Unity and UE4, and continued work through my graduation in May 2023.

Below are my contributions to the project:

* Constructed Unreal Engine environments and graphics pipelines to generate photorealistic synthetic geospatial data
* Programmed simulations and wrote data processing pipelines to handle diverse datasets by varying scene parameters
* Wrote scripts for training/evaluating various computer vision models (like YOLO and Sparse-RCNN) using transfer learning, for object detection

While the main goal was to utilize this data in combating wildfires, our proposed system can be easily extended for edge inference, allowing us to build better UAVs and autonomous vehicles.

Download the paper [here](https://openaccess.thecvf.com/content/ICCV2023W/AIHADR/papers/Hu_FireFly_A_Synthetic_Dataset_for_Ember_Detection_in_Wildfire_ICCVW_2023_paper.pdf)

__Recommended citation:__ Hu, Yue, Xinan Ye, Yifei Liu, Souvik Kundu, Gourav Datta, _Srikar Mutnuri_, Namo Asavisanu, Nora Ayanian, Konstantinos Psounis, and Peter Beerel. "FireFly: A Synthetic Dataset for Ember Detection in Wildfire." In Proceedings of the IEEE/CVF International Conference on Computer Vision, pp. 3765-3769. 2023.