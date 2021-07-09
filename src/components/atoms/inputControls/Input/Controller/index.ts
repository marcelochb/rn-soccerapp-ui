import { useInputAnimateService } from "../Services/animate";
import { useState } from "react";
import { ModelOfInputController } from "../Models";

export const useInputController = ({
  isSecurityTextEntry,
}:ModelOfInputController) => {
  const {animateLabel,moveLabelUp,moveLabelDown} = useInputAnimateService();
  const [isPasswordVisible, setIsPasswordVisible] = useState(isSecurityTextEntry);

  const tooglePasswordVisible = () => setIsPasswordVisible(!isPasswordVisible);

  return {
    getController: {
      animateLabel,
      isPasswordVisible
    },
    handleController: {
      moveLabelUp,
      moveLabelDown,
      tooglePasswordVisible
    }
  }
}
