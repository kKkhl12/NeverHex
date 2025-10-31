document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const purchaseBtns = document.querySelectorAll('.purchase-btn');
    const downloadModal = document.getElementById('download-modal');
    const errorModal = document.getElementById('error-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const progressBar = document.getElementById('progress-bar');
    const statusText = document.getElementById('status-text');
    const uuidSpan = document.getElementById('uuid');
    const closeErrorBtn = document.getElementById('close-error-btn');

    // Simulation steps with more technical jargon
    const simulationSteps = [
        { text: "Validating access plan...", duration: 1500, progress: 10 },
        { text: "Initializing kernel-mode interface...", duration: 2000, progress: 25 },
        { text: "Verifying hardware ID (HWID)...", duration: 2000, progress: 50 },
        { text: "Fetching encrypted payload from CDN...", duration: 2500, progress: 85 },
        { text: "De-obfuscating client...", duration: 1500, progress: 95 },
        { text: "Finalizing handshake...", duration: 1000, progress: 100 }
    ];

    // Function to run a single simulation step
    function runStep(step) {
        return new Promise(resolve => {
            statusText.textContent = step.text;
            progressBar.style.width = `${step.progress}%`;
            setTimeout(resolve, step.duration);
        });
    }

    // Main simulation function
    async function startSimulation() {
        // Generate a fake UUID for realism
        uuidSpan.textContent = crypto.randomUUID();

        // Show download modal
        modalBackdrop.classList.remove('hidden');
        downloadModal.classList.remove('hidden');
        
        // Reset progress bar
        progressBar.style.width = '0%';
        progressBar.style.background = ''; // Reset gradient/color

        // Execute each step
        for (const step of simulationSteps) {
            await runStep(step);
        }

        // After completion, show the failure/error
        setTimeout(() => {
            downloadModal.classList.add('hidden');
            errorModal.classList.remove('hidden');
        }, 1200);
    }
    
    // Function to close all modals
    function closeModals() {
        errorModal.classList.add('hidden');
        modalBackdrop.classList.add('hidden');
    }

    // Event Listeners
    // Attach the simulation to all "Get Access" buttons
    purchaseBtns.forEach(btn => {
        if (btn.id !== 'close-error-btn') {
            btn.addEventListener('click', startSimulation);
        }
    });

    closeErrorBtn.addEventListener('click', closeModals);
    modalBackdrop.addEventListener('click', closeModals);
});
