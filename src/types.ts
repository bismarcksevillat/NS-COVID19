export interface ListDataProps {
	continent: string
	country: string
}

export interface Cases {
	new: string
	active?: number
	critical?: number
	recovered?: number
	'1M_pop': string
	total: number
}

export interface Deaths {
	new: string
	'1M_pop': string
	total?: number
}

export interface Tests {
	'1M_pop': string
	total?: number
}

export interface Response {
	continent: string
	country: string
	population?: number
	cases: Cases
	deaths: Deaths
	tests: Tests
	day: string
	time: Date
}

export interface DataResponse {
	get: string
	parameters: any[]
	errors: any[]
	results: number
	response: Response[]
}
