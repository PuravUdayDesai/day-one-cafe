const list = document.querySelector("#episodes");

for (const episode of episodes) {
  const item = document.createElement("li");
  item.className = "episode";

  const image = document.createElement("img");
  image.src = episode.thumbnail;
  image.alt = `Episode ${episode.episode}: ${episode.title}`;
  image.width = 1080;
  image.height = 1920;

  const url = (episode.url || "").trim();
  if (url) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.append(image);
    item.append(link);
  } else {
    const card = document.createElement("div");
    card.className = "card";
    card.append(image);
    item.append(card);
  }

  list.append(item);
}
