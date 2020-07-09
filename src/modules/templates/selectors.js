import * as R from "ramda";

export const getTemplates = R.prop("templates");

export const getTemplateList = R.pipe(getTemplates, R.prop("templateList"));
