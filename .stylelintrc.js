"use strict";
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier"
  ],
  plugins: [
    "stylelint-order"
  ],
  rules: {
    "at-rule-no-unknown": null,
    "no-descending-specificity": null
  }
};
