const blogPosts = [
  {
    slug: "the-quiet-power-of-white-space",
    title: "The Quiet Power of White Space",
    category: "Design",
    readTime: "4 min read",
    excerpt:
      "Space is not an empty part of a design. Used with care, it gives content room to breathe and helps each decision feel intentional.",
    image: "/blog/quiet-design.jpg",
    imageAlt: "A calm, uncluttered interior with soft natural light",
    sections: [
      {
        heading: "Space gives the eye a place to rest",
        paragraphs: [
          "A crowded screen asks people to make too many decisions at once. White space creates small pauses between ideas, so a headline, image, or button can be understood before the next one competes for attention.",
          "The name can be misleading: white space does not have to be white. It is the breathing room around a component, and its color should belong to the wider visual system.",
        ],
      },
      {
        heading: "Use it to show what matters",
        paragraphs: [
          "Generous space around a primary message gives it importance. Tighter spacing within a related group, paired with a larger gap before the next group, communicates hierarchy without adding another border or label.",
          "Start with a clear content order, then adjust spacing to reinforce it. The result should feel calm, not sparse for its own sake.",
        ],
      },
    ],
  },
  {
    slug: "make-search-friendly-content-feel-human",
    title: "Make Search-Friendly Content Feel Human",
    category: "Content",
    readTime: "5 min read",
    excerpt:
      "Useful pages can be easy to discover without sounding as if they were written for a search engine instead of a person.",
    image: "/blog/expressive-typography.jpg",
    imageAlt: "Search and content symbols arranged on a desk",
    sections: [
      {
        heading: "Begin with the visitor's question",
        paragraphs: [
          "Search intent is a useful starting point because it describes what someone is trying to accomplish. A strong page answers that need early, in plain language, before adding context or detail.",
          "Treat keywords as clues, not instructions. If a phrase makes a sentence awkward, rewrite the sentence for a person and use the relevant language where it fits naturally.",
        ],
      },
      {
        heading: "Make the page easy to scan",
        paragraphs: [
          "A descriptive title, a short introduction, and headings that explain the sections help readers decide where to spend their time. Specific link text also makes the next step clear.",
          "Good structure benefits both people and search systems, but usefulness remains the measure. Keep the page current, accurate, and focused on one clear purpose.",
        ],
      },
    ],
  },
  {
    slug: "a-personal-portfolio-with-a-point-of-view",
    title: "A Personal Portfolio With a Point of View",
    category: "Portfolio",
    readTime: "4 min read",
    excerpt:
      "A portfolio is more than a gallery. It is a considered introduction to the way you think, work, and solve problems.",
    image: "/blog/personal-portfolio.jpg",
    imageAlt: "A portfolio layout being reviewed on a laptop",
    sections: [
      {
        heading: "Curate before you decorate",
        paragraphs: [
          "A small selection of well-explained projects is more useful than a long list without context. For each project, say what it is, what your contribution was, and what the visitor can explore next.",
          "If a project is still in progress, label it honestly. A clear note about what you are learning builds more trust than presenting a work in progress as finished.",
        ],
      },
      {
        heading: "Let the details feel consistent",
        paragraphs: [
          "Typography, spacing, image treatment, and voice should support the same impression. Consistency does not mean every page needs to look identical; it means each page feels like part of the same person’s story.",
          "Make contact information easy to find, keep the site comfortable on a phone, and revisit the content as your work changes. A portfolio should grow with its owner.",
        ],
      },
    ],
  },
  {
    slug: "product-pages-that-reduce-hesitation",
    title: "Product Pages That Reduce Hesitation",
    category: "Commerce",
    readTime: "5 min read",
    excerpt:
      "A considered product page answers the practical questions around an item before asking someone to commit to it.",
    image: "/blog/considered-commerce.jpg",
    imageAlt: "A digital shopping experience open on a laptop and phone",
    sections: [
      {
        heading: "Make the important information visible",
        paragraphs: [
          "The product name, price, key details, and next action should be easy to find together. Images should clarify the item, while concise copy should explain its value without burying the useful facts.",
          "For clothing or other fit-sensitive products, sizing and materials matter. For electronics, compatibility and specifications can be the difference between confidence and a support request.",
        ],
      },
      {
        heading: "Treat trust as part of the interface",
        paragraphs: [
          "Clear delivery, return, and payment information reduces uncertainty. Feedback after an action—such as adding an item to a cart—should confirm what happened and what comes next.",
          "Keep the mobile path just as considered as the desktop one. A checkout that is technically present but difficult to use on a small screen is not a complete shopping experience.",
        ],
      },
    ],
  },
  {
    slug: "start-with-the-small-screen",
    title: "Start With the Small Screen",
    category: "Responsive Design",
    readTime: "4 min read",
    excerpt:
      "Designing for a phone first is a practical way to decide what a page needs before adding more room around it.",
    image: "/blog/responsive-design.jpg",
    imageAlt: "A smartphone displaying a simple responsive web page",
    sections: [
      {
        heading: "Prioritize the essential path",
        paragraphs: [
          "A narrow viewport makes content priorities visible. Decide what someone needs to understand and do, then arrange the rest of the page around that purpose.",
          "This does not mean hiding useful information on larger screens or making mobile pages bare. It means building a strong core that can expand deliberately.",
        ],
      },
      {
        heading: "Test behavior, not just breakpoints",
        paragraphs: [
          "A layout can fit within a screen and still feel difficult to use. Check touch targets, line length, menu behavior, image crops, and the space available to complete forms.",
          "Try a few widths rather than relying on one device preset. Flexible layouts are easier to maintain when they respond to the content instead of a collection of arbitrary screen sizes.",
        ],
      },
    ],
  },
  {
    slug: "trust-is-a-design-decision",
    title: "Trust Is a Design Decision",
    category: "Experience",
    readTime: "4 min read",
    excerpt:
      "Trust grows when a digital experience is consistent, transparent, and clear about what it needs from the visitor.",
    image: "/blog/trustworthy-interfaces.jpg",
    imageAlt: "A small team discussing a project around a table",
    sections: [
      {
        heading: "Be clear about the exchange",
        paragraphs: [
          "Forms should explain why a field is needed and what will happen after submission. If a field is optional, say so; if an error occurs, point to the problem and explain how to fix it.",
          "Avoid surprising people with hidden costs, unclear permissions, or vague buttons. Small moments of ambiguity can undermine an otherwise polished experience.",
        ],
      },
      {
        heading: "Keep promises visible in the details",
        paragraphs: [
          "Consistent language, working links, readable contrast, and predictable feedback all help a site feel dependable. These details rarely demand attention when they work well, which is exactly why they matter.",
          "Trust is not a badge added at the end of a project. It is the result of many decisions that respect a visitor’s time and expectations.",
        ],
      },
    ],
  },
  {
    slug: "the-first-five-seconds-of-a-website",
    title: "The First Five Seconds of a Website",
    category: "Web Design",
    readTime: "4 min read",
    excerpt:
      "A first impression is a quick reading of relevance, clarity, and confidence—not just a judgment about visual polish.",
    image: "/blog/digital-first-impressions.jpg",
    imageAlt: "A modern website displayed on a laptop screen",
    sections: [
      {
        heading: "Answer three quiet questions",
        paragraphs: [
          "Visitors quickly look for what a site offers, who it is for, and where to go next. A focused heading and a direct supporting sentence can answer those questions without a wall of introductory copy.",
          "The visual hierarchy should support the message. If decorative elements compete with the main action, the page may look elaborate while feeling uncertain.",
        ],
      },
      {
        heading: "Polish starts before the first scroll",
        paragraphs: [
          "A quick first view still depends on details like loading behavior, responsive typography, and working navigation. A beautiful hero that pushes essential information out of reach can slow someone down.",
          "Make one next step obvious, then give visitors enough context to choose it confidently. A strong first impression is an invitation, not a trick.",
        ],
      },
    ],
  },
  {
    slug: "when-motion-helps-the-user",
    title: "When Motion Helps the User",
    category: "Interaction",
    readTime: "4 min read",
    excerpt:
      "Animation feels most refined when it explains a change or guides attention instead of asking to be watched.",
    image: "/blog/meaningful-motion.jpg",
    imageAlt: "A creative professional in front of a digital projection",
    sections: [
      {
        heading: "Give movement a job",
        paragraphs: [
          "A small transition can show where a panel came from, confirm that a control changed state, or help connect two related views. These moments make an interface easier to follow.",
          "If an animation has no clear purpose, removing it can make the experience calmer. Motion should support the content rather than compete with it.",
        ],
      },
      {
        heading: "Keep it considerate",
        paragraphs: [
          "Fast, restrained motion usually feels more responsive than a long, theatrical transition. The interface should remain usable if an animation is skipped or reduced.",
          "Respect reduced-motion preferences and avoid flashing or large, unnecessary movement. Accessibility is part of the design brief, not an optional finishing touch.",
        ],
      },
    ],
  },
  {
    slug: "color-as-a-quiet-brand-signal",
    title: "Color as a Quiet Brand Signal",
    category: "Visual Identity",
    readTime: "4 min read",
    excerpt:
      "A memorable palette does not need to be loud. Thoughtful color roles can make a brand recognizable and an interface easier to read.",
    image: "/blog/intentional-color.jpg",
    imageAlt: "A creative workspace with colorful design references",
    sections: [
      {
        heading: "Define roles before adding shades",
        paragraphs: [
          "Choose colors for clear jobs: page backgrounds, surfaces, body text, muted notes, and actions. A simple set of roles makes later decisions more consistent.",
          "A signature accent becomes stronger when it is used with intention. If every element is emphasized, the palette loses its ability to direct attention.",
        ],
      },
      {
        heading: "Balance atmosphere with access",
        paragraphs: [
          "Check text contrast in context, including hover states and disabled controls. Color alone should not be the only signal that something is interactive or important.",
          "A palette should feel distinctive and remain comfortable to use across a full page. Its best contribution is often a coherent mood that never gets in the way of the message.",
        ],
      },
    ],
  },
  {
    slug: "from-idea-to-interface",
    title: "From Idea to Interface",
    category: "Development",
    readTime: "5 min read",
    excerpt:
      "A reliable build begins by making the problem smaller, the content clearer, and the next decision easier to test.",
    image: "/blog/from-idea-to-product.jpg",
    imageAlt: "A developer's hands working at a laptop",
    sections: [
      {
        heading: "Give the idea a useful boundary",
        paragraphs: [
          "Start with the person the experience serves and the one outcome that matters most. A short list of essential pages and actions can keep an early project focused.",
          "A rough sketch or simple prototype makes assumptions visible before they become expensive code. It gives people something concrete to review and improve.",
        ],
      },
      {
        heading: "Build in steps that can be checked",
        paragraphs: [
          "Create a small working path first: content, navigation, and the central interaction. Then test it on a phone and a desktop before adding secondary polish.",
          "Frequent checks make it easier to catch layout, content, and behavior issues while they are still small. The goal is not to rush; it is to learn from each deliberate iteration.",
        ],
      },
    ],
  },
  {
    slug: "readable-code-is-a-form-of-care",
    title: "Readable Code Is a Form of Care",
    category: "Development",
    readTime: "4 min read",
    excerpt:
      "Clear code makes future changes less surprising for the next person—including the developer who returns to it later.",
    image: "/blog/content-structure.jpg",
    imageAlt: "A close view of a developer working with code",
    sections: [
      {
        heading: "Choose clarity over cleverness",
        paragraphs: [
          "Names should reveal intent, and components should have responsibilities that are easy to explain. A small amount of structure can prevent a simple page from becoming difficult to change.",
          "Readable code is not about making every file longer or adding layers for their own sake. It is about making the important decisions visible and the routine parts predictable.",
        ],
      },
      {
        heading: "Make the common path dependable",
        paragraphs: [
          "Semantic HTML, sensible empty states, and helpful error messages are implementation details with a direct effect on people. They make an interface work in more situations than the ideal screenshot.",
          "Good organization also helps a project grow without losing its shape. Treat maintainability as part of the experience, not a separate cleanup task for later.",
        ],
      },
    ],
  },
  {
    slug: "good-development-is-a-collaboration",
    title: "Good Development Is a Collaboration",
    category: "Process",
    readTime: "4 min read",
    excerpt:
      "Strong digital work grows from shared understanding: clear questions, honest progress, and decisions people can revisit.",
    image: "/blog/lessons-from-building.jpg",
    imageAlt: "Two collaborators reviewing a project together",
    sections: [
      {
        heading: "Make the work easy to discuss",
        paragraphs: [
          "A preview link, annotated screenshot, or small prototype gives a conversation something specific to focus on. Concrete feedback is easier to act on than a vague request to make a page feel better.",
          "Ask questions early when a requirement is uncertain. A short clarification can save time and help the final result match what people actually need.",
        ],
      },
      {
        heading: "Share progress and trade-offs",
        paragraphs: [
          "Regular updates help everyone understand what is complete, what is still in progress, and where a decision is needed. They also make it easier to adjust scope before a deadline becomes stressful.",
          "A good handoff explains the important choices and any known limitations. Collaboration does not end at launch; it leaves the next person with a clear way forward.",
        ],
      },
    ],
  },
];

export default blogPosts;
