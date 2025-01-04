import { useEffect, useState } from 'react'

import {
	Box,
	Checkbox,
	CheckboxGroup,
	Divider,
	SimpleGrid,
	Text
} from '@chakra-ui/react'

import { FilterItem } from '@api/types/Filter'

import { useFilterStore } from '@store'

interface FilterSectionProps {
	filter: FilterItem
}

export const FilterSection = ({ filter }: FilterSectionProps) => {
	const updateFilter = useFilterStore(state => state.updateFilter)
	const selectedFilters = useFilterStore(state => state.filters)
	const [defaultValue, setDefaultValue] = useState<string[]>([])
	const handleChangeFilters = (selectedIds: string[]) => {
		updateFilter(filter.id, selectedIds)
	}
	useEffect(() => {
		const foundFilter = selectedFilters.find(el => el.id === filter.id)
		if (foundFilter) {
			setDefaultValue(foundFilter.optionsIds)
		}
	}, [selectedFilters])

	return (
		<Box pt="2rem">
			{filter.description && (
				<Text
					fontSize="xl"
					mb="1.5rem"
				>
					{filter.description}
				</Text>
			)}
			<CheckboxGroup
				onChange={handleChangeFilters}
				value={defaultValue}
			>
				<SimpleGrid
					spacingY="1rem"
					columns={3}
					pb="2rem"
				>
					{filter.options.map(option => (
						<Checkbox
							key={option.id}
							size="smThick"
							variant="rounded"
							value={option.id}
						>
							{option.name}
						</Checkbox>
					))}
				</SimpleGrid>
			</CheckboxGroup>
			<Divider borderWidth="2px" />
		</Box>
	)
}
