import {
	Box,
	Checkbox,
	CheckboxGroup,
	Divider,
	SimpleGrid,
	Text
} from '@chakra-ui/react'

import { FilterItem } from '@api/types/Filter'

interface FilterSectionProps {
	filter: FilterItem
}

export const FilterSection = ({ filter }: FilterSectionProps) => {
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
			<CheckboxGroup>
				<SimpleGrid
					spacingY="1rem"
					columns={3}
					pb="2rem"
				>
					{filter.options.map(option => (
						<Checkbox
							key={option.id}
							size="lgThick"
							variant="rounded"
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
