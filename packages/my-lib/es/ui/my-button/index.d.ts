import type { Plugin } from 'vue';
declare type SFCWithInstall<T> = T & Plugin;
export declare const MyButton: SFCWithInstall<import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    text: string;
}, {}>>;
export default MyButton;
