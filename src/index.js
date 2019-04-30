import { getQueryVariable } from './utils';
const queryPrefix = getQueryVariable('prefix');

class LanguagePrefix {
  constructor(opts = {}) {
    this.name = `languagePrefix`;
    this.type = `postProcessor`;
  }

  process(value, key, options, translator) {
    debugger;
    return((queryPrefix !== false) ? translator.language + value + translator.language : value);
  }
}

export default LanguagePrefix;
