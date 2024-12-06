async function fetchGithubProfile() {
    const url = 'https://api.github.com/users/igorpolvora'; // Substituir pelo seu username do Github
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').textContent = data.name || 'Nome não disponível';
        document.getElementById('username').textContent = `@${data.login}`;
        document.getElementById('repos').textContent = data.public_repos;
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('following').textContent = data.following;
        document.getElementById('github-link').href = data.html_url;
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        alert('Falha ao carregar informações do perfil.');
    }
}

fetchGithubProfile();
