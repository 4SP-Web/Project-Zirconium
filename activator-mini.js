// activator.js

// Self-invoking anonymous function to avoid polluting the global scope.
(function() {
    'use strict';

    /**
     * =========================================================================
     * SCRIPT CONFIGURATION
     * =========================================================================
     * This is the only section you need to edit.
     * Add the paths to all the JavaScript files you want to load sitewide.
     * The paths should be relative to the root of your website, or you can use
     * absolute URLs for external scripts (like from a CDN).
     * The scripts will be loaded and executed in the order they appear in this array.
     */
    const scriptsToLoad = [
        // Example: Loading a library from a CDN
        // 'https://cdn.jsdelivr.net/npm/some-library@1.2.3/dist/library.min.js',

        // Example: Loading your own custom scripts
        '../panic-key.js',
        '../url-tab-title-modifier.js',

    ];

    /**
     * =========================================================================
     * SCRIPT INJECTION LOGIC
     * =========================================================================
     * You don't need to modify anything below this line.
     * This logic iterates through the array above and injects each script
     * into the <head> of the document.
     */
    scriptsToLoad.forEach(function(scriptUrl) {
        // 1. Create a new <script> element in memory.
        const scriptElement = document.createElement('script');

        // 2. Set the source of the script to the URL from our array.
        scriptElement.src = scriptUrl;

        // 3. Use the 'defer' attribute. This is important!
        // 'defer' tells the browser to download the script in parallel with parsing
        // the HTML, but to wait to execute it until after the HTML document has
        // been fully parsed. This prevents the script from blocking the rendering
        // of your page content. It also guarantees that scripts are executed in
        // the order they are listed in the `scriptsToLoad` array.
        scriptElement.defer = true;
        
        // 4. Add an error handler for debugging.
        // This will log a message to the console if a script fails to load.
        scriptElement.onerror = function() {
            console.error(`Failed to load script: ${scriptUrl}`);
        };

        // 5. Append the newly created <script> element to the document's <head>.
        // The browser will then automatically fetch and execute it.
        document.head.appendChild(scriptElement);

        // Optional: Log to the console for debugging purposes.
        console.log(`Injecting script: ${scriptUrl}`);
    });

})();
