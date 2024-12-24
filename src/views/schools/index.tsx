import { Table } from "antd";
import { useState } from "react";
import FilterComponent from "../../components/FilterComponent";
import type { EntityFilter } from "../../components/FilterComponent";
import ProductListFilter from "../../components/entitesListFilter/EntitiesListFilter";
import { schoolColumns } from "../../constants";
import { useGetAllSchoolsQuery } from "../../store/services";
import type { ISchool } from "../../types";

const Schools: React.FC = () => {
	const { data: schools } = useGetAllSchoolsQuery();
	const [filters, setFilters] = useState<EntityFilter>(
		() => ({}) as EntityFilter,
	);

	const filteredSchools = FilterComponent(schools || [], filters);

	const schoolDataSource: ISchool[] =
		filteredSchools?.map((school) => ({
			id: school.id,
			name: school.name || "N/A",
			establishmentYear: school.establishmentYear || 0,
			region: school.region || "N/A",
			studentCount: school.studentCount || 0,
			classrooms: school.classrooms || 0,
			programsOffered: school.programsOffered || [],
			key: school.id.toString(),
		})) || [];

	return (
		<div>
			<ProductListFilter
				onChange={(updatedFilters) => setFilters(updatedFilters)}
				filterFields={[
					"name",
					"region",
					"establishmentYear",
					"studentCount",
					"classrooms",
					"programsOffered",
				]}
				clearFilters={() => setFilters({} as EntityFilter)}
			/>
			<Table
				size="middle"
				columns={schoolColumns}
				dataSource={schoolDataSource}
				rowKey="id"
			/>
		</div>
	);
};

export default Schools;
