import { indexName } from '../../../index.config';
import { SubscriptionConfig as FeaturePouchdbManagerSubscriptionConfig } from '@gdgtoulouse/features/pouchdb-manager';
import {
	createAction,
	props,
	union
	} from '@ngrx/store';

export const topic = 'pouchdb-init-sync-null-tree-list';

export const exec = createAction(
	`[${indexName}][${topic}] exec`,
	props<{
		langSubscriptionConfig?: FeaturePouchdbManagerSubscriptionConfig;
		subscriptionConfig?: FeaturePouchdbManagerSubscriptionConfig;
	}>()
);

const all = union({
	exec
});
export type ActionsUnion = typeof all;
