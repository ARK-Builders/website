/*
REQUIRED TO INSTALL K6 LOCALLY
https://grafana.com/docs/k6/latest/set-up/install-k6/
*/

import { check, sleep } from 'k6'
import http from 'k6/http'

// export const options = {
// 	vus: 250,
// 	rate: 1,
// 	duration: '1m',
// }

export const options = {
	scenarios: {
		// 250 users, 2 requests each, 1 min
		config1: {
			executor: 'per-vu-iterations',
			vus: 250,
			iterations: 2,
			maxDuration: '1m',
		},
		// 250 users, 5 requests each, 2 min
		// config2: {
		//   executor: 'per-vu-iterations',
		//   vus: 250,
		//   iterations: 5,
		//   maxDuration: '2m',
		// },
		// 250 users, 10 requests each, 5 min
		// config3: {
		//   executor: 'per-vu-iterations',
		//   vus: 250,
		//   iterations: 10,
		//   maxDuration: '5m',
		// },
		// 500 users, 2 requests each, 1 min
		// config4: {
		//   executor: 'per-vu-iterations',
		//   vus: 500,
		//   iterations: 2,
		//   maxDuration: '1m',
		// },
		// 500 users, 5 requests each, 2 min
		// config5: {
		//   executor: 'per-vu-iterations',
		//   vus: 500,
		//   iterations: 5,
		//   maxDuration: '2m',
		// },
		// 500 users, 10 requests each, 5 min
		// config6: {
		//   executor: 'per-vu-iterations',
		//   vus: 500,
		//   iterations: 10,
		//   maxDuration: '5m',
		// },
		// 750 users, 2 requests each, 1 min
		// config7: {
		//   executor: 'per-vu-iterations',
		//   vus: 750,
		//   iterations: 2,
		//   maxDuration: '1m',
		// },
		// 750 users, 5 requests each, 2 min
		// config8: {
		//   executor: 'per-vu-iterations',
		//   vus: 750,
		//   iterations: 5,
		//   maxDuration: '2m',
		// },
		// 750 users, 10 requests each, 5 min
		// config9: {
		//   executor: 'per-vu-iterations',
		//   vus: 750,
		//   iterations: 10,
		//   maxDuration: '5m',
		// },
		// 1000 users, 2 requests each, 1 min
		// config10: {
		//   executor: 'per-vu-iterations',
		//   vus: 1000,
		//   iterations: 2,
		//   maxDuration: '1m',
		// },
		// 1000 users, 5 requests each, 2 min
		// config11: {
		//   executor: 'per-vu-iterations',
		//   vus: 1000,
		//   iterations: 5,
		//   maxDuration: '2m',
		// },
		// 1000 users, 10 requests each, 5 min
		// config12: {
		//   executor: 'per-vu-iterations',
		//   vus: 1000,
		//   iterations: 10,
		//   maxDuration: '5m',
		// },
	},
}

export default function () {
	let res = http.get('https://www.ark-builders.dev/')
	// let res = http.get('https://website-two-ashy-31.vercel.app/')

	check(res, { 'status is 200': (res) => res.status === 200 })
	sleep(1)
}
