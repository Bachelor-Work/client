import React from 'react';
import { Entity, Scene } from 'aframe-react';

import { MODELS_PATH } from '../constants'

import 'aframe';
import 'aframe-ar';

const ARScene = () => {
  // return (
  //   <Scene embedded arjs="sourceType: webcam;">
  //     <Entity marker="preset: hiro">
  //       <Entity
  //         position="0 0 0"
  //         scale="0.05 0.05 0.05"
  //         gltf-model={`${MODELS_PATH}/dragon.gltf`}
  //       ></Entity>
  //     </Entity>
  //     {/* <Entity camera></Entity> */}
  //   </Scene>
  // );

  return (
    <a-scene embedded arjs>
      <a-box position="0 0.5 0" material="color: red;"></a-box>
      <a-marker-camera preset='hiro'></a-marker-camera>
    </a-scene>
  )
};

export default ARScene;


