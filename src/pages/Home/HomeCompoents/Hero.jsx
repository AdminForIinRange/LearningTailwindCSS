import React from 'react';

export default function Hero() {
  return (
   
<body class="bg-gray-100">
  
    <header class="bg-gray-800 text-white py-4">
        <div class="container mx-auto flex justify-between items-center px-4">
            <h1 class="text-lg font-bold">Logo</h1>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:text-gray-300">Home</a></li>
                    <li><a href="#" class="hover:text-gray-300">About</a></li>
                    <li><a href="#" class="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

  
    <div class="container mx-auto py-[100px] px-4 flex max-md:py-[50px] ">
      
        <aside class="hidden md:block md:w-[25%] bg-gray-200 p-4 shadow-md ">
            <h2 class="text-lg font-semibold mb-0">Sidebar</h2>
            <ul>
                <li><a href="#" class="block hover:text-gray-700">Link 1</a></li>
                <li><a href="#" class="block hover:text-gray-700">Link 2</a></li>
                <li><a href="#" class="block hover:text-gray-700">Link 3</a></li>
            </ul>
        </aside>

     
        <main class="w-full md:w-[100%] p-4 bg-white">
            <h2 class="text-2xl font-semibold mb-4">Main Content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et justo nulla. Curabitur nec varius ligula. Phasellus in magna quis lacus posuere facilisis.</p>
        </main>
    </div>

  
    <footer class="bg-gray-800 text-white py-4 mt-0">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    </footer>
</body>
  );
}
