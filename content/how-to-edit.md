---
title: Example Article
category: Examples
---

# Example Article

<div className="float-right ml-8 mb-4 bg-gray-50 border rounded-lg p-4 w-80">
  <div className="text-center mb-4">
    <h2 className="text-xl font-bold mb-2">Example Article</h2>
    <img 
      src="/example-image.jpg"
      alt="Example illustration"
      className="w-full max-w-[300px] max-h-[300px] mx-auto mb-2"
      width="300"
      height="300"
    />
    <p className="text-sm text-gray-600 italic">Example illustration</p>
  </div>
  <nav className="text-sm">
    <h3 className="font-bold mb-2 border-b pb-1">Contents</h3>
    <ul className="space-y-1.5">
      <li><a href="#text-formatting" className="text-blue-600 hover:underline">Text Formatting</a></li>
      <li><a href="#lists" className="text-blue-600 hover:underline">Lists</a></li>
      <li><a href="#code" className="text-blue-600 hover:underline">Code</a></li>
      <li><a href="#links-and-images" className="text-blue-600 hover:underline">Links and Images</a></li>
    </ul>
  </nav>
</div>

This is an example article showing various Markdown formatting options.

## Text Formatting {#text-formatting}

You can write text in **bold** or *italic*. 

## Lists {#lists}

Unordered list:
- Item 1
- Item 2
- Item 3

Ordered list:
1. First item
2. Second item
3. Third item

## Code {#code}

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

## Links and Images {#links-and-images}

[Link to Getting Started](/getting-started)

![Alt text for image](/example-image.jpg)
