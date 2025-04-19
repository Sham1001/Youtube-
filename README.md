# YouTube Clone 🎥

A responsive YouTube clone built using **React** and the **YouTube Data API v3**. It allows users to search, view, and explore trending videos with a clean and modern UI.

## Features

- Search videos by keyword  
- View trending videos by category  
- Responsive and modern UI using Tailwind CSS  
- Display video thumbnails, titles, channel names, view counts, and publish times  
- Built-in video detail page (optional)

## Tech Stack

- React.js  
- React Router  
- Tailwind CSS  
- YouTube Data API v3  
- Moment.js

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install dependencies:
   npm install

3. Create a .env file in the root directory and add your YouTube API key:
    VITE_YOUTUBE_API_KEY=your_api_key_here

4. Run the app:
   npm run dev

 Folder Structure

src/
├── assets/            # Icons and images
├── components/        # NavBar and other UI components
├── context/           # Context for sidebar state
├── page/              # Feed, Search, Video pages
├── App.jsx            # Route definitions
└── main.jsx           # App entry point


Notes
This app uses the YouTube Data API, which has daily quota limits. If the limit is exceeded, video data may fail to load.

For development, consider rotating multiple API keys if needed.