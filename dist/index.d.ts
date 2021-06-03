import { translate } from './translate';
declare const module: {
    languages: {
        label: string;
        value: string;
    }[];
    translate: typeof translate;
};
export default module;
