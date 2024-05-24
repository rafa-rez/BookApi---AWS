const formSelect = document.getElementById('formSelect')
const panels = document.querySelectorAll('.panel')
const resultsDiv = document.querySelector('.results')

formSelect.addEventListener('change', function() {
    resultsDiv.innerHTML = ''
    const selectedFormId = this.value
    panels.forEach(panel => {
        if (panel.id === selectedFormId) {
            panel.classList.add('active')
        } else {
            panel.classList.remove('active')
        }
    })
})

//Linkando dados do formulário com a rota best-sellers
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#searchForm1 form')
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault()

        const formData = new FormData(form)
        const queryString = new URLSearchParams(formData).toString()
        const url = `/books/best-sellers?${queryString}`

        try {
            const response = await fetch(url, {
                method: 'GET'
            })

            if (!response.ok) {
                throw new Error('Erro: ' + response.statusText)
            }

            const data = await response.json()
            displayResultsBestSellers(data)
        } catch (error) {
            console.error('Erro:', error)
        }
    })
})

//Linkando dados do formulário com a rota names
const form4 = document.querySelector('#searchForm4 form')
    form4.addEventListener('submit', async function(event) {
        event.preventDefault()

        const url = '/books/names'

        try {
            const response = await fetch(url, { method: 'GET' })

            if (!response.ok) {
                throw new Error('Erro: ' + response.statusText)
            }

            const data = await response.json()
            displayResultNames(data)
        } catch (error) {
            console.error('Erro:', error)
        }
    })

//Linkando dados do formulário com a rota overview
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#searchForm3 form')
        
    form.addEventListener('submit', async function(event) {
        event.preventDefault()
    
        const form = document.querySelector('#searchForm3 form')
        const formData = new FormData(form)
        const queryString = new URLSearchParams(formData).toString()

        const url = `/books/overview?${queryString}`
    
        try {
            const response = await fetch(url, { method: 'GET' })
    
            if (!response.ok) {
                throw new Error('Erro: ' + response.statusText)
            }
    
            const data = await response.json()
            displayResultsOverView(data)
        } catch (error) {
            console.error('Erro:', error)
        }
    })
})

//Linkando dados do formulário com a rota reviews
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#searchForm2 form')
        
    form.addEventListener('submit', async function(event) {
        event.preventDefault()
    
        const form = document.querySelector('#searchForm2 form')
        const formData = new FormData(form)
        const queryString = new URLSearchParams(formData).toString()

        const url = `/books/reviews?${queryString}`
    
        try {
            const response = await fetch(url, { method: 'GET' })
    
            if (!response.ok) {
                throw new Error('Erro: ' + response.statusText)
            }
    
            const data = await response.json()
            displayResultsReview(data)
        } catch (error) {
            console.error('Erro:', error)
        }
    })
})

//FORMATANDO EXIBIÇÃO DOS RESULTADOS
function createListItem(elements) {
    const listItem = document.createElement('li')
    listItem.style.marginBottom = '20px'

    elements.forEach(element => listItem.appendChild(element))
    return listItem
}

function createElement(tag, textContent, options = {}) {
    const element = document.createElement(tag)
    if (textContent) {
        element.textContent = textContent
    }
    Object.assign(element, options)
    return element
}

function createImage(src, alt, options = {}) {
    return createElement('img', null, { src, alt, ...options })
}

function appendListToDiv(resultsDiv, listItems) {
    const list = document.createElement('ul')
    list.style.listStyleType = 

    listItems.forEach(item => list.appendChild(item))
    resultsDiv.appendChild(list)
}

function handleNoDataFound(results) {
    resultsDiv.textContent = results ? 'Formato de dados inesperado' : 'Nenhum dado encontrado'
}

function displayResultsOverView(data) {
    resultsDiv.innerHTML = ''

    const results = data?.results?.lists || null

    if (results && Array.isArray(results)) {
        const listItems = []

        results.forEach(category => {
            if (category.list_name === 'Combined Print and E-Book Fiction') {
                category.books.forEach(book => {
                    const img = createImage(book.book_image || category.list_image, book.title, { style: { width: '100px' } })
                    const title = createElement('h3', book.title)
                    const description = createElement('p', book.description)

                    listItems.push(createListItem([img, title, description]))
                })
            }
        })

        appendListToDiv(resultsDiv, listItems);
    } else {
        handleNoDataFound(results);
    }
}

function displayResultNames(data) {
    resultsDiv.innerHTML = ''

    const results = data?.results || null

    if (results && Array.isArray(results)) {
        const listItems = []

        results.forEach(item => {
            const listName = createElement('h3', item.display_name)
            const oldestDate = createElement('p', `Data mais antiga: ${item.oldest_published_date}`)
            const newestDate = createElement('p', `Data mais recente: ${item.newest_published_date}`)
            const updated = createElement('p', `Atualizado: ${item.updated}`)

            listItems.push(createListItem([listName, oldestDate, newestDate, updated]))
        });

        appendListToDiv(resultsDiv, listItems)
    } else {
        handleNoDataFound(results)
    }
}

function displayResultsReview(data) {
    resultsDiv.innerHTML = ''
    console.log(data) //retirar depois
    const results = data?.results || null

    if (results && Array.isArray(results)) {
        const listItems = []

        results.forEach(item => {
            const bookTitle = createElement('h3', item.book_title)
            const bookAuthor = createElement('p', `Autor: ${item.book_author}`)
            const summary = createElement('p', item.summary)
            const publicationDate = createElement('p', `Data de publicação: ${item.publication_dt}`)
            const byline = createElement('p', `Resenhado por: ${item.byline}`)
            const reviewLink = createElement('a', 'Leia a resenha completa', { href: item.url, target: '_blank' })

            listItems.push(createListItem([bookTitle, bookAuthor, summary, publicationDate, byline, reviewLink]))
        })

        appendListToDiv(resultsDiv, listItems)
    } else {
        handleNoDataFound(results)
    }
} 

function displayResultsBestSellers(data) {
    resultsDiv.innerHTML = ''

    const results = data?.results || null
    console.log(data)
    if (results && Array.isArray(results)) {
        const listItems = []

        results.forEach(book => {
            const title = createElement('h3', book.title)
            const description = createElement('p', book.description)
            const author = createElement('p', `Autor: ${book.author}`)
            const contributor = book.contributor ? createElement('p', `Contribuidor: ${book.contributor}`) : null
            const publisher = createElement('p', `Editora: ${book.publisher}`)
            
            const isbnList = document.createElement('ul')
            book.isbns.forEach(isbn => {
                const isbnItem = createElement('li', `ISBN-10: ${isbn.isbn10}, ISBN-13: ${isbn.isbn13}`)
                isbnList.appendChild(isbnItem)
            })

            const ranksHistory = document.createElement('ul')
            book.ranks_history.forEach(rank => {
                const rankItem = createElement('li', 
                    `Data de Publicação: ${rank.published_date}, Lista: ${rank.display_name}, 
                    Rank: ${rank.rank}, Semanas na Lista: ${rank.weeks_on_list}`
                );
                ranksHistory.appendChild(rankItem)
            });

            const reviews = document.createElement('ul')
            book.reviews.forEach(review => {
                if (review.book_review_link) {
                    const reviewLink = createElement('a', 'Link da Resenha', { href: review.book_review_link, target: '_blank' })
                    const reviewItem = createListItem([reviewLink])
                    reviews.appendChild(reviewItem)
                }
            });

            const elements = [title, description, author, publisher, isbnList, ranksHistory, reviews]
            if (contributor) elements.splice(3, 0, contributor);  // Insert contributor after author if it exists

            listItems.push(createListItem(elements))
        });

        appendListToDiv(resultsDiv, listItems)
    } else {
        handleNoDataFound(results)
    }
}