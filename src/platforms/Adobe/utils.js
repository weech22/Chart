import { isAdobe } from "../../utils";

const fs = isAdobe ? require("uxp").storage.localFileSystem : "";

export const uploadFile = async (extension) => {
  const file = await fs.getFileForOpening({ types: [extension] });

  if (!file) return;

  const fileContent = await file.read();
  const fileName = await file.name;

  return { fileContent, fileName };
};
