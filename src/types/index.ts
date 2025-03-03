export type SectionNameProps = {
  sectionName: string;
  sectionNumber: string;
  sectionTitle: string;
};

export type SectionWrapperProps = {
  sectionName: string;
  sectionNumber: string;
  children: React.ReactNode;
  sectionTitle: string;
};

export type CourseCardProps = {
  courseNumber: string;
  courseName: string;
  courseIcon: JSX.Element;
};
