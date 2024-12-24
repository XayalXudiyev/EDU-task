import CorpusesModal from "../components/CorpusesModal";
import TableActionsMenu from "../components/TableActionsMenu";
import {
	useDeleteHighSchoolMutation,
	useDeleteSchoolMutation,
	useDeleteUniversityMutation,
} from "../store/services";
import type {
	IHighSchoolTableColumnsProps,
	ISchoolTableColumnsProps,
	IUniversityTableColumnsProps,
} from "../types";

const UniversityActionMenu: React.FC<{ id: number }> = ({ id }) => {
	const [deleteUniversity] = useDeleteUniversityMutation({});
	return <TableActionsMenu id={id} deleteMutation={deleteUniversity} />;
};

const HighSchoolActionMenu: React.FC<{ id: number }> = ({ id }) => {
	const [deleteHighSchool] = useDeleteHighSchoolMutation();
	return <TableActionsMenu id={id} deleteMutation={deleteHighSchool} />;
};

const SchoolActionMenu: React.FC<{ id: number }> = ({ id }) => {
	const [deleteSchool] = useDeleteSchoolMutation();
	return <TableActionsMenu id={id} deleteMutation={deleteSchool} />;
};

export const highSchoolColumns: IHighSchoolTableColumnsProps[] = [
	{
		title: "ID",
		dataIndex: "id",
		key: "id",
	},
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Establishment Year",
		dataIndex: "establishmentYear",
		key: "establishmentYear",
	},
	{
		title: "Region",
		dataIndex: "region",
		key: "region",
	},
	{
		title: "Student Count",
		dataIndex: "studentCount",
		key: "studentCount",
	},
	{
		title: "Classrooms",
		dataIndex: "classrooms",
		key: "classrooms",
	},
	{
		title: "Specialization",
		dataIndex: "specialization",
		key: "specialization",
	},
	{
		title: "Accreditation",
		dataIndex: "accreditation",
		key: "accreditation",
	},
	{
		title: "Action",
		key: "actions",
		render: (_, record) => <HighSchoolActionMenu id={Number(record.id)} />,
	},
];

export const schoolColumns: ISchoolTableColumnsProps[] = [
	{
		title: "ID",
		dataIndex: "id",
		key: "id",
	},
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Region",
		dataIndex: "region",
		key: "region",
	},
	{
		title: "Establishment Year",
		dataIndex: "establishmentYear",
		key: "establishmentYear",
	},
	{
		title: "Student Count",
		dataIndex: "studentCount",
		key: "studentCount",
	},
	{
		title: "Classrooms",
		dataIndex: "classrooms",
		key: "classrooms",
	},
	{
		title: "Programs Offered",
		dataIndex: "programsOffered",
		key: "programsOffered",
		render: (programs) => (Array.isArray(programs) ? programs.join(", ") : ""),
	},
	{
		title: "Action",
		key: "actions",
		render: (_, record) => <SchoolActionMenu id={Number(record.id)} />,
	},
];

export const universityColumns: IUniversityTableColumnsProps[] = [
	{
		title: "ID",
		dataIndex: "id",
		key: "id",
	},
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Establishment Year",
		dataIndex: "establishmentYear",
		key: "establishmentYear",
	},
	{
		title: "Region",
		dataIndex: "region",
		key: "region",
	},
	{
		title: "Corpus",
		dataIndex: "corpus",
		key: "corpus",
		render: (corpus) => <CorpusesModal corpus={corpus as string[]} />,
	},
	{
		title: "Faculty Count",
		dataIndex: "facultyCount",
		key: "facultyCount",
	},
	{
		title: "Campus Size",
		dataIndex: "campusSize",
		key: "campusSize",
	},
	{
		title: "Scholarships Available",
		dataIndex: "scholarshipsAvailable",
		key: "scholarshipsAvailable",
		render: (available) => (available ? "Yes" : "No"),
	},
	{
		title: "Online Programs",
		dataIndex: "onlinePrograms",
		key: "onlinePrograms",
		render: (available) => (available ? "Yes" : "No"),
	},
	{
		title: "Action",
		key: "actions",
		render: (_, record) => <UniversityActionMenu id={Number(record.id)} />,
	},
];
