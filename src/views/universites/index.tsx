import { useGetAllUniversitiesQuery } from "../../store/services";
import { Table } from "antd";
import { universityColumns } from "../../constants";
import { useState } from "react";
import ProductListFilter from "../../components/entitesListFilter/EntitiesListFilter";
import FilterComponent from "../../components/FilterComponent";
import type { EntityFilter } from "../../components/FilterComponent";
import type { IUniversity } from "../../types";

const Universities: React.FC = () => {
	const { data: universities } = useGetAllUniversitiesQuery();
	const [filters, setFilters] = useState<EntityFilter>(
		() => ({}) as EntityFilter,
	);

	const filteredUniversities = universities
		? FilterComponent(universities, filters)
		: [];

	const universityDataSource: IUniversity[] =
		filteredUniversities?.map((university) => ({
			id: university.id,
			name: university.name || "N/A",
			establishmentYear: university.establishmentYear ?? 0,
			region: university.region || "N/A",
			corpus: university.corpus || [],
			facultyCount: university.facultyCount ?? 0,
			campusSize: university.campusSize || "N/A",
			scholarshipsAvailable: university.scholarshipsAvailable ?? false,
			onlinePrograms: university.onlinePrograms ?? false,
		})) || [];

	return (
		<div>
			<ProductListFilter
				onChange={(updatedFilters) => {
					setFilters(updatedFilters);
				}}
				filterFields={[
					"name",
					"region",
					"establishmentYear",
					"facultyCount",
					"campusSize",
					"scholarshipsAvailable",
					"onlinePrograms",
				]}
				clearFilters={() => setFilters(() => ({}) as EntityFilter)}
			/>
			<Table
				size="middle"
				columns={universityColumns}
				dataSource={universityDataSource}
				rowKey="id"
			/>
		</div>
	);
};

export default Universities;
