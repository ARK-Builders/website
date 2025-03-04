/*
REQUIRED TO INSTALL K6 LOCALLY
https://grafana.com/docs/k6/latest/set-up/install-k6/
*/

import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
	vus: 10,
	duration: '10s',
}

export default function () {
	// let res = http.get('https://www.ark-builders.dev/')
	let res = http.get('https://website-two-ashy-31.vercel.app/')

	check(res, { 'status is 200': (res) => res.status === 200 })
	sleep(1)
}
