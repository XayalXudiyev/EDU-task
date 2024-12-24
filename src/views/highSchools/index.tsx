import { Table } from "antd";
import { useState } from "react";
import FilterComponent from "../../components/FilterComponent";
import type { EntityFilter } from "../../components/FilterComponent";
import ProductListFilter from "../../components/entitesListFilter/EntitiesListFilter";
import { highSchoolColumns } from "../../constants";
import { useGetAllHighSchoolsQuery } from "../../store/services";
import type { IHighSchool } from "../../types";

const HighSchools: React.FC = () => {
	const { data: highSchools } = useGetAllHighSchoolsQuery();
	const [filters, setFilters] = useState<EntityFilter>(
		() => ({}) as EntityFilter,
	);

	const filteredHighSchools = FilterComponent(highSchools || [], filters);

	const highSchoolDataSource: IHighSchool[] =
		filteredHighSchools?.map((highSchool) => ({
			id: highSchool.id,
			name: highSchool.name || "N/A",
			establishmentYear:
				typeof highSchool.establishmentYear === "number"
					? highSchool.establishmentYear
					: 0,
			region: highSchool.region || "N/A",
			studentCount: highSchool.studentCount ?? 0,
			classrooms: highSchool.classrooms ?? 0,
			specialization: highSchool.specialization || "N/A",
			accreditation: highSchool.accreditation || "N/A",
			key: highSchool.id.toString(),
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
					"specialization",
					"accreditation",
				]}
				clearFilters={() => setFilters(() => ({}) as EntityFilter)}
			/>
			<Table
				size="middle"
				columns={highSchoolColumns}
				dataSource={highSchoolDataSource}
				rowKey="id"
			/>
		</div>
	);
};

export default HighSchools;
