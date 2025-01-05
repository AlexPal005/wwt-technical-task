import { create } from 'zustand'

import { FilterType } from '@api/types/Filter'
import {
	SearchRequestFilter,
	SearchRequestOptions
} from '@api/types/SearchRequest/SearchRequestFilter.ts'

interface FilterStore {
	filters: SearchRequestFilter
	updateFilter: (id: string, optionsIds: string[]) => void
	setFilters: (filters: SearchRequestOptions[]) => void
	resetFilters: () => void
}

const filtersFromStorage = JSON.parse(localStorage.getItem('filters') || '[]')
export const useFilterStore = create<FilterStore>(set => ({
	filters: filtersFromStorage,
	updateFilter: (id, optionsIds) =>
		set(state => {
			const updatedFilter: SearchRequestOptions = {
				id,
				type: FilterType.OPTION,
				optionsIds
			}
			const otherFilters = state.filters.filter(filter => filter.id !== id)
			const newFilters = [...otherFilters, updatedFilter]
			console.log('filters: ', newFilters)
			return {
				filters: newFilters
			}
		}),
	setFilters: (filters: SearchRequestOptions[]) =>
		set({
			filters
		}),
	resetFilters: () => set({ filters: [] })
}))
