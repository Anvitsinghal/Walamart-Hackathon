# Walmart-Clone

This project is a clone of the Walmart website, built using a modern tech stack and implementing key features for a robust and scalable web application.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1. Clone this repository by running `git clone https://github.com/vaibhav1281/Walmart-Clone.git` in your terminal.
2. Navigate to the project directory by running `cd walmart-clone`.

- To get started with the project, you need to configure your environment variables in a `.env.local` file. Here's how you can do it:

3. Create a new file in the root directory of your project and name it `.env.local`.

4. Open the `.env.local` file and add the following lines:

    ```plaintext
    OXYLABS_USERNAME=NhiBataunga
    OXYLABS_PASSWORD=KyuBhai
    ```

    Replace `NhiBataunga` and `KyuBhai` with your actual Oxylabs username and password.

5. Save the `.env.local` file. Now, your application can access these environment variables via `process.env`.

Please note that you should never commit your `.env.local` file to the version control system. It contains sensitive data which should not be shared publicly. Make sure to add `.env.local` to your `.gitignore` file.

6. Install all necessary dependencies by running one of the following commands:
    ```bash
        npm install
        # or
        yarn install
        # or
        pnpm install
        # or
        bun install
    ```
7. Once installed, you can start developing your application by running one of the following commands:
    ```bash
        npm run dev
        # or
        yarn dev
        # or
        pnpm dev
        # or
        bun dev
    ```
This will start both the client-side development server as well as the API server.

## Tech Stack 

This project uses the following technologies:

- **Next.js (TypeScript)**: A React framework for building server-side and static websites.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Oxylabs**: A real-time crawler for efficient web scraping.
- **Shadcn**: A lightweight, promise-based HTTP client for Node.js.
- **Zustand**: A small, fast and scaleable bearbones state-management solution.

## Key Features

This project implements the following features:

- **Parallel Intercepting**: Efficiently handles multiple requests at the same time.
- **Parallel Routing**: Routes multiple requests simultaneously for faster response times.
- **Dynamic Imports**: Optimizes the application by only loading the code that the user needs.
- **Server Side Rendering (SSR) / Static Site Generation (SSG)**: Improves performance and SEO by pre-rendering pages on the server.
- **Code Splitting with Dynamic Imports**: Further optimizes the application by splitting the code into smaller chunks that are loaded on demand.
- **Image Optimization using next/image**: Automatically optimizes images to improve performance and user experience.
- **Responsive Design**: Ensures the application looks great on devices of all sizes.
- **SEO Friendly**: Built with SEO best practices to help your site rank higher in search engine results.
- **PWA Ready**: Can be installed as a Progressive Web App for a native-like experience on mobile devices.
- **Easy to Deploy**: Designed with simplicity in mind for easy deployment.
- **Caching**: Improves performance by storing a copy of the data in a fast-access cache.

## Demo Video

You can view a demo video of the product page here.
[Till Product page](https://github.com/vaibhav1281/Walmart-Clone/assets/93854530/3653ecf0-f07f-4b6b-8d45-dfb536120d20)


https://github.com/vaibhav1281/Walmart-Clone/assets/93854530/25f1e8a6-3a16-4417-9c50-934afd179e2c




## Screenshots
![Home Page](./public/HomePage.png "Home Page")
![Scriping Data from Oxylabs](./public/ScripingData.png "Scriping Data from Oxylabs")
![Search Results](./public/SearchResults.png "Search Results")
![Shimmer UI](./public/ProductDetailLoadingPage.png "Shimmer UI")
![Product Detail Page](./public/ProductDetailPage.png "Product Detail Page")
![Soft Navigation](./public/softnavCart.png "Soft Navigation")
![Car/Basket Page](./public/cart-Basket.png "Car/Basket Page")
![Empty Car/Basket Page](./public/EmptyBasket.png "Empty Car/Basket Page")
