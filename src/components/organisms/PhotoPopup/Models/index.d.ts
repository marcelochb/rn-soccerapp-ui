import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { ImageOrVideo } from "react-native-image-crop-picker";


export type ModelOfPhotoPopupController = {
  getImage: (image: ImageOrVideo) => void;
};

export type ModelOfPhotoPopup = {
  visible: boolean;
  onDismiss: () => void;
  onSelectFromGalery: () => void;
  onTakePhoto: () => void;
  theme: ModelOfTheme;
};

export class PhotoPopup extends Component<ModelOfPhotoPopup> {}
