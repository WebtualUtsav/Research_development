import { I18n } from "i18n-js";

import en from './en';
import guj from "./guj";

const Translate = new I18n({
	en: en,
    guj: guj,
});

Translate.fallbacks = true;


export default Translate;