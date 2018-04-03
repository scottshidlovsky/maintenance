import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as FeatureState } from '../user.module';

const selectUserFeature = createFeatureSelector<FeatureState>('user');
export const selectUser = createSelector(selectUserFeature, (state: FeatureState) => state.user);
