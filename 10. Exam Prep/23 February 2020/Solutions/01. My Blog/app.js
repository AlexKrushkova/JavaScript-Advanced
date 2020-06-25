function solve() {
    const elements = {
       article: () => document.querySelectorAll('section')[1],
       ul: () => document.querySelector('ul')
    }
  
    document.querySelector('form button').addEventListener('click', function (e) {
       e.preventDefault();
       createArticle(e);
    });
  
    function createArticle(e) {
       const newArticle = createHtmlEl('article');
       const titleElement = createHtmlEl('h1', document.getElementById('title').value);
       newArticle.appendChild(titleElement);
       const pCategory = createHtmlEl('p', 'Category:');
       const strongCategory = createHtmlEl('strong', document.getElementById('category').value);
       pCategory.appendChild(strongCategory);
       newArticle.appendChild(pCategory);
       const pCreator = createHtmlEl('p', 'Creator:');
       const strongCreator = createHtmlEl('strong', document.getElementById('creator').value);
       pCreator.appendChild(strongCreator);
       newArticle.appendChild(pCreator);
       const pContent = createHtmlEl('p', document.getElementById('content').value);
       newArticle.appendChild(pContent);
       const divBtn = createHtmlEl('div', undefined, { className: 'buttons' });
       const deleteBtn = createHtmlEl('button', 'Delete', { className: 'btn delete' });
       const archiveBtn = createHtmlEl('button', 'Archive', { className: 'btn archive' });
       divBtn.appendChild(deleteBtn);
       divBtn.appendChild(archiveBtn);
       newArticle.appendChild(divBtn);
       elements.article().appendChild(newArticle);
       deleteBtn.addEventListener('click', (e) => deleteArticle(e));
       archiveBtn.addEventListener('click', (e) => archiveArticle(e));
    }
  
    function deleteArticle(e) {
       e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    }
  
    function archiveArticle(e) {
       const li = createHtmlEl('li', e.target.parentNode.parentNode.firstChild.textContent);
       elements.ul().appendChild(li);
       deleteArticle(e);
       const list = Array.from(elements.ul().children)
          .sort((a, b) => a.textContent.localeCompare(b.textContent))
       elements.ul().innerHTML = '';
       list.forEach(el => elements.ul().appendChild(el));
    }
  
    function createHtmlEl(type, content, attributes) {
       const el = document.createElement(type);
       if (content) {
          el.textContent = content;
       }
       if (attributes) {
          Object.assign(el, attributes)
       }
       return el;
    };
 }