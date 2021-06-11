export interface Hidden {
  hidden: string;
}

export interface Details {
  title: string,
  company: string,
  location: string,
  description: string,
  url: string,
  deleteJob: (id: string) => void,
  id: string
}

export interface CardDetails {
  jobTitle: string,
  company: string,
  location: string,
  date: string,
  id: string,
  handleYesJob: (event: React.MouseEvent<HTMLButtonElement>) => void,
  updateList: (id: string) => void
}

export interface SalariesCall {
  data: JobTypeMap[]
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

export interface JobDisplay {
  attributes: DisplayAttributes,
  date: string,
  key: string,
  id: string
}

export interface DisplayAttributes {
  title: string,
  company: string,
  location: string,
  date: string,
}

export interface UpdateListJob {
  id: string,
}

export interface LoginCheck {
  error: string,
  data: CheckAttributes
}

export interface CheckAttributes {
  attributes: object
}

export interface SavedCard {
  title: string,
  company: string,
  location: string,
  id: string,
  updateDetailJob: (id: string) => void
}

export interface SearchTypes {
  userCity: string,
  updataSearchedJobs: (cityChecked: string, jobTitle: string) => void,
  setError: (id: string) => void,
  error: string,
  setLoading: (id: boolean) => void,
  loading: boolean
}

export interface SaveCards {
  key: string,
  id: string,
  title: string,
  company: string,
  location: string,
  updateDetailJob: (id: string) => void
}

export interface PostJobApiCall {
  attributes: PostJobAttrib
}

export interface PostJobAttrib {
  title: string,
  company: string,
  location: string,
  description: string,
  url: string,
}
