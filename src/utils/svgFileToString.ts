export default async function svgFileToString(
  iconPath: string,
): Promise<string> {
  const response = await fetch(iconPath);
  const result = await response.text();
  return result;
}
