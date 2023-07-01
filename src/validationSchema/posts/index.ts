import * as yup from 'yup';

export const postValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  author_id: yup.string().nullable(),
  editor_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
