class LanguagePrefix {
  constructor(opts = {}) {
    this.name = `languagePrefix`;
    this.type = `postProcessor`;
  }

  process(value, key, options, translator) {
    return translator.language + value;
  }
}

export default LanguagePrefix;
