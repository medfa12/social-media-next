const posts = [
  {
    title: "The Future of Social Media",
    slug: "future-of-social-media",
    content: "As we look ahead to the next decade, social media is poised to undergo significant transformations. With the advent of virtual and augmented reality, the line between digital and physical interactions is blurring. We can expect more immersive experiences, where users can 'step into' digital spaces and interact with others in ways that feel increasingly lifelike. Additionally, AI-driven personalization will reach new heights, curating content and connections with unprecedented accuracy.",
  },
  {
    title: "Balancing Privacy and Connectivity",
    slug: "balancing-privacy-and-connectivity",
    content: "In an era where data is often called the new oil, striking the right balance between connectivity and privacy has become a critical challenge for social media platforms. Users are becoming more aware of their digital footprints and demanding greater control over their personal information. Forward-thinking companies are implementing features like ephemeral content, encrypted messaging, and granular privacy settings. The future of social media will likely see a shift towards platforms that prioritize user privacy while still fostering meaningful connections.",
  },
  {
    title: "The Rise of Niche Social Networks",
    slug: "rise-of-niche-social-networks",
    content: "While giants like Facebook and Twitter continue to dominate the social media landscape, we're seeing a growing trend of niche social networks catering to specific interests or communities. These platforms offer users a more focused and relevant experience, whether it's for professional networking in particular industries, hobbyist groups, or local community engagement. This fragmentation of the social media space allows for more diverse and specialized interactions, potentially leading to stronger, more meaningful connections among users with shared interests.",
  },
  {
    title: "Social Commerce: The New Frontier",
    slug: "social-commerce-new-frontier",
    content: "The integration of e-commerce features into social media platforms is revolutionizing the way we shop online. Social commerce allows users to discover, evaluate, and purchase products without ever leaving their favorite social apps. With features like shoppable posts, live stream shopping events, and AI-powered product recommendations, social media is becoming an increasingly important channel for businesses to reach and engage with customers. As this trend continues to grow, we can expect to see more innovative ways for brands to create seamless shopping experiences within social platforms.",
  },
  {
    title: "The Impact of Social Media on Mental Health",
    slug: "social-media-mental-health-impact",
    content: "As social media becomes more deeply ingrained in our daily lives, its impact on mental health has come under increasing scrutiny. While these platforms offer unprecedented opportunities for connection and self-expression, they also present challenges such as social comparison, addiction, and information overload. Responsible social media companies are now focusing on developing features that promote digital well-being, such as usage tracking, content warnings, and tools for managing screen time. The future of social media will likely involve a more balanced approach, emphasizing quality of engagement over quantity of interactions.",
  },
];
  
import { NextResponse } from "next/server";
export async function GET() {
    return NextResponse.json(posts);
}
  
