import { useState } from "react";


export const HandleCustom = () => {
    const [checked, setChecked] = useState(true);

  const handleToggle = () => {
    setChecked(!checked);
  };

    return {
        handleToggle,
        checked
    }
}