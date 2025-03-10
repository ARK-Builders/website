/*
REQUIRED TO INSTALL K6 LOCALLY
https://grafana.com/docs/k6/latest/set-up/install-k6/
*/

import { check, sleep } from 'k6'
import http from 'k6/http'

export const options = {
	vus: 100,
	duration: '30s',
}

export default function () {
	// let res = http.get('https://www.ark-builders.dev/')
	let res = http.get('https://website-two-ashy-31.vercel.app/')

	check(res, { 'status is 200': (res) => res.status === 200 })
	sleep(1)
}
