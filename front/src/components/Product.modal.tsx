import React, { useEffect, useState } from 'react'

const ProductModal = ({ visible}: { visible: boolean }) => {
  const [open, setOpen] = useState(visible ? true : false);
  const [visibility, setVisibility] = useState("hidden");
  const [opacity, setOpacity] = useState("0");
  useEffect(() => {
    if (visible) {
      setOpacity("1");
      setVisibility("visible");
    } else {
      setOpacity("0");
      setVisibility("hidden");
    }
  }, [visible]);
  const closeModal = () => setOpen(false);visible=false;
  const style = {
    visibility,
    opacity,
  } as React.CSSProperties
  return (
    <div style={style} className="modal">ProductModal
      <button onClick={closeModal}>Close</button>
    </div>
  )
};
export default ProductModal;
