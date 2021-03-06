import { IndexGateway } from './index.gateway';
import { GatewayService } from './services/gateway.service';
import { SocketService } from './services/socket.service';
import {
	HttpModule,
	Module
	} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { readFileSync } from 'fs';

@Module({
	imports: [HttpModule],
	providers: [
		{
			provide: ConfigService,
			useValue: new ConfigService(JSON.parse(readFileSync('dist/apps/embedded-device-manager-api-nest/assets/envs/libs/apis/metric-manager/index.json').toString()))
		},
		IndexGateway,
		GatewayService,
		SocketService
	]
})
export class IndexModule {}
