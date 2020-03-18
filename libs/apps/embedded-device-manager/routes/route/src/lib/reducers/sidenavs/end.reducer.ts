import { Actions as FeatureActions } from '../../actions';
import {
	createReducer,
	on
	} from '@ngrx/store';

export interface State {
	isOpen: boolean;
}

export const initialState: State = {
	isOpen: true
};

export const reducer = createReducer(
	initialState,
	on(FeatureActions.Sidenavs.End.close, FeatureActions.Sidenavs.close, (state) => ({
		...state,
		isOpen: false
	})),
	on(FeatureActions.Sidenavs.End.open, (state) => ({
		...state,
		isOpen: true
	})),
	on(FeatureActions.Sidenavs.End.toggle, (state) => ({
		...state,
		isOpen: !state.isOpen
	}))
);
