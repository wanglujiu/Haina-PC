import http from '@/common/utils/initAxios'
const url =
	import.meta.env.MODE === 'development'
		? '/uni-cloud'
		: '//fc-mp-7f470fd4-438a-472b-87c3-4f3b10bfad95.next.bspapp.com'
export function SetThemeStatistics(data: any) {
	return http.post(`${url}/theme-statistics-set`, data)
}
export function GetThemeStatistics(params: {
	date?: string
	endDate?: string
	startDate?: string
}) {
	return http.get(`${url}/theme-statistics-get`, {
		params,
	})
}
export function SetEmotionStatistics(data: any) {
	return http.post(`${url}/emotion-statistics-set`, data)
}
export function GetEmotionStatistics(params: {
	date?: string
	endDate?: string
	startDate?: string
}) {
	return http.get(`${url}/emotion-statistics-get`, {
		params,
	})
}
export function SetEmotion(data: any) {
	return http.post(`${url}/emotion-set`, data)
}
export function GetEmotion(params: {
	date?: string
	endDate?: string
	startDate?: string
}) {
	return http.get(`${url}/emotion-get`, {
		params,
	})
}
