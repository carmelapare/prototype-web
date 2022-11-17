export const getClients = (getAccessTokenSilently) => {
    var clients = [];
    getAccessTokenSilently().then(token => {
        fetch(process.env.REACT_APP_API + '/clients', {
            headers: {
                Authorization:"Bearer " + token
            }
        })
        .then (response => response.json())
        .then (json => {
            var parsedJson = JSON.parse(json);
            parsedJson.forEach(element => {
                clients.push({ client_name: element.name } );
            });
        });
    });
    return clients;
}