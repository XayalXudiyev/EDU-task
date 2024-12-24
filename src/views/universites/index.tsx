import { Spin, Table } from "antd";
import { useEffect, useState } from "react";
import FilterComponent from "../../components/FilterComponent";
import type { EntityFilter } from "../../components/FilterComponent";
import ProductListFilter from "../../components/entitesListFilter/EntitiesListFilter";
import { universityColumns } from "../../constants";
import { useGetAllUniversitiesQuery } from "../../store/services";
import type { IUniversity } from "../../types";

const Universities: React.FC = () => {
	const [filters, setFilters] = useState<EntityFilter>(
		() => ({}) as EntityFilter,
	);

	const {
		data: universities,
		isLoading,
		error,
	} = useGetAllUniversitiesQuery(filters);
	console.log("filters", filters);


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

			{isLoading && <div><Spin className="animate-spin"/></div>}
			{error && <div>Error: {error.message}</div>}
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
