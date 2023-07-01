import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface PostInterface {
  id?: string;
  title: string;
  content: string;
  author_id?: string;
  editor_id?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;

  user_post_author_idTouser?: UserInterface;
  user_post_editor_idTouser?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface PostGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  author_id?: string;
  editor_id?: string;
  company_id?: string;
}
