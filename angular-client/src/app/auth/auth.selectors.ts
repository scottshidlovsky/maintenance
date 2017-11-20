
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {State as FeatureState} from './auth.module';

const selectFeature = createFeatureSelector<FeatureState>('auth');
export const selectUser = createSelector(selectFeature, (state: FeatureState) => state.user);
