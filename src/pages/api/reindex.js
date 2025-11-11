export const prerender = false;

export async function GET() {
  return new Response("OK", { status: 200 });
}

export default async function () {
  return new Response("OK", { status: 200 });
}
