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

function displayResults(data) {
    resultsDiv.innerHTML = '';

    // Verifica se há resultados, incluindo listas vazias
    const results = data && data.results !== undefined ? data.results : null;

    if (results !== null) {
        if (Array.isArray(results)) {
            if (results.length > 0) {
                const list = document.createElement('ul');

                results.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = JSON.stringify(item);
                    list.appendChild(listItem);
                });

                resultsDiv.appendChild(list);
            } else {
                resultsDiv.textContent = 'Nenhum dado encontrado';
            }
        } else if (typeof results === 'object') {
            const pre = document.createElement('pre');
            pre.textContent = JSON.stringify(results, null, 2);
            resultsDiv.appendChild(pre);
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

        const url = `/books/overview?${queryString}`;
    
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
    })
}); 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#searchForm2 form')
        
    form.addEventListener('submit', async function(event) {
        event.preventDefault()
    
        const form = document.querySelector('#searchForm2 form')
        const formData = new FormData(form);
        const queryString = new URLSearchParams(formData).toString();

        const url = `/books/reviews?${queryString}`; 
    
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
    })
});