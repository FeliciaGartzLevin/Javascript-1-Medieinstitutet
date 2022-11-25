/**
 * Fetch 🐶
 *
 */

fetch('data/catzzzzz.json')
    .then(response => {
        console.log("Response:", response);

        // check if response was ok
        if (!response.ok) {
            throw new Error("Response was not OK!");
        }
    
        return response.json();
    })
    .then(data => {
        console.log("Gots data:", data);
    })
    .catch(err => {
        console.log("Something blew up 😢:", err);
    });
