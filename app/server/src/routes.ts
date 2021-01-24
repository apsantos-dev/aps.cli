import { Router } from 'express';

import DataCLIController from './modules/private/datacli/domains/controllers/DataCLIController';
import SocialNetworkController from './modules/private/social-network/domains/controllers/SocialNetworkController';
import ToolsController from './modules/private/tools/domains/controllers/ToolsController';

const routes = Router();

routes.get('/data-cli', DataCLIController.index);
routes.get('/data-cli/:id', DataCLIController.show);
routes.post('/data-cli', DataCLIController.create);

routes.get('/social-network', SocialNetworkController.index);
routes.get('/social-network/:id', SocialNetworkController.show);
routes.post('/social-network', SocialNetworkController.create);

routes.get('/tools', ToolsController.index);
routes.get('/tools/:id', ToolsController.show);
routes.post('/tools', ToolsController.create);
routes.delete('/tools/:id', ToolsController.delete);

export default routes;
