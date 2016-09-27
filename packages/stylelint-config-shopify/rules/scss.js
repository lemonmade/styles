module.exports = {
  // Disallow at-extends (@extend) with missing placeholders.
  'scss/at-extend-no-missing-placeholder': true,
  // Specify a pattern for Sass/SCSS-like function names.
  'scss/at-function-pattern': null,
  // Disallow leading underscore in partial names in @import.
  'scss/at-import-no-partial-leading-underscore': true,
  // Specify blacklist of disallowed file extensions for partial names in @import commands.
  'scss/at-import-partial-extension-blacklist': ['scss'],
  // Specify whitelist of allowed file extensions for partial names in @import commands.
  'scss/at-import-partial-extension-whitelist': null,
  // Disallow parentheses in argumentless @mixin calls.
  'scss/at-mixin-no-argumentless-call-parentheses': true,
  // Specify a pattern for Sass/SCSS-like mixin names.
  'scss/at-mixin-pattern': null,
  // Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.
  'scss/dollar-variable-no-missing-interpolation': true,
  // Specify a pattern for Sass-like variables.
  'scss/dollar-variable-pattern': null,
  // Specify a pattern for %-placeholders.
  'scss/percent-placeholder-pattern': null,
  //  Require a media feature value be a $-variable or disallow $-variables in media feature values.
  'scss/media-feature-value-dollar-variable': null,
  // Disallow non-CSS `@imports` in partial files.
  'scss/partial-no-import': true,
  // Disallow redundant nesting selectors (`&`).
  'scss/selector-no-redundant-nesting-selector': true,
};
