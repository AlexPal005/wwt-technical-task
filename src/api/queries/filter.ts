import { useQuery } from '@tanstack/react-query'

import { FilterItem } from '@api/types/Filter'

import data from '../../temp/filterData.json'

const fetchFilters = (): FilterItem[] => {
	return data.filterItems as FilterItem[]
}

export const useFilters = () => {
	return useQuery({ queryKey: ['fetchFilters'], queryFn: fetchFilters })
}
