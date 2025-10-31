document.addEventListener('DOMContentLoaded', () => {
    // Get all the necessary elements from the DOM
    const downloadBtn = document.getElementById('download-btn');
    const downloadModal = document.getElementById('download-modal');
    const revealModal = document.getElementById('reveal-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const statusBar = document.getElementById('progress-bar');
    const statusText = document.getElementById('status-text');
    const closeRevealBtn = document.getElementById('close-reveal-btn');

    // Define the simulation steps
    const simulationSteps = [
        { text: "Connecting to secure server...", duration: 1500, progress: 15 },
        { text: "Authenticating user signature...", duration: 2000, progress: 30 },
        { text: "Bypassing anti-cheat protocols...", duration: 2500, progress: 65 },
        { text: "Generating unique download key...", duration: 1500, progress: 85 },
        { text: "Preparing encrypted payload...", duration: 2000, progress: 100 },
        { text: "DOWNLOAD FAILED: Human verification required.", duration: 1000, progress: 100 }
    ];

    // Function to run a single step of the simulation
    function runStep(step) {
        return new Promise(resolve => {
            statusText.textContent = step.text;
            statusBar.style.width = `${step.progress}%`;
            
            // Add a danger class for the final "failed" step
            if (step.progress === 100 && step.text.includes("FAILED")) {
                statusBar.style.backgroundColor = 'var(--danger-color)';
            }

            setTimeout(resolve, step.duration);
        });
    }

    // Main simulation function
    async function startSimulation() {
        // Show the download modal and backdrop
        downloadModal.classList.remove('hidden');
        modalBackdrop.classList.remove('hidden');
        
        // Reset progress bar for subsequent clicks
        statusBar.style.width = '0%';
        statusBar.style.backgroundColor = ''; // Reset color

        // Run through each step sequentially
        for (const step of simulationSteps) {
            await runStep(step);
        }

        // Wait a moment, then switch to the reveal modal
        setTimeout(() => {
            downloadModal.classList.add('hidden');
            revealModal.classList.remove('hidden');
        }, 1500);
    }
    
    // Function to close the reveal modal
    function closeModals() {
        revealModal.classList.add('hidden');
        modalBackdrop.classList.add('hidden');
    }

    // Event Listeners
    downloadBtn.addEventListener('click', startSimulation);
    closeRevealBtn.addEventListener('click', closeModals);
    modalBackdrop.addEventListener('click', closeModals); // Optional: close by clicking backdrop
});
