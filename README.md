## i18next Language Prefix

Add language prefix before your i18next translation strings

### Usage

```javascript
import i18next from 'i18next';
import LanguagePrefix from 'i18next-language-prefix';

i18next
  .use(new LanguagePrefix())
  .init({
    postProcess:  [ `languagePrefix` ]
  });
```
