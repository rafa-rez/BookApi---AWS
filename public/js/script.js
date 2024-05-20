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
    resultsDiv.innerHTML = '';

    console.log('Data recebido:', data);
    const results = data && data.results !== undefined ? data.results : null;
    console.log('Results extraído:', results);

    if (results) {
        if (Array.isArray(results)) {
            const list = document.createElement('ul');

            results.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = JSON.stringify(item);
                list.appendChild(listItem);
            });

            resultsDiv.appendChild(list);
        } else if (typeof results === 'object') {
            const pre = document.createElement('pre');
            pre.textContent = JSON.stringify(results, null, 2);
            resultsDiv.appendChild(pre);
        } else {
            resultsDiv.textContent = results.toString();
        }
    } else {
        resultsDiv.textContent = 'Nenhum dado encontrado';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#searchForm1 form')
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault()

        const formData = new FormData(form);
        const queryString = new URLSearchParams(formData).toString();
        const url = `/books/best-sellers?${queryString}`;

        try {
            const response = await fetch(url, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Erro: ' + response.statusText);
            }

            const data = await response.json();
            displayResults(data);
        } catch (error) {
            console.error('Erro:', error);
        }
    })
})

const form4 = document.querySelector('#searchForm4 form');
    form4.addEventListener('submit', async function(event) {
        event.preventDefault();

        const url = '/books/names';

        try {
            const response = await fetch(url, { method: 'GET' });

            if (!response.ok) {
                throw new Error('Erro: ' + response.statusText);
            }

            const data = await response.json();
            displayResults(data);
        } catch (error) {
            console.error('Erro:', error);
        }
    });


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#searchForm3 form')
        
    form.addEventListener('submit', async function(event) {
        event.preventDefault()
        event.preventDefault(); // Impede o envio padrão do formulário
    
        const form = document.querySelector('#searchForm3 form')
        const formData = new FormData(form);
        const queryString = new URLSearchParams(formData).toString();
        console.log(queryString);

        const url = `/books/overview?${queryString}`;
    
        try {
            const response = await fetch(url, { method: 'GET' });
    
            if (!response.ok) {
                throw new Error('Erro: ' + response.statusText);
            }
    
            const data = await response.json();
            console.log(data)
            displayResults(data);
        } catch (error) {
            console.error('Erro:', error);
        }
    })
});