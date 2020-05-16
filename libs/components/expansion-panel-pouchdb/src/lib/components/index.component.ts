import { Actions as FeatureActions } from '../actions';
import {
	ChangeDetectionStrategy,
	Component,
	Input
	} from '@angular/core';
import {
	NodeRouter,
	Tree
	} from '@gdgtoulouse/components/expansion-panel';
import { treeListFromFlatNodeList } from '@gdgtoulouse/structures/tree';
import { PouchdbCompleteChangesRequest } from '@gdgtoulouse/types';
import { Store } from '@ngrx/store';
import {
	Observable,
	of
	} from 'rxjs';
// import { Selectors as FeatureSelectors } from '../selectors';
@Component({
	selector: 'gdgtoulouse-expansion-panel-pouchdb',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent {
	@Input() changesRequest: PouchdbCompleteChangesRequest;

	treeList$: Observable<Tree[]> = of(
		treeListFromFlatNodeList<{ _id: string }, { pid: string }, { router?: NodeRouter }>(
			'_id',
			'pid',
			[
				{ _id: 'access-point', pid: null },
				{ _id: 'access-point-configure', pid: 'access-point', router: { routerLink: ['/access-point/configure'] } },
				{ _id: 'access-point-restart', pid: 'access-point', router: { routerLink: ['/access-point/restart'] } },
				{ _id: 'system', pid: null },
				{ _id: 'system-reboot', pid: 'system', router: { routerLink: ['/system/reboot'] } },
				{ _id: 'system-terminal', pid: 'system', router: { routerLink: ['/system/terminal'] } },
				{ _id: 'system-update', pid: 'system', router: { routerLink: ['/system/update'] } },
				{ _id: 'system-upgrade', pid: 'system', router: { routerLink: ['/system/upgrade'] } },
				{ _id: 'projects', pid: null },
				{ _id: 'projects-com', pid: 'projects' },
				{ _id: 'projects-com-gpio', pid: 'projects-com' },
				{ _id: 'projects-com-gpio-configs', pid: 'projects-com-gpio' },
				{ _id: 'projects-com-gpio-configs-blink', pid: 'projects-com-gpio-configs' },
				{ _id: 'projects-com-gpio-configs-blink-list', pid: 'projects-com-gpio-configs-blink', router: { routerLink: ['/projects/com/gpio/configs/blink/list'] } },
				{ _id: 'projects-com-gpio-configs-blink-update', pid: 'projects-com-gpio-configs-blink', router: { routerLink: ['/projects/com/gpio/configs/blink/update'] } },
				{ _id: 'projects-com-gpio-configs-fade', pid: 'projects-com-gpio-configs' },
				{ _id: 'projects-com-gpio-configs-fade-list', pid: 'projects-com-gpio-configs-fade', router: { routerLink: ['/projects/com/gpio/configs/fade/list'] } },
				{ _id: 'projects-com-gpio-configs-fade-update', pid: 'projects-com-gpio-configs-fade', router: { routerLink: ['/projects/com/gpio/configs/fade/update'] } },
				{ _id: 'projects-com-gpio-configs-static', pid: 'projects-com-gpio-configs' },
				{ _id: 'projects-com-gpio-configs-static-list', pid: 'projects-com-gpio-configs-static', router: { routerLink: ['/projects/com/gpio/configs/static/list'] } },
				{ _id: 'projects-com-gpio-configs-static-update', pid: 'projects-com-gpio-configs-static', router: { routerLink: ['/projects/com/gpio/configs/static/update'] } },
				{ _id: 'projects-com-gpio-executions', pid: 'projects-com-gpio' },
				{ _id: 'projects-com-gpio-executions-list', pid: 'projects-com-gpio-executions', router: { routerLink: ['/projects/com/gpio-executions/list'] } },
				{ _id: 'projects-com-gpio-executions-update', pid: 'projects-com-gpio-executions', router: { routerLink: ['/projects/com/gpio-executions/update'] } },
				{ _id: 'projects-com-i2c', pid: 'projects-com' },
				{ _id: 'projects-com-i2c-configs', pid: 'projects-com-i2c' },
				{ _id: 'projects-com-i2c-configs-list', pid: 'projects-com-i2c-configs', router: { routerLink: ['/projects/com/i2c/configs/list'] } },
				{ _id: 'projects-com-i2c-configs-update', pid: 'projects-com-i2c-configs', router: { routerLink: ['/projects/com/i2c/configs/update'] } },
				{ _id: 'projects-com-i2c-executions', pid: 'projects-com-i2c' },
				{ _id: 'projects-com-i2c-executions-list', pid: 'projects-com-i2c-executions', router: { routerLink: ['/projects/com/i2c/executions/list'] } },
				{ _id: 'projects-com-i2c-executions-update', pid: 'projects-com-i2c-executions', router: { routerLink: ['/projects/com/i2c/executions/update'] } },
				{ _id: 'projects-com-pwm', pid: 'projects-com' },
				{ _id: 'projects-com-pwm-configs', pid: 'projects-com-pwm' },
				{ _id: 'projects-com-pwm-configs-list', pid: 'projects-com-pwm-configs', router: { routerLink: ['/projects/com/pwm/configs/list'] } },
				{ _id: 'projects-com-pwm-configs-update', pid: 'projects-com-pwm-configs', router: { routerLink: ['/projects/com/pwm/configs/update'] } },
				{ _id: 'projects-com-pwm-executions', pid: 'projects-com-pwm' },
				{ _id: 'projects-com-pwm-executions-list', pid: 'projects-com-pwm-executions', router: { routerLink: ['/projects/com/pwm/executions/list'] } },
				{ _id: 'projects-com-pwm-executions-update', pid: 'projects-com-pwm-executions', router: { routerLink: ['/projects/com/pwm/executions/update'] } },
				{ _id: 'projects-com-spi', pid: 'projects-com' },
				{ _id: 'projects-com-spi-configs', pid: 'projects-com-spi' },
				{ _id: 'projects-com-spi-configs-list', pid: 'projects-com-spi-configs', router: { routerLink: ['/projects/com/spi/configs/list'] } },
				{ _id: 'projects-com-spi-configs-update', pid: 'projects-com-spi-configs', router: { routerLink: ['/projects/com/spi/configs/update'] } },
				{ _id: 'projects-com-spi-executions', pid: 'projects-com-spi' },
				{ _id: 'projects-com-spi-executions-list', pid: 'projects-com-spi-executions', router: { routerLink: ['/projects/com/spi/executions/list'] } },
				{ _id: 'projects-com-spi-executions-update', pid: 'projects-com-spi-executions', router: { routerLink: ['/projects/com/spi/executions/update'] } },
				{ _id: 'projects-com-uart', pid: 'projects-com' },
				{ _id: 'projects-com-uart-configs', pid: 'projects-com-uart' },
				{ _id: 'projects-com-uart-configs-list', pid: 'projects-com-uart-configs', router: { routerLink: ['/projects/com/uart/configs/list'] } },
				{ _id: 'projects-com-uart-configs-update', pid: 'projects-com-uart-configs', router: { routerLink: ['/projects/com/uart/configs/update'] } },
				{ _id: 'projects-com-uart-executions', pid: 'projects-com-uart' },
				{ _id: 'projects-com-uart-executions-list', pid: 'projects-com-uart-executions', router: { routerLink: ['/projects/com/uart/executions/list'] } },
				{ _id: 'projects-com-uart-executions-update', pid: 'projects-com-uart-executions', router: { routerLink: ['/projects/com/uart/executions/update'] } },
				{ _id: 'projects-countdown', pid: 'projects' },
				{ _id: 'projects-countdown-configs', pid: 'projects-countdown' },
				{ _id: 'projects-countdown-configs-list', pid: 'projects-countdown-configs', router: { routerLink: ['/projects/countdown/configs/list'] } },
				{ _id: 'projects-countdown-configs-update', pid: 'projects-countdown-configs', router: { routerLink: ['/projects/countdown/configs/update'] } },
				{ _id: 'projects-countdown-executions', pid: 'projects-countdown' },
				{ _id: 'projects-countdown-executions-list', pid: 'projects-countdown-executions', router: { routerLink: ['/projects/countdown/executions/list'] } },
				{ _id: 'projects-countdown-executions-update', pid: 'projects-countdown-executions', router: { routerLink: ['/projects/countdown/executions/update'] } }
			].map((flatNode) => (Object.keys(flatNode).includes('router') ? { ...flatNode, router: { ...flatNode.router, text: flatNode._id } } : { ...flatNode, header: { description: new Date().toString(), title: new Date().toString() } }))
		)
	);

	constructor(private store: Store<{}>) {}

	afterCollapse(tree: Tree) {
		this.store.dispatch(FeatureActions.Ui.ExpansionPanel.AfterCollapse.exec({ changesRequest: this.changesRequest, tree }));
	}
	afterExpand(tree: Tree) {
		this.store.dispatch(FeatureActions.Ui.ExpansionPanel.AfterExpand.exec({ changesRequest: this.changesRequest, tree }));
	}
	closed(tree: Tree) {
		this.store.dispatch(FeatureActions.Ui.ExpansionPanel.Closed.exec({ changesRequest: this.changesRequest, tree }));
	}
	destroyed(tree: Tree) {
		this.store.dispatch(FeatureActions.Ui.ExpansionPanel.Destroyed.exec({ changesRequest: this.changesRequest, tree }));
	}
	opened(tree: Tree) {
		this.store.dispatch(FeatureActions.Ui.ExpansionPanel.Opened.exec({ changesRequest: this.changesRequest, tree }));
	}
}
