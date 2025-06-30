export default async function Page() {
  const data = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=AT9pqz2uwwKtX0fPqXfmuJYeJ36lybfO62KSfLXt"
  );
  const post = await data.json();

  return (
    <>
      <div key={post.id}>
        <img src={post.url} />
        <caption>{post.title}</caption>
      </div>
    </>
  );
}
