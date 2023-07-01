const mapping: Record<string, string> = {
  companies: 'company',
  posts: 'post',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
