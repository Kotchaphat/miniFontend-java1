import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, __VLS_slots } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $scopedSlots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'VApp', typeof __VLS_localComponents, "VApp", "vApp", "v-app"> &
__VLS_WithComponent<'VAppBar', typeof __VLS_localComponents, "VAppBar", "vAppBar", "v-app-bar"> &
__VLS_WithComponent<'VImg', typeof __VLS_localComponents, "VImg", "vImg", "v-img"> &
__VLS_WithComponent<'VSpacer', typeof __VLS_localComponents, "VSpacer", "vSpacer", "v-spacer"> &
__VLS_WithComponent<'VBtn', typeof __VLS_localComponents, "VBtn", "vBtn", "v-btn"> &
__VLS_WithComponent<'VIcon', typeof __VLS_localComponents, "VIcon", "vIcon", "v-icon"> &
__VLS_WithComponent<'VMain', typeof __VLS_localComponents, "VMain", "vMain", "v-main"> &
__VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "routerView", "router-view">;
__VLS_components.VApp; __VLS_components.VApp; __VLS_components.vApp; __VLS_components.vApp; __VLS_components["v-app"]; __VLS_components["v-app"];
// @ts-ignore
[VApp, VApp,];
__VLS_components.VAppBar; __VLS_components.VAppBar; __VLS_components.vAppBar; __VLS_components.vAppBar; __VLS_components["v-app-bar"]; __VLS_components["v-app-bar"];
// @ts-ignore
[VAppBar, VAppBar,];
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
__VLS_components.VImg; __VLS_components.vImg; __VLS_components["v-img"];
// @ts-ignore
[VImg,];
__VLS_components.VSpacer; __VLS_components.VSpacer; __VLS_components.vSpacer; __VLS_components.vSpacer; __VLS_components["v-spacer"]; __VLS_components["v-spacer"];
// @ts-ignore
[VSpacer, VSpacer,];
__VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"];
// @ts-ignore
[VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn, VBtn,];
__VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"]; __VLS_components["v-icon"];
// @ts-ignore
[VIcon, VIcon, VIcon, VIcon,];
__VLS_components.VMain; __VLS_components.VMain; __VLS_components.vMain; __VLS_components.vMain; __VLS_components["v-main"]; __VLS_components["v-main"];
// @ts-ignore
[VMain, VMain,];
__VLS_components.RouterView; __VLS_components.routerView; __VLS_components["router-view"];
// @ts-ignore
[RouterView,];
{
let __VLS_0!: 'VApp' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VApp : 'vApp' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vApp : 'v-app' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-app'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VApp'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, style: ({}), }));
({} as { VApp: typeof __VLS_0; }).VApp;
({} as { VApp: typeof __VLS_0; }).VApp;
const __VLS_2 = __VLS_1({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
let __VLS_5!: 'VAppBar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VAppBar : 'vAppBar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vAppBar : 'v-app-bar' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-app-bar'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VAppBar'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, app: (true), color: ("white"), dark: (true), }));
({} as { VAppBar: typeof __VLS_5; }).VAppBar;
({} as { VAppBar: typeof __VLS_5; }).VAppBar;
const __VLS_7 = __VLS_6({ ...{}, app: (true), color: ("white"), dark: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, app: (true), color: ("white"), dark: (true), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_12 = __VLS_11({ ...{}, class: ("d-flex align-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("d-flex align-center"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
let __VLS_15!: 'VImg' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VImg : 'vImg' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vImg : 'v-img' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-img'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VImg'];
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, alt: ("Vuetify Logo"), class: ("shrink mr-2"), contain: (true), src: ("../public/img/icons/2.png"), transition: ("scale-transition"), width: ("200"), }));
({} as { VImg: typeof __VLS_15; }).VImg;
const __VLS_17 = __VLS_16({ ...{}, alt: ("Vuetify Logo"), class: ("shrink mr-2"), contain: (true), src: ("../public/img/icons/2.png"), transition: ("scale-transition"), width: ("200"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, alt: ("Vuetify Logo"), class: ("shrink mr-2"), contain: (true), src: ("../public/img/icons/2.png"), transition: ("scale-transition"), width: ("200"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
(__VLS_13.slots!).default;
}
{
let __VLS_20!: 'VSpacer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VSpacer : 'vSpacer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vSpacer : 'v-spacer' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-spacer'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VSpacer'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { VSpacer: typeof __VLS_20; }).VSpacer;
({} as { VSpacer: typeof __VLS_20; }).VSpacer;
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
{
let __VLS_25!: 'VBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBtn : 'vBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vBtn : 'v-btn' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-btn'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBtn'];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, tile: (true), color: ("success"), style: ({}), }));
({} as { VBtn: typeof __VLS_25; }).VBtn;
({} as { VBtn: typeof __VLS_25; }).VBtn;
const __VLS_27 = __VLS_26({ ...{}, tile: (true), color: ("success"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, tile: (true), color: ("success"), style: ({}), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
let __VLS_30!: 'VIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VIcon : 'vIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vIcon : 'v-icon' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-icon'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VIcon'];
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, left: (true), }));
({} as { VIcon: typeof __VLS_30; }).VIcon;
({} as { VIcon: typeof __VLS_30; }).VIcon;
const __VLS_32 = __VLS_31({ ...{}, left: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, left: (true), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
(__VLS_33.slots!).default;
}
(__VLS_28.slots!).default;
}
{
let __VLS_35!: 'VBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBtn : 'vBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vBtn : 'v-btn' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-btn'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBtn'];
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, tile: (true), color: ((#)), 9: VLS_ctx.D0208 })); ";"; (true), style; ({}), ;
};
({} as { VBtn: typeof __VLS_35; }).VBtn;
({} as { VBtn: typeof __VLS_35; }).VBtn;
const __VLS_37 = __VLS_36({ ...{}, tile: (true), color: ((#)), 9: VLS_ctx.D0208 }); ";"; (true), style; ({}), ;
} __VLS_functionalComponentArgsRest(__VLS_36);;
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, tile: (true), color: ((#)), 9: VLS_ctx.D0208 }); ";"; (true), style; ({}), ;
};
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
{
let __VLS_40!: 'VIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VIcon : 'vIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vIcon : 'v-icon' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-icon'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VIcon'];
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, left: (true), }));
({} as { VIcon: typeof __VLS_40; }).VIcon;
({} as { VIcon: typeof __VLS_40; }).VIcon;
const __VLS_42 = __VLS_41({ ...{}, left: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, left: (true), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
(__VLS_43.slots!).default;
}
(__VLS_38.slots!).default;
}
