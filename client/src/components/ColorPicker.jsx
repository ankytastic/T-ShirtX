import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          '#FF6900',
          '#CBF1F5',
          '#03C988',
          '#D4ADFC',
          '#D0BFFF',
          '#EEE3CB',
          '#116D6E',
          '#9F73AB',
          '#7B113A',
          '#1B262C',
          '#903749',
          '#1D267D'          
        ]}
        onChange={(color) => state.color = color.hex}
       />
    </div>
  )
}

export default ColorPicker