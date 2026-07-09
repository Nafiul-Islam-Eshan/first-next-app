import Link from "next/link";

export const metadata = {
  title: 'Blog',
  description: '...',
}

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of Mastering Residual Heat in Cooking",
      slug: "mastering-residual-heat-cooking",
      author: "Chef Alex Chen",
      publishedAt: "2026-06-15",
      summary:
        "Why turning off your stove early is the secret weapon to perfectly cooked proteins and silky sauces that never break.",
      tags: ["Cooking Tips", "Culinary Technique", "Food Science"],
      readTime: "4 min",
    },
    {
      id: 2,
      title: "Beyond the Code: Designing for Digital Accessibility",
      slug: "designing-digital-accessibility",
      author: "Sarah Jenkins",
      publishedAt: "2026-06-10",
      summary:
        "An easy-to-follow guide on building web experiences that everyone can use, focusing on color contrast, screen readers, and keyboard navigation.",
      tags: ["Web Design", "Accessibility", "UX UI"],
      readTime: "6 min",
    },
    {
      id: 3,
      title: "The Hidden Ecosystem of Your Backyard Soil",
      slug: "hidden-ecosystem-backyard-soil",
      author: "Dr. Marcus Vance",
      publishedAt: "2026-05-28",
      summary:
        "Unearthing the billions of microbes, fungi, and tiny organisms that keep your garden alive and how to nourish them naturally.",
      tags: ["Gardening", "Nature", "Soil Health"],
      readTime: "5 min",
    },
    {
      id: 4,
      title: "A Minimalist Approach to Productivity Systems",
      slug: "minimalist-approach-productivity",
      author: "Elena Rostova",
      publishedAt: "2026-05-14",
      summary:
        "If your productivity app setup takes more than ten minutes a day to maintain, it's getting in your way. Here is how to strip it down to the essentials.",
      tags: ["Productivity", "Minimalism", "Life Habits"],
      readTime: "3 min",
    },
  ];
  return (
    <div>
      <h2 className="text-4xl text-cyan-500">Blogs</h2>
      <div className="space-y-3 p-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="border-2 border-b-fuchsia-400 shadow-lg shadow-fuchsia-300 p-3 rounded-2xl ">
            <h2 className="text-3xl font-bold">{blog.title}</h2>
            <Link href={`../blog/${blog.id}`}>Show Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
