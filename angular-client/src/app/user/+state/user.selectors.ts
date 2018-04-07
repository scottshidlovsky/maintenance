import { createFeatureSelector } from '@ngrx/store';
import { State as FeatureState } from './user.reducer';

export const selectUserFeature = createFeatureSelector<FeatureState>('user');
