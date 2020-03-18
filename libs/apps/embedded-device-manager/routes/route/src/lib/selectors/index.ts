import { Menus as RouteMenus } from '../actions';
import { getFeatureState } from '../reducers';
import { Params } from '@angular/router';
import { forEachTree } from '@gdgtoulouse/structures/tree';
import { RouterReducerState } from '@ngrx/router-store';
import {
	createFeatureSelector,
	createSelector
	} from '@ngrx/store';

//#region grid
export const grid$ = createSelector(getFeatureState, ({ grid }) => grid);
export const gridTemplateAreas$ = createSelector(grid$, ({ templateAreas }) => templateAreas);
export const gridTemplateColumns$ = createSelector(grid$, ({ templateColumns }) => templateColumns);
export const gridTemplateRows$ = createSelector(grid$, ({ templateRows }) => templateRows);
//#endregion

//#region menus
export const menuEndApiGetResponseTree$ = createSelector(
	getFeatureState,
	({
		menuEndApiGet: {
			response: { tree }
		}
	}) => tree
);
export const menuEndTree$ = createSelector(menuEndApiGetResponseTree$, (rootTree) =>
	forEachTree<RouteMenus.End.Api.Get.TreeData>(rootTree, (subTree, step) => ({
		...subTree.data,
		step
	}))
);
//#endregion

//#region langMenuList
export const langMenuListApiGet$ = createSelector(getFeatureState, ({ langMenuListApiGet }) => langMenuListApiGet);
export const langMenuList$ = createSelector(langMenuListApiGet$, ({ response: menuList }) => menuList);
//#endregion

//#region router
export const router$ = createFeatureSelector<
	RouterReducerState<{
		params: Params;
		queryParams: Params;
		url: string;
	}>
>('appRouter');

export const keyIsInQueryParams$ = (key: string) => createSelector(router$, (router) => (router === undefined ? undefined : Object.keys(router.state.queryParams).includes(key)));

//#region lang
export const langIdQueryParam$ = createSelector(router$, (router) => (router === undefined ? null : <string>router.state.queryParams['lang']));
export const langIdIsInQueryParams$ = keyIsInQueryParams$('lang');
export const langIdIsNotInQueryParams$ = createSelector(langIdIsInQueryParams$, (langIdIsInQueryParams) => !langIdIsInQueryParams);
export const langId$ = createSelector(langIdIsInQueryParams$, langIdQueryParam$, (langIdIsInQueryParams, langIdQueryParam) => (langIdIsInQueryParams ? langIdQueryParam : 'en'));
export const langMenuItem$ = createSelector(langId$, langMenuList$, (langId, langMenuList) => langMenuList.find(({ id }) => id === langId));
//#endregion
//#endregion

//#region sidenavs
export const sidenavEnd$ = createSelector(getFeatureState, ({ sidenavEnd }) => sidenavEnd);
export const sidenavEndIsOpen$ = createSelector(sidenavEnd$, ({ isOpen }) => isOpen);
export const sidenavStart$ = createSelector(getFeatureState, ({ sidenavStart }) => sidenavStart);
export const sidenavStartIsOpen$ = createSelector(sidenavStart$, ({ isOpen }) => isOpen);
//#endregion

export const Selectors = {
	grid$,
	gridTemplateAreas$,
	gridTemplateColumns$,
	gridTemplateRows$,
	langIdQueryParam$,
	langIdIsInQueryParams$,
	langIdIsNotInQueryParams$,
	langId$,
	langMenuItem$,
	langMenuListApiGet$,
	langMenuList$,
	menuEndApiGetResponseTree$,
	menuEndTree$,
	router$,
	sidenavEnd$,
	sidenavEndIsOpen$,
	sidenavStart$,
	sidenavStartIsOpen$
};