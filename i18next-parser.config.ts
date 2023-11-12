// https://github.com/i18next/i18next-parser
import { languageCodes } from './src/config/i18n';

export default {
  locales: languageCodes,
  input: ['~/**/*.{js,jsx,ts,tsx}'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  indentation: 2,
  keySeparator: false,
  namespaceSeparator: false,
  defaultValue: (locale: string, namespace: string, key: string) => {
    return locale === 'en' ? key : '';
  },
};
