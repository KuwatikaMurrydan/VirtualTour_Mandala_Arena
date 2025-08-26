(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_B069D5E2_A257_61E8_41E1_CFFA09842BED",
  "this.Container_B7FD3C42_A2BE_A628_41D7_F9BD8D3D772F"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.init()",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "definitions": [{
 "initialPosition": {
  "yaw": -86.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FEC306E2_E4E8_A3D8_41E8_7EA464DA321C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_83526959_A453_BF81_41E4_756BF6327A94",
  "this.overlay_F619C385_E468_BC08_41D6_E12610211243",
  "this.overlay_F60A5CA3_E468_8408_41DD_53D2FF2E0765"
 ],
 "label": "minisoccer kiri",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A8361682_A25E_A22B_41E1_313D497F1769",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -176.67,
   "distance": 1,
   "backwardYaw": -175.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A834F739_A25E_E259_41E3_63EE4E221392"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A832B468_A25A_A6E7_41D2_9971776A4697_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 200,
 "id": "effect_B804B5C8_A2D9_6638_41D6_C427D5DEE041",
 "from": "left",
 "class": "SlideInEffect",
 "easing": "linear"
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_66792B32_70AD_145F_41CF_B927F1C684B0",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 13.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE30A701_E4E8_A258_41B8_7355537AC869",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_8290F026_A451_6D83_41E4_1A2A6B714B1B",
  "this.overlay_8C411ACE_A457_9283_41D2_571ADCAFAC17"
 ],
 "label": "loker kiri",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 92.9,
   "distance": 1,
   "backwardYaw": -29.93,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A832B468_A25A_A6E7_41D2_9971776A4697"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 128.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F82605B6_E4E8_A1B9_41B2_C6DA8A4395A3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -15.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F86A6923_E4E8_AE5F_41EA_580D72D2C905",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -172.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FF23A844_E4E8_AED9_41B0_D809AB88E6EA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 96.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F894B8B6_E4E8_AFB9_41E6_F58B1BB0B198",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_8C14AD17_A471_7781_41D3_2C080F354CF4",
  "this.overlay_F630A264_E46B_7C08_41C1_76258FFEAF19"
 ],
 "label": "parkir",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A8342584_A25E_A628_41C4_811D3D350592",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -29.08,
   "distance": 1,
   "backwardYaw": 164.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_88B6AC25_A471_7581_41C0_C7C97EBD1281",
  "this.overlay_8E661B29_A470_9381_41E0_EA6674EB1E11",
  "this.overlay_8E9D8F25_A470_B381_41DF_422100AAFB69",
  "this.overlay_F61E040C_E46B_8418_41C0_5861023134B1"
 ],
 "label": "toilet",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -51.42,
   "distance": 1,
   "backwardYaw": 99.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A927FAD4_A259_622F_41D2_66A153BC8A26"
  },
  {
   "yaw": -102.16,
   "distance": 1,
   "backwardYaw": -90.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 3.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F8D3A8DE_E4E8_AFE9_41D3_D1F4CA2C3441",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_81B603FD_A450_9281_41CE_C121413E2D20"
 ],
 "label": "loker basket",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_82C173AE_A451_F283_41A1_6771ABB0CA58"
 ],
 "label": "minisoccer kanann",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A836B99D_A259_6E58_41D6_F57E94F58419",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 167.82,
   "distance": 1,
   "backwardYaw": 5.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A834F739_A25E_E259_41E3_63EE4E221392"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_BA4CA567_A3D1_9781_41E3_E3BFC24AEE30",
  "this.overlay_F60C70DB_E469_9C38_41E9_EB8853CFCC03"
 ],
 "label": "basket2 kiri",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -166.36,
   "distance": 1,
   "backwardYaw": 0.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 3.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F87D8919_E4E8_AE6B_41EB_E28BF6249923",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 400,
 "id": "effect_4B8711AA_571D_FDC6_41C4_8313D8AEEDC7",
 "from": "left",
 "class": "SlideInEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 18.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FF6AC86E_E4E8_AEA9_41EC_118101DE91B0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_8CAFB202_A473_AD83_41DA_83A6D8D03571",
  "this.overlay_8C70DEC7_A470_9281_41D6_707D25B1A725"
 ],
 "label": "pilates1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A837C5FE_A25F_61DB_41CC_7633528B329D",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -175.28,
   "distance": 1,
   "backwardYaw": 87.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83D8198_A25F_5E27_41C5_564ED06B0137"
  },
  {
   "yaw": 7.74,
   "distance": 1,
   "backwardYaw": 68.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A836E16E_A259_7EFB_41CC_2834CC80328B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A8361682_A25E_A22B_41E1_313D497F1769_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -174.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE7E4782_E4E8_A259_41DB_EBFEE2237AD3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -172.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FF0F0858_E4E8_AEE9_41E9_9CEC6EC3B16E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A8039A23_A25A_A269_41DF_F555589968BE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 92.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FFF11806_E4E8_AE59_41E5_F56C84EF03EE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_BA0FD302_A3DF_9383_41DA_7F7596F35B2C",
  "this.overlay_B8D3F465_A3D0_9581_41A3_DCD782BFD716"
 ],
 "label": "cafe1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 1.03,
   "distance": 1,
   "backwardYaw": -174.38,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 4.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F8B758A3_E4E8_AE5F_41E1_CAEFCA02DEA4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_BA30C430_A3D3_759F_41D0_CCE540285F42"
 ],
 "label": "basket2 kanan",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -169.07,
   "distance": 1,
   "backwardYaw": 175.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_4D468A42_571D_AF46_41C4_8C8358C32FB0",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": -92.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FFEF0811_E4E8_AE7B_41E7_D99ED6B97C69",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -179.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F831F8F1_E4E8_AFBB_41E6_94C3C76729C3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -97.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FEF36668_E4E8_A2A8_41E3_2A9288200CCE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -80.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F88538C0_E4E8_AFD9_41E9_48E8D959F315",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_B5DF5324_A2AE_E26F_41E0_5160D12DD16B",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": -96.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE0A376D_E4E8_A2AB_41B8_138F5DB02FC1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -90.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F8A6A8AD_E4E8_AFAB_41EA_DF22A56EDC43",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A836B99D_A259_6E58_41D6_F57E94F58419_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A8342584_A25E_A628_41C4_811D3D350592_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_6531D7D6_70A2_FBC7_41B1_74A873D95E74",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "thumbnailUrl": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_8DE30CC7_A470_9681_41DE_334FF4F4B9BA"
 ],
 "label": "toilet basket",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 61.4,
   "distance": 1,
   "backwardYaw": -35.42,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 5.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE245742_E4E8_A2D9_41CD_39D6CDC8B31F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_8DBCA867_A477_BD81_41D8_9B81A68EDFDB",
  "this.overlay_F6315F72_E46B_8408_4189_5027B48B7E61"
 ],
 "label": "taman",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -175.77,
   "distance": 1,
   "backwardYaw": 63.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8285457_A25A_A629_41D3_8D56710977B0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 89.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F8F598CA_E4E8_AFE9_41DE_664681107986",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 144.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE36D710_E4E8_A279_41E0_2274ADC32D9D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "to": "bottom",
 "duration": 400,
 "id": "effect_B629F400_A2AB_E627_41BF_817597079B28",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "thumbnailUrl": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_81142D24_A450_9787_41DF_3CDB4D3B08D3",
  "this.overlay_81056A9A_A450_9282_41C2_501DCBF8C008"
 ],
 "label": "loker kanan",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A83EBC91_A259_E628_41D8_D50091B2D832",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 2.73,
   "distance": 1,
   "backwardYaw": -161.65,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A832B468_A25A_A6E7_41D2_9971776A4697"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 4.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE2E372B_E4E8_A2AF_41D3_DB946C1AF9D1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 83.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F8C1C8E8_E4E8_AFA9_41EB_DEE410F6EDE0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_B4F1F9B5_A3EF_BE86_41DC_9024DD516D82",
  "this.overlay_F62F1A46_E477_8C08_41E6_C0BF30939CAB"
 ],
 "label": "basket1 kanan",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A8039A23_A25A_A269_41DF_F555589968BE",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 175.96,
   "distance": 1,
   "backwardYaw": -176.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 95.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FF1E284E_E4E8_AEE9_41EA_F3C584D63C68",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_8F35F36C_A470_9387_41D4_96BE0F9422E5",
  "this.overlay_8FC13A5A_A470_FD83_41DA_723545FF1D09"
 ],
 "label": "tribun bawah",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A8291234_A25F_6268_41D2_2EF8461752E6",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -136.32,
   "distance": 1,
   "backwardYaw": 3.5,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED"
  },
  {
   "yaw": 133.73,
   "distance": 1,
   "backwardYaw": -83.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -4.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FFB177D0_E4E8_A1F9_4156_18AD61B1A580",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 3.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FED2F6CD_E4E8_A3E8_41B0_A2275038CAE0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_87B104A5_A451_B681_41CC_1E9B91F23C5D",
  "this.overlay_8CBA8338_A450_938F_41DA_9728817780E1",
  "this.overlay_809CE016_A450_AD83_41D8_6593B2336CD4",
  "this.overlay_8049A77F_A451_9381_41C8_B1E7035C9E10"
 ],
 "label": "loby coba",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A836E16E_A259_7EFB_41CC_2834CC80328B",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 68.31,
   "distance": 1,
   "backwardYaw": 7.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A837C5FE_A25F_61DB_41CC_7633528B329D"
  },
  {
   "yaw": 44.2,
   "distance": 1,
   "backwardYaw": -84.56,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604"
  },
  {
   "yaw": -34.41,
   "distance": 1,
   "backwardYaw": 7.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -177.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F81C4905_E4E8_AE5B_41E1_E15A87312474",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 150.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FECB16D8_E4E8_A3E8_41B0_EF3A7B1B2941",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -174.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FF58287D_E4E8_AEAB_41DC_329C44E0F35D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -87.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F80C190F_E4E8_AE67_41DF_BE1278EA3B75",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -91.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE5167A5_E4E8_A25B_41EA_C72D13560156",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A834F739_A25E_E259_41E3_63EE4E221392_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer"
},
{
 "thumbnailUrl": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_B8EFCB39_A3D3_7381_41C8_5207FD2794FD",
  "this.overlay_BF5B5635_A3D0_9581_41DC_555E84DEF5C1",
  "this.overlay_BF30F46D_A3D0_F581_41C3_B06A810460FB"
 ],
 "label": "dekat kantin",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -176.81,
   "distance": 1,
   "backwardYaw": 82.19,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A832B468_A25A_A6E7_41D2_9971776A4697"
  },
  {
   "yaw": -90.47,
   "distance": 1,
   "backwardYaw": -102.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574"
  },
  {
   "yaw": 89.01,
   "distance": 1,
   "backwardYaw": -84.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8285457_A25A_A629_41D3_8D56710977B0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -4.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE651797_E4E8_A267_41D1_634402327B32",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_618C5950_7067_14DB_41DB_D2CA7B61EE3C",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_B505F408_A3D1_F58E_41E3_1AAC2C3A195E",
  "this.overlay_B442F355_A3D3_9381_41D8_A613F4B72A06",
  "this.overlay_F6443362_E477_9C08_4193_353459FFDFA3"
 ],
 "label": "atas tribun",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A927FAD4_A259_622F_41D2_66A153BC8A26",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 99.18,
   "distance": 1,
   "backwardYaw": -51.42,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574"
  },
  {
   "yaw": -89.9,
   "distance": 1,
   "backwardYaw": -176.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8285457_A25A_A629_41D3_8D56710977B0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_82636B59_A45F_9381_41E3_2FFC7D8E66DC"
 ],
 "label": "loker ball",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A832B468_A25A_A6E7_41D2_9971776A4697"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_BB7BA3C8_A3D0_928F_41D6_82602005F2AA",
  "this.overlay_BB5AFF1A_A3D1_7383_419F_94D8F1107331",
  "this.overlay_BA9E58DE_A3D0_9E83_41AF_DE5600FCCB0F"
 ],
 "label": "basket1 kiri",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65"
  },
  {
   "yaw": 175.66,
   "distance": 1,
   "backwardYaw": 1.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 150.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE68E78C_E4E8_A269_41D9_41296111A1CA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 145.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE054778_E4E8_A2A9_41EC_2C2BE2E9B019",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -12.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F8E3D8D4_E4E8_AFF9_41DD_3D31B0DC882F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 3.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FEFFB64F_E4E8_A2E7_41D5_4C9A33F44271",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -178.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FFC97825_E4E8_AE5B_41E6_15433A94D9E8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A8285457_A25A_A629_41D3_8D56710977B0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FFC5582F_E4E8_AEA7_41E6_34331D62C214",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 179.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FF9967E5_E4E8_A1DB_41CD_2322A7CDE7A1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 5.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FFAD57DA_E4E8_A1E9_41EC_501A629ADD44",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_B3B887B1_A3DF_B281_41E3_BE601B137B3B",
  "this.overlay_B3BD0DAC_A3D0_B687_41CA_9D9F9818D7A0",
  "this.overlay_B1C0D976_A3D0_9F82_41DC_54E818FC227C",
  "this.overlay_B23330FC_A3D7_AE87_4195_08619E260AF3",
  "this.overlay_B1889034_A3D1_6D87_41D6_4CA0C91F0A1F"
 ],
 "label": "basket1 tengah",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A833744C_A25A_A63F_41B0_5085CEB01604",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 1.96,
   "distance": 1,
   "backwardYaw": 175.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2"
  },
  {
   "yaw": 93.41,
   "distance": 1,
   "backwardYaw": 88.25,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826"
  },
  {
   "yaw": -35.42,
   "distance": 1,
   "backwardYaw": 61.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D"
  },
  {
   "yaw": -84.56,
   "distance": 1,
   "backwardYaw": 44.2,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A836E16E_A259_7EFB_41CC_2834CC80328B"
  },
  {
   "yaw": -176.69,
   "distance": 1,
   "backwardYaw": 175.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8039A23_A25A_A269_41DF_F555589968BE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 4.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FEDFF6BE_E4E8_A3A8_41CE_021F0DBA3E5E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_BF8B723C_A2EB_A258_41D1_52DD494DD5AF",
  "this.overlay_BC69CB0C_A2F7_A238_41CA_453404A8AE77",
  "this.overlay_BC0BC9B7_A2FE_AE68_419B_AE56D84902EA",
  "this.overlay_B2B888C3_A3D1_FE82_41E3_02F5DFB3E593",
  "this.overlay_F6925295_E47B_7C08_41D8_7E7971AECAE6",
  "this.overlay_F7590363_E47B_9C08_41D4_4F072274206A"
 ],
 "label": "depan",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 7.14,
   "distance": 1,
   "backwardYaw": -34.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A836E16E_A259_7EFB_41CC_2834CC80328B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E"
  },
  {
   "yaw": -83.05,
   "distance": 1,
   "backwardYaw": 5.27,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8285457_A25A_A629_41D3_8D56710977B0"
  },
  {
   "yaw": 164.9,
   "distance": 1,
   "backwardYaw": -29.08,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8342584_A25E_A628_41C4_811D3D350592"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -46.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FEE656A7_E4E8_A258_41C5_F7A84A258B44",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_66E8932B_70AD_144D_41D6_124667C114CD",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_823F1FF5_A431_9286_41E3_DAA70F901C38",
  "this.overlay_867DB728_A450_938E_41D6_C104F9CB9954",
  "this.overlay_86FB7591_A453_7681_41D6_3B3A5F9BA14A",
  "this.overlay_86DF9A27_A450_BD81_4198_31E6303F5012",
  "this.overlay_87923D66_A450_B783_41E2_363E9C82E384",
  "this.overlay_87EB128D_A457_9281_41C1_4514B9B2070B",
  "this.overlay_F62E4F1D_E468_843B_41D3_52D70A08A9BE",
  "this.overlay_F619D2F0_E468_FC08_41C7_7BBB406E1834"
 ],
 "label": "kantinn",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A832B468_A25A_A6E7_41D2_9971776A4697",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -96.61,
   "distance": 1,
   "backwardYaw": 92.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A834F739_A25E_E259_41E3_63EE4E221392"
  },
  {
   "yaw": -161.65,
   "distance": 1,
   "backwardYaw": 2.73,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83EBC91_A259_E628_41D8_D50091B2D832"
  },
  {
   "yaw": -29.93,
   "distance": 1,
   "backwardYaw": 92.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0"
  },
  {
   "yaw": 82.19,
   "distance": 1,
   "backwardYaw": -176.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 95.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FEECB685_E4E8_A258_41C8_3C90852E9DAE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_B72CEE7F_A3F0_F582_41B7_CF12478B5575",
  "this.overlay_F6B0E3CF_E477_9C18_41D5_10505C32E267"
 ],
 "label": "pilates3",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A83D8198_A25F_5E27_41C5_564ED06B0137",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 87.18,
   "distance": 1,
   "backwardYaw": -175.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A837C5FE_A25F_61DB_41CC_7633528B329D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_849E5A4A_A431_7D83_41E1_5FD1F85C193D",
  "this.overlay_841D9A0C_A430_9D86_41DA_8E1CACEAF8CF",
  "this.overlay_84F23558_A430_B78F_41E2_43E9848B6525",
  "this.overlay_F618FBDE_E468_8C38_41DB_BA79EACBBB51"
 ],
 "label": "depan caffe",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -0.24,
   "distance": 1,
   "backwardYaw": -174.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED"
  },
  {
   "yaw": -87.82,
   "distance": 1,
   "backwardYaw": 120.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E"
  },
  {
   "yaw": 170.35,
   "distance": 1,
   "backwardYaw": 83.42,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8285457_A25A_A629_41D3_8D56710977B0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 77.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FEE9C67A_E4E8_A2A8_41E6_DB4BE014FF0B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_85735892_A430_9E83_41C7_6C1D4F44A516",
  "this.overlay_84FFC540_A433_97FE_41BE_C36499B0C3B4",
  "this.overlay_84D8A56A_A430_9783_41D4_34480917181B",
  "this.overlay_F61A3DFD_E468_87F8_41E9_CF665DFA0F45"
 ],
 "label": "depan office",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -174.44,
   "distance": 1,
   "backwardYaw": -0.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2"
  },
  {
   "yaw": 3.5,
   "distance": 1,
   "backwardYaw": -136.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8291234_A25F_6268_41D2_2EF8461752E6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_BEC621AF_A3D0_AE81_4190_DE23A98BB971",
  "this.overlay_BE5DD63C_A3D3_7587_41C6_25F79B5B9E21",
  "this.overlay_BA24510A_A42F_EF83_41C2_9F0867CD1B50",
  "this.overlay_BB0AB770_A431_B39F_41C1_3AA09D585AFE",
  "this.overlay_8434C1B4_A430_EE87_41CF_BEA6F63CF2E6"
 ],
 "label": "dekat taman",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A8285457_A25A_A629_41D3_8D56710977B0",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -176.44,
   "distance": 1,
   "backwardYaw": -89.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A927FAD4_A259_622F_41D2_66A153BC8A26"
  },
  {
   "yaw": 83.42,
   "distance": 1,
   "backwardYaw": 170.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2"
  },
  {
   "yaw": 63.99,
   "distance": 1,
   "backwardYaw": -175.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E"
  },
  {
   "yaw": -84.66,
   "distance": 1,
   "backwardYaw": 89.01,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E"
  },
  {
   "yaw": 5.27,
   "distance": 1,
   "backwardYaw": -83.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "items": [
  {
   "media": "this.panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A834F739_A25E_E259_41E3_63EE4E221392",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A834F739_A25E_E259_41E3_63EE4E221392_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A83D8198_A25F_5E27_41C5_564ED06B0137",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8039A23_A25A_A269_41DF_F555589968BE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8039A23_A25A_A269_41DF_F555589968BE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A927FAD4_A259_622F_41D2_66A153BC8A26",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8285457_A25A_A629_41D3_8D56710977B0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8285457_A25A_A629_41D3_8D56710977B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A832B468_A25A_A6E7_41D2_9971776A4697",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A832B468_A25A_A6E7_41D2_9971776A4697_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A836E16E_A259_7EFB_41CC_2834CC80328B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A83EBC91_A259_E628_41D8_D50091B2D832",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A83EBC91_A259_E628_41D8_D50091B2D832_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A836B99D_A259_6E58_41D6_F57E94F58419",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A836B99D_A259_6E58_41D6_F57E94F58419_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8361682_A25E_A22B_41E1_313D497F1769",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8361682_A25E_A22B_41E1_313D497F1769_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8342584_A25E_A628_41C4_811D3D350592",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8342584_A25E_A628_41C4_811D3D350592_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A837C5FE_A25F_61DB_41CC_7633528B329D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8291234_A25F_6268_41D2_2EF8461752E6",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8291234_A25F_6268_41D2_2EF8461752E6_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A8291234_A25F_6268_41D2_2EF8461752E6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 10.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE3886EE_E4E8_A3A8_41D5_4C853650F977",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_834712B2_A451_7283_41D4_466CDD45B78F",
  "this.overlay_8C0A91C8_A450_AE80_41DC_AF006526D372",
  "this.overlay_8C4DA7C0_A46F_92FF_41D7_A74711AAC65C"
 ],
 "label": "mushola",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -83.77,
   "distance": 1,
   "backwardYaw": 133.73,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8291234_A25F_6268_41D2_2EF8461752E6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 43.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FF9717EF_E4E8_A1A7_41E2_901A3B9F8EB8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -59.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE11075C_E4E8_A2E9_41E4_20ED5D48F506",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -4.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FEE2868F_E4E8_A268_41E5_EA398D3FBEE9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -116.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FF7A5863_E4E8_AEDF_41E1_29FEAEA532C6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 96.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FF335839_E4E8_AEAB_41D2_FF8C46805D99",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -111.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FFDB681B_E4E8_AE6F_41D4_09F77C58BADF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -9.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F8B8A899_E4E8_AE6B_41E0_03F90F6F02BA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A83EBC91_A259_E628_41D8_D50091B2D832_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_295AC50B_3013_5095_41C4_35DF3AD0D0AF",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A833744C_A25A_A63F_41B0_5085CEB01604_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 400,
 "id": "effect_4C974746_571D_6541_41CE_76A308A87323",
 "from": "left",
 "class": "SlideInEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 90.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FF48A88E_E4E8_AE69_41AF_1A918587921B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -178.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FF8517F9_E4E8_A1AB_41DB_1075178B82D3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -118.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE4B47BA_E4E8_A1A9_41D2_82026F9252F8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_AC508546_A3D7_7783_41D2_04F088BD5674",
  "this.overlay_AC25AC35_A3D1_9581_41CF_D99FE9D62426",
  "this.overlay_8AC8933D_A453_B381_41C4_DB1E8B0E313F",
  "this.overlay_F613C03A_E478_FC78_41E3_A203F3BE24A6"
 ],
 "label": "minisoccer tengah",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A834F739_A25E_E259_41E3_63EE4E221392",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 5.55,
   "distance": 1,
   "backwardYaw": 167.82,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A836B99D_A259_6E58_41D6_F57E94F58419"
  },
  {
   "yaw": -175.91,
   "distance": 1,
   "backwardYaw": -176.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8361682_A25E_A22B_41E1_313D497F1769"
  },
  {
   "yaw": 92.24,
   "distance": 1,
   "backwardYaw": -96.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A832B468_A25A_A6E7_41D2_9971776A4697"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_B6635A18_A3F0_BD8F_41C3_FE4D2BA0D068",
  "this.overlay_B53FD233_A3F3_6D81_41CB_CE55096A789B"
 ],
 "label": "cafe2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -174.38,
   "distance": 1,
   "backwardYaw": 1.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212"
  },
  {
   "yaw": 120.06,
   "distance": 1,
   "backwardYaw": -87.82,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -87.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F82F98FB_E4E8_AFAF_41D6_269EE30A2229",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_t.jpg",
 "vfov": 180,
 "overlays": [
  "this.overlay_B7C01005_A3F0_AD81_41E4_3A79F3176C7F",
  "this.overlay_B783C80A_A3F0_BD83_41CB_41FD74B448D9",
  "this.overlay_B74FEC0C_A3F0_9587_41CD_8D271010CC96"
 ],
 "label": "basket2 tengah",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "id": "panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 88.25,
   "distance": 1,
   "backwardYaw": 93.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604"
  },
  {
   "yaw": 175.98,
   "distance": 1,
   "backwardYaw": -169.07,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2"
  },
  {
   "yaw": 0.06,
   "distance": 1,
   "backwardYaw": -166.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -135.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_FE4767C6_E4E8_A1D9_41E4_9B11B07D0B53",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "transitionDuration": 500,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "2vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0,
 "id": "Container_B069D5E2_A257_61E8_41E1_CFFA09842BED",
 "left": "0%",
 "children": [
  "this.Label_AF9DDF3D_A269_6258_41E3_D994D8A812D1",
  "this.Label_B265250F_A269_6639_41C6_161543526907",
  "this.Button_B0ED8337_A25A_E269_41DB_120E01789AFD",
  "this.Image_B734D948_A2B6_EE38_41C3_8434B3034F66"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.43,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  0,
  1,
  1,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 0,
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#000000",
  "#000000",
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#00CC33",
 "data": {
  "name": "Container11157"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7FD3C42_A2BE_A628_41D7_F9BD8D3D772F",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_B7FDCC41_A2BE_A628_41CE_D5D9C797FD08",
  "this.Container_B7FD0C41_A2BE_A628_41B9_7A61A822537D"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Container",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -176.67,
   "hfov": 23.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A834F739_A25E_E259_41E3_63EE4E221392, this.camera_FE2E372B_E4E8_A2AF_41D3_DB946C1AF9D1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang MiniSoccer"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979EF2CD_A470_B281_41C4_A1B1593BD40A",
   "pitch": -8.36,
   "yaw": -176.67,
   "hfov": 23.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_83526959_A453_BF81_41E4_756BF6327A94",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -121.8,
 "pitch": 54.31,
 "bleaching": 0.7,
 "id": "overlay_F619C385_E468_BC08_41D6_E12610211243",
 "class": "LensFlarePanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 44.31,
 "pitch": 53.49,
 "bleaching": 0.7,
 "id": "overlay_F60A5CA3_E468_8408_41DD_53D2FF2E0765",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 92.9,
   "hfov": 18.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A832B468_A25A_A6E7_41D2_9971776A4697, this.camera_FECB16D8_E4E8_A3E8_41B0_EF3A7B1B2941); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loby MiniSoccer"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979FF2CD_A470_B281_41B4_A35B7C722E5C",
   "pitch": -27.78,
   "yaw": 92.9,
   "hfov": 18.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8290F026_A451_6D83_41E4_1A2A6B714B1B",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -100.79,
   "hfov": 21.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LockerRoom"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979F62CD_A470_B281_41E2_EC3E225C1F88",
   "pitch": -5.41,
   "yaw": -100.79,
   "hfov": 21.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8C411ACE_A457_9283_41D2_571ADCAFAC17",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -29.08,
   "hfov": 5.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB, this.camera_F86A6923_E4E8_AE5F_41EA_580D72D2C905); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Depan Loby"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979162CE_A470_B283_41C3_ABCF90E88E3F",
   "pitch": -2.57,
   "yaw": -29.08,
   "hfov": 5.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8C14AD17_A471_7781_41D3_2C080F354CF4",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 103.88,
 "pitch": 37.01,
 "bleaching": 0.7,
 "id": "overlay_F630A264_E46B_7C08_41C1_76258FFEAF19",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -51.42,
   "hfov": 25.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A927FAD4_A259_622F_41D2_66A153BC8A26, this.camera_F88538C0_E4E8_AFD9_41E9_48E8D959F315); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tribun Atas"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9792E2CE_A470_B283_41D8_676268F41C0B",
   "pitch": -29.19,
   "yaw": -51.42,
   "hfov": 25.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_88B6AC25_A471_7581_41C0_C7C97EBD1281",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -102.16,
   "hfov": 7.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E, this.camera_F8F598CA_E4E8_AFE9_41DE_664681107986); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loby MiniSoccer"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9792B2CE_A470_B283_41AF_5206CBA67C2D",
   "pitch": -17.37,
   "yaw": -102.16,
   "hfov": 7.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8E661B29_A470_9381_41E0_EA6674EB1E11",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 50,
   "hfov": 18.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Toilet"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979252CF_A470_B281_41E2_E52FD85137C4",
   "pitch": 8.39,
   "yaw": 50,
   "hfov": 18.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8E9D8F25_A470_B381_41DF_422100AAFB69",
 "data": {
  "label": "Info Red 06"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -136.35,
 "pitch": 77.1,
 "bleaching": 0.7,
 "id": "overlay_F61E040C_E46B_8418_41C0_5861023134B1",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 44.99,
   "hfov": 21.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar LockerRoom"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979CE2CD_A470_B281_41DA_D69AF21ACE3B",
   "pitch": 3.17,
   "yaw": 44.99,
   "hfov": 21.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_81B603FD_A450_9281_41CE_C121413E2D20",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 167.82,
   "hfov": 24.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A834F739_A25E_E259_41E3_63EE4E221392, this.camera_FF58287D_E4E8_AEAB_41DC_329C44E0F35D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang Minisoocer"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979F32CD_A470_B281_41BC_81C6E32CA831",
   "pitch": -6.75,
   "yaw": 167.82,
   "hfov": 24.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_82C173AE_A451_F283_41A1_6771ABB0CA58",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -166.36,
   "hfov": 14.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826, this.camera_F831F8F1_E4E8_AFBB_41E6_94C3C76729C3); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang 2 Tengah"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978502C4_A470_B287_41D5_52C7F6127F03",
   "pitch": -29.22,
   "yaw": -166.36,
   "hfov": 14.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BA4CA567_A3D1_9781_41E3_E3BFC24AEE30",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 13.56,
 "pitch": 18.62,
 "bleaching": 0.7,
 "id": "overlay_F60C70DB_E469_9C38_41E9_EB8853CFCC03",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -175.28,
   "hfov": 6.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83D8198_A25F_5E27_41C5_564ED06B0137, this.camera_FFEF0811_E4E8_AE7B_41E7_D99ED6B97C69); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ruang Pilates"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979122CE_A470_B283_41E4_28BF27D1F166",
   "pitch": 11.16,
   "yaw": -175.28,
   "hfov": 6.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8CAFB202_A473_AD83_41DA_83A6D8D03571",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 7.74,
   "hfov": 18.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A836E16E_A259_7EFB_41CC_2834CC80328B, this.camera_FFDB681B_E4E8_AE6F_41D4_09F77C58BADF); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loby Mandala Arena"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979292CE_A470_B283_41D0_87CAFE9D1DD8",
   "pitch": -10.35,
   "yaw": 7.74,
   "hfov": 18.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_8C70DEC7_A470_9281_41D6_707D25B1A725",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 1.03,
   "hfov": 18.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E, this.camera_FFAD57DA_E4E8_A1E9_41EC_501A629ADD44); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Cafe"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9784A2C4_A470_B287_41E0_C81B051F7052",
   "pitch": -18.65,
   "yaw": 1.03,
   "hfov": 18.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BA0FD302_A3DF_9383_41DA_7F7596F35B2C",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 27.15,
   "hfov": 17.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar Cafe"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978492C4_A470_B287_41DA_BEA0B6501E6A",
   "pitch": 0.7,
   "yaw": 27.15,
   "hfov": 17.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B8D3F465_A3D0_9581_41A3_DCD782BFD716",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -169.07,
   "hfov": 14.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826, this.camera_FEE2868F_E4E8_A268_41E5_EA398D3FBEE9); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang 2 Tengah"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978562C4_A470_B287_41E1_E5CEB879AB10",
   "pitch": -26.82,
   "yaw": -169.07,
   "hfov": 14.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BA30C430_A3D3_759F_41D0_CCE540285F42",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 61.4,
   "hfov": 17.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604, this.camera_FE36D710_E4E8_A279_41E0_2274ADC32D9D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar Toilet"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9795A2CE_A470_B283_41C5_B3DA4527F2ED",
   "pitch": -24.42,
   "yaw": 61.4,
   "hfov": 17.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8DE30CC7_A470_9681_41DE_334FF4F4B9BA",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -175.77,
   "hfov": 10.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8285457_A25A_A629_41D3_8D56710977B0, this.camera_FF7A5863_E4E8_AEDF_41E1_29FEAEA532C6); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar Taman"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979202CE_A470_B283_41DB_08677BE0F52B",
   "pitch": -24.73,
   "yaw": -175.77,
   "hfov": 10.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8DBCA867_A477_BD81_41D8_9B81A68EDFDB",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -0.72,
 "pitch": 61.72,
 "bleaching": 0.7,
 "id": "overlay_F6315F72_E46B_8408_4189_5027B48B7E61",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 2.73,
   "hfov": 16.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A832B468_A25A_A6E7_41D2_9971776A4697, this.camera_FF6AC86E_E4E8_AEA9_41EC_118101DE91B0); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loby MiniSoccer"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979CA2CD_A470_B281_41D7_58D93985715F",
   "pitch": -20.01,
   "yaw": 2.73,
   "hfov": 16.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_81142D24_A450_9787_41DF_3CDB4D3B08D3",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -166.55,
   "hfov": 15.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LockerRoom"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979C52CD_A470_B281_419F_0C18D8323D42",
   "pitch": -3.96,
   "yaw": -166.55,
   "hfov": 15.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_81056A9A_A450_9282_41C2_501DCBF8C008",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 175.96,
   "hfov": 9.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604, this.camera_FED2F6CD_E4E8_A3E8_41B0_A2275038CAE0); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapangan 1 tengah"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978342C3_A470_B281_41C6_CCCCE032E60D",
   "pitch": -9.43,
   "yaw": 175.96,
   "hfov": 9.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B4F1F9B5_A3EF_BE86_41DC_9024DD516D82",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -28.45,
 "pitch": 24.93,
 "bleaching": 0.7,
 "id": "overlay_F62F1A46_E477_8C08_41E6_C0BF30939CAB",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 133.73,
   "hfov": 15.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD, this.camera_FF335839_E4E8_AEAB_41D2_FF8C46805D99); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Mushola"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9795E2CF_A470_B281_41DA_53B810DC4853",
   "pitch": -20.32,
   "yaw": 133.73,
   "hfov": 15.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_8F35F36C_A470_9387_41D4_96BE0F9422E5",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -136.32,
   "hfov": 15.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED, this.camera_FFC5582F_E4E8_AEA7_41E6_34331D62C214); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kantor Office"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979582CF_A470_B281_41D6_566F111B3631",
   "pitch": -22.08,
   "yaw": -136.32,
   "hfov": 15.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_8FC13A5A_A470_FD83_41DA_723545FF1D09",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 44.2,
   "hfov": 17.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604, this.camera_FF1E284E_E4E8_AEE9_41EA_F3C584D63C68); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang Basket"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979AB2CC_A470_B287_41CC_E511481C61E8",
   "pitch": -15.64,
   "yaw": 44.2,
   "hfov": 17.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_87B104A5_A451_B681_41CC_1E9B91F23C5D",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 68.31,
   "hfov": 17.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A837C5FE_A25F_61DB_41CC_7633528B329D, this.camera_FF23A844_E4E8_AED9_41B0_D809AB88E6EA); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ke Pilates"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979A52CC_A470_B287_41D8_5213DD6F8202",
   "pitch": -23.48,
   "yaw": 68.31,
   "hfov": 17.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_8CBA8338_A450_938F_41DA_9728817780E1",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -34.41,
   "hfov": 20.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB, this.camera_FF0F0858_E4E8_AEE9_41E9_9CEC6EC3B16E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar Loby"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979DE2CC_A470_B287_41DE_182FA96AC50A",
   "pitch": -12.84,
   "yaw": -34.41,
   "hfov": 20.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_809CE016_A450_AD83_41D8_6593B2336CD4",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -1.86,
   "hfov": 9.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Admin"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979DB2CC_A470_B287_41BF_EACB83AA20C3",
   "pitch": 0.59,
   "yaw": -1.86,
   "hfov": 9.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8049A77F_A451_9381_41C8_B1E7035C9E10",
 "data": {
  "label": "Info Red 06"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -90.47,
   "hfov": 10.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574, this.camera_FEE9C67A_E4E8_A2A8_41E6_DB4BE014FF0B); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Toilet"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978432C4_A470_B287_41C3_7C11FBE24634",
   "pitch": -9.88,
   "yaw": -90.47,
   "hfov": 10.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B8EFCB39_A3D3_7381_41C8_5207FD2794FD",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -176.81,
   "hfov": 9.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A832B468_A25A_A6E7_41D2_9971776A4697, this.camera_FEF36668_E4E8_A2A8_41E3_2A9288200CCE); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lobby Mini Soccer\u000a"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9787B2C5_A470_B281_41E2_AA67BCEBFA72",
   "pitch": -9.1,
   "yaw": -176.81,
   "hfov": 9.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BF5B5635_A3D0_9581_41DC_555E84DEF5C1",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 89.01,
   "hfov": 7.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8285457_A25A_A629_41D3_8D56710977B0, this.camera_FEECB685_E4E8_A258_41C8_3C90852E9DAE); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Pertigaan Taman"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978752C5_A470_B281_41E4_57E39BAB5D26",
   "pitch": -7.96,
   "yaw": 89.01,
   "hfov": 7.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BF30F46D_A3D0_F581_41C3_B06A810460FB",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 99.18,
   "hfov": 9.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574, this.camera_F82605B6_E4E8_A1B9_41B2_C6DA8A4395A3); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Turun Toilet"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978312C3_A470_B281_41E2_5D2AAC621B60",
   "pitch": -15.65,
   "yaw": 99.18,
   "hfov": 9.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B505F408_A3D1_F58E_41E3_1AAC2C3A195E",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -89.9,
   "hfov": 19.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8285457_A25A_A629_41D3_8D56710977B0, this.camera_FEFFB64F_E4E8_A2E7_41D5_4C9A33F44271); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Turun Pertigaan"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978312C3_A470_B281_41C5_1F5E4BDBDA5B",
   "pitch": -20.89,
   "yaw": -89.9,
   "hfov": 19.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B442F355_A3D3_9381_41D8_A613F4B72A06",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -2.64,
 "pitch": 11.2,
 "bleaching": 0.7,
 "id": "overlay_F6443362_E477_9C08_4193_353459FFDFA3",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 0.1,
   "hfov": 20.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar LockerRoom"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979D42CC_A470_B287_416C_A2A55D3EE128",
   "pitch": -5.61,
   "yaw": 0.1,
   "hfov": 20.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_82636B59_A45F_9381_41E3_2FFC7D8E66DC",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -59.25,
   "hfov": 6.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Toilet"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978282C4_A470_B287_41AF_16A0CFFCF599",
   "pitch": -2.51,
   "yaw": -59.25,
   "hfov": 6.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BB7BA3C8_A3D0_928F_41D6_82602005F2AA",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -24.11,
   "hfov": 5.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LockerRoom Basket"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978202C4_A470_B287_41A8_CF61E8E1C509",
   "pitch": -2.55,
   "yaw": -24.11,
   "hfov": 5.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BB5AFF1A_A3D1_7383_419F_94D8F1107331",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 175.66,
   "hfov": 10.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604, this.camera_FFC97825_E4E8_AE5B_41E6_15433A94D9E8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang 1 tengah"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9785C2C4_A470_B287_41DD_D6F3125607E4",
   "pitch": -9.48,
   "yaw": 175.66,
   "hfov": 10.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BA9E58DE_A3D0_9E83_41AF_DE5600FCCB0F",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -84.56,
   "hfov": 8.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A836E16E_A259_7EFB_41CC_2834CC80328B, this.camera_FE4767C6_E4E8_A1D9_41E4_9B11B07D0B53); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loby Mandala Arena"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B78FCCF7_A3D3_9681_41C7_02ADA25D069E",
   "pitch": -11.56,
   "yaw": -84.56,
   "hfov": 8.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B3B887B1_A3DF_B281_41E3_BE601B137B3B",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 1.96,
   "hfov": 6.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2, this.camera_FE651797_E4E8_A267_41D1_634402327B32); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang Sisi Timur"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B78F8CF7_A3D3_9681_41E2_18BE147F126E",
   "pitch": -12.59,
   "yaw": 1.96,
   "hfov": 6.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B3BD0DAC_A3D0_B687_41CA_9D9F9818D7A0",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -35.42,
   "hfov": 4.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D, this.camera_FE4B47BA_E4E8_A1A9_41D2_82026F9252F8); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Toilet"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B78C1CF7_A3D3_9681_41CA_A24491E4A7D8",
   "pitch": -3.13,
   "yaw": -35.42,
   "hfov": 4.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B1C0D976_A3D0_9F82_41DC_54E818FC227C",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -176.69,
   "hfov": 10.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0_HS_3_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8039A23_A25A_A269_41DF_F555589968BE, this.camera_FFB177D0_E4E8_A1F9_4156_18AD61B1A580); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang Sisi Barat"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B78CFCF7_A3D3_9681_41DD_EDBDE9587996",
   "pitch": -9.74,
   "yaw": -176.69,
   "hfov": 10.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B23330FC_A3D7_AE87_4195_08619E260AF3",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 93.41,
   "hfov": 9.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0_HS_4_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826, this.camera_FE5167A5_E4E8_A25B_41EA_C72D13560156); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapangan 2 "
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B78CACF7_A3D3_9681_41D1_AB520BB4043E",
   "pitch": -10.98,
   "yaw": 93.41,
   "hfov": 9.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B1889034_A3D1_6D87_41D6_4CA0C91F0A1F",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 164.9,
   "hfov": 22.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "rollOver": "this.AnimatedImageResource_86DF201A_A2F9_BE58_41CA_365BFD7296F6.play()",
   "click": "this.startPanoramaWithCamera(this.panorama_A8342584_A25E_A628_41C4_811D3D350592, this.camera_FE68E78C_E4E8_A269_41D9_41296111A1CA); this.mainPlayList.set('selectedIndex', 25)",
   "toolTip": "Tempat Parkir",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_86DF201A_A2F9_BE58_41CA_365BFD7296F6",
   "pitch": -9.21,
   "yaw": 164.9,
   "hfov": 22.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BF8B723C_A2EB_A258_41D1_52DD494DD5AF",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 7.14,
   "hfov": 12.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "rollOver": "this.AnimatedImageResource_80664EDA_A2F9_A3DB_41E1_32EE8D1F2AEB.play()",
   "click": "this.startPanoramaWithCamera(this.panorama_A836E16E_A259_7EFB_41CC_2834CC80328B, this.camera_FE054778_E4E8_A2A9_41EC_2C2BE2E9B019); this.mainPlayList.set('selectedIndex', 17)",
   "toolTip": "Loby Mandala Arena",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_80664EDA_A2F9_A3DB_41E1_32EE8D1F2AEB",
   "pitch": -1.43,
   "yaw": 7.14,
   "hfov": 12.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BC69CB0C_A2F7_A238_41CA_453404A8AE77",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -83.05,
   "hfov": 7.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8285457_A25A_A629_41D3_8D56710977B0, this.camera_FE7E4782_E4E8_A259_41DB_EBFEE2237AD3); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Pertigaan"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_86D8A01B_A2F9_BE58_41D2_0B60488A575E",
   "pitch": -4.91,
   "yaw": -83.05,
   "hfov": 7.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BC0BC9B7_A2FE_AE68_419B_AE56D84902EA",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -97.1,
   "hfov": 7.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0_HS_3_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Taman"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B78E7CF6_A3D3_9683_41C8_8E37165C3006",
   "pitch": -5.01,
   "yaw": -97.1,
   "hfov": 7.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B2B888C3_A3D1_FE82_41E3_02F5DFB3E593",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.26,
 "yaw": 131.06,
 "pitch": 36.46,
 "bleaching": 0.7,
 "id": "overlay_F6925295_E47B_7C08_41D8_7E7971AECAE6",
 "class": "LensFlarePanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -40.53,
 "pitch": 10.11,
 "bleaching": 0.7,
 "id": "overlay_F7590363_E47B_9C08_41D4_4F072274206A",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -161.65,
   "hfov": 23.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83EBC91_A259_E628_41D8_D50091B2D832, this.camera_F81C4905_E4E8_AE5B_41E1_E15A87312474); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Temoat simpan barang sisi utara"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979B02CB_A470_B281_41D9_8F87C03689DA",
   "pitch": -37.05,
   "yaw": -161.65,
   "hfov": 23.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_823F1FF5_A431_9286_41E3_DAA70F901C38",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -29.93,
   "hfov": 26.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_1_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0, this.camera_F80C190F_E4E8_AE67_41DF_BE1278EA3B75); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tempat simpan barang sisi selatan"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979822CC_A470_B287_41A4_F286C37ED8EB",
   "pitch": -36.57,
   "yaw": -29.93,
   "hfov": 26.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_867DB728_A450_938E_41D6_C104F9CB9954",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -96.61,
   "hfov": 20.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A834F739_A25E_E259_41E3_63EE4E221392, this.camera_F82F98FB_E4E8_AFAF_41D6_269EE30A2229); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang Mini Soccer"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979BF2CC_A470_B287_41DA_9E5F00005170",
   "pitch": -6.92,
   "yaw": -96.61,
   "hfov": 20.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_86FB7591_A453_7681_41D6_3B3A5F9BA14A",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 82.19,
   "hfov": 16.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E, this.camera_F87D8919_E4E8_AE6B_41EB_E28BF6249923); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar loby Mini Soccer"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979B82CC_A470_B287_41D4_AEC258895BB1",
   "pitch": -14.6,
   "yaw": 82.19,
   "hfov": 16.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_86DF9A27_A450_BD81_4198_31E6303F5012",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 18.7,
   "hfov": 17.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kantin"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979B22CC_A470_B287_41B4_06848A70EAB3",
   "pitch": 3.04,
   "yaw": 18.7,
   "hfov": 17.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_87923D66_A450_B783_41E2_363E9C82E384",
 "data": {
  "label": "Info Red 06"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 159.13,
   "hfov": 15.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Admin"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979AF2CC_A470_B287_4176_13F955AE3D02",
   "pitch": 0.46,
   "yaw": 159.13,
   "hfov": 15.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_87EB128D_A457_9281_41C1_4514B9B2070B",
 "data": {
  "label": "Info Red 06"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -91.05,
 "pitch": 19.44,
 "bleaching": 0.7,
 "id": "overlay_F62E4F1D_E468_843B_41D3_52D70A08A9BE",
 "class": "LensFlarePanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 84.11,
 "pitch": 10.38,
 "bleaching": 0.7,
 "id": "overlay_F619D2F0_E468_FC08_41C7_7BBB406E1834",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 87.18,
   "hfov": 15.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A837C5FE_A25F_61DB_41CC_7633528B329D, this.camera_FEDFF6BE_E4E8_A3A8_41CE_021F0DBA3E5E); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar Pilates"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978082C3_A470_B281_41D4_497D7E9224FD",
   "pitch": -13.42,
   "yaw": 87.18,
   "hfov": 15.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B72CEE7F_A3F0_F582_41B7_CF12478B5575",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -170.67,
 "pitch": -4.17,
 "bleaching": 0.7,
 "id": "overlay_F6B0E3CF_E477_9C18_41D5_10505C32E267",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -0.24,
   "hfov": 19.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED, this.camera_FE245742_E4E8_A2D9_41CD_39D6CDC8B31F); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kantor Office"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979932CB_A470_B281_41DF_DAF7FAAF6057",
   "pitch": -16.73,
   "yaw": -0.24,
   "hfov": 19.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_849E5A4A_A431_7D83_41E1_5FD1F85C193D",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -87.82,
   "hfov": 18.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E, this.camera_FE11075C_E4E8_A2E9_41E4_20ED5D48F506); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Cafe"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9798A2CB_A470_B281_41D9_AAEC1CA1F6B1",
   "pitch": -9.45,
   "yaw": -87.82,
   "hfov": 18.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_841D9A0C_A430_9D86_41DA_8E1CACEAF8CF",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 170.35,
   "hfov": 10.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8285457_A25A_A629_41D3_8D56710977B0, this.camera_FE0A376D_E4E8_A2AB_41B8_138F5DB02FC1); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Pertigaan Taman"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979872CB_A470_B281_41DF_B8155D920F49",
   "pitch": -14.85,
   "yaw": 170.35,
   "hfov": 10.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_84F23558_A430_B78F_41E2_43E9848B6525",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 77.53,
 "pitch": 68.59,
 "bleaching": 0.7,
 "id": "overlay_F618FBDE_E468_8C38_41DB_BA79EACBBB51",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 3.5,
   "hfov": 7.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8291234_A25F_6268_41D2_2EF8461752E6, this.camera_FF9717EF_E4E8_A1A7_41E2_901A3B9F8EB8); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tribun Bawah"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979BE2CB_A470_B281_4161_762007601342",
   "pitch": -11.38,
   "yaw": 3.5,
   "hfov": 7.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_85735892_A430_9E83_41C7_6C1D4F44A516",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -174.44,
   "hfov": 8.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2, this.camera_FF9967E5_E4E8_A1DB_41CD_2322A7CDE7A1); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Depan Cafe"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979BA2CB_A470_B281_41D8_1BC69D51A699",
   "pitch": -14.58,
   "yaw": -174.44,
   "hfov": 8.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_84FFC540_A433_97FE_41BE_C36499B0C3B4",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -82.26,
   "hfov": 17.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kantor Office"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979B62CB_A470_B281_41B1_82658442E4FA",
   "pitch": 14.5,
   "yaw": -82.26,
   "hfov": 17.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_84D8A56A_A430_9783_41D4_34480917181B",
 "data": {
  "label": "Info Red 06"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": 146.16,
 "pitch": 38.93,
 "bleaching": 0.7,
 "id": "overlay_F61A3DFD_E468_87F8_41E9_CF665DFA0F45",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -176.44,
   "hfov": 7.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.76,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A927FAD4_A259_622F_41D2_66A153BC8A26, this.camera_FF48A88E_E4E8_AE69_41AF_1A918587921B); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tribun Atas"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9786F2C5_A470_B281_41E4_54A087860C2F",
   "pitch": -6.76,
   "yaw": -176.44,
   "hfov": 7.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BEC621AF_A3D0_AE81_4190_DE23A98BB971",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -84.66,
   "hfov": 8.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E, this.camera_F8A6A8AD_E4E8_AFAB_41EA_DF22A56EDC43); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loby MiniSoccer dan toilet"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9786B2C5_A470_B281_41DE_6E09F1A4B4BE",
   "pitch": -7.24,
   "yaw": -84.66,
   "hfov": 8.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BE5DD63C_A3D3_7587_41C6_25F79B5B9E21",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 5.27,
   "hfov": 13.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB, this.camera_F894B8B6_E4E8_AFB9_41E6_F58B1BB0B198); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Depan Loby Mandal Arena"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978652C5_A470_B281_41C9_A569ABE98010",
   "pitch": -11.85,
   "yaw": 5.27,
   "hfov": 13.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BA24510A_A42F_EF83_41C2_9F0867CD1B50",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 63.99,
   "hfov": 8.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0_HS_3_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E, this.camera_F8B758A3_E4E8_AE5F_41E1_CAEFCA02DEA4); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Taman"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978612C5_A470_B281_41DF_A4A68C408B5A",
   "pitch": -10.52,
   "yaw": 63.99,
   "hfov": 8.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BB0AB770_A431_B39F_41C1_3AA09D585AFE",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 83.42,
   "hfov": 10.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0_HS_4_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2, this.camera_F8B8A899_E4E8_AE6B_41E0_03F90F6F02BA); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Depan Cafe"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979962CA_A470_B280_41C1_7146BA9A0646",
   "pitch": -15.56,
   "yaw": 83.42,
   "hfov": 10.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_8434C1B4_A430_EE87_41CF_BEA6F63CF2E6",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -83.77,
   "hfov": 16.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8291234_A25F_6268_41D2_2EF8461752E6, this.camera_FEE656A7_E4E8_A258_41C5_F7A84A258B44); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tribun Bawah"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979E92CD_A470_B281_41D9_4B2C4769C34B",
   "pitch": -26.17,
   "yaw": -83.77,
   "hfov": 16.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_834712B2_A451_7283_41D4_466CDD45B78F",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -9.85,
   "hfov": 9.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Mushola"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_979E02CE_A470_B283_41E1_0234136C0411",
   "pitch": 15.67,
   "yaw": -9.85,
   "hfov": 9.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8C0A91C8_A450_AE80_41DC_AF006526D372",
 "data": {
  "label": "Info Red 06"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 42.52,
   "hfov": 10.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Tempat Wudhu "
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9791D2CE_A470_B283_41DE_C39D30AA43E5",
   "pitch": 8.32,
   "yaw": 42.52,
   "hfov": 10.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8C4DA7C0_A46F_92FF_41D7_A74711AAC65C",
 "data": {
  "label": "Info Red 06"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 5.55,
   "hfov": 6.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A836B99D_A259_6E58_41D6_F57E94F58419, this.camera_F8E3D8D4_E4E8_AFF9_41DD_3D31B0DC882F); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang sisi Selatan"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B78EFCF7_A3D3_9681_41DF_EB743C813613",
   "pitch": -6.84,
   "yaw": 5.55,
   "hfov": 6.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC508546_A3D7_7783_41D2_04F088BD5674",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -175.91,
   "hfov": 10.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8361682_A25E_A22B_41E1_313D497F1769, this.camera_F8D3A8DE_E4E8_AFE9_41D3_D1F4CA2C3441); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang Sisi Utara"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B78F7CF7_A3D3_9681_41DC_DC0701755BFF",
   "pitch": -5.78,
   "yaw": -175.91,
   "hfov": 10.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC25AC35_A3D1_9581_41CF_D99FE9D62426",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 92.24,
   "hfov": 6.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A832B468_A25A_A6E7_41D2_9971776A4697, this.camera_F8C1C8E8_E4E8_AFA9_41EB_DEE410F6EDE0); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loby MiniSoccer\u000a"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9065BC03_A451_9581_41D9_AFD3AA774079",
   "pitch": -2.74,
   "yaw": 92.24,
   "hfov": 6.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8AC8933D_A453_B381_41C4_DB1E8B0E313F",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -0.72,
 "pitch": 54.86,
 "bleaching": 0.7,
 "id": "overlay_F613C03A_E478_FC78_41E3_A203F3BE24A6",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -174.38,
   "hfov": 17.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212, this.camera_FF8517F9_E4E8_A1AB_41DB_1075178B82D3); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Coffe"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_96854670_A470_B59F_41A9_8F5531F2BB9F",
   "pitch": -35.77,
   "yaw": -174.38,
   "hfov": 17.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B6635A18_A3F0_BD8F_41C3_FE4D2BA0D068",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 120.06,
   "hfov": 29.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2, this.camera_FFF11806_E4E8_AE59_41E5_F56C84EF03EE); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar Coffe"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9682E670_A470_B59F_41B0_385501E518C8",
   "pitch": -9.45,
   "yaw": 120.06,
   "hfov": 29.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B53FD233_A3F3_6D81_41CB_CE55096A789B",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 0.06,
   "hfov": 9.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7, this.camera_FE30A701_E4E8_A258_41B8_7355537AC869); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang sisi barat\u000a"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9781B2C2_A470_B283_41B4_54117E023324",
   "pitch": -9.34,
   "yaw": 0.06,
   "hfov": 9.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B7C01005_A3F0_AD81_41E4_3A79F3176C7F",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 88.25,
   "hfov": 11.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A833744C_A25A_A63F_41B0_5085CEB01604, this.camera_FEC306E2_E4E8_A3D8_41E8_7EA464DA321C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang 1"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978142C2_A470_B283_41C9_EA387E6DE273",
   "pitch": -12.91,
   "yaw": 88.25,
   "hfov": 11.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B783C80A_A3F0_BD83_41CB_41FD74B448D9",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 175.98,
   "hfov": 10.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2, this.camera_FE3886EE_E4E8_A3A8_41D5_4C853650F977); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Lapang Sisi Timur"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_978112C3_A470_B281_41D5_47676F7C4B5B",
   "pitch": -12.26,
   "yaw": 175.98,
   "hfov": 10.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B74FEC0C_A3F0_9587_41CD_8D271010CC96",
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "textShadowBlurRadius": 22,
 "fontFamily": "Arial Rounded MT Bold",
 "id": "Label_AF9DDF3D_A269_6258_41E3_D994D8A812D1",
 "backgroundOpacity": 0,
 "width": "52.747%",
 "textShadowColor": "#000000",
 "right": "23.23%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "VIRTUAL TOUR",
 "minHeight": 1,
 "textShadowHorizontalLength": 0,
 "propagateClick": false,
 "top": "29.67%",
 "class": "Label",
 "textShadowOpacity": 0.43,
 "height": "15.34%",
 "minWidth": 1,
 "fontSize": "7vmin",
 "textShadowVerticalLength": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "data": {
  "name": "Label4518"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF"
},
{
 "textShadowBlurRadius": 22,
 "fontFamily": "Arial Rounded MT Bold",
 "id": "Label_B265250F_A269_6639_41C6_161543526907",
 "backgroundOpacity": 0,
 "width": "57.849%",
 "textShadowColor": "#000000",
 "right": "20.09%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "MANDALA ARENA",
 "minHeight": 1,
 "textShadowHorizontalLength": 0,
 "propagateClick": false,
 "top": "36.18%",
 "class": "Label",
 "textShadowOpacity": 0.43,
 "height": "14.327%",
 "minWidth": 1,
 "fontSize": "3.77vmax",
 "textShadowVerticalLength": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "data": {
  "name": "Label6474"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_B0ED8337_A25A_E269_41DB_120E01789AFD",
 "left": "44.42%",
 "width": 134.95,
 "shadowColor": "#000000",
 "backgroundOpacity": 0.82,
 "gap": 5,
 "iconHeight": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#FF6600"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 1,
 "fontFamily": "Agency FB",
 "class": "Button",
 "pressedBackgroundOpacity": 1,
 "bottom": "35.37%",
 "iconBeforeLabel": true,
 "height": 60.2,
 "borderColor": "#FF6600",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [],
 "click": "this.setComponentVisibility(this.Container_B069D5E2_A257_61E8_41E1_CFFA09842BED, false, 0, this.effect_B629F400_A2AB_E627_41BF_817597079B28, 'hideEffect', false); this.setComponentVisibility(this.Container_B7FD3C42_A2BE_A628_41D7_F9BD8D3D772F, true, 0, this.effect_B804B5C8_A2D9_6638_41D6_C427D5DEE041, 'showEffect', false)",
 "fontSize": "20px",
 "borderSize": 0,
 "rollOverBackgroundColor": [
  "#FF6600",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0,
  1
 ],
 "label": "MULAI VIRTUAL",
 "layout": "horizontal",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.59,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "maxHeight": 566,
 "maxWidth": 2116,
 "id": "Image_B734D948_A2B6_EE38_41C3_8434B3034F66",
 "backgroundOpacity": 0,
 "left": 745.4,
 "right": "41.41%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_B734D948_A2B6_EE38_41C3_8434B3034F66.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 1,
 "top": "4.33%",
 "class": "Image",
 "height": "0.145%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image18433"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7FDCC41_A2BE_A628_41CE_D5D9C797FD08",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_B7FD3C41_A2BE_A628_41C6_5ED817081D9E",
  "this.IconButton_B7FD2C41_A2BE_A628_41DB_9F7520F552A5"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7FD0C41_A2BE_A628_41B9_7A61A822537D",
 "backgroundOpacity": 0.7,
 "width": 300,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Image_B7FD7C41_A2BE_A628_41CE_1CD3E29AF090",
  "this.Container_B7FD6C41_A2BE_A628_41A6_08ED438ACA31",
  "this.Container_B7F25C42_A2BE_A628_41DF_3C9A122ECD06"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 40,
 "verticalAlign": "top",
 "paddingLeft": 40,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8361682_A25E_A22B_41E1_313D497F1769_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979EF2CD_A470_B281_41C4_A1B1593BD40A",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979FF2CD_A470_B281_41B4_A35B7C722E5C",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8309D49_A259_A638_41D3_29E1F22D7BC0_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979F62CD_A470_B281_41E2_EC3E225C1F88",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8342584_A25E_A628_41C4_811D3D350592_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979162CE_A470_B283_41C3_ABCF90E88E3F",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0_HS_0_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9792E2CE_A470_B283_41D8_676268F41C0B",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9792B2CE_A470_B283_41AF_5206CBA67C2D",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83B8167_A25F_5EE8_41D7_5AD2885C8574_0_HS_2_0.png",
   "width": 580,
   "height": 870,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979252CF_A470_B281_41E2_E52FD85137C4",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A839C0E8_A259_DFE7_41D8_E2414EFABD65_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979CE2CD_A470_B281_41DA_D69AF21ACE3B",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A836B99D_A259_6E58_41D6_F57E94F58419_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979F32CD_A470_B281_41BC_81C6E32CA831",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8370FC6_A25B_622B_41C4_4A6D999C33C7_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978502C4_A470_B287_41D5_52C7F6127F03",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979122CE_A470_B283_41E4_28BF27D1F166",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A837C5FE_A25F_61DB_41CC_7633528B329D_0_HS_1_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979292CE_A470_B283_41D0_87CAFE9D1DD8",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9784A2C4_A470_B287_41E0_C81B051F7052",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A834DBBA_A25B_E258_41CA_1A2C6E58B212_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978492C4_A470_B287_41DA_BEA0B6501E6A",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83371A7_A25B_5E69_41B6_ADFA3B5561F2_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978562C4_A470_B287_41E1_E5CEB879AB10",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A838A9AC_A25F_EE7F_41E3_4F82B205321D_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9795A2CE_A470_B283_41C5_B3DA4527F2ED",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8314E5E_A25F_A2DB_41BA_C11B3FB68A8E_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979202CE_A470_B283_41DB_08677BE0F52B",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979CA2CD_A470_B281_41D7_58D93985715F",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83EBC91_A259_E628_41D8_D50091B2D832_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979C52CD_A470_B281_419F_0C18D8323D42",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8039A23_A25A_A269_41DF_F555589968BE_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978342C3_A470_B281_41C6_CCCCE032E60D",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0_HS_0_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9795E2CF_A470_B281_41DA_53B810DC4853",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8291234_A25F_6268_41D2_2EF8461752E6_0_HS_1_0.png",
   "width": 520,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979582CF_A470_B281_41D6_566F111B3631",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979AB2CC_A470_B287_41CC_E511481C61E8",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0_HS_1_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979A52CC_A470_B287_41D8_5213DD6F8202",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979DE2CC_A470_B287_41DE_182FA96AC50A",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A836E16E_A259_7EFB_41CC_2834CC80328B_0_HS_3_0.png",
   "width": 580,
   "height": 870,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979DB2CC_A470_B287_41BF_EACB83AA20C3",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978432C4_A470_B287_41C3_7C11FBE24634",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9787B2C5_A470_B281_41E2_AA67BCEBFA72",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83AC2CA_A25B_623B_41C1_8219FE26934E_0_HS_2_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978752C5_A470_B281_41E4_57E39BAB5D26",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978312C3_A470_B281_41E2_5D2AAC621B60",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A927FAD4_A259_622F_41D2_66A153BC8A26_0_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978312C3_A470_B281_41C5_1F5E4BDBDA5B",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83B8C93_A259_A629_41AF_32DEF97CECF6_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979D42CC_A470_B287_416C_A2A55D3EE128",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978282C4_A470_B287_41AF_16A0CFFCF599",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978202C4_A470_B287_41A8_CF61E8E1C509",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A832470C_A25A_E23F_41BA_7B8D141FA1E2_0_HS_2_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9785C2C4_A470_B287_41DD_D6F3125607E4",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B78FCCF7_A3D3_9681_41C7_02ADA25D069E",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0_HS_1_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B78F8CF7_A3D3_9681_41E2_18BE147F126E",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B78C1CF7_A3D3_9681_41CA_A24491E4A7D8",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0_HS_3_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B78CFCF7_A3D3_9681_41DD_EDBDE9587996",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A833744C_A25A_A63F_41B0_5085CEB01604_0_HS_4_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B78CACF7_A3D3_9681_41D1_AB520BB4043E",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "autoplay": false,
 "colCount": 4,
 "rowCount": 6,
 "visibleOnStop": false,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_86DF201A_A2F9_BE58_41CA_365BFD7296F6",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "autoplay": false,
 "colCount": 4,
 "rowCount": 6,
 "visibleOnStop": false,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_80664EDA_A2F9_A3DB_41E1_32EE8D1F2AEB",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0_HS_2_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_86D8A01B_A2F9_BE58_41D2_0B60488A575E",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A836172D_A25A_E278_41DA_C0D4CFCEDACB_0_HS_3_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B78E7CF6_A3D3_9683_41C8_8E37165C3006",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_0_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979B02CB_A470_B281_41D9_8F87C03689DA",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_1_0.png",
   "width": 520,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979822CC_A470_B287_41A4_F286C37ED8EB",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979BF2CC_A470_B287_41DA_9E5F00005170",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979B82CC_A470_B287_41D4_AEC258895BB1",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_4_0.png",
   "width": 580,
   "height": 870,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979B22CC_A470_B287_41B4_06848A70EAB3",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A832B468_A25A_A6E7_41D2_9971776A4697_0_HS_5_0.png",
   "width": 580,
   "height": 870,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979AF2CC_A470_B287_4176_13F955AE3D02",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83D8198_A25F_5E27_41C5_564ED06B0137_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978082C3_A470_B281_41D4_497D7E9224FD",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979932CB_A470_B281_41DF_DAF7FAAF6057",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9798A2CB_A470_B281_41D9_AAEC1CA1F6B1",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8320563_A25A_A6E9_41E0_FE1DD74E00D2_0_HS_2_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979872CB_A470_B281_41DF_B8155D920F49",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979BE2CB_A470_B281_4161_762007601342",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979BA2CB_A470_B281_41D8_1BC69D51A699",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83735FB_A25A_E1D9_41A1_A8CE490E29ED_0_HS_2_0.png",
   "width": 580,
   "height": 870,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979B62CB_A470_B281_41B1_82658442E4FA",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9786F2C5_A470_B281_41E4_54A087860C2F",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9786B2C5_A470_B281_41DE_6E09F1A4B4BE",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0_HS_2_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978652C5_A470_B281_41C9_A569ABE98010",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0_HS_3_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978612C5_A470_B281_41DF_A4A68C408B5A",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8285457_A25A_A629_41D3_8D56710977B0_0_HS_4_0.png",
   "width": 520,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979962CA_A470_B280_41C1_7146BA9A0646",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979E92CD_A470_B281_41D9_4B2C4769C34B",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0_HS_1_0.png",
   "width": 580,
   "height": 870,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_979E02CE_A470_B283_41E1_0234136C0411",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83454E7_A25E_A7E9_41DA_81FE92D4FEFD_0_HS_2_0.png",
   "width": 580,
   "height": 870,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9791D2CE_A470_B283_41DE_C39D30AA43E5",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B78EFCF7_A3D3_9681_41DF_EB743C813613",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0_HS_1_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B78F7CF7_A3D3_9681_41DC_DC0701755BFF",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A834F739_A25E_E259_41E3_63EE4E221392_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9065BC03_A451_9581_41D9_AFD3AA774079",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_96854670_A470_B59F_41A9_8F5531F2BB9F",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A83CF770_A25B_A2E7_41DB_0E429A51108E_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9682E670_A470_B59F_41B0_385501E518C8",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0_HS_0_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9781B2C2_A470_B283_41B4_54117E023324",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978142C2_A470_B283_41C9_EA387E6DE273",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8373DC6_A25B_A62B_41E4_2C6B0AA78826_0_HS_2_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_978112C3_A470_B281_41D5_47676F7C4B5B",
 "frameCount": 22,
 "class": "AnimatedImageResource"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7FD3C41_A2BE_A628_41C6_5ED817081D9E",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_B7FD2C41_A2BE_A628_41DB_9F7520F552A5",
 "left": 10,
 "width": 50,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_B7FD2C41_A2BE_A628_41DB_9F7520F552A5_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "class": "IconButton",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_B7FD0C41_A2BE_A628_41B9_7A61A822537D, true, 0, this.effect_4B8711AA_571D_FDC6_41C4_8313D8AEEDC7, 'showEffect', false); this.setComponentVisibility(this.Container_B7FDCC41_A2BE_A628_41CE_D5D9C797FD08, false, 0, this.effect_4D468A42_571D_AF46_41C4_8C8358C32FB0, 'hideEffect', false)",
 "iconURL": "skin/IconButton_B7FD2C41_A2BE_A628_41DB_9F7520F552A5.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_B7FD7C41_A2BE_A628_41CE_1CD3E29AF090",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "url": "skin/Image_B7FD7C41_A2BE_A628_41CE_1CD3E29AF090.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "class": "Image",
 "height": "25%",
 "minWidth": 40,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7FD6C41_A2BE_A628_41A6_08ED438ACA31",
 "left": "0%",
 "children": [
  "this.Container_B7FD5C41_A2BE_A628_41E3_1B1EB7AFA327",
  "this.Button_B7F2BC41_A2BE_A628_41E2_3A5196FBED5C",
  "this.Container_B7F2AC41_A2BE_A628_41DC_26EFD207EDD6",
  "this.Button_B7F2FC42_A2BE_A628_41C2_C496F1D19628",
  "this.Container_B7F2EC42_A2BE_A628_41D9_324631FA01A6",
  "this.Button_B7F2CC42_A2BE_A628_41DF_248DC722BE20",
  "this.Container_B7F23C42_A2BE_A628_41D4_A3CCE0EAEB44",
  "this.Button_B7F21C42_A2BE_A628_41E1_7A56831E15F3",
  "this.Container_B7F20C42_A2BE_A628_41D3_6E86BC07D680",
  "this.Button_B7F27C42_A2BE_A628_41D8_EAD12491F708",
  "this.Container_B7F26C42_A2BE_A628_41B9_DBB179D04ABC",
  "this.Button_F05109A0_E4A8_AE59_41E7_D6D6807855F3",
  "this.Container_B7F28C41_A2BE_A628_41BF_9B0F6C1823B0",
  "this.Button_F2831C73_E4B7_A6B8_41E4_6065B1BAA188"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "class": "Container",
 "bottom": "17.54%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7F25C42_A2BE_A628_41DF_3C9A122ECD06",
 "left": "0%",
 "children": [
  "this.Container_B7F24C42_A2BE_A628_41CE_2CD88C42540E",
  "this.IconButton_B7FDCC42_A2BE_A628_41B2_1D1EABE103BD"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "bottom",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "bottom": "0%",
 "height": "11.489%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7FD5C41_A2BE_A628_41E3_1B1EB7AFA327",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "id": "Button_B7F2BC41_A2BE_A628_41E2_3A5196FBED5C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Arial Rounded MT Bold",
 "click": "this.mainPlayList.set('selectedIndex', 25); this.setComponentVisibility(this.Container_B069D5E2_A257_61E8_41E1_CFFA09842BED, false, 0, null, null, false); this.setComponentVisibility(this.Container_B7FD0C41_A2BE_A628_41B9_7A61A822537D, false, 0, this.effect_295AC50B_3013_5095_41C4_35DF3AD0D0AF, 'hideEffect', false); this.setComponentVisibility(this.Container_B7FDCC41_A2BE_A628_41CE_D5D9C797FD08, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#F66000"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Tempat Parkir",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Tour Info"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7F2AC41_A2BE_A628_41DC_26EFD207EDD6",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "pressedLabel": "Location",
 "id": "Button_B7F2FC42_A2BE_A628_41C2_C496F1D19628",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Arial Rounded MT Bold",
 "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_B069D5E2_A257_61E8_41E1_CFFA09842BED, false, 0, null, null, false); this.setComponentVisibility(this.Container_B7FD0C41_A2BE_A628_41B9_7A61A822537D, false, 0, this.effect_6531D7D6_70A2_FBC7_41B1_74A873D95E74, 'hideEffect', false); this.setComponentVisibility(this.Container_B7FDCC41_A2BE_A628_41CE_D5D9C797FD08, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#FF6600"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lapangan Basket 1",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Location"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7F2EC42_A2BE_A628_41D9_324631FA01A6",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "id": "Button_B7F2CC42_A2BE_A628_41DF_248DC722BE20",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Arial Rounded MT Bold",
 "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_B069D5E2_A257_61E8_41E1_CFFA09842BED, false, 0, null, null, false); this.setComponentVisibility(this.Container_B7FD0C41_A2BE_A628_41B9_7A61A822537D, false, 0, this.effect_66E8932B_70AD_144D_41D6_124667C114CD, 'hideEffect', false); this.setComponentVisibility(this.Container_B7FDCC41_A2BE_A628_41CE_D5D9C797FD08, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#FF6600"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lapang Basket 2",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7F23C42_A2BE_A628_41D4_A3CCE0EAEB44",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "id": "Button_B7F21C42_A2BE_A628_41E1_7A56831E15F3",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Arial Rounded MT Bold",
 "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_B069D5E2_A257_61E8_41E1_CFFA09842BED, false, 0, null, null, false); this.setComponentVisibility(this.Container_B7FD0C41_A2BE_A628_41B9_7A61A822537D, false, 0, this.effect_66792B32_70AD_145F_41CF_B927F1C684B0, 'hideEffect', false); this.setComponentVisibility(this.Container_B7FDCC41_A2BE_A628_41CE_D5D9C797FD08, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#FF6600"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lapangan Mini Soccer",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Photoalbum"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7F20C42_A2BE_A628_41D3_6E86BC07D680",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "id": "Button_B7F27C42_A2BE_A628_41D8_EAD12491F708",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Arial Rounded MT Bold",
 "click": "this.setComponentVisibility(this.Container_B7FD0C41_A2BE_A628_41B9_7A61A822537D, false, 0, this.effect_B5DF5324_A2AE_E26F_41E0_5160D12DD16B, 'hideEffect', false); this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Container_B069D5E2_A257_61E8_41E1_CFFA09842BED, false, 0, null, null, false); this.setComponentVisibility(this.Container_B7FDCC41_A2BE_A628_41CE_D5D9C797FD08, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#FF6600"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "quoincoffee",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Contact"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7F26C42_A2BE_A628_41B9_DBB179D04ABC",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_F05109A0_E4A8_AE59_41E7_D6D6807855F3",
 "backgroundOpacity": 0,
 "width": 220,
 "shadowColor": "#000000",
 "fontFamily": "Arial Rounded MT Bold",
 "click": "this.setComponentVisibility(this.Container_B7FD0C41_A2BE_A628_41B9_7A61A822537D, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Container_B7FDCC41_A2BE_A628_41CE_D5D9C797FD08, true, 0, null, null, false); this.setComponentVisibility(this.Container_B069D5E2_A257_61E8_41E1_CFFA09842BED, false, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#FF6600"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 49,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "18px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Loker Room Basket",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7F28C41_A2BE_A628_41BF_9B0F6C1823B0",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "textDecoration": "none",
 "horizontalAlign": "left",
 "data": {
  "name": "Button house info"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_F2831C73_E4B7_A6B8_41E4_6065B1BAA188",
 "backgroundOpacity": 0,
 "width": 220,
 "shadowColor": "#000000",
 "fontFamily": "Arial Rounded MT Bold",
 "click": "this.setComponentVisibility(this.Container_B7FDCC41_A2BE_A628_41CE_D5D9C797FD08, true, 0, null, null, false); this.setComponentVisibility(this.Container_B7FD0C41_A2BE_A628_41B9_7A61A822537D, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.Container_B069D5E2_A257_61E8_41E1_CFFA09842BED, false, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#FF6600"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "18px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "rollOverFontWeight": "normal",
 "label": "Loker Room Minsoc",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_B7F24C42_A2BE_A628_41CE_2CD88C42540E",
 "backgroundOpacity": 1,
 "width": "28.818%",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 2,
 "minWidth": 1,
 "backgroundColor": [
  "#FF6600"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_B7FDCC42_A2BE_A628_41B2_1D1EABE103BD",
 "backgroundOpacity": 0,
 "width": 42,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_B7FDCC42_A2BE_A628_41B2_1D1EABE103BD_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_B7FD0C41_A2BE_A628_41B9_7A61A822537D, false, 0, this.effect_618C5950_7067_14DB_41DB_D2CA7B61EE3C, 'hideEffect', false); this.setComponentVisibility(this.Container_B7FDCC41_A2BE_A628_41CE_D5D9C797FD08, true, 0, this.effect_4C974746_571D_6541_41CE_76A308A87323, 'showEffect', false)",
 "iconURL": "skin/IconButton_B7FDCC42_A2BE_A628_41B2_1D1EABE103BD.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "existsKey": function(key){  return key in window; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player455"
 },
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
