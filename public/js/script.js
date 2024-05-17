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

//----------
// Os códigos comentados abaixo servem para gerar um exemplo de reposta no html, acho que ainda podem ser úteis para testes
//----------

/*panels.forEach(panel => {
    panel.querySelector('form').addEventListener('submit', function(event) {
        search(event);
    });

    const formId = panel.id;
    const searchButton = panel.querySelector('input[type="submit"]');
    const buscarTodosButton = panel.querySelector('button');

    buscarTodosButton.addEventListener('click', function() {
        search({ target: panel.querySelector('form') });
    });
});*/

/*function search(event) {
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
}*/
function displayResults(data) {
    resultsDiv.innerHTML = ''

    const results = data.results || []

    if (Array.isArray(results) && results.length > 0) {
        const list = document.createElement('ul')

        results.forEach(item => {
            const listItem = document.createElement('li')
            listItem.textContent = JSON.stringify(item)
            list.appendChild(listItem)
        });

        resultsDiv.appendChild(list)
    } else {
        resultsDiv.textContent = 'Nenhum dado encontrado'
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#searchForm1 form')
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault()
        
        try {
            const response = await fetch(`/books/best-sellers`, {
                method: 'GET'
            });
            
            if (!response.ok) {
                throw new Error('Erro: ' + response.statusText)
            }
            
            const data = await response.json()
            displayResults(data)
        } catch (error) {
            console.error('Erro:', error)
        }
    })
})
