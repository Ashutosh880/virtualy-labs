export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  otherProjectType: string;
  message: string;
}

export interface ContactApiPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  id?: string;
}
