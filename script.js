document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const wordCount = document.getElementById('word-count');
    const sentenceCount = document.getElementById('sentence-count');
    const charCount = document.getElementById('char-count');
    const themeSwitchCheckbox = document.querySelector('.theme-switch__checkbox');

    // Function to count words, sentences, and characters
    const countText = () => {
        const text = textInput.value.trim();
        const words = text.split(/\s+/).filter(word => word !== '').length;
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '').length;
        const chars = text.length;

        wordCount.textContent = words;
        sentenceCount.textContent = sentences;
        charCount.textContent = chars;
    };

    // Add event listener to count text when typing
    textInput.addEventListener('input', countText);

    // Toggle dark/light mode
    themeSwitchCheckbox.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
        document.body.classList.toggle('light-mode', !this.checked);
    });

    // Set default mode
    document.body.classList.add('light-mode');
});