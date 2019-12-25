"use strict";
module.exports = {
  extends: [
    "stylelint-config-standard",
    // "stylelint-config-css-modules",
    "stylelint-config-prettier"
  ],
  plugins: [
    "stylelint-order"
    // "stylelint-declaration-block-no-ignored-properties"
  ],
  rules: {
    "at-rule-no-unknown": null,
    "no-descending-specificity": null
    // "plugin/declaration-block-no-ignored-properties": true
  }
};
