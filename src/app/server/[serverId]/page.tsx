export default function ServerShow({
  params: { blogId },
}: Readonly<{
  params: { blogId: string };
}>) {
  return <p>server show {blogId}</p>;
}
