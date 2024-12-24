export type EntityFilter = {
	id: number;
	name: string;
	establishmentYear?: number;
	region?: string;
	corpus?: string[];
	facultyCount?: number;
	campusSize?: string;
	scholarshipsAvailable?: boolean;
	onlinePrograms?: boolean;
	studentCount?: number;
	classrooms?: number;
	specialization?: string;
	accreditation?: string;
	programsOffered?: string[];
	key?: string;
};

const FilterComponent = (data: EntityFilter[], options: EntityFilter) => {
	return data?.filter((item) => {
		const matchesName = options.name
			? item.name.toLowerCase().includes(options.name.toLowerCase())
			: true;

		const matchesEstablishmentYear = options.establishmentYear
			? item.establishmentYear === options.establishmentYear
			: true;

		const matchesRegion = options.region
			? (item.region ?? "").toLowerCase().includes(options.region.toLowerCase())
			: true;

		const matchesCorpus = options.corpus
			? (item.corpus ?? []).some((corpus) =>
					(options.corpus ?? []).includes(corpus),
				)
			: true;

		const matchesFacultyCount = options.facultyCount
			? item.facultyCount === options.facultyCount
			: true;
		const matchesCampusSize = options.campusSize
			? (item.campusSize ?? "")
					.toLowerCase()
					.includes(options.campusSize.toLowerCase())
			: true;
		const matchesScholarshipsAvailable =
			options.scholarshipsAvailable !== undefined
				? item.scholarshipsAvailable === options.scholarshipsAvailable
				: true;
		const matchesOnlinePrograms =
			options.onlinePrograms !== undefined
				? item.onlinePrograms === options.onlinePrograms
				: true;
		const matchesStudentCount = options.studentCount
			? item.studentCount === options.studentCount
			: true;
		const matchesClassrooms = options.classrooms
			? item.classrooms === options.classrooms
			: true;
		const matchesSpecialization = options.specialization
			? (item.specialization ?? "")
					.toLowerCase()
					.includes(options.specialization.toLowerCase())
			: true;
		const matchesAccreditation = options.accreditation
			? (item.accreditation ?? "")
					.toLowerCase()
					.includes(options.accreditation.toLowerCase())
			: true;
		const matchesProgramsOffered = options.programsOffered
			? (item.programsOffered ?? []).some((program) =>
					(options.programsOffered ?? []).includes(program),
				)
			: true;

		return (
			matchesName &&
			matchesEstablishmentYear &&
			matchesRegion &&
			matchesCorpus &&
			matchesFacultyCount &&
			matchesCampusSize &&
			matchesScholarshipsAvailable &&
			matchesOnlinePrograms &&
			matchesStudentCount &&
			matchesClassrooms &&
			matchesSpecialization &&
			matchesAccreditation &&
			matchesProgramsOffered
		);
	});
};

export default FilterComponent;
