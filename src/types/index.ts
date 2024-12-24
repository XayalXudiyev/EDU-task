export interface IEducationEntity {
	id: number;
	name: string;
	establishmentYear: number;
	region: string;
	key?: string;
}

export interface IHighSchool extends IEducationEntity {
	studentCount: number;
	classrooms: number;
	specialization: string;
	accreditation: string;
}

export interface ISchool extends IEducationEntity {
	studentCount: number;
	classrooms: number;
	programsOffered: string[];
}

export interface IUniversity extends IEducationEntity {
	corpus: string[];
	facultyCount: number;
	campusSize: string;
	scholarshipsAvailable: boolean;
	onlinePrograms: boolean;
}

export interface ITableColumnProps<T> {
	title: string;
	dataIndex?: string;
	key: string;
	render?: (_: React.ReactNode, record: T) => React.ReactNode;
}

export type IHighSchoolTableColumnsProps = ITableColumnProps<IHighSchool>;

export type ISchoolTableColumnsProps = ITableColumnProps<ISchool>;

export type IUniversityTableColumnsProps = ITableColumnProps<IUniversity>;
