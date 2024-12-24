import { useEffect, useState } from "react";
import { Input, Checkbox, Select, Button } from "antd";
import type { EntityFilter } from "../FilterComponent";
import { useDebouncedCallback } from "use-debounce";

const { Option } = Select;

interface ProductListFilterProps {
	onChange: (filters: EntityFilter) => void;
	filterFields?: string[];
	clearFilters: () => void;
}

const ProductListFilter = ({
	onChange,
	filterFields = [],
	clearFilters,
}: ProductListFilterProps) => {
	const [filters, setFilters] = useState<EntityFilter>(
		() => ({}) as EntityFilter,
	);

	const debouncedOnChange = useDebouncedCallback((newFilters: EntityFilter) => {
		onChange(newFilters);
	}, 500);

	useEffect(() => {
		debouncedOnChange(filters);
	}, [filters, debouncedOnChange]);

	const handleInputChange = (
		field: string,
		value: string | number | boolean,
	) => {
		setFilters((prevFilters) => {
			const updatedFilters = { ...prevFilters, [field]: value };
			return updatedFilters;
		});
	};

	const handleClearFilters = () => {
		setFilters({});
		clearFilters();
	};
	return (
		<>
			<div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
				{filterFields.includes("name") && (
					<Input
						placeholder="Search by Name"
						onChange={(e) => handleInputChange("name", e.target.value)}
					/>
				)}

				{filterFields.includes("region") && (
					<Input
						placeholder="Search by Region"
						onChange={(e) => handleInputChange("region", e.target.value)}
					/>
				)}

				{filterFields.includes("establishmentYear") && (
					<Input
						placeholder="Search by Establishment Year"
						type="number"
						onChange={(e) =>
							handleInputChange("establishmentYear", Number(e.target.value))
						}
					/>
				)}

				{filterFields.includes("facultyCount") && (
					<Input
						placeholder="Search by Faculty Count"
						type="number"
						onChange={(e) =>
							handleInputChange("facultyCount", Number(e.target.value))
						}
					/>
				)}

				{filterFields.includes("campusSize") && (
					<Input
						placeholder="Search by Campus Size"
						onChange={(e) => handleInputChange("campusSize", e.target.value)}
					/>
				)}

				{filterFields.includes("scholarshipsAvailable") && (
					<Checkbox
						checked={filters.scholarshipsAvailable}
						onChange={(e) =>
							handleInputChange("scholarshipsAvailable", e.target.checked)
						}
					>
						Scholarships Available
					</Checkbox>
				)}

				{filterFields.includes("onlinePrograms") && (
					<Checkbox
						checked={filters.onlinePrograms}
						onChange={(e) =>
							handleInputChange("onlinePrograms", e.target.checked)
						}
					>
						Online Programs Available
					</Checkbox>
				)}

				{filterFields.includes("studentCount") && (
					<Input
						placeholder="Search by Student Count"
						type="number"
						onChange={(e) =>
							handleInputChange("studentCount", Number(e.target.value))
						}
					/>
				)}

				{filterFields.includes("classrooms") && (
					<Input
						placeholder="Search by Number of Classrooms"
						type="number"
						onChange={(e) =>
							handleInputChange("classrooms", Number(e.target.value))
						}
					/>
				)}

				{filterFields.includes("specialization") && (
					<Input
						placeholder="Search by Specialization"
						onChange={(e) =>
							handleInputChange("specialization", e.target.value)
						}
					/>
				)}

				{filterFields.includes("accreditation") && (
					<Input
						placeholder="Search by Accreditation"
						onChange={(e) => handleInputChange("accreditation", e.target.value)}
					/>
				)}

				{filterFields.includes("programsOffered") && (
					<Select
						mode="multiple"
						placeholder="Search by Programs Offered"
						onChange={(value) => handleInputChange("programsOffered", value)}
					>
						<Option value="Program A">Program A</Option>
						<Option value="Program B">Program B</Option>
						<Option value="Program C">Program C</Option>
					</Select>
				)}
			</div>
			<div className="flex items-center justify-end w-full py-4 ">
				<Button
					onClick={handleClearFilters}
					style={{
						width: "20%",
						backgroundColor: "blueviolet",
						color: "white",
					}}
				>
					Clear Filters
				</Button>
			</div>
		</>
	);
};

export default ProductListFilter;
