const formSelect = document.getElementById('formSelect');
const panels = document.querySelectorAll('.panel');
const resultsDiv = document.querySelector('.results');

formSelect.addEventListener('change', function() {
    const selectedFormId = this.value;
    panels.forEach(panel => {
        if (panel.id === selectedFormId) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
});

panels.forEach(panel => {
    panel.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        search(event);
    });

    const formId = panel.id;
    const searchButton = panel.querySelector('input[type="submit"]');
    const buscarTodosButton = panel.querySelector('button');

    buscarTodosButton.addEventListener('click', function() {
        search({ target: panel.querySelector('form') });
    });
});

function search(event) {
    const form = event.target;
    const formData = new FormData(form);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    // Simulação de busca
    setTimeout(() => {
        const resultHTML = `
            <div class="result">
                <h3>Resultado da Busca - ${form.parentElement.id}</h3>
                ${Object.entries(formValues).map(([key, value]) => `
                    <p>${key}: ${value}</p>
                `).join('')}
            </div>
        `;

        resultsDiv.innerHTML = resultHTML;

        form.reset();
    }, 500); // Simulação de tempo de busca
}