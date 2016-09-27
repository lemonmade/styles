module.exports = {
  // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
  'selector-attribute-brackets-space-inside': 'never',
  // Specify a blacklist of disallowed attribute operators.
  'selector-attribute-operator-blacklist': null,
  // Require a single space or disallow whitespace after operators within attribute selectors.
  'selector-attribute-operator-space-after': 'never',
  // Require a single space or disallow whitespace before operators within attribute selectors.
  'selector-attribute-operator-space-before': 'never',
  // Specify a whitelist of allowed attribute operators.
  'selector-attribute-operator-whitelist': null,
  // Specify a pattern for class selectors.
  'selector-class-pattern': /^[a-zA-Z]+$/,
  // Require a single space or disallow whitespace after the combinators of selectors.
  'selector-combinator-space-after': 'always',
  // Require a single space or disallow whitespace before the combinators of selectors.
  'selector-combinator-space-before': 'always',
  // Specify a pattern for id selectors.
  'selector-id-pattern': /^[A-Z][a-zA-Z]+$/,
  // Require a newline or disallow whitespace after the commas of selector lists.
  'selector-list-comma-newline-after': 'always',
  // Require a newline or disallow whitespace before the commas of selector lists.
  'selector-list-comma-newline-before': null,
  // Require a single space or disallow whitespace after the commas of selector lists.
  'selector-list-comma-space-after': 'never-single-line',
  // Require a single space or disallow whitespace before the commas of selector lists.
  'selector-list-comma-space-before': 'never',
  // Limit the number of compound selectors in a selector.
  'selector-max-compound-selectors': 3,
  // Limit the specificity of selectors.
  'selector-max-specificity': '0,3,0',
  // Disallow attribute selectors.
  'selector-no-attribute': null,
  // Disallow combinators in selectors.
  'selector-no-combinator': null,
  // Disallow id selectors.
  'selector-no-id': true,
  // Disallow type selectors.
  'selector-no-type': null,
  // Disallow universal selectors.
  'selector-no-universal': null,
  // Disallow vendor prefixes for selectors.
  'selector-no-vendor-prefix': true,
  //  Specify lowercase or uppercase for pseudo-class selectors.
  'selector-pseudo-class-case': 'lower',
  // Disallow unknown pseudo-class selectors.
  'selector-pseudo-class-no-unknown': true,
  // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
  'selector-pseudo-class-parentheses-space-inside': 'never',
  // Specify lowercase or uppercase for pseudo-element selectors.
  'selector-pseudo-element-case': 'lower',
  // Specify single or double colon notation for applicable pseudo-elements.
  'selector-pseudo-element-colon-notation': 'double',
  // Disallow unknown pseudo-element selectors.
  'selector-pseudo-element-no-unknown': true,
  // Disallow the composition of :root selectors.
  'selector-root-no-composition': true,
  // Specify lowercase or uppercase for type selector.
  'selector-type-case': 'lower',
  // Disallow unknown type selectors.
  'selector-type-no-unknown': true,
  // Limit the number of adjacent empty lines within selectors.
  'selector-max-empty-lines': 0,
};
