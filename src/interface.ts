export interface Hidden {
  hidden: string;
}

export interface Details {
  title: string,
  company: string,
  location: string,
  description: string,
  url: string,
  deleteJob: (id: number) => void,
  id: number
}

export interface CardDetails {
  jobTitle: string,
  company: string,
  location: string,
  date: string,
  id: string,
  handleYesJob: (event: React.MouseEvent<HTMLButtonElement>) => void,
  updateList: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface SalariesCall {
  data: object[]
}

export interface JobTypeMap {
  id: string,
  attributes: JobAttributes

}

export interface JobAttributes {
  title: string,
  min_salary: string,
  max_salary: string
}
