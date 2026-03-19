document.addEventListener('DOMContentLoaded', function() {
    const genBtn = document.getElementById('genBtn');
    const genResult = document.getElementById('genResult');
    const copyBtn = document.getElementById('copyBtn');

    // Generate Logic
    genBtn.addEventListener('click', function() {
        const firstSeven = Math.floor(1000000 + Math.random() * 9000000).toString();
        const checkDigit = parseInt(firstSeven) % 7;
        const fullAwb = firstSeven + checkDigit;
        
        genResult.innerText = fullAwb;

        // Show the copy button and reset its text
        copyBtn.style.display = 'inline-block';
        copyBtn.innerText = 'Copy';
    });

    // Copy Logic
    copyBtn.addEventListener('click', function() {
        const textToCopy = genResult.innerText;
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Brief visual confirmation
                copyBtn.innerText = 'Copied!';
                setTimeout(() => {
                    copyBtn.innerText = 'Copy';
                }, 2000);
            });
        }
    });

    // Verify Logic (Remaining the same)
    document.getElementById('checkBtn').addEventListener('click', function() {
        const input = document.getElementById('awbInput').value.trim();
        const resultDiv = document.getElementById('checkResult');

        if (input.length !== 8 || isNaN(input)) {
            resultDiv.innerText = "Need 8 digits";
            resultDiv.className = "result invalid";
            return;
        }

        const firstSeven = parseInt(input.substring(0, 7));
        const lastDigit = parseInt(input.substring(7, 8));
        const expectedCheck = firstSeven % 7;

        if (lastDigit === expectedCheck) {
            resultDiv.innerText = "✓ Valid";
            resultDiv.className = "result valid";
        } else {
            resultDiv.innerText = "✗ Invalid (" + expectedCheck + ")";
            resultDiv.className = "result invalid";
        }
    });
});