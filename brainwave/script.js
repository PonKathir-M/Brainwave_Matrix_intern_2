const posts = [
  {
    title: "My Internship Journey at Brainwave Matrix",
    date: "July 3, 2025",
    content: "I worked on live web development tasks, learned version control, teamwork, and frontend optimization.",
    tags: ["Internship", "Web", "HTML", "CSS"]
  },
  {
    title: "Top 5 Java Projects for CSE Students",
    date: "June 28, 2025",
    content: "Some cool projects include Contact Manager, Quiz App, Chat App with Sockets, Expense Tracker, and Library System.",
    tags: ["Java", "Projects", "CSE"]
  },
  {
    title: "Frontend Lessons from my Internship",
    date: "June 22, 2025",
    content: "I learned to use CSS grid, responsive layouts, and clean semantic HTML with accessibility in mind.",
    tags: ["Frontend", "CSS", "Accessibility"]
  },
  {
    title: "Understanding REST APIs in 5 Mins",
    date: "June 15, 2025",
    content: "REST APIs allow apps to talk using standard HTTP verbs. I explored CRUD using Postman and Express.js.",
    tags: ["API", "Backend", "Express"]
  }
];

function renderPosts(postsToRender) {
  const container = document.getElementById('posts') || document.getElementById('blog-container');
  if (!container) return;
  container.innerHTML = '';
  postsToRender.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `
      <h2>${post.title}</h2>
      <p class="date">${post.date}</p>
      <p>${post.content}</p>
      <div class="tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    `;
    container.appendChild(div);
  });
}

renderPosts(posts);

const input = document.getElementById('searchInput');
if (input) {
  input.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(value) ||
      post.content.toLowerCase().includes(value) ||
      post.tags.some(tag => tag.toLowerCase().includes(value))
    );
    renderPosts(filtered);
  });
}
