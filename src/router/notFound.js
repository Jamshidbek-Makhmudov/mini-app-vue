
import {
RT_404,
MT_404,
} from "../constants/routeNames";
 export const notFound = {
	 path: '/:pathMatch(.*)*',
	 name:RT_404,
	 component: () => import('../pages/errors/404.vue'),
	      meta: {
					title: MT_404,
					layout:"NotFound",
      },					
}

