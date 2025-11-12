export default async (request) => {
  const url = new URL(request.url);
  url.pathname = "/";
  return Response.redirect(url.toString(), 302);
};
