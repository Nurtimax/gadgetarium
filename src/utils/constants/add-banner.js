import * as Yup from "yup";

export const addBannerImagesSchema = Yup.object().shape({
  image: Yup.array()
    .min(2, "Изображение должно быть больше 2!")
    .max(6, "Изображение должно быть до 6!")
    .required(
      "Изображение требуется поле, нужно добавить минимум 2 изображения и максимум 6 изображений"
    ),
});
