import { mount, mountButton } from "helloVue/Button";
import React, { useRef, useEffect } from "react";

export default function VueApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
}
