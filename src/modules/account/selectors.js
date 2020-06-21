import * as R from "ramda";

const getAccount = R.prop("account");

export const getIsPro = R.pipe(getAccount, R.prop("isPro"));
