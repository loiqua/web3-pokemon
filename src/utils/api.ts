export async function getRequest<T>(url: string, mapper?: (responses: any) => T): Promise<T> {
  const responses = await fetch(url);
  if (mapper) {
    return mapper(await responses.json());
  }
  return await responses.json();
}
