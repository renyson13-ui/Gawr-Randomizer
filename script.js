const guraSongs = [
    { title: "REFLECT - Gawr Gura", id: "nCQ_zZIiGLA" },
    { title: "Q - Mori Calliope x Gawr Gura", id: "6fet5_bMVIc" },
    { title: "Sweet Appetite - Gawr Gura x Hakos Baelz", id: "1UnI84x-0eI" },
    { title: "Kyllingstedt - Gawr Gura", id: "5sJbXm4-RUk" }
];

function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * guraSongs.length);
    const selected = guraSongs[randomIndex];

    document.getElementById("song-title").innerText = selected.title;
    document.getElementById("video-frame").src = `https://www.youtube.com/embed/${selected.id}?autoplay=1`;
    document.getElementById("player-container").style.display = "block";
}
